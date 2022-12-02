import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick? :()=>void;
  size?: string;
};
export const PrimaryButton: FC<Props> = (props) => {
  const { children,onClick,size="md"} = props;
  return (
    <Button
    colorScheme="messenger"
      color="gray.50"
      size={size}
      _hover={{ opacity : "0.8",top : "-1px",right : "-1px"}}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
