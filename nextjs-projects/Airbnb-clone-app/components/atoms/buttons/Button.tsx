import { ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttonType:
    | "pinkRounded"
    | "pinkSquare"
    | "whiteRounded"
    | "whiteSquare"
    | "blackRounded"
    | "transparentRounded";
  mediaQueries: string;
} & Omit<ComponentProps<"button">, "className">;

const buttonTypeMap = new Map<string, string>([
  ["pinkRounded", "rounded-full,bg-[#FF385C] text-[#ffffff] hover:opacity-80"],
  ["pinkSquare", "rounded-sm bg-[#FF385C] text-[#ffffff] hover:opacity-80"],
  [
    "whiteRounded",
    "rounded-full outline outline-[0.1px] outline-[#717171] hover:shadow-lg ease-in-out duration-300",
  ],
  ["whiteSquare", "rounded-sm"],
  ["blackRounded", "rounded-full"],
  ["transparentRounded", "rounded-full hover:opacity-50"],
]);

const baseStyle = "flex items-center";

export const Button: FC<Props> = ({
  children,
  buttonType,
  mediaQueries,
  ...props
}) => {
  return (
    <button
      className={`${baseStyle} , ${buttonTypeMap.get(
        buttonType
      )} ${mediaQueries} `}
    >
      {children}
    </button>
  );
};
