import { Button } from "@chakra-ui/react";
import { on } from "events";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: ()=>void;
};
export const SecondaryButton: FC<Props> = (props) => {
  const { children ,onClick} = props;
  return (
    <Button
      colorScheme="gray"
      color="gray.800"
      size="md"
      _hover={{ opacity : "0.8",top : "-1px",right : "-1px"}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
