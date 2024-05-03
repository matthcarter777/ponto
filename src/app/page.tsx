import { Flex, Button, Stack, Link, Image, Input, Text, Heading } from '@chakra-ui/react';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'UNIVESP',
}

export default function Home() {
  return (
    <>
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex>
        <Heading mb='56px'>Controle de ponto - UNIVESP</Heading>
      </Flex>
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="gray.400"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Flex flexDirection="column">
            <Text>CPF</Text>
            <Input
              name="email"
              type="email"
              placeholder='123.123.123-00'
              color='white'
              min="14"
              max="14"
              required
            />
          </Flex>
            <Flex flexDirection="column">
              <Text>Senha</Text>
            <Input
              name="password"
              type="password"
              required
            />
          </Flex>
        </Stack>
        <Button 
          type="submit" 
          marginTop="6"
          colorScheme="green"
          size="lg"
        >
          Entrar
        </Button>
          <Link
            marginTop="20px"
            href="forgot_password"
          >
            Esqueceu a senha?
          </Link>
      </Flex>
    </Flex>
    </>
  );
}
