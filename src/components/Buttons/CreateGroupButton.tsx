import { Button } from "@chakra-ui/react";

export function CreateGroupButton() {
  return (
    <Button 
      size="lg"
      bg="green.500" 
      _hover={{ bg: "green.600" }}
    >
      Create new group
    </Button>
  );
}