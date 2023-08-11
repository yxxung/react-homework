import Heading from "../components/Heading";
import styleModule from '@/styles/HeaderBar.module.css';

function HeaderBar() {
  return (
    <header className={styleModule.container}>
      <Heading></Heading>
    </header>
  )
}

export default HeaderBar;