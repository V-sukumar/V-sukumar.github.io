import React from 'react'
import { Image, Grid, GridItem, Heading, Box, Text } from '@chakra-ui/react'
const Skills = () => {
  return (
    <div id="skills">
      <Heading fontFamily={'Ubuntu, sans-serif'} fontSize={50} fontWeight={700}><i>Skills </i></Heading> 

      <Grid fontFamily={'Ubuntu, sans-serif'} gridTemplateColumns={"repeat(6,1fr)"} class="skills-card">
        <GridItem >
          <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img"  src="./Html icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>HTML</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./css icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>CSS</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={92} src="./js icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>JavaScript</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./React icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>React</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={95} src="./Redux icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Redux</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Nodejs icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>NodeJs</i></span>
          </Box> 
        </GridItem>
      </Grid>
      <Grid mt={80} fontFamily={'Ubuntu, sans-serif'} gridTemplateColumns={"repeat(6,1fr)"} class="skills-card">
      <GridItem>
          <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Express icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>ExpressJs</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img"  src="./Mongo icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>MongoDB</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Chakra icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Chakra-UI</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Material icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Material-UI</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img"  src="./Styled icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Styled-Components</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={92} src="./Typescript icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>TypeScript</i></span>
          </Box> 
        </GridItem>
      </Grid> 

      <Heading mt={100} fontFamily={'Ubuntu, sans-serif'} fontSize={50} fontWeight={700}><i>Tools / Use</i></Heading> 

      <Grid fontFamily={'Ubuntu, sans-serif'} gridTemplateColumns={"repeat(6,1fr)"} class="skills-card">
        <GridItem >
          <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Vs icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>VS Code</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img"  w={"90px"} src="./Postman icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Postman</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={93} src="./Npm icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>NPM</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" m={"auto"} w={89} src="./github icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>GitHub</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={90} src="./Canva icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Canva</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={88}  src="./Netlify icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Netlify</i></span>
          </Box> 
        </GridItem>
      </Grid>
      <Grid mt={80} fontFamily={'Ubuntu, sans-serif'} gridTemplateColumns={"repeat(6,1fr)"} class="skills-card">
      <GridItem>
          <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Vercel icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Vercel</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Replit icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Replit</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={95}  src="./Codesand icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Codesandbox</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" src="./Codepen icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Codepen</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img"  src="./Notion icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Notion</i></span>
          </Box> 
        </GridItem>
        <GridItem>
        <Box _hover={{ transform: "scale(1.2)", cursor:"pointer" }} transition={"0.2s ease-in-out"} border={'4px solid #4CBB17'} borderRadius={20} w={100} m={"auto"} p={5}>
          <Image  class="skills-card-img" w={95} src="./Mongo icon.png"/>
          <span  class="skills-card-name" style={{fontSize:"14px",fontWeight:"800px",color:"black"}}><i>Atlas</i></span>
          </Box> 
        </GridItem>
      </Grid> 
    </div>
  )
}

export default Skills