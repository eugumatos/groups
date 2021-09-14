import { useState } from "react";
import { Flex, SimpleGrid, VStack } from "@chakra-ui/react";

import { ChooseCard } from "../components/Cards/ChooseCard";
import { InputTitle } from "../components/InputTitle";
import { CreateGroupButton } from "../components/Buttons/CreateGroupButton";

export default function Groups() {
  const [chooseCard, setChooseCard] = useState(0);

  return (
    <Flex
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        w="100vh" 
        direction="column"
        align="center" 
        justify="center"
      >
        <SimpleGrid columns={[1, 2, 2]} spacing={10}>
          <ChooseCard privateGroup choose={chooseCard === 0 && true} onChoose={() => setChooseCard(0)} />
          <ChooseCard choose={chooseCard === 1 && true} onChoose={() => setChooseCard(1)} />
        </SimpleGrid>

        <VStack w="80%" mt="3rem" spacing={10}>
          <InputTitle />

          <CreateGroupButton />
        </VStack>
      </Flex>

    </Flex>
  );
}