import { Flex, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiUserCheck, FiUserPlus, FiEdit } from "react-icons/fi";
import { FC } from "react";
import { useMessage } from "../../hooks/useMessage";

type Props = {
  onOpenLogin: () => void;
  onOpenPost: () => void;
  isAuth: boolean;
};
export const Header: FC<Props> = (props) => {
  const { onOpenLogin, onOpenPost, isAuth } = props;

  const { showMessage } = useMessage();
  return (
    <>
      <Flex
        as="nav"
        justifyContent="space-between"
        border="none"
        boxShadow="sm"
        alignItems="center"
        padding={{ base: "3" }}
      >
        <IconButton
          aria-label="login"
          variant="unstyled"
          _hover={{ opacity: "0.4" }}
          onClick={onOpenLogin}
        >
          {isAuth ? <FiUserCheck size="65%" /> : <FiUserPlus size="65%" />}
        </IconButton>
        <IconButton
          aria-label="createPost"
          variant="unstyled"
          _hover={{ opacity: "0.4" }}
          onClick={
            isAuth
              ? onOpenPost
              : () =>{
                  showMessage({
                    title: "You have to sign in.",
                    status: "warning",
                  })
              }
          }
        >
          <FiEdit size="65%" />
        </IconButton>
      </Flex>
    </>
  );
};
