import { Container, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { withSSRAuth } from "../utils/withSSRAuth";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { AddButton } from "../components/Buttons/AddButton";
import { ModalAddMembers } from "../components/ModalAddMembers";
import { GroupCard } from "../components/Cards/GroupCard";

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Header />
    <Sidebar />
    <Container maxW="container.xl">
      { isOpen && <ModalAddMembers isOpen={isOpen} onClose={onClose} /> }

      <Flex pt="3rem" pb="3rem" justify="flex-end">
        <AddButton aria-label="Add Members" onClick={() => onOpen()} />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </SimpleGrid>
    </Container>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
