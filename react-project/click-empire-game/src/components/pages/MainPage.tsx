import { useState } from "react";

import { itemList, Items } from "../../itemsList";
import { Hamburger } from "../organisms/Hamburger";
import { HamburgerStatus } from "../organisms/HamburgerStatus";
import { ItemsDisplay } from "../organisms/ItemsDisplay";
import { UserProfile } from "../organisms/UserProfile";

export const MainPage = () => {
  const [numOfBurger, setNumOfBurger] = useState(0);
  const [burgerPerAClick, setBurgerPerAClick] = useState(1);
  const [priceOfBurger, setPriceOfBurger] = useState(25);
  const [budget, setBudget] = useState(0);
  const [itemsYouHave, setitemsYouHave] = useState<Items[]>([]);

  const onClickBurger = () => {
    setNumOfBurger((numOfBurger) => numOfBurger + burgerPerAClick);
    setBudget((budget) => budget + priceOfBurger);
  };
  return (
    <div className="w-full h-full">
      <div className="w-full flex">
        <div className="w-[50%]">
          <HamburgerStatus
            priceOfBurger={priceOfBurger}
            numOfBurger={numOfBurger}
            onClickBurger={onClickBurger}
          />
        </div>
        <div className="w-[50%]">
          <UserProfile userName="Kanta" budget={budget} />
        </div>
      </div>
      <div className="py-2">
        <Hamburger onClickBurger={onClickBurger} itemsYouHave={itemsYouHave} />
      </div>
      <div className="py-2">
        <ItemsDisplay
          setBurgerPerAClick={setBurgerPerAClick}
          setPrice={setPriceOfBurger}
          budget={budget}
          setBudget={setBudget}
          setItemsYouHave={setitemsYouHave}
        />
      </div>
    </div>
  );
};
