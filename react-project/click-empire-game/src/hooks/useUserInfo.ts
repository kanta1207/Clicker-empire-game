import { useNavigate } from "react-router-dom";
import { userInfoState } from "./../global/atoms";
import { UserInfo } from "./../types/types";
import { useCallback } from "react";
import { db } from "../firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  //collection "users"
  const usersRef = collection(db, "users");

  //get user's info from db
  const getUserInfo = async (name: string) => {
    const docRef = doc(usersRef, name);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  //get the account`s data from db, navigate to the main page
  const onClickSignIn = useCallback(async (name: string) => {
    const userInfo = await getUserInfo(name).catch((error) =>
      console.log(error)
    );
    if (userInfo === undefined) alert(`Can't find the name"${name}"`);
    else {
      setUserInfo(userInfo as UserInfo);
      navigate("/main");
    }
  }, []);

  //create a user account data, set the user name, navigate to the main page
  const onClickSignUp = useCallback(async (name: string) => {
    const initialUserInfo: UserInfo = {
      name,
      budget: 0,
      age: 20,
      dayCount: 0,
      numOfBurger: 0,
      burgerPerAClick: 1,
      priceOfBurger: 25,
      items : [],
    };
    const docRef = doc(usersRef, name);
    const docSnap = await getDoc(docRef);
    //check if the name is already used or not.
    if (docSnap.exists())
      alert("This name is already used. Please use other name");
    else {
      //create a user info in db, set a global state
      await setDoc(docRef, initialUserInfo);
      setUserInfo(initialUserInfo);
      navigate("/main");
    }
  }, []);

  const saveUsersData = useCallback(async (userInfo: UserInfo) => {
    const docRef = doc(usersRef, userInfo.name);
    await updateDoc(docRef, {
      name : userInfo.name,
      budget: userInfo.budget,
      age: userInfo.age,
      dayCount: userInfo.dayCount,
      numOfBurger: userInfo.numOfBurger,
      burgerPerAClick: userInfo.burgerPerAClick,
      priceOfBurger: userInfo.priceOfBurger,
      items: userInfo.items,
    })
      .then(() => alert("Saved your data"))
      .catch((error) => alert(error));
  }, []);

  return { onClickSignUp, onClickSignIn, saveUsersData, navigate };
};
