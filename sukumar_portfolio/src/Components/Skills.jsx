import React from 'react'
import { Box, Container, Flex, Img } from '@chakra-ui/react'
const Skills = () => {
  return (
    <div id="skills">
        <h1>Skills</h1>
        <Container fontSize={20} fontWeight={400} fontFamily={'Ubuntu, sans-serif'}>
        <Box m={70}>
          <Flex mt={10} gap={50}>
            <Box fontFamily={'Ubuntu, sans-serif'} display={'flex'} flexDirection={'column'} w={950} >
              <h1 style={{fontSize:'50px',fontWeight:'700'}}><i>About</i></h1>
              <h1 style={{textAlign:'start' ,fontSize:"40", fontWeight:"400" }} ><i>Hi there <Img w={40} src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif'/> I'm <span style={{color:'#4CBB17'}}>Sukumar</span></i> 
              </h1>
              <span style={{fontSize:"24px",fontWeight:'500px',color:'grey',textAlign:'start'}}><i>I am a Full Stack Developer, passionate about building digital products that improve the everyday experience for people.</i></span>
              <br />
              <span style={{fontSize:"24px",fontWeight:'500px',color:'grey',textAlign:'start'}}><i>I am a quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</i> </span>
            </Box>
            <Box mt={40}>
               <Img  w={'350px'} borderRadius={'100%'} src='./SUKU.jpg' />
            </Box> 
          </Flex>
          <Box>
            <h1 style={{textAlign:'center',marginTop:"100px",marginBottom:"100px"}}><i><a href="/"><img src="https://readme-typing-svg.herokuapp.com?font=Italic&weight=800&size=30&pause=1000&color=000000&width=435&lines=Hi+%2C+I+am+Sukumar.;I+am+a+Developer.;I+Love+to+Develop.;MERN+Developer." alt="Typing SVG" /></a></i></h1>
          </Box>
        </Box> 
      </Container>
    </div>
  )
}

export default Skills