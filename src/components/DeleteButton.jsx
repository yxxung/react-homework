import { useState, useEffect } from "react";

function DeleteButton({ id, setTodos }) {
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(!isDelete);

    fetch(`http://127.0.0.1:8090/api/collections/todo/records/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        fetch("http://127.0.0.1:8090/api/collections/todo/records")
          .then((response) => response.json())
          .then((responseData) => {
            setTodos(responseData);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <button onClick={handleDelete} type="button" className="delete"></button>
  );
}

export default DeleteButton;
