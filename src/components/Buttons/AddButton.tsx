import { Tooltip, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export function AddButton({ ...rest }: IconButtonProps) {
  return (
    <Tooltip label={rest["aria-label"]} bg="blue.500">
      <IconButton
        w="3rem"
        h="3rem"
        bg="green.500" 
        borderRadius="100%"
        icon={<FiPlus size={22} />}
        _hover={{ bg: "green.600" }}
        {...rest}
      />
    </Tooltip>
  );
}