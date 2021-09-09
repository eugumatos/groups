import { Container, Box, Flex, HStack, Heading, Text, InputGroup, InputRightElement, Input, Avatar, AvatarBadge, Divider, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiSearch, FiBell, FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/client";

import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <Container maxW="container.xl">
      <Box 
        mt="2rem"
        h="3.8rem"
        bg="gray.100"
        borderRadius={8}
      >
        <Flex 
          p={3} 
          h="100%" 
          align="center"
          justify="space-between"
          >
        
          <HStack spacing={4}>
            <Heading as="h2" size="lg" color="gray.700" isTruncated>G</Heading>
            
            <Divider h="40px" orientation="vertical" />

            <ActiveLink href="/dashboard">
              <Text color="gray.400" cursor="pointer" _hover={{ color: "#616480" }}>Dashboard</Text>
            </ActiveLink>
            <ActiveLink href="#">
              <Text color="gray.400" cursor="pointer" _hover={{ color: "#616480" }}>Groups</Text>
            </ActiveLink>
            <ActiveLink href="#">
              <Text color="gray.400" cursor="pointer" _hover={{ color: "#616480" }}>Explore</Text>
            </ActiveLink>
          </HStack>
         

          <HStack spacing={4} h="100%" align="center">
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<FiSearch color="#797D9A" />}
              />
              <Input 
                bg="gray.200"
                borderRadius={20}
                type="text" 
                placeholder="Search" 
                color="gray.400" 
              />
            </InputGroup>

            <FiBell size={34} color="#dfb561" />

            <Divider h="40px" orientation="vertical" />
            
            <Menu>
              <MenuButton>
                <Avatar 
                  h="2.7rem"
                  w="2.7rem"
                  borderRadius={15} 
                  name="Segun Adebayo" 
                  src="https://bit.ly/sage-adebayo" 
                >
                  <AvatarBadge boxSize="0.9rem" bg="green.300" />
                </Avatar>  
              </MenuButton>
              <MenuList mt={2} mr="-0.8rem" color="gray.400">
                <MenuItem 
                  onClick={() => signOut({
                    callbackUrl: "/"
                  })}
                  icon={<FiLogOut size={18} color="#9699B0" />}
                >
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          
        </Flex>
      </Box>
    </Container>
  );
}