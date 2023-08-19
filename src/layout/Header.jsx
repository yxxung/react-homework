import CurrentDate from "../components/CurrentDate";

function Header() {
  return (
    <div className="mt-14 flex flex-col gap-4 justify-center text-center">
      <h1 className="font-suit text-gray2 tracking-wide font-extrabold text-5xl">
        오늘의 할 일은 무엇인가요?
      </h1>
      <CurrentDate />
    </div>
  );
}

export default Header;
