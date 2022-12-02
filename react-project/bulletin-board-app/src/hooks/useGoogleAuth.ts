import { useDisclosure } from "@chakra-ui/react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth, provider } from "../firebase";
import { useMessage } from "./useMessage";

export const useGoogleAuth = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const { showMessage } = useMessage();
  const [isAuth, setIsAuth] = useState(false);

  const signInWithGoogle = useCallback(() => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        setIsAuth(true);
        showMessage({ title: "Sign-in confirmed", status: "success" });
      })
      .catch(() => showMessage({ title: "Sign-in failed", status: "error" }))
      .finally(() => onCloseLogin());
  }, []);

  const signOutwithGoogle = useCallback(() => {
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        showMessage({ title: "Successfully logged out", status: "success" });
      })
      .catch(() => showMessage({ title: "Logout failed.", status: "error" }))
      .finally(() => onCloseLogin());
  }, []);
  return {
    signInWithGoogle,
    signOutwithGoogle,
    isAuth,
    isOpenLogin,
    onOpenLogin,
    onCloseLogin,
  };
};
