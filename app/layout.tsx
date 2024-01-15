
"use client";
import ChakraWrapper from "../components/Chakra";
import './globals.css';
import { Heading } from '@chakra-ui/react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    
      <body>
      <Heading  mb={30} size='lg' fontSize='50px' color='blue'>
Todo App
</Heading>
        <ChakraWrapper>{children}</ChakraWrapper>
        </body>
    </html>
  )
}
