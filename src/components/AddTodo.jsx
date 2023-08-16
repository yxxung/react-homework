function AddTodo() {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <div className="w-[57.25rem]">
        <label htmlFor="addTodo"></label>
        <input type="text" className="text-md px-5 py-1 text-gray2 w-full h-[60px] rounded-md bg-gray1 focus:outline-babyBlue2" />
      </div>
      <button className="addButton">
      </button>
    </div>
  );
}

export default AddTodo;
