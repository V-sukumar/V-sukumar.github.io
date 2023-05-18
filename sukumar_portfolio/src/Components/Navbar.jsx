import React from 'react';
import { Link } from 'react-router-dom';
import Resume from "../Resume/Sukumar-V-Resume.pdf"
import {Box,  Button,  Container,  Flex,  SimpleGrid, Spacer, Text} from "@chakra-ui/react"
const Navbar = () => {
 const handleclickabout=()=>{
    window.scrollTo({
      top: 750,
      bottom:750,
      behavior: "smooth",
  });
 }
 const handleclickhome=()=>{
  window.scrollTo({
    top: 100,
    bottom:750,
    behavior: "smooth",
});
}
const handleclickskill=()=>{
  window.scrollTo({
    top: 1400,
    bottom:750,
    behavior: "smooth",
});
}
const handleclickproject=()=>{
  window.scrollTo({
    top: 2150,
    bottom:750,
    behavior: "smooth",
});
}
const handleclickcontact=()=>{
  window.scrollTo({
    top: 2900,
    bottom:750,
    behavior: "smooth",
});
}
  return (
    <div id="nav-menu">
      <Container  left={'3.5rem'} right={'3.5rem'} top={0} mr={'-3.5em'} ml={"-3.5rem"} fontSize={25} fontWeight={400} fontFamily={'Ubuntu, sans-serif'} position={'fixed'} justifyContent={'space-between'} bg={'white'} >
        <Flex >
          <Box ml={80} pt={5}  >
            <Text as='h3'> <i> &lt; SUKUMAR /&gt;</i></Text>
          </Box>
          <Spacer/>
          <Box p={10} >
            <SimpleGrid columns={6} spacing={'5px'} mr={80}>
              <Box ml={35}>
                <Text color={'grey'} _hover={{color:'black' , cursor:'pointer'}}   ><i onClick={handleclickhome}>Home</i> </Text>
              </Box>
              <Box ml={25}>
               <Text color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i onClick={handleclickabout}>About</i></Text>
              </Box>
              <Box mr={10}>
               <Text color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i onClick={handleclickskill}>Skills</i> </Text>
              </Box>
              <Box mr={15}>
                <Text color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i onClick={handleclickproject}>Projects</i> </Text>
              </Box>
              <Box>
                <a id="resume-link-1" href={Resume} download className="nav-link resume" style={{textDecoration:'none'}}><Text  id="resume-button-1" color="black" _hover={{color:'#43A047'}}><b><i>Resume</i> </b> </Text></a>
              </Box>
              <Box mt={20} ml={15}>
                <Button onClick={handleclickcontact} cursor={'pointer'} pt={5} pb={5} pr={10}  pl={10}  border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={25} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>Contact</i> </Button>
              </Box>
            </SimpleGrid>  
          </Box>       
        </Flex>       
      </Container>            
    </div>
  )
}

export default Navbar