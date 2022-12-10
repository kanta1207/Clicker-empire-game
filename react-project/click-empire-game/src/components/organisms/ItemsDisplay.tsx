import React, { FC } from "react";
import { couldStartTrivia } from "typescript";
import { itemList } from "../../itemsList";
import { Items } from "../../types/types";
import { Item } from "./Item";

type Props = {
  setBurgerPerAClick: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  setItemsYouHave: React.Dispatch<React.SetStateAction<Items[]>>;
};

export const ItemsDisplay: FC<Props> = (props) => {
  const { setBurgerPerAClick, setPrice, budget, setBudget, setItemsYouHave } =
    props;
  console.log("display");

  //depending on what the item is, change how it works
  const itemFunc = (item: Items, amount: number) => {

    if (item.power !== undefined) {
      setPrice((price) => price * (item.power as number) ** amount);
      setBurgerPerAClick((burgerPerAClick) => burgerPerAClick * 2);
    }

    if (item.profit !== undefined) {
      const interval = setInterval(() => {
        setBudget((budget) => budget + (item.profit as number) * amount);
      }, 1000);

      return () => clearInterval(interval);
    }
  };

  //using itemFunc , purchasing an item
  const purchaseItem = (item: Items, amount: number) => {
    const total = amount * item.price;

    if (budget < total) {
      alert("You don't have enough money");
      return;
    }

    if (amount <= 0) {
      alert("Invalid input");
      return;
    };

    itemFunc(item,amount);

    setBudget(budget => budget - total);
    setItemsYouHave(items =>  [item ,...items])
  };

  return (
    <div>
      {itemList.map((item) => (
        <Item item={item} purchaseItem={purchaseItem} />
      ))}
    </div>
  );
};
