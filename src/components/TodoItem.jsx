import { useState } from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";

function TodoItem({ todo, setTodos }) {
  const { context, isDone, id } = todo;

  return (
    <div className="h-9 xs:px-3 sm:px-4 md:px-8 flex gap-6 items-center justify-between w-full">
      {!isDone ? (
        <p className="w-full text-[22px] leading-[30px] truncate">{context}</p>
      ) : (
        <p className="w-full text-[22px] leading-[30px] truncate line-through">
          {context}
        </p>
      )}

      <div className="flex gap-4">
        <CheckButton id={id} isDone={isDone} setTodos={setTodos} />
        <DeleteButton id={id} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoItem;
