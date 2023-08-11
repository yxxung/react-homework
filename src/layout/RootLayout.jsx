import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import CheckButton from "../components/CheckButton";
import { useEffect, useRef, useState } from 'react';


function RootLayout() {
  const checkBtn = useRef();

  const [clickButton, setclickButton] = useState({
    check: 'check',
    label: '확인'
  })

  useEffect(() => {
    document.addEventListener('click', () => {
      setclickButton({check: 'close', label: '닫기'})
    })
  })

  return (
    <>
      <HeaderBar />
      <CheckButton
      ref={checkBtn}
      check={clickButton.check}
      label={clickButton.check} />
      <FooterBar />
    </>
  );
}

export default RootLayout;
