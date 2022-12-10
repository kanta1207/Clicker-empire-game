import { useState } from "react";
import { useUserInfo } from "../../hooks/useUserInfo";

import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";

export const LoginForm = () => {
  const [name, setName] = useState("");

  const {onClickSignUp , onClickSignIn} = useUserInfo();


  return (
    <div className="text-[#000000] flex justify-center items-center h-full w-full">
      <div className="bg-[#ffffff] border-solid border-2 shadow-lg rounded-xl w-[90%] sm:w-[70%] xl:w-[50%] p-3 space-y-3">
        <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl pt-5 md:pt-8 lg:pt-10">
          Clicker Empire Game
        </h2>
        <div className="space-y-5 p-5 md:px-10 text-center">
          <TextInput
            onChange={(e) => setName(e.target.value)}
            placeholder="User Name"
            type="text"
          />
        </div>
        <div className="w-full flex items-center justify-center space-x-5 md:space-x-10 pb-5 md:pb-8">
          <Button
            onClick={() => onClickSignUp(name)}
            mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg"
            buttonType="primary"
          >
            Sign Up
          </Button>
          <Button
            onClick={() =>onClickSignIn(name)}
            mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg"
            buttonType="secondary"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
