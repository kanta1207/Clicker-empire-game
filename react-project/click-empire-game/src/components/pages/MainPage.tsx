import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../global/atoms";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Items, UserInfo } from "../../types/types";

import { Hamburger } from "../organisms/Hamburger";
import { HamburgerStatus } from "../organisms/HamburgerStatus";
import { Header } from "../organisms/Header";
import { ItemsDisplay } from "../organisms/ItemsDisplay";
import { UserProfile } from "../organisms/UserProfile";

export const MainPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [name] = useState(userInfo.name);
  const [dayCount, setDayCount] = useState(userInfo.dayCount);
  const [age, setAge] = useState(userInfo.age);
  const [numOfBurger, setNumOfBurger] = useState(userInfo.numOfBurger);
  const [burgerPerAClick, setBurgerPerAClick] = useState(
    userInfo.burgerPerAClick
  );
  const [priceOfBurger, setPriceOfBurger] = useState(userInfo.priceOfBurger);
  const [budget, setBudget] = useState(userInfo.budget);
  const [itemsYouHave, setitemsYouHave] = useState<Items[]>(userInfo.items);

  const navigate = useNavigate();

  const { saveUsersData } = useUserInfo();

  const onClickBurger = () => {
    setNumOfBurger((numOfBurger) => numOfBurger + burgerPerAClick);
    setBudget((budget) => budget + priceOfBurger);
  };

  const onClickSave = () => {
    setUserInfo({
      name,
      dayCount,
      age,
      numOfBurger,
      burgerPerAClick,
      priceOfBurger,
      budget,
      items: itemsYouHave,
    });
    setUserInfo((userInfo)=>{
      saveUsersData(userInfo);
      return userInfo;
    });
  };

  const onClickBack = ()=> {
    onClickSave();
    navigate("/");
  }

  return (
    <div className="w-full h-full">
      <Header onClickSave={onClickSave} onClickBack={onClickBack} />
      <div className="w-full flex">
        <div className="w-[50%]">
          <HamburgerStatus
            priceOfBurger={priceOfBurger}
            numOfBurger={numOfBurger}
            onClickBurger={onClickBurger}
          />
        </div>
        <div className="w-[50%]">
          <UserProfile
            userName={name}
            budget={budget}
            dayCount={dayCount}
            setDayCount={setDayCount}
            age={age}
            setAge={setAge}
          />
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
