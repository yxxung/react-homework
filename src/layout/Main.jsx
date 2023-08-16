import ShowTodo from "@/components/ShowTodo"
import AddTodo from "../components/AddTodo"
import DoneTodo from "@/components/DoneTodo"

function Main() {
  return (
    <>
      <AddTodo />
      <div className="dashed mt-20" />

      <div className="mt-16 flex justify-evenly gap-[200px]">
        <ShowTodo />
        <DoneTodo />
      </div>
    </>
  )
}

export default Main