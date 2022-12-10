import { FC } from "react"

type Props = {
    onChange : (e: any)=> void;
    placeholder : string;
    type : string;
}

export const TextInput : FC<Props>= (props) => {
    const {onChange,placeholder,type} = props;
  return (
    <input
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="w-[70%] border-2 rounded-xl shadow focus:outline-none focus:ring focus:outline-[#1876D1] p-2 md:text-lg"
          />
  )
}
