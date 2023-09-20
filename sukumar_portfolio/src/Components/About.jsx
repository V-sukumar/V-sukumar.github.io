import { Box, Container, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Box id="about" className="about section">
      <Container maxW={{ base: '100%', lg: '90%' }}>
        <Text fontSize={20} fontWeight={400} fontFamily={'Ubuntu, sans-serif'} textAlign="center">
          <h1 style={{ fontSize: '50px', fontWeight: '700',marginTop:"100px" }} >
            <i>About</i>
          </h1>
        </Text>
        <Flex flexDir={{ base: 'column', lg: 'row' }} alignItems={{ base: 'center', lg: 'flex-start' }} mt={10} justifyContent="center" spacing={10}>
          <Box fontFamily={'Ubuntu, sans-serif'} flex="1" mt={{ base: 10, lg: 20 }}>
            <Box textAlign="justify" id="user-detail-intro">
              <Text as="h1" textStyle={{ base: 'heading', lg: 'xl' }}>
                <i><span>Hi there,</span> <Img w={20} src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif' /> I'm <span style={{ color: '#4CBB17' }}>Sukumar</span></i>
              </Text>
              <Text fontSize="lg" fontWeight="500" color="gray.500" mt={5}>
                <i>I am a Full Stack Developer good Knowledge of Express, MongoDB, JavaScript, HTML, CSS, etc,. passionate about building <br /> digital products that improve the everyday experience for people.<br /> <br />I am a quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward <br /> to applying and enhancing my skills and knowledge as a developer.</i>
              </Text>
            </Box>
          </Box>
          <Box>
            <Img className="home-img" m="auto" w={{ base: '100%', lg: '320px' }} borderRadius="full" src='./ProfileImage.jpg' />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
