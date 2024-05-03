import { Header } from "@/app/components/Header";
import { Flex, SimpleGrid, Button  } from "@chakra-ui/react";

export default function Employer() {

  return (
    <>
      <Header />
      <Flex
        w="100%"
        h="100%"
        my="6"
        maxWidth={1480}
        padding="10"  
      >
        <SimpleGrid columns={4} spacing={5}>
          <Button >Entrada</Button>
          <Button>Intervalo</Button>
          <Button>S. Intervalo</Button>
          <Button>Saida</Button>
        </SimpleGrid>
        
      </Flex>
    </>
  )
}