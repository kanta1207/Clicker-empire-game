import { useMessage } from "./useMessage";
import { addDoc, collection } from "firebase/firestore";
import { useDisclosure } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { auth, db } from "../firebase";
import { PostProps } from "../types/types";

export const useCreatePost = () => {
  const [title, setTitle] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(3);
  const [tools, setTools] = useState(Array<string | number>);
  const [text, setText] = useState("");

  const { showMessage } = useMessage();

  const createPost = useCallback(
    async (postProps: Omit<PostProps, "author"|"id">) => {
      console.log("createPosts")
      const { title, numOfPeople, tools, text } = postProps;
      await addDoc(collection(db, "posts"), {
        author: {
          username: auth.currentUser?.displayName,
          userId: auth.currentUser?.uid,
        },
        title,
        numOfPeople,
        tools,
        text,
      })
        .then(() =>
          showMessage({
            title: "Successfully created a post",
            status: "success",
          })
        )
        .catch(() =>
          showMessage({ title: "Failed to create a post", status: "error" })
        );
    },
    []
  );

  return {
    title,
    setTitle,
    numOfPeople,
    setNumOfPeople,
    tools,
    setTools,
    text,
    setText,
    createPost,
  };
};
