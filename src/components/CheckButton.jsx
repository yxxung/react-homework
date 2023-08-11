import "@/styles/CheckButton.module.css";

function CheckButton({ check, label }) {
  const imgUrl =
    check === "check" ? "./src/assets/check.svg" : "./src/assets/close.svg";

  return (
    <button
    type="button" aria-label={label} title={label}>
      <img src={imgUrl} alt={label} />
    </button>
  );
}

export default CheckButton;
