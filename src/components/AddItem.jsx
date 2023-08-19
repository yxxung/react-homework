import add from "@/assets/add.svg";
import { useCallback, useState } from "react";

function AddItem() {
  const [input, setInput] = useState("");

  const handleInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleSubmit = () => {
    fetch("http://127.0.0.1:8090/api/collections/todo/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        context: input,
        isDone: false,
      }),
    })
    .then(() =>{
      setInput("");
    })
    .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="sr-only">할일 등록</legend>
        <div className="flex items-center justify-center gap-2 mt-10 px-10">
          <div className="grow max-w-[50rem]">
            <label htmlFor="addTodo" className="sr-only">
              할일
            </label>
            <input
              type="text"
              onChange={handleInput}
              value={input}
              className="text-lg font-semibold px-5 py-1 text-gray2 w-full h-[60px] rounded-md bg-gray1 focus:outline-babyBlue2"
            />
          </div>
          <button
            type="submit"
            className="shrink-0 w-[60px] h-[60px] rounded-md bg-babyBlue hover:bg-babyBlue2"
          >
            <img src={add} className="w-[60px] h-[60px]" alt="add" />
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default AddItem;
