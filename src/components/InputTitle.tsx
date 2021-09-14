import { Input } from "@chakra-ui/react";

export function InputTitle() {
  return (
    <Input 
      type="text"
      placeholder="Enter your group name"
      border="none"
      fontSize="1.8rem"
      textAlign="center"
      _focus={{ border: "none" }}
      _placeholder={{ color: "white", textAlign: "center" }}
    />  
  );
}