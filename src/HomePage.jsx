import { Box, Text, Image, VStack, HStack, Link, Flex, Container, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import { FaLinkedin, FaGithub, FaTwitter, FaDatabase, FaCloud, FaLaptopCode, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const HomePage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  
  return (
    <Layout>
      <Container maxW="100%" p={0}>
        <Box
          bg="#11132c"
          color="white"
          minH="100vh"
          py={{ base: 10, md: 16 }}
          px={{ base: 4, md: 8 }}
        >
          <VStack spacing={{ base: 8, md: 10 }} w="full">
            {/* Perfil y cabecera */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
              textAlign="center"
            >
              <Image
                src="/fotoperfil.jpg"
                alt="Abel Perez"
                borderRadius="full"
                boxSize={{ base: "120px", md: "150px", lg: "180px" }}
                border="4px solid #057fc0"
                boxShadow="0 0 15px #057fc0"
                mx="auto"
              />
              
              <MotionText
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color="#057fc0"
                mt={4}
              >
                Abel Perez
              </MotionText>
            </MotionBox>
            
            {/* Información profesional */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.3 }}
              p={{ base: 4, md: 6 }}
              bg="rgba(5, 127, 192, 0.2)"
              backdropFilter="blur(10px)"
              borderRadius="15px"
              boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
              w="100%"
              maxW="800px"
            >
              <Flex align="center" mb={4}>
                <Box color="white" mr={3}>
                  <FaLaptopCode size={24} />
                </Box>
                <MotionText fontSize={{ base: "md", md: "lg" }} color="white">
                  Desarrollador de aplicaciones especializadas para la gestión empresarial
                </MotionText>
              </Flex>
              
              <Flex align="center" mb={4}>
                <Box color="white" mr={3}>
                  <FaCloud size={22} />
                </Box>
                <MotionText fontSize={{ base: "md", md: "lg" }} color="white">
                  Entornos Azure
                </MotionText>
              </Flex>
              
              <Flex align="center">
                <Box color="white" mr={3}>
                  <FaDatabase size={22} />
                </Box>
                <MotionText fontSize={{ base: "md", md: "lg" }} color="white">
                  Dynamics 365
                </MotionText>
              </Flex>
            </MotionBox>
            
            {/* Descripción */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.6 }}
              p={{ base: 4, md: 6 }}
              bg="rgba(5, 127, 192, 0.2)"
              backdropFilter="blur(10px)"
              borderRadius="15px"
              boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
              w="100%"
              maxW="800px"
            >
              <Flex align="center">
                <Box color="white" mr={3}>
                  <FaProjectDiagram size={24} />
                </Box>
                <MotionText fontSize={{ base: "md", md: "lg" }} color="white">
                  Esta web te permite explorar todas las noticias mencionadas en la ponencia, releer la presentación y encontrar los recursos destacados.
                </MotionText>
              </Flex>
            </MotionBox>
            
            {/* Imagen de la presentación */}
            <MotionBox
              as="a"
              href="https://www.canva.com/design/DAGhoeVkZQg/RSUw9oMjAcrJ0FT69_3mRA/view?utm_content=DAGhoeVkZQg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6bc0df14cb"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.9 }}
              p={{ base: 3, md: 4 }}
              borderRadius="15px"
              boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
              bg="rgba(5, 127, 192, 0.2)"
              backdropFilter="blur(10px)"
              textAlign="center"
              w="100%"
              maxW="900px"
              cursor="pointer"
              _hover={{ 
                boxShadow: "0 0 25px rgba(5, 127, 192, 1)",
                transform: "scale(1.02)",
                transition: "all 0.3s ease"
              }}
            >
              <Image
                src="/fotopresentacion.png"
                alt="Preview de la presentación"
                borderRadius="10px"
                w="100%"
                boxShadow="0 0 10px rgba(5, 127, 192, 0.8)"
              />
            </MotionBox>
            
            {/* Redes sociales */}
            <MotionFlex
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 1.2 }}
              justify="center"
              wrap="wrap"
              gap={{ base: 4, md: 6 }}
              mt={{ base: 4, md: 8 }}
            >
              <Link href="https://www.linkedin.com/in/abel-p-7430a5255" isExternal>
                <Box 
                  p={3} 
                  borderRadius="full" 
                  bg="rgba(5, 127, 192, 0.2)"
                  color="white"
                  boxShadow="0 0 10px rgba(5, 127, 192, 0.4)"
                  _hover={{ 
                    bg: "rgba(5, 127, 192, 0.4)",
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <FaLinkedin size={isLargerThan768 ? 24 : 20} />
                </Box>
              </Link>
              <Link href="https://github.com/Abel1002/" isExternal>
                <Box 
                  p={3} 
                  borderRadius="full" 
                  bg="rgba(5, 127, 192, 0.2)"
                  color="white"
                  boxShadow="0 0 10px rgba(5, 127, 192, 0.4)"
                  _hover={{ 
                    bg: "rgba(5, 127, 192, 0.4)",
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <FaGithub size={isLargerThan768 ? 24 : 20} />
                </Box>
              </Link>
              <Link href="mailto:abelpr1002@gmail.com?subject=Contacto%20por%20charla%20de%20IA&body=Hola,%20soy%20(tu%20nombre)%20de%20Stucom,%20vi%20tu%20charla%20sobre%20inteligencia%20artificial%20en%20el%20Talent%20y%20me%20pongo%20en%20contacto%20contigo%20para:">
                <Box 
                  p={3} 
                  borderRadius="full" 
                  bg="rgba(5, 127, 192, 0.2)"
                  color="white"
                  boxShadow="0 0 10px rgba(5, 127, 192, 0.4)"
                  _hover={{ 
                    bg: "rgba(5, 127, 192, 0.4)",
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <FaEnvelope size={isLargerThan768 ? 24 : 20} />
                </Box>
              </Link>
            </MotionFlex>
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
};

export default HomePage;