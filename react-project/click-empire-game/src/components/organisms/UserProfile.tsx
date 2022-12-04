import React, { FC, useEffect, useState } from "react";
import { Container } from "../atoms/Container";

type Props = {
  userName : string;
  budget : number
};

export const UserProfile: FC<Props> = (props) => {
  const { userName ,budget} = props;

  const [dayCount, setDayCount] = useState(0);
  const [age, setAge] = useState(20);

  console.log("userprofile");

  //update the day. when it passed a year, update user's age
  useEffect(() => {
    const interval = setInterval(() => {
      setDayCount((dayCount) => dayCount + 1);
      if(dayCount % 365 === 0 && dayCount !== 0)setAge(age => age + 1)
    }, 1000);
    return () => clearInterval(interval);
  });

  // setInterval(()=> setDays(days + 1),1000);
  return (
    <Container colorKey="primary">
       <p>Name : {userName}</p>
        <p>Day : {dayCount}</p>
        <p>Age : {age}</p>
        <p>Budget : ¥{budget}</p>
    </Container>
  );
};
