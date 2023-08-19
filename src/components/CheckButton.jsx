import { useState } from "react";

function CheckButton({ id, isDone, setTodos }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (!isDone) {
      setIsChecked(true);
      isDone = true;

      fetch(`http://127.0.0.1:8090/api/collections/todo/records/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isDone: true,
        }),
      })
        .then(() => {
          fetch("http://127.0.0.1:8090/api/collections/todo/records")
            .then((response) => response.json())
            .then((responseData) => {
              setTodos(responseData);
            });
        })
        .catch((error) => console.log(error));
    } else {
      setIsChecked(false);
      isDone = false;

      fetch(`http://127.0.0.1:8090/api/collections/todo/records/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isDone: false,
        }),
      })
        .then(() => {
          fetch("http://127.0.0.1:8090/api/collections/todo/records")
            .then((response) => response.json())
            .then((responseData) => {
              setTodos(responseData);
            });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <button type="button" onClick={handleCheck} className={`${!isChecked ? 'circle' : 'check'}`}></button>
  );
}

export default CheckButton;
