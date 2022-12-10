import { useAuthAndStore } from "../../hooks/useAuthAndStore"
import { LoginForm } from "../organisms/LoginForm"

export const LoginPage = () => {
  return (
    <div className="bg-[#ffffff] w-full h-screen">
      <div className="w-full h-full">
        <LoginForm/>
      </div>
    </div>
  )
}
