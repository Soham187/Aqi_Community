import { Flex, Stack, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import Image from 'next/image';


type Props = {
  user?: User;
};

function NoConversationSelected({ user }: Props) {
  return (
    <Flex height="100%" justify="center" align="center">
      <Stack spacing={10} align="center">
        <Text fontSize={40}>
          {user ? "Select a Conversation" : "You Need To Login"}
        </Text>
        <Image 
  src="/images/reddit.png" 
  alt="Reddit Logo" 
  width={50} 
  height={50} 
  style={{ marginRight: '8px' }} 
/>

      </Stack>
    </Flex>
  );
}

export default NoConversationSelected;
