import TodoList from "@/components/TodoList"
import AddItem from "@/components/AddItem"

function Main() {
  return (
    <>
      <AddItem />
      <div className="dashed mt-20" />
      <TodoList />
    </>
  )
}

export default Main