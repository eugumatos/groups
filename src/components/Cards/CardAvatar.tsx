import { Box, Avatar, Heading, VStack, Badge, Text, IconButton, Tooltip, Menu, MenuButton, Portal, MenuList, MenuItem } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

interface CardAvatarProps {
  badge?: string;
}

const badges = {
  admin: <Badge variant="solid" colorScheme="green">Admin</Badge>,
  manager: <Badge variant="solid" colorScheme="blue">Manager</Badge>,
};

export function CardAvatar({ badge }: CardAvatarProps) {
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
        {badges[badge]}
      </VStack>

      <Menu size="sm">
        <Tooltip label="Edit user">
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
            <MenuItem>Make Admin</MenuItem>
            <MenuItem>Make Manager</MenuItem>
            <MenuItem>Remove Member</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Box>
  );
}