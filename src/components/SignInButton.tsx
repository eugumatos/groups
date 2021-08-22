import { Button } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/client"

const icons = {
  facebook: <FaFacebook size={20} />,
  google: <FaGoogle size={15} />
}

export function SignInButton({ provider = "facebook" }) {
  const session = useSession();

  return (
    <Button 
      onClick={() => signIn(provider)}
      leftIcon={icons[provider]}
      fontSize={16} 
      variant="solid"
      bg="black"
      _hover={{ bg: provider === "facebook" ? "blue.700" : "#f5b533" }}
      size="lg"
    > 
      Log in with { provider }
    </Button>
  );
}