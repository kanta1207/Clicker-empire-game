import { FC, useState } from "react";
import { Items } from "../../itemsList";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";

type Props = {
  item: Items;
  purchaseItem: (item: Items, amount: number) => void;
};

export const Item: FC<Props> = (props) => {
  const { item, purchaseItem } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber);
    setTotal(e.target.valueAsNumber * item.price);
  };

  return (
    <Container colorKey="secondary">
      <h3 className="text-2xl ">{item.name}</h3>
      <div className="flex justify-center items-center py-3">
        <img src={item.imgPath} alt={item.name} width="200px" />
        <div className="py-5 space-y-5">
          <p className="text-md font-light">{item.description}</p>
          {isOpen ? (
            <>
              <p className="">Price : ¥{item.price}</p>
              <input
                onChange={(e) => onChangeAmount(e)}
                placeholder="How many would you like to buy?"
                type="number"
                value={amount}
                className="w-[70%] border-2 rounded focus:outline-none focus:ring focus:outline-[#1876D1] p-2 md:text-lg"
              />
              <p className="text-xl">total : ¥{total}</p>
              <div className="flex space-x-10">
                <Button
                  buttonType="primary"
                  mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg"
                  onClick={() => {
                    purchaseItem(item, amount);
                    setIsOpen(false)
                    setAmount(0)
                  }}
                >
                  Purchase
                </Button>
                <Button
                  buttonType="secondary"
                  mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Go Back
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-around">
              <p className="text-xl">Price : ¥{item.price}</p>
              <Button
                buttonType="primary"
                mediaQueries="py-2 px-4"
                onClick={() => setIsOpen(true)}
              >
                Check out
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
