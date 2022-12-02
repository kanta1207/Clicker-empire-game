import {
  Box,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { SecondaryButton } from "../../atoms/SecondaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  signInWithGoogle: () => void;
  signOutWithGoogle: ()=> void;
  isAuth: boolean;
};

export const GoogleAuthModal: FC<Props> = (props) => {
  const { isOpen, onClose, signInWithGoogle,signOutWithGoogle ,isAuth } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {isAuth ? (
          <>
            <ModalBody>
              <Center fontSize="lg" fontWeight="bold">Log out</Center>
              Are you sure you want to log out?
              </ModalBody>
            <ModalFooter>
              <Box mr="2">
                <PrimaryButton onClick={signOutWithGoogle}>OK</PrimaryButton>
              </Box>
              <Box>
                <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
              </Box>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>Click "Go" and authorize your Google Account</ModalBody>
            <ModalFooter>
              <Box mr="2">
                <PrimaryButton onClick={signInWithGoogle}>Go</PrimaryButton>
              </Box>
              <Box>
                <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
              </Box>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
