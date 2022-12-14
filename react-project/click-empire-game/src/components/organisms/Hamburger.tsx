import React, { FC, memo } from "react";
import { Items } from "../../types/types";
import { Container } from "../atoms/Container";

type Props = {
  onClickBurger: () => void;
  itemsYouHave: Items[];
};

export const Hamburger: FC<Props> = memo((props) => {
  const { onClickBurger, itemsYouHave } = props;
  console.log(itemsYouHave)
  return (
    <Container colorKey="secondary">
      <div className="flex justify-center items-center space-x-5">
        <img
          onClick={() => onClickBurger()}
          src="https://2.bp.blogspot.com/-63vQtYUKJBY/UgSMCmG66LI/AAAAAAAAW6w/-VMth7DVjcY/s800/food_hamburger.png"
          alt="hamburger"
          width="150px"
          className="hover:-translate-y-1"
        />
        {itemsYouHave.length > 0 ? (
          <div className="pl-10">
            <p>Items you have</p>
            {itemsYouHave.map((item) => (
              <>
              <img width="50px" alt={item.name} src={item.imgPath}/>
              </>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
});
