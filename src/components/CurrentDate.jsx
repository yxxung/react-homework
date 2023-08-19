import { useState } from "react";

function CurrentDate() {
  const [time] = useState(() => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토']
    let dayOfWeek = week[date.getDay()]

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
  });

  return (
    <div className="font-suit font-semibold text-xl text-babyBlue2 tracking-widest">
      {time}
    </div>
  );
}

export default CurrentDate;
