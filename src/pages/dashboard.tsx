import { useState, useRef } from "react";
import { Container, Flex, SimpleGrid, VStack, Button, Box, Input, InputGroup, InputRightElement, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { v4 as uuidV4 } from "uuid";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

import { AddButton } from "../components/Buttons/AddButton";
import { CardAvatar } from "../components/CardAvatar";

const initialDataInput = [
  { id: uuidV4(), email: '' },
  { id: uuidV4(), email: '' },
  { id: uuidV4(), email: '' },
];

export default function Dashboard() {
  const finalRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputFields, setInputFields] = useState(initialDataInput);

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidV4(), email: '' }])
  }

  const handleRemoveFields = (id) => {
    const filterInput = inputFields.filter(input => input.id !== id);
    setInputFields(filterInput);
  }

  const handleAddTeam = () => {
    toast.success('Added group!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: true,
    });

    onClose();
  }

  return (
    <Container maxW="container.xl">
      <Modal size="lg" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="gray.800" />

          <ModalBody p={10}>
            <Text color="gray.800" fontSize="xl">Add members to group</Text>
            <Text mt={2} color="gray.800" fontSize="sm">Invite member by email address</Text>

            <VStack mt={3} gridGap={2} align="left">
              { inputFields.map((input, index) => (
                <Flex key={input.id} align="center">
                  <InputGroup>
                    <Input 
                      key={input.id} 
                      color="gray.600" 
                      placeholder="Ex: jonhDoe@email.com" 
                    />
                    { index > 2 && 
                      <InputRightElement 
                        children={
                        <FiTrash 
                          size={18} 
                          color="#949292" 
                          onClick={() => handleRemoveFields(input.id)}
                          style={{ cursor: "pointer" }} 
                        />} 
                      />
                    }
                  </InputGroup>
                </Flex>
              )) }
             
              <Text 
                color="green.300" 
                fontWeight="bold" 
                cursor="pointer" 
                onClick={handleAddFields}
                _hover={{ color: "green.400" }}
              >+ Add New</Text>

              <Flex direction="column" w="100%">
                <Button bg="black" onClick={handleAddTeam} _hover={{ bg: "gray.900" }}>Save Changes</Button>
                <Button onClick={onClose} mt={2} color="black" variant="outline">Cancel</Button>
              </Flex>
            </VStack>
          </ModalBody>
      
          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex pt="3rem" pb="3rem" justify="flex-end">
        <AddButton 
          aria-label="Add Members" 
          onClick={() => {
            setInputFields(initialDataInput);
            onOpen();
          }} 
        />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <CardAvatar badge="admin" />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar badge="manager" />    
      </SimpleGrid>
    </Container>
  )
}