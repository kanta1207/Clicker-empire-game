export type UserInfo = {
    name: string;
    budget: number;
    age: number;
    dayCount: number;
    numOfBurger : number;
    burgerPerAClick : number;
    priceOfBurger : number;
    items : Items[]
  };

  export type Items = {
    name: string;
    price: number;
    description: string;
    imgPath: string;
    power?: number;
    profit?: number;
  };
