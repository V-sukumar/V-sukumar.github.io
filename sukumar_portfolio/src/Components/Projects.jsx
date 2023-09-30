import React from 'react'
import { Heading, Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'

const Projects = () => {
  return (
    <div id="projects">
      <Box mx="auto" w="90%">
        <Heading mt={100} fontFamily="Ubuntu, sans-serif" fontSize={["40px", "50px"]} fontWeight={700}><i>Projects</i></Heading>
        <Box className='project-card' border={['2px solid #4CBB17', '4px solid #4CBB17']} borderRadius={20} w="auto" mx="auto" p={4} mt={10}>
          <Flex flexDirection={{base:'column',md:'column',lg:'row'}} gap={20} alignItems="center">
            <Box w={['100%','670px']}>
              <Box class="project-tech-stack" display="flex" flexWrap="wrap" gap={4} justifyContent="center" mt={10}>
              <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={60} margin={"auto"}>REACT</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={110} margin={"auto"}>TYPESCRIPT</Box>
                <Box border={"1px solid #593d88"} bg={"#593d88"} color={"white"} borderRadius={5} w={60} margin={"auto"}>REDUX</Box>
                <Box border={"1px solid #319795"} bg={"#319795"} color={"white"} borderRadius={5} w={200} margin={"auto"}>CHAKRA UI</Box>
                
                <Box border={"1px solid #323330"} bg={"#323330"} color={"white"} borderRadius={5} w={110} margin={"auto"}>JAVASCRIPT</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={40} margin={"auto"}>CSS</Box>
              </Box>
              <Box border="1px solid white" mt={10}>
                <Image w={['100%', '668px']} src='./Tech project.png' />
              </Box>
              <Box display="flex" justifyContent={['center']} gap={2} mt={16} mb={10}>
                <Link href='https://techbazar-app-v-sukumar.vercel.app/' class="project-deployed-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>LIVE</i>
                  </Button>
                </Link>
                <Link href='https://github.com/samaydhawale000/Techbazar_Project_Unit-5' class="project-github-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>GitHub Repo</i>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box >
              <Box w={['100%', '600px']} >
                <Heading textAlign="center" class="project-title" fontFamily="Ubuntu, sans-serif" fontSize={["26px", "30px"]} fontWeight={700} ><i><u><b>Tech Bazaar</b></u></i></Heading>
                <Box border="1px solid white" textAlign="justify" fontSize={['16px', '20px']} fontWeight={600} mt={5}>
                <Box  >
                  <Text class="project-description" color={"rgb(36, 45, 73)"}><i>TECHBAZAAR is an e-commerce web site for tech related products, designed to provide a user experience.</i></Text>
                  <Text color={"rgb(36, 45, 73)"}><i>Features</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Login & Signup (Including Admin)</i></li>
                    <li><i>Cart & Payment</i></li>
                    <li><i>Pagination</i></li>
                    <li><i>Single Product Page</i></li>
                    <li><i>Sorting & Filtering</i></li>
                    <li><i>Admin Side</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>Areas of Responsibility</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Developed the Login & Signup Page</i></li>
                    <li><i>Maintained the Mock API</i></li>
                    <li><i>Developed the Checkout Page</i></li>
                    <li><i>Implemented the Admin Dashboard Page</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>A collaborative project built by a team of 2 members in 5 days.</i></Text>
                </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box className='project-card' border={['2px solid #4CBB17', '4px solid #4CBB17']} borderRadius={20} w="auto" mx="auto" p={4} mt={10}>
          <Flex flexDirection={{base:'column',md:'column',lg:'row'}} gap={20} alignItems="center">
            <Box w={['100%','670px']}>
              <Box class="project-tech-stack" display="flex" flexWrap="wrap" gap={4} justifyContent="center" mt={10}>
              <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={40} m={"auto"}>REACT</Box>
                <Box border={"1px solid #593d88"} bg={"#593d88"} color={"white"} borderRadius={5} w={40} m={"auto"}>REDUX</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={40} m={"auto"}>CSS</Box>
                <Box border={"1px solid #323330"} bg={"#323330"} color={"white"} borderRadius={5} w={110} m={"auto"}>JAVASCRIPT</Box>
                <Box border={"1px solid #319795"} bg={"#319795"} color={"white"} borderRadius={5} w={110} m={"auto"}>CHAKRA UI</Box>
              </Box>
              <Box border="1px solid white" mt={10}>
                <Image w={['100%', '668px']} src='./Dribbble project.png' />
              </Box>
              <Box display="flex" justifyContent={['center']} gap={2} mt={16} mb={10}>
                <Link href='https://tangy-instrument-3367-rho.vercel.app/' class="project-deployed-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>LIVE</i>
                  </Button>
                </Link>
                <Link href='https://github.com/V-sukumar/Dribble-mania' class="project-github-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>GitHub Repo</i>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box >
              <Box w={['100%', '600px']} >
                <Heading textAlign="center" class="project-title" fontFamily="Ubuntu, sans-serif" fontSize={["26px", "30px"]} fontWeight={700} ><i><u><b>Dribbble Mania</b></u></i></Heading>
                <Box border="1px solid white" textAlign="justify" fontSize={['16px', '20px']} fontWeight={600} mt={5}>
                <Box  >
                  <Text class="project-description" color={"rgb(36, 45, 73)"}><i>Dribbble Mania is a clone of Dribble. Dribble is an California, United States website which discover designs, illustrations, and graphic elements from the world's best designers.</i></Text>
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
                    <li><i>Developed the Landing Page & Navbar</i></li>
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
        <Box className='project-card' border={['2px solid #4CBB17', '4px solid #4CBB17']} borderRadius={20} w="auto" mx="auto" p={4} mt={10}>
          <Flex flexDirection={{base:'column',md:'column',lg:'row'}} gap={20} alignItems="center">
            <Box w={['100%','670px']}>
              <Box class="project-tech-stack" display="flex" flexWrap="wrap" gap={4} justifyContent="center" mt={10}>
              <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={40} m={"auto"}>HTML</Box>
                <Box border={"1px solid #1572b6"} bg={"#1572b6"} color={"white"} borderRadius={5} w={40} m={"auto"}>CSS</Box>
                <Box border={"1px solid #323330"} bg={"#323330"} color={"white"} borderRadius={5} w={40} m={"auto"}>JAVASCRIPT</Box>
                <Box border={"1px solid #5e5c5c"} bg={"#5e5c5c"} color={"white"} borderRadius={5} w={40} m={"auto"}>JSON</Box>
              </Box>
              <Box border="1px solid white" mt={10}>
                <Image w={['100%', '668px']} src='./Amazon project.png' />
              </Box>
              <Box display="flex" justifyContent={['center']} gap={2} mt={16} mb={10}>
                <Link href='https://jungle-buy-amazon-clone.vercel.app/' class="project-deployed-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>LIVE</i>
                  </Button>
                </Link>
                <Link href='https://github.com/V-sukumar/agreeable-transport-9100' class="project-github-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>GitHub Repo</i>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box >
              <Box w={['100%', '600px']} >
                <Heading textAlign="center" class="project-title" fontFamily="Ubuntu, sans-serif" fontSize={["26px", "30px"]} fontWeight={700} ><i><u><b>JungleBuy-Amazon Clone</b></u></i></Heading>
                <Box border="1px solid white" textAlign="justify" fontSize={['16px', '20px']} fontWeight={600} mt={5}>
                <Box  >
                  <Text class="project-description" color={"rgb(36, 45, 73)"}><i>It is an E-commerce website for all kind of Fashion, Beauty & Cosmetics, Toys and Electronics Products</i></Text>
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
        <Box className='project-card' border={['2px solid #4CBB17', '4px solid #4CBB17']} borderRadius={20} w="auto" mx="auto" p={4} mt={10}>
          <Flex flexDirection={{base:'column',md:'column',lg:'row'}} gap={20} alignItems="center">
            <Box w={['100%','670px']}>
              <Box class="project-tech-stack" display="flex" flexWrap="wrap" gap={4} justifyContent="center" mt={10}>
              <Box border={"1px solid #e34f26"} bg={"#e34f26"} color={"white"} borderRadius={5} w={40} m={"auto"}>REACT</Box>
                <Box border={"1px solid #339933"} bg={"#339933"} color={"white"} borderRadius={5} w={40} m={"auto"}>NODE.JS</Box>
                <Box border={"1px solid #404d59"} bg={"#404d59"} color={"white"} borderRadius={5} w={110} m={"auto"}>EXPRESS.JS</Box>
                <Box border={"1px solid #4ea94b"} bg={"#4ea94b"} color={"white"} borderRadius={5} w={110} m={"auto"}>MONGODB</Box>
                <Box border={"1px solid #319795"} bg={"#319795"} color={"white"} borderRadius={5} w={110} m={"auto"}>CHAKRA UI</Box>
              </Box>
              <Box border="1px solid white" mt={10}>
                <Image w={['100%', '668px']} src='./Code project.png' />
              </Box>
              <Box display="flex" justifyContent={['center']} gap={2} mt={16} mb={10}>
                <Link href='https://frondend-v-sukumar.vercel.app/' class="project-deployed-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>LIVE</i>
                  </Button>
                </Link>
                <Link href='https://github.com/rk28284/native-fog-9540' class="project-github-link">
                  <Button
                    p={5}
                    border={['1px solid #4CBB17', '2px solid #4CBB17']}
                    bg={['#4CBB17', '#4CBB17']}
                    _hover={{ bg: 'white', color: 'black' }}
                    color="white"
                    borderRadius={'20px'}
                    fontSize={['18px', '20px']}
                    boxShadow={['0 20px 24px 3px #A5D6A7;', '0 20px 24px 3px #A5D6A7;']}
                  >
                    <i>GitHub Repo</i>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box >
              <Box w={['100%', '600px']} >
                <Heading textAlign="center" class="project-title" fontFamily="Ubuntu, sans-serif" fontSize={["26px", "30px"]} fontWeight={700} ><i><u><b>Code Collab</b></u></i></Heading>
                <Box border="1px solid white" textAlign="justify" fontSize={['16px', '20px']} fontWeight={600} mt={5}>
                <Box  >
                  <Text class="project-description" color={"rgb(36, 45, 73)"}><i>It is a cloud-based service that assists developers in storing and managing code, as well as tracking and controlling changes to their code.</i></Text>
                  <Text color={"rgb(36, 45, 73)"}><i>Features</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Login & Signup</i></li>
                    <li><i>Create Repo Page</i></li>
                    <li><i>Single Repo Page</i></li>
                    <li><i>CRUD Operation</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>Areas of Responsibility</i></Text>
                  <ul  style={{color:"rgb(120, 128, 151)",textAlign:"justify",marginTop:"auto"}} >
                    <li><i>Developed the Landing Page</i></li>
                    <li><i>Maintained the Server</i></li>
                    <li><i>Implemented the SingleRepo Page</i></li>
                  </ul>
                  <Text color={"rgb(36, 45, 73)"}><i>A collaborative project built by a team of 4 members in 5 days.</i></Text>
                </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Projects;
