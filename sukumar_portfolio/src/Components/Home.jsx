import { Box, Flex, Image,Button, Container } from '@chakra-ui/react'
import React from 'react'
import Resume from "../Resume/Sukumar-V-Resume.pdf"
import { Link } from 'react-router-dom'
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <div id="home">
      <Container  margin={70}>
        <Flex mt={250} gap={6} >
            <Box fontFamily={'Ubuntu, sans-serif'} fontSize={60} fontWeight={700} display={'flex'} flexDirection={'column'} textAlign={'start'}  >
              <span><i>Hey! I Am</i> </span>
              <span id="user-detail-name" style={{color:'#4CBB17'}} ><i>Sukumar</i></span>
              <span style={{fontSize:"14px",fontWeight:'100px',color:'grey',textAlign:'start',marginTop:'10px'}}><i>Full Stack Web Developer with proficient Skilled in both Frontend and Backend Development for producing the Quality work</i></span>
              <Box mt={10}>
                <Flex gap={40}>
                  <a id="resume-link-2" href={Resume} download><Button  id="resume-button-2" pt={10} pb={10} pr={20}  pl={20} border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black'}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>Resume</i> </Button></a>
                  <Link to="/contact"><Button  pt={10} pb={10} pr={20}  pl={20}border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black',}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>Hire me</i> </Button></Link>
                </Flex>
              </Box>
              <Box mt={70}>
                <Flex gap={30}>
                  <a href="https://github.com/V-sukumar"><Image _hover={{transform:'scale(1.30)'}} transition={'0.1s ease-in-out'} w={50} src='./github.png' /></a>
                  <a href="https://www.linkedin.com/in/suku-sukumar"><Image _hover={{transform:'scale(1.30)'}} transition={'0.1s ease-in-out'} w={50} src='./linkedin.png' /></a>
                  <a href="mailto:sukumarmee@gmail.com"><Image _hover={{transform:'scale(1.30)'}} transition={'0.1s ease-in-out'} w={50} src='./mail.png' /></a>
                </Flex>
              </Box>
            </Box>
            <Box >
              <Image  w={'100%'} src='https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966'></Image>
            </Box>
          </Flex>
      </Container>
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
    
  )
  
}

export default Home
