import { Progress, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";
import { Header } from "../organisms/Header";
import { CreatePostModal } from "../organisms/modals/CreatePostModal";
import { GoogleAuthModal } from "../organisms/modals/GoogleAuthModal";
import { Post } from "../organisms/Post";

export const Home = memo(() => {
  const {
    signInWithGoogle,
    signOutwithGoogle,
    isAuth,
    isOpenLogin,
    onOpenLogin,
    onCloseLogin,
  } = useGoogleAuth();

  const {
    isOpen: isOpenPost,
    onOpen: onOpenpost,
    onClose: onClosePost,
  } = useDisclosure();

  const { updatePosts,posts,loading} = useGetAllPosts();

  useEffect(() => {
    updatePosts()
  }, []);

  console.log(posts);
  return (
    <>
      <Header
        onOpenLogin={onOpenLogin}
        onOpenPost={onOpenpost}
        isAuth={isAuth}
      />
      {loading ? (
        <Progress size="md" isIndeterminate/>
      ) : (
        <Wrap>
          {posts.map((post) => (
            <WrapItem id={post.author.userId} key={post.id}>
              <Post post={post} margin="16px" isAuth={isAuth} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <GoogleAuthModal
        isOpen={isOpenLogin}
        onClose={onCloseLogin}
        signInWithGoogle={signInWithGoogle}
        signOutWithGoogle={signOutwithGoogle}
        isAuth={isAuth}
      />
      <CreatePostModal isOpen={isOpenPost} onClose={onClosePost} />
    </>
  );
});
