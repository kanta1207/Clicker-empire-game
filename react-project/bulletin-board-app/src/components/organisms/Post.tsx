import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PostProps } from "../../types/types";
import { auth } from "../../firebase";

type Props = {
  margin?: string;
  isAuth: boolean;
  post: PostProps;
};

export const Post: FC<Props> = (props) => {
  const { margin, isAuth, post } = props;
  return (
    <Box
      borderRadius="16px"
      border="solid"
      boxShadow="100"
      minH="200"
      minW="150"
      bg="whiteAlpha.100"
      p="5"
      m={margin}
    >
      <Heading as="h1">{post.title}</Heading>
      <Text as="h2">posted by {post.author.username}</Text>
      <List ml="-2" mr="3" my="5" spacing="3">
        <ListItem>
          <ListIcon as={AiOutlineCheckCircle} />
          募集人数　<Text>{post.numOfPeople}</Text>
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheckCircle} />
          使用言語　
          {post.tools.map((tool) => (
            <Text key={tool}>{tool}</Text>
          ))}
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheckCircle} />
          一言　 <Text>{post.text}</Text>
        </ListItem>
      </List>
      <Flex justifyContent="end" alignItems="end">
        {isAuth ? (
          auth.currentUser?.uid === post.author.userId ? (
            <PrimaryButton>Edit</PrimaryButton>
          ) : (
            <PrimaryButton>Join</PrimaryButton>
          )
        ) : (
          <PrimaryButton>Join</PrimaryButton>
        )}
      </Flex>
    </Box>
  );
};
