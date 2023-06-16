import React from 'react'
import { Box, Container, Flex, Image, Img, Text } from '@chakra-ui/react'
const Contact = () => {
  return (
    <div id="contact">
        
        {/* <div id="contact-github">Github</div>
        <div id="contact-linkedin">Linkedin</div>
        <div id="contact-phone">Phone</div>
        <div id="contact-email">Email</div> */}
        <Container >
          <Box m={70}>
            <h1 style={{fontSize:"50px",fontWeight:"700"}} ><i>Contact</i> </h1>
            <Flex gap={50}>
              <Box >
                <Image pb={50} w={500} src='https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966'/>
              </Box>
              <Box textAlign={'start'} m={'auto'}   lineHeight={'1'}>
                <Flex gap={15}>
                  <Image mt={15} h={25} src='./call.png'/>
                  <a href="/" style={{textDecoration:'none'}} id="contact-phone"><Text fontSize={20} fontWeight={500} fontFamily={'Ubuntu, sans-serif'} color={' rgb(36, 45, 73)'}><i>+91 6382092768</i> </Text></a>
                </Flex>
                <Flex gap={15}>
                  <Image mt={15}  h={25} src='./mail2.png'/>
                  <a href="mailto:sukumarmee@gmail.com" target='blank' style={{textDecoration:'none'}} id="contact-email"><Text fontFamily={'Ubuntu, sans-serif'} fontSize={20} fontWeight={500} color={' rgb(36, 45, 73)'}><i>sukumarmee@gmail.com</i> </Text></a>
                </Flex >
                <Flex gap={15}>
                  <Image mt={15} h={25} src='./linkedin2.png'/>
                  <a href="https://www.linkedin.com/in/suku-sukumar" style={{textDecoration:'none'}}><Text fontFamily={'Ubuntu, sans-serif'} fontSize={20} fontWeight={500} color={' rgb(36, 45, 73)'} id="contact-linkedin"><i>https://www.linkedin.com/in/suku-sukumar</i> </Text></a>
                </Flex>
                <Flex gap={15}>
                  <Image mt={20} h={25} src='./github2.png'/>
                  <a href="https://github.com/V-sukumar" style={{textDecoration:'none'}} id="contact-github"><Text fontFamily={'Ubuntu, sans-serif'} fontSize={20} fontWeight={500} color={' rgb(36, 45, 73)'}><i>https://github.com/V-sukumar</i> </Text></a>
                </Flex> 
              </Box>
            </Flex>
          </Box>
          <Box fontFamily={"Ubuntu, sans-serif"} fontSize={50} fontWeight={700}>
            <Text color={'rgb(36, 45, 73)'}><i>Thank You</i></Text>
          </Box>
       </Container>
    </div>
  )
}

export default Contact