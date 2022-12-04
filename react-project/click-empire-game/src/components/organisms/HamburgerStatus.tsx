import { FC, useState } from "react";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";

type Props = {
  priceOfBurger: number;
  numOfBurger : number;
  onClickBurger : () => void;
};

export const HamburgerStatus: FC<Props> = (props) => {
    const {priceOfBurger,numOfBurger} = props;

  return (
    <>
      <Container colorKey="primary">
        <p>
          You made <span className="text-2xl">{numOfBurger}</span> burgers
        </p>
        <p>
          You'll get <span className="text-2xl">¥{priceOfBurger}</span> per one click
        </p>
      </Container>
    </>
  );
};
