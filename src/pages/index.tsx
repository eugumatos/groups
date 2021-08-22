import { Flex, Stack, Text } from '@chakra-ui/react';
import { SignInButton } from "../components/SignInButton";

export default function Home() {
  return (
    <Flex
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >

      <Flex
        w="xl" 
        align="center" 
        justify="space-between"
      >
        <Text 
          as="samp"
          align="center" 
          fontSize=""
          fontWeight="bold"
          color="black"
          mb={5}
        >
          Welcome to My team!
        </Text>

        <Stack>
          <SignInButton />
          <SignInButton provider="google" />
        </Stack>
      </Flex>
    </Flex>
  )
}