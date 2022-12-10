import { useNavigate } from "react-router-dom";
import { userInfoState } from "./../global/atoms";
import { UserInfo } from "./../types/types";
import { useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, DocumentData, DocumentSnapshot, endAt, getDoc, setDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";

export const useAuthAndStore = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const navigate = useNavigate();
  //collection "users"
  const usersRef = collection(db, "users");

  //get user's info from db
  const getUserInfo = async (email: string) => {
    const docRef = doc(usersRef, email);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  //sign in
  const signIn = useCallback(async (email: string, password: string) => {
    const userInfo = await getUserInfo(email);
    console.log(userInfo)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/main"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }, []);

  //create a user account
  const createUserAcount = useCallback(
    async (email: string, password: string, name: string) => {
      const docRef = doc(usersRef, email);
      const docSnap = await getDoc(docRef);
      //check if user account already exists
      docSnap.exists()
        ? alert(
            "You already have an account. Sign in or create anothor account."
          )
        : createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
              await setDoc(docRef, {
                name,
                email,
                password,
                budget: 0,
                age: 20,
                dayCount: 0,
                numOfBurger: 0,
                burgerPerAClick: 1,
                priceOfBurger: 25,
                items: [],
              } as UserInfo);
            });
    },
    []
  );

  //try to sign in untill user`s account get validated
  const signUpHelper = (docSnap : DocumentSnapshot<DocumentData>,email : string,password: string) => {
    docSnap.exists() ? signIn(email , password) : signUpHelper(docSnap,email,password)
  }

  const onClickSignUp = useCallback(async(
    email: string,
    password: string,
    name: string
  ) => {
    createUserAcount(email, password, name);
    const docSnap = await getDoc(doc(usersRef,email));
    signUpHelper(docSnap,email,password);
  },[]);

  const onClickSignIn = (email: string, password: string) => {
    signIn(email, password);
  };
  return { onClickSignUp,onClickSignIn};
};

// ログイン済みのユーザー情報があるかをチェック
// var userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
// if (!userDoc.exists) {
//   // Firestore にユーザー用のドキュメントが作られていなければ作る
//   await userDoc.ref.set({
//     screen_name: user.uid,
//     display_name: '名無しさん',
//     created_at: firebase.firestore.FieldValue.serverTimestamp(),
//   });
// }
