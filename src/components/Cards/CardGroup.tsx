import { Box, Avatar, AvatarGroup, Stack, Flex, Heading, Text, Divider, Menu, Tooltip, MenuButton, Portal, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { FiMoreVertical, FiUsers } from "react-icons/fi";

export function CardGroup() {
  return (
    <Box
      p={5}
      h="24rem"
      bg="gray.100"
      borderRadius={8}
    >
      <Flex>
        <Stack dir="column" align="flex-start">
          <Avatar borderRadius={10} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Heading as="h4" size="md" color="gray.700" isTruncated>Group Name</Heading>
          <Text color="gray.500">description</Text>
        </Stack>

        <Tooltip label="Edit Group">
          <IconButton
            ml="auto"
            bg="transparent" 
            borderRadius="100%"
            aria-label="Edit"
            icon={<FiMoreVertical size={22} color="#353646" />}
          />
        </Tooltip>
      </Flex>
      
      <Stack mt={5} dir="column" align="flex-start">
        <Heading as="h4" size="sm" mb={2} color="gray.700" isTruncated>Type</Heading>

        <Flex pt={1}>
          <FiUsers size={20} color="#353646" />
          <Text ml={3} color="gray.400">public</Text>
        </Flex>
      </Stack>

      <Divider my={8} />

      <Stack dir="column">
        <Heading as="h4" size="sm" color="gray.700" isTruncated>Members</Heading>

        <AvatarGroup pt={2} size="md" max={4}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </Stack>
    </Box>
  );
}

