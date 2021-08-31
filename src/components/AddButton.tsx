import { Tooltip, IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export function AddButton() {
  return (
    <Tooltip label="Add Team" bg="blue.500">
      <IconButton
        w="3rem"
        h="3rem"
        bg="green.500" 
        aria-label="Add Team"
        borderRadius="100%"
        icon={<FiPlus size={22} />}
        _hover={{ bg: "green.600" }}
      />
    </Tooltip>
  );
}