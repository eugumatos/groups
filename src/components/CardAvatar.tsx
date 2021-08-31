import { Box, Avatar, Heading, VStack, Badge, IconButton, Tooltip } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

export function CardAvatar() {
  return (
    <Box 
      d="flex"
      p={3}
      bg="gray.200" 
      alignItems="center"
      borderRadius={6}
      height="4.3rem"
    >
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

      <VStack ml={5} align="flex-start">
        <Heading as="h4" size="md" color="gray.900" isTruncated>Jonh Doe</Heading>
        <Badge variant="solid" colorScheme="green">Admin</Badge>
      </VStack>

      <Tooltip label="Edit user">
        <IconButton
          ml="auto"
          bg="transparent" 
          aria-label="Edit"
          borderRadius="90%"
          icon={<FiMoreVertical size={22} color="#000" />}
          _hover={{ bg: "gray.300" }}
        />
      </Tooltip>
    </Box>
  );
}