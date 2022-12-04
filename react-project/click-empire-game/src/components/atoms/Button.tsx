import { FC, ReactNode } from "react"


type Props = {
  children: ReactNode;
  onClick?: () => void;
  buttonType : "primary" | "secondary";
  mediaQueries: string;
};

//set styles for each color, using color names as keys.
const colorMap = new Map<string, string>([
  ["primary", "bg-[#017BFE] text-[#ffffff]"],
  [
    "secondary",
    "outline outline-3 outline-[#017BFE] text-[#017BFE]",
  ]
]);

//basic styles apply to all of the buttons
const baseStyle = "rounded-xl shadow-xl cursor-pointer hover:opacity-80";

export const Button: FC<Props> = (props) => {
  const { children, onClick, buttonType, mediaQueries } = props;
  return (
    <button
      onClick={onClick}
      className={`${colorMap.get(buttonType)} , ${mediaQueries} , ${baseStyle}`}
    >
      {children}
    </button>
  );
};



