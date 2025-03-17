import { Box, Text, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Layout from "./Layout";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const HomePage = () => {
  return (
    <Layout>
    <Box>
      {/* Contenido */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        bg="#11132c"
        color="white"
        flexDirection="column"
        gap={6}
      >
        <VStack spacing={6} textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
          >
            <Image
              src="public/fotoperfil.jpg"
              alt="Abel Perez"
              borderRadius="full"
              boxSize="150px"
              border="4px solid #057fc0"
              boxShadow="0 0 15px #057fc0"
            />
          </motion.div>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.3 }}
            p={4}
            bg="rgba(5, 127, 192, 0.2)"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
            w="100%"
            maxW="600px"
          >
            <MotionText fontSize="2xl" fontWeight="bold" color="#057fc0">
              Abel Perez
            </MotionText>
            <MotionText fontSize="md" color="#008cd5">
              Desarrollador de aplicaciones especializadas para la gestión empresarial en entornos Azure y Dynamics 365.
            </MotionText>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.6 }}
            p={4}
            bg="rgba(0, 140, 213, 0.2)"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            boxShadow="0 0 20px rgba(0, 140, 213, 0.6)"
            w="100%"
            maxW="600px"
          >
            <MotionText fontSize="lg" color="#008cd5">
              Esta web te permite explorar todas las noticias mencionadas en la ponencia, releer la presentación y encontrar los recursos destacados.
            </MotionText>
          </MotionBox>
        </VStack>
        
        <MotionBox
          as="a"
          href="https://www.canva.com/design/DAGhoeVkZQg/RSUw9oMjAcrJ0FT69_3mRA/view?utm_content=DAGhoeVkZQg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6bc0df14cb"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1, delay: 0.9 }}
          mt={6}
          p={4}
          borderRadius="15px"
          boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
          bg="rgba(5, 127, 192, 0.2)"
          backdropFilter="blur(10px)"
          textAlign="center"
          w="90%"
          maxW="800px"
          cursor="pointer"
          _hover={{ boxShadow: "0 0 25px rgba(5, 127, 192, 1)" }}
        >
          <Image
            src="public/fotopresentacion.png"
            alt="Preview de la presentación"
            borderRadius="10px"
            w="100%"
            boxShadow="0 0 10px rgba(5, 127, 192, 0.8)"
          />
        </MotionBox>
      </Box>
    </Box>
    </Layout>
  );
};

export default HomePage;