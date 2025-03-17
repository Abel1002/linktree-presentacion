import { Box, Text, Image, VStack, HStack, Link } from "@chakra-ui/react";
import Layout from "./Layout";

const ContactPage = () => {
  return (
    <Layout>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      bg="#11132c"
      color="white"
    >
      <VStack
        spacing={6}
        p={6}
        bg="rgba(5, 127, 192, 0.2)"
        borderRadius="15px"
        boxShadow="0 0 20px rgba(5, 127, 192, 0.6)"
        w="90%"
        maxW="600px"
        textAlign="center"
        mt="100px"
      >
        <Image
          src="/fotoperfil.jpg"
          alt="Abel Perez"
          borderRadius="full"
          boxSize="150px"
          border="4px solid #057fc0"
          boxShadow="0 0 15px #057fc0"
        />
        
        <Text fontSize="2xl" fontWeight="bold" color="#057fc0">
          Abel Perez
        </Text>
        
        <Text fontSize="md" color="#008cd5">
          Hola, soy Abel y actualmente estoy trabajando como Desarrollador de aplicaciones especializadas para la gestión empresarial en entornos Azure y Dynamics 365. Ahora mismo, me encuentro trabajando en una app multiplataforma (Windows, Android, iOS y Mac) con la tecnología de Microsoft MAUI Blazor en un entorno .NET 9.0.
          <br /><br />
          Además, estoy prosiguiendo mi formación en IES Stucom Pelai, cursando un Máster en Inteligencia Artificial y Big Data.
        </Text>

        <HStack spacing={6}>
          <Link href="mailto:abelpr1002@gmail.com?subject=Contacto%20por%20charla%20de%20IA&body=Hola,%20soy%20(tu%20nombre)%20de%20Stucom,%20vi%20tu%20charla%20sobre%20inteligencia%20artificial%20en%20el%20Talent%20y%20me%20pongo%20en%20contacto%20contigo%20para:" target="_blank" rel="noopener noreferrer">
            <Image src="/correo.png" alt="Correo" boxSize="40px" />
          </Link>
          
          <Link href="https://www.linkedin.com/in/abel-p-7430a5255/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" boxSize="40px" />
          </Link>
        </HStack>
      </VStack>
    </Box>
    </Layout>
  );
};

export default ContactPage;
