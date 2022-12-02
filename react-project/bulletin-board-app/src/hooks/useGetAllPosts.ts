import { Post } from "./../components/organisms/Post";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase";
import { PostProps } from "../types/types";
export const useGetAllPosts = () => {
  const [posts, setPosts] = useState(Array<PostProps>);
  const [loading, setLoading] = useState(false);

  const getAllPosts = useCallback(async () => {
    console.log("getAllPosts");
    const dataArr: Array<PostProps> = [];
    const data = await getDocs(collection(db, "posts"));
    data.forEach((doc) => dataArr.push({...doc.data(), id : doc.id} as PostProps));
    return dataArr;
  }, []);

  const updatePosts = useCallback(async () => {
    setLoading(true);
    const dataArr = await getAllPosts();
    setPosts(dataArr);
    setLoading(false);
  }, []);

  return { posts, loading,updatePosts };
};
