import { Button } from "../atoms/Button";

export const LoginForm = () => {
  return (
    <div className="text-[#000000] flex justify-center items-center h-full w-full">
      <div className="bg-[#ffffff] border-solid border-2 shadow-lg rounded w-[90%] sm:w-[70%] xl:w-[50%] p-3 space-y-3">
        <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl pt-5 md:pt-8 lg:pt-10">
          Clicker Empire Game
        </h2>
        <div className="space-y-5 p-5 md:px-10 flex justify-center">
          <input
          placeholder="Type your name"
            type="text"
            className="w-[70%] border-2 rounded focus:outline-none focus:ring focus:outline-[#1876D1] p-2 md:text-lg"
          />
        </div>
        <div className="w-full flex items-center justify-center space-x-5 md:space-x-10 pb-5 md:pb-8">
          <Button mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg" buttonType="primary">
            New
          </Button>
          <Button mediaQueries="py-2 px-5 md:py-3 md:px-6 text-sm md:text-lg" buttonType="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
