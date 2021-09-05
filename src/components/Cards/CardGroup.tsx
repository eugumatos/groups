import { Box, Avatar, VStack, Heading, Menu, Tooltip, MenuButton, Portal, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

export function CardGroup() {
  return (
    <Box
      h="26rem"
      bg="gray.100"
      borderRadius={8}
    >
      <Box 
        d="flex"
        p={3}
        alignItems="center"
        borderTopRadius={8}
        borderBottom="2px solid #B3B5C6"
        height="4.3rem"
      >
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

        <VStack ml={5} align="flex-start">
          <Heading as="h4" size="md" color="gray.700" isTruncated>Group Name</Heading>
        </VStack>

        <Menu size="sm">
          <Tooltip label="Edit Group">
            <MenuButton 
              ml="auto" 
              borderRadius="90%"
              _hover={{ bg: "gray.300" }}
            >
              <IconButton
                bg="transparent" 
                aria-label="Edit"
                icon={<FiMoreVertical size={22} color="#000" />}
              />
            </MenuButton>
          </Tooltip>
          <Portal>
            <MenuList color="black" fontSize="0.9rem">
              <MenuItem>Remove Group</MenuItem>
            </MenuList>
          </Portal>
      </Menu>
      </Box>
    </Box>
  );
}