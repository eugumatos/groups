import { GetServerSideProps } from "next";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { getSession } from 'next-auth/client';
import { SignInButton } from "../components/Buttons/SignInButton";

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
          fontSize={18}
          fontWeight="bold"
          color="black"
          mb={5}
        >
          Welcome to groups!
        </Text>

        <Stack>
          <SignInButton />
          <SignInButton provider="google" />
        </Stack>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/dashboard'
      }
    }
  }

  return {
    props: {}
  }
}

