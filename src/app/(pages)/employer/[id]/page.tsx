'use client'
import { Header } from "@/app/components/Header";
import { 
  Flex, 
  SimpleGrid, 
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

export default function Employer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentDate = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Header />
      <Flex
        w="100%"
        h="100%"
        my="6"
        maxWidth={1480}
        padding="10"
        direction="column"
        alignItems="center"  
      >
        <Text mb="3rem">{currentDate.toLocaleDateString()},{currentTime.toLocaleTimeString()}</Text>
        <SimpleGrid columns={4} spacing={10}>
          <Button w='5rem' mr='3rem' fontSize="11px" >Entrada</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >S. Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >Saida</Button>
        </SimpleGrid>
        
      </Flex>

    </>
  );
}
