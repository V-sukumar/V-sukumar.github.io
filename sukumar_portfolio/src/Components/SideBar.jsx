import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Box,


} from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"
import Resume from "../Resume/Sukumar-V-Resume.pdf"
import {Link} from "react-scroll"
import { BiDownload } from "react-icons/bi";
export const DrawerExample=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
function OpenTab() {
  window.open(
    `https://drive.google.com/file/d/1Dp1lk10apqwgii1N0iT0LyFziDyHtArP/view?usp=sharing`
    );
}
  return (
    <>
      <Button ref={btnRef} colorScheme='#A5D6A7' onClick={onOpen}>
        <HamburgerIcon color='black' />
      </Button>
      <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#A5D6A7"}  h={500} >
          <DrawerCloseButton />
          <DrawerHeader>
          
          </DrawerHeader>
          <DrawerBody >
            <Flex w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"start"}>
                <Flex w={"100%"} align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group" >
                <Link to='home'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text color={'grey'} _hover={{color:'black' , cursor:'pointer'}} class="nav-link home"   ><i>Home</i> </Text></Link> 
                </Flex>
                <Flex w={"100%"} align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group" >
                <Link to='about'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text class="nav-link about" color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i>About</i></Text></Link>
                </Flex>
                <Flex  w={"100%"} align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group">
                <Link to='skills'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text  class="nav-link skills" color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i>Skills</i> </Text></Link>
                </Flex>
                <Flex  w={"100%"} align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group">
                  <Link to='projects'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text class="nav-link projects" color={'grey'} _hover={{color:'black', cursor:'pointer'}} ><i>Projects</i> </Text></Link>
                </Flex>
                <Flex w={"100%"} align="center"
                p="3"
                
                borderRadius="lg"
                role="group">
                   <a id="resume-link-1" href={Resume} download className="nav-link resume" style={{textDecoration:'none'}}><Button   id="resume-button-1" border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={25} boxShadow={'0 20px 24px 3px #A5D6A7;'}  onClick={OpenTab}><b><i>Resume</i> </b> </Button></a>
                </Flex>
                <Flex  w={"100%"}align="center"
                p="3"
                
                borderRadius="lg"
                role="group" >
                <Link to='contact'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Button className="nav-link contact"  cursor={'pointer'}   border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={25} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>Contact</i> </Button></Link>
                </Flex>  

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}