import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { useCreatePost } from "../../../hooks/useCreatePost";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { SecondaryButton } from "../../atoms/SecondaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreatePostModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const {
    title,
    setTitle,
    numOfPeople,
    setNumOfPeople,
    tools,
    setTools,
    text,
    setText,
    createPost,
  } = useCreatePost();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody margin="5">
          <Heading>Create a post</Heading>
          <Stack spacing={5} my="5">
            <Text>Title</Text>
            <Input onChange={(e) => setTitle(e.target.value)} />
            <Text>How many people do you want to team up with?</Text>
            <NumberInput
              defaultValue={3}
              min={3}
              max={20}
              onChange={(value) => setNumOfPeople(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text>What language/frameworks do you want to use?</Text>
            <CheckboxGroup
              colorScheme="messenger"
              onChange={(value) => setTools(value)}
            >
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <Checkbox value="JavaScript" _hover={{top : "-1px",left : "-1px"}}>JavaScript</Checkbox>
                <Checkbox value="TypeScript"_hover={{top : "-1px",left : "-1px"}}>TypeScript</Checkbox>
                <Checkbox value="React" _hover={{top : "-1px",left : "-1px"}}>React</Checkbox>
              </Stack>
            </CheckboxGroup>
            <Text>Describe briefly what you want to create in this project</Text>
            <Textarea
              placeholder=""
              onChange={(e) => setText(e.target.value)}
            />
          </Stack>
          <ModalFooter>
            <Box mr="2">
              <PrimaryButton
                onClick={async() => {
                  createPost({ title, numOfPeople, tools, text });
                  onClose();
                }}
              >
                Post
              </PrimaryButton>
            </Box>
            <Box>
              <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
            </Box>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
