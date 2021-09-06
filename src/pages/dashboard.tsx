import { Container, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { withSSRAuth } from "../utils/withSSRAuth";
import { AddButton } from "../components/Buttons/AddButton";
import { ModalAddMembers } from "../components/ModalAddMembers";
import { CardAvatar } from "../components/Cards/CardAvatar";

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl">
      { isOpen && <ModalAddMembers isOpen={isOpen} onClose={onClose} /> }

      <Flex pt="3rem" pb="3rem" justify="flex-end">
        <AddButton aria-label="Add Members" onClick={() => onOpen()} />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <CardAvatar badge="admin" />
        <CardAvatar badge="manager" />
        <CardAvatar />
      </SimpleGrid>
    </Container>
  );
}

/*
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
*/