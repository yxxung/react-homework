import "@/styles/CheckButton.module.css";

import checkImgUrl from '../assets/check.svg';
import closeImgUrl from '../assets/close.svg';

function CheckButton({ check, label }) {
  const imgUrl =
    check === "check" ? checkImgUrl : closeImgUrl;

  return (
    <button
    type="button" aria-label={label} title={label}>
      <img src={imgUrl} alt={label} />
    </button>
  );
}

export default CheckButton;
