import React from 'react'
import { Heading, Flex, Box, Grid, GridItem, Text, Spacer, Image, Button, Link } from '@chakra-ui/react'
const Projects = () => {
  return (
    <div id="projects">
        <Heading mt={100} fontFamily={'Ubuntu, sans-serif'} fontSize={50} fontWeight={700}><i>Projects </i></Heading>
        <Box className='project-card' border={'4px solid #4CBB17'} borderRadius={20} w={1350} m={"auto"}  p={4}>
          <Flex gap={10} fontFamily={'Ubuntu, sans-serif'} fontWeight={700}>
            <Box w={670} mt={40}  >
              <Box class="project-tech-stack" display={"flex"} gap={4} justifyContent={"center"} mt={10}>
                <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={60}>HTML</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={60}>CSS</Box>
                <Box border={"1px solid #323330"} bg={"#323330"} color={"white"} borderRadius={5} w={110}>JAVASCRIPT</Box>
                <Box border={"1px solid #5e5c5c"} bg={"#5e5c5c"} color={"white"} borderRadius={5} w={60}>JSON</Box>
              </Box>
              <Box border={"1px solid white"} mt={20} >
                <Image w={668} src='./Amazon project.png'/>
              </Box>
              <Box display={"flex"} justifyContent={"center"} gap={20} mt={15} mb={20}>
                <Link href='https://remarkable-daffodil-7d85ca.netlify.app/index.html' class="project-deployed-link"><Button pt={10} pb={10} pr={20}  pl={20}border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black',}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>LIVE</i></Button></Link>
                <Link href='https://github.com/V-sukumar/agreeable-transport-9100' class="project-github-link"><Button pt={10} pb={10} pr={20}  pl={20}border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black',}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>GitHub Repo</i></Button></Link>
              </Box>
            </Box>
            <Box >
              <Box w={670}>
                <Heading textAlign={"end"} class="project-title" fontFamily={'Ubuntu, sans-serif'} fontSize={30} fontWeight={700}><i><u>Amazon Clone</u></i></Heading>
              <Box border={"1px solid white"} textAlign={"justify"} fontSize={20} fontWeight={600} >
                <Box  class="project-description">
                  <Text color={"rgb(36, 45, 73)"}><i>It is an E-commerce website for all kind of Fashion, Beauty & Cosmetics, Toys and Electronics Products</i></Text>
                  <Text color={"rgb(36, 45, 73)"}><i>Features</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Login & Signup (Including Admin)</i></li>
                    <li><i>Cart & Payment</i></li>
                    <li><i>Single Product Page</i></li>
                    <li><i>Sorting & Filtering</i></li>
                    <li><i>Admin Side</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>Areas of Responsibility</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Developed the Login & Signup Page</i></li>
                    <li><i>Maintained the Mock API</i></li>
                    <li><i>Implemented the Admin Dashboard Page</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>A collaborative project built by a team of 5 members in 5 days.</i></Text>
                </Box>
              </Box>
            </Box>
            </Box>
          </Flex>
        </Box>
        <br />
        <Box className='project-card' border={'4px solid #4CBB17'} borderRadius={20} w={1350}   m={"auto"}  p={4}>
          <Flex gap={10} fontFamily={'Ubuntu, sans-serif'} fontWeight={700}>
            <Box w={670} mt={40}  >
              <Box class="project-tech-stack" display={"flex"} gap={4} justifyContent={"center"} mt={10}>
                <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={60}>HTML</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={60}>CSS</Box>
                <Box border={"1px solid #323330"} bg={"#323330"} color={"white"} borderRadius={5} w={110}>JAVASCRIPT</Box>
                <Box border={"1px solid #5e5c5c"} bg={"#5e5c5c"} color={"white"} borderRadius={5} w={60}>JSON</Box>
              </Box>
              <Box border={"1px solid white"} mt={20} >
                <Image w={668} src='./Amazon project.png'/>
              </Box>
              <Box display={"flex"} justifyContent={"center"} gap={20} mt={15} mb={20}>
                <Link href='https://remarkable-daffodil-7d85ca.netlify.app/index.html' class="project-deployed-link"><Button pt={10} pb={10} pr={20}  pl={20}border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black',}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>LIVE</i></Button></Link>
                <Link href='https://github.com/V-sukumar/agreeable-transport-9100' class="project-github-link"><Button pt={10} pb={10} pr={20}  pl={20}border={'1px solid #4CBB17'} bg={'#4CBB17'} _hover={{bg:'white',color:'black',}} color={'white'} borderRadius={'20px'} fontSize={20} boxShadow={'0 20px 24px 3px #A5D6A7;'}><i>GitHub Repo</i></Button></Link>
              </Box>
            </Box>
            <Box >
              <Box w={670}>
                <Heading textAlign={"end"} class="project-title" fontFamily={'Ubuntu, sans-serif'} fontSize={30} fontWeight={700}><i><u>Amazon Clone</u></i></Heading>
              <Box border={"1px solid white"} textAlign={"justify"} fontSize={20} fontWeight={600} >
                <Box  class="project-description">
                  <Text color={"rgb(36, 45, 73)"}><i>It is an E-commerce website for all kind of Fashion, Beauty & Cosmetics, Toys and Electronics Products</i></Text>
                  <Text color={"rgb(36, 45, 73)"}><i>Features</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Login & Signup (Including Admin)</i></li>
                    <li><i>Cart & Payment</i></li>
                    <li><i>Single Product Page</i></li>
                    <li><i>Sorting & Filtering</i></li>
                    <li><i>Admin Side</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>Areas of Responsibility</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Developed the Login & Signup Page</i></li>
                    <li><i>Maintained the Mock API</i></li>
                    <li><i>Implemented the Admin Dashboard Page</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>A collaborative project built by a team of 5 members in 5 days.</i></Text>
                </Box>
              </Box>
            </Box>
            </Box>
          </Flex>
        </Box>



{/*===================================== github part========================================== */}
        <Box>
        <Heading mt={100} fontFamily={'Ubuntu, sans-serif'} fontSize={50} fontWeight={700}><i>My GitHub</i></Heading>

        <Link href='https://github.com/V-sukumar' color={" rgb(0, 0, 0)"} ><Heading fontFamily={'Ubuntu, sans-serif'} fontSize={30} fontWeight={700}><i> Visit my Account</i></Heading></Link>
        <Box display={"flex"}>
          <Image id="github-stats-card" margin={"auto"} src='./github status.png'/>
          <Image  id="github-streak-stats" margin={"auto"} src='./githubstreak.png'/>
        </Box>
        <Box  id="github-top-langs">
        <Image mt={30} id="github-top-langs" src='./githublan.png'/>
        </Box>
        <Box class="react-activity-calendar">
        <Text fontFamily={'Ubuntu, sans-serif'} fontSize={20} fontWeight={500}><i>GitHub Calendar</i></Text>
        <Image m={"auto"} src='./githubcal.png'/>
        </Box>
        </Box>
    </div>
  )
}

export default Projects