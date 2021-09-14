import { Box, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import { FiLock, FiUnlock } from "react-icons/fi";

interface CardChooseProps {
  privateGroup?: boolean;
  choose: boolean;
  onChoose: () => void;
}

export function ChooseCard({ privateGroup = false, choose, onChoose }: CardChooseProps) {
  return (
    <Box
      w="20rem"
      h="20rem"
      cursor="pointer"
      bg={choose ? "blue.400" : "transparent"}
      border={choose ? "1px solid #9699B0" : "none"}
      borderRadius={6}
      transition="all .3s ease;"
      _hover={{ border: "1px solid #9699B0" }}
      onClick={onChoose}
    >
      <Flex 
        w="100%" 
        h="100%" 
        align="center" 
        justify="center"
      >
        { privateGroup ? (
           <VStack>
            <FiLock size={50} />
          
            <Heading as="h4" size="md">Private Group</Heading>
  
            <Text w="70%" align="center">Best for interaction between people who know each other</Text>
          </VStack>
        ) : (
          <VStack>
            <FiUnlock size={50} />
          
            <Heading as="h4" size="md">Public Group</Heading>

            <Text w="70%" align="center">Best for community interaction</Text>
          </VStack>
        ) }
      </Flex>
    </Box>
  );
}