import { Container, Box, Flex, HStack, Link, Heading, InputGroup, InputRightElement, Input, Avatar, Divider, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiSearch, FiBell, FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/client";

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

            <Link color="gray.400">Dashboard</Link>
            <Link color="gray.400">Groups</Link>
            <Link color="gray.400">Explore</Link>
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

            <FiBell size={34} color="#9699B0" />

            <Divider h="40px" orientation="vertical" />
            
            <Menu>
              <MenuButton>
                <Avatar 
                  h="2.7rem"
                  w="2.7rem"
                  borderRadius={15} 
                  name="Segun Adebayo" 
                  src="https://bit.ly/sage-adebayo" 
                />
              </MenuButton>
              <MenuList mt={2} mr="-0.8rem" color="gray.400">
                <MenuItem 
                  onClick={() => signOut()}
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