import { 
  Box, 
  Text, 
  Image, 
  VStack, 
  HStack, 
  Link, 
  Flex, 
  Heading, 
  Button, 
  useMediaQuery, 
  Container, 
  Icon, 
  Divider
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Layout from "./Layout";

const ContactPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  
  // Componente botón de contacto personalizado
  const ContactButton = ({ icon, label, href, bgColor, hoverColor, download }) => (
    <Link 
      href={href} 
      target={download ? "_self" : "_blank"} 
      rel={download ? "" : "noopener noreferrer"}
      _hover={{ textDecoration: "none" }}
      w={{ base: "100%", sm: "auto" }}
      mb={{ base: 3, sm: 0 }}
      download={download}
    >
      <Button
        leftIcon={<Icon as={icon} />}
        size={isMobile ? "md" : "lg"}
        width={{ base: "full", sm: "auto" }}
        px={6}
        py={isMobile ? 5 : 6}
        bgGradient={`linear(to-r, ${bgColor}, ${hoverColor})`}
        color="white"
        boxShadow="md"
        _hover={{
          bgGradient: `linear(to-r, ${hoverColor}, ${bgColor})`,
          transform: "translateY(-2px)",
          boxShadow: "lg"
        }}
        transition="all 0.3s"
        borderRadius="full"
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <Layout>
      <Box
        minH="100vh"
        bgGradient="linear(to-b, #090a15, #11132c)"
        color="white"
        pt={{ base: 6, md: 16 }}
        pb={16}
      >
        <Container maxW="container.lg">
          <Flex
            direction={{ base: "column", md: "row" }}
            bg="rgba(9, 15, 35, 0.8)"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="0 0 30px rgba(5, 127, 192, 0.3)"
            border="1px solid rgba(5, 127, 192, 0.3)"
            backdropFilter="blur(10px)"
          >
            {/* Columna izquierda con foto e info básica */}
            <Box
              w={{ base: "100%", md: "35%" }}
              bgGradient="linear(to-b, rgba(5, 127, 192, 0.2), rgba(0, 45, 90, 0.4))"
              p={{ base: 6, md: 10 }}
              textAlign="center"
            >
              <VStack spacing={6}>
                <Box
                  position="relative"
                  borderRadius="full"
                  p={1}
                  bgGradient="linear(to-r, #057fc0, #00d4ff)"
                >
                  <Image
                    src="/fotoperfil.jpg"
                    alt="Abel Perez"
                    borderRadius="full"
                    boxSize={{ base: "150px", md: "180px" }}
                    border="3px solid rgba(255, 255, 255, 0.8)"
                    boxShadow="0 0 15px rgba(5, 127, 192, 0.6)"
                    objectFit="cover"
                  />
                </Box>
                
                <Heading 
                  as="h1" 
                  fontSize={{ base: "2xl", md: "3xl" }}
                  bgGradient="linear(to-r, #ffffff, #00d4ff)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  Abel Perez
                </Heading>
                
                <Text 
                  fontSize="md" 
                  color="blue.100"
                  fontWeight="medium"
                >
                  Desarrollador de Aplicaciones Multiplataforma
                </Text>
                
                <Divider borderColor="rgba(5, 127, 192, 0.4)" />
                
                <ContactButton 
                  icon={FaDownload} 
                  label="Descargar CV" 
                  href="/CV_Abel_Pérez.pdf" 
                  bgColor="#057fc0" 
                  hoverColor="#0069a3"
                  download={true}
                />
              </VStack>
            </Box>
            
            {/* Columna derecha con bio y enlaces */}
            <Box w={{ base: "100%", md: "65%" }} p={{ base: 6, md: 10 }}>
              <Heading 
                as="h2" 
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                color="#057fc0"
              >
                Sobre mí
              </Heading>
              
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                color="gray.200"
                lineHeight="tall"
                mb={8}
              >
                Hola, soy Abel y actualmente estoy trabajando como Desarrollador de aplicaciones especializadas para la gestión empresarial en entornos Azure y Dynamics 365. Ahora mismo, me encuentro trabajando en una app multiplataforma (Windows, Android, iOS y Mac) con la tecnología de Microsoft MAUI Blazor en un entorno .NET 9.0.
                <br /><br />
                Además, estoy prosiguiendo mi formación en IES Stucom Pelai, cursando un Máster en Inteligencia Artificial y Big Data.
              </Text>
              
              <Heading 
                as="h2" 
                fontSize={{ base: "xl", md: "2xl" }}
                mb={6}
                color="#057fc0"
              >
                Ponte en contacto
              </Heading>
              
              <Flex 
                direction={{ base: "column", sm: "row" }}
                gap={{ base: 3, sm: 4, md: 6 }}
                wrap="wrap"
                justify={{ base: "center", sm: "flex-start" }}
              >
                <ContactButton 
                  icon={FaEnvelope} 
                  label="Email" 
                  href="mailto:abelpr1002@gmail.com?subject=Contacto%20por%20charla%20de%20IA&body=Hola,%20soy%20(tu%20nombre)%20de%20Stucom,%20vi%20tu%20charla%20sobre%20inteligencia%20artificial%20en%20el%20Talent%20y%20me%20pongo%20en%20contacto%20contigo%20para:" 
                  bgColor="#d44638" 
                  hoverColor="#b23121"
                />
                
                <ContactButton 
                  icon={FaLinkedin} 
                  label="LinkedIn" 
                  href="https://www.linkedin.com/in/abel-p-7430a5255/" 
                  bgColor="#0077b5" 
                  hoverColor="#005e8c"
                />
                
                <ContactButton 
                  icon={FaGithub} 
                  label="GitHub" 
                  href="https://github.com/Abel1002/" 
                  bgColor="#333" 
                  hoverColor="#24292e"
                />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;