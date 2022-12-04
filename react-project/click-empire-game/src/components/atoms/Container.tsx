import { FC, ReactNode } from "react"

type Props = {
    children : ReactNode;
    colorKey : string;
};

const colorMap = new Map<string, string>([
    ["primary", "bg-[#017BFD] text-[#ffffff]"],
    [
      "secondary",
      "",
    ]
  ]);

  const baseStyle = "w-full h-full font-bold border-solid border-2 shadow-lg rounded-xl p-5"

export const Container : FC<Props>= (props) => {
    const {children,colorKey} = props;
  return (
    <div className={`${colorMap.get(colorKey)} , ${baseStyle}`}>
        {children}
    </div>
  )
}
