import React from 'react';
import Resume from "../Resume/Sukumar-V-Resume.pdf"
import {Link} from "react-scroll"
import {Box,  Button,  Container,  Flex,  SimpleGrid, Spacer, Text} from "@chakra-ui/react"
import { DrawerExample } from './SideBar';
const Navbar = () => {
function OpenTab() {
  window.open(
    `https://drive.google.com/file/d/1Dp1lk10apqwgii1N0iT0LyFziDyHtArP/view?usp=sharing`
    );
}
  return (
    <div id="nav-menu">
      <Box as="header"  px={4} position="fixed" w="100%" zIndex={"1000"} top={"0px"} p={4} fontSize={25} fontWeight={400} fontFamily={'Ubuntu, sans-serif'}    bg={'#A5D6A7'}>
        <Flex justifyContent={"space-between"} w={"94%"} m={"auto"} alignItems={"center"}  >
          <Box w={{ base: "55%",md:"45%", lg: "20%" }}  fontSize={"25px"}>
            <Text as='em'> <i> &lt; SUKUMAR /&gt;</i></Text>
          </Box>
          {/* <Spacer/> */}
          <Flex w="50%" display={{base:"none",lg:"block"}} alignItems={"center"} justifyContent="end">
            <Flex  flexDirection={"row"} w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <Box >
                <Link to='home'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text color={'black'} _hover={{color:'black' , cursor:'pointer'}} class="nav-link home"   ><i>Home</i> </Text></Link> 
                </Box>
                <Box >
                <Link to='about'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text color={'black'} _hover={{color:'black' , cursor:'pointer'}} class="nav-link about"  ><i>About</i></Text></Link>
                </Box>
                <Box >
                <Link to='skills'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text color={'black'} _hover={{color:'black' , cursor:'pointer'}}  class="nav-link skills"  ><i>Skills</i> </Text></Link>
                </Box>
                <Box >
                  <Link to='projects'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Text color={'black'} _hover={{color:'black', cursor:'pointer'}} class="nav-link projects"  ><i>Projects</i> </Text></Link>
                </Box>
                <Box >
                  <a id="resume-link-1" href={Resume} download className="nav-link resume" style={{textDecoration:'none'}}><Button   id="resume-button-1" border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={25}  onClick={OpenTab}><b><i>Resume</i> </b> </Button></a>
                </Box>
                <Box  >
                <Link to='contact'spy={true} smooth={true} activeClass='="activeClass' offset={-100} duration={600}><Button className="nav-link contact"  cursor={'pointer'}   border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={25} ><i>Contact</i> </Button></Link>
                </Box>  
            </Flex>       
          </Flex>
          <Box display={{ base: "block", lg: "none" }}>
            <Flex w="100%" justifyContent={"space-between"} direction={"column"} fontSize="18px" alignItems={"center"}>
              <DrawerExample  />
            </Flex>
          </Box>
        </Flex>       
      </Box>            
    </div>
  )
}

export default Navbar