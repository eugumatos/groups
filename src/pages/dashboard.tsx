import { Container, Flex, SimpleGrid } from "@chakra-ui/react";

import { AddButton } from "../components/AddButton";
import { CardAvatar } from "../components/CardAvatar";

export default function Dashboard() {
  return (
    <Container maxW="container.xl">
      <Flex pt="3rem" pb="3rem" justify="flex-end">
        <AddButton />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />    
      </SimpleGrid>
    </Container>
  )
}