import React from 'react'
import { useState } from 'react'
import { Button} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'

const Contador = () => {
const [contador,setContador]= useState(0)

const sumar = () => {
    setContador(contador +1)
}

const restar = () => {
    if(contador > 0)
    setContador(contador -1)
}
const reinicio = () => {
    setContador(0)
}


  return (
  <Container maxW='container.sm' borderRadius='md' align='center'>
    <Center fontSize='30px' centerContent bg='tomato' h='50px' color='white'>Contador</Center>
     <Center fontSize='30px' bg='tomato' h='50px' color='white'>
  <h1 fontWeight='bold' as='span'>{contador}</h1>
  </Center>
    <Center bg='tomato' h='100px' color='white'>
    <Button colorScheme='blue' onClick={sumar}>Sumar</Button>
    <Button colorScheme='red' onClick={reinicio}>Reinicio</Button>
    <Button colorScheme='green' onClick={restar}>Restar</Button>
  </Center>
    </Container>
  )
}

export default Contador