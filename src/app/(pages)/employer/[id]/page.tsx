'use client'
import { Header } from "@/app/components/Header";
import { 
  Flex, 
  SimpleGrid, 
  Button,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

export default function Employer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentDate = new Date();

  const array = [
    {id: 1, date: '10/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 2, date: '11/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 3, date: '12/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 4, date: '13/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
  ]

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
        <SimpleGrid columns={4} spacing={10} mb="4rem">
          <Button w='5rem' mr='3rem' fontSize="11px" >Entrada</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >S. Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" >Saida</Button>
        </SimpleGrid>

        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Data</Th>
                <Th>Entrada</Th>
                <Th>Intervalo</Th>
                <Th>V. Intervalo</Th>
                <Th>Saida</Th>
              </Tr>
            </Thead>
            <Tbody>
              { array.map((data) => {
                return (
                  <Tr key={data.id}>
                  <Td>{data.date}</Td>
                  <Td>{data.time1}</Td>
                  <Td>{data.time2}</Td>
                  <Td>{data.time3}</Td>
                  <Td>{data.time4}</Td>
                </Tr>
                )
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Data</Th>
                <Th>Entrada</Th>
                <Th>Intervalo</Th>
                <Th>V. Intervalo</Th>
                <Th>Saida</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
