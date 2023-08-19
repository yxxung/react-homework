import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState(null);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    setStatus("loading");

    fetch("http://127.0.0.1:8090/api/collections/todo/records")
      .then((response) => response.json())
      .then((responseData) => {
        setTodos(responseData);
        setStatus("success");
      })
      .catch((error) => {
        setStatus(`${error}`);
      });
  }, []);

  // 데이터 가져오기 실패한 경우 표시할 화면
  if (status === "loading") {
    return <div>loading...</div>;
  }

  // 데이터 가져오기 실패한 경우 표시할 화면
  if (status === "error") {
    return <div>error</div>;
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center px-10 mt-16 mx-20">
      <h2 className="text-3xl font-semibold tracking-widest text-center">
        💬 TODO
      </h2>

      <div className="xs:w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[54rem] transition-all h-[400px] bg-white border border-babyBlue rounded-2xl flex flex-col gap-6 p-10 overflow-y-auto">
        {todos &&
          todos.items?.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />;
          })}
      </div>
    </div>
  );
}

export default TodoList;
