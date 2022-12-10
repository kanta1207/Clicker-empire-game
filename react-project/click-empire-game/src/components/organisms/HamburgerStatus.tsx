import { FC, memo } from "react";
import { Container } from "../atoms/Container";

type Props = {
  priceOfBurger: number;
  numOfBurger : number;
  onClickBurger : () => void;
};

export const HamburgerStatus: FC<Props> = memo((props) => {
    const {priceOfBurger,numOfBurger} = props;

  return (
    <>
      <Container colorKey="primary">
        <div className="text-sm sm:text-md lg:text-xl sm:p-4">
          <p>
          You've made <span className="text-xl sm:text-2xl">{numOfBurger}</span> burgers
        </p>
        <p>
          You'll get <span className="text-xl sm:text-2xl">¥{priceOfBurger}</span> per one click
        </p>
        </div>
      </Container>
    </>
  );
});
