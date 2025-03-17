import { Box, Grid, GridItem, Image, Text, Link } from "@chakra-ui/react";
import Layout from "./Layout";

const noticias = [
  {
    titulo: "Manus AI, el mejor agente de IA a dia de hoy",
    imagen: "/manusAI.png",
    enlace: "https://manus.im/"
  },
  {
    titulo: "Probando en primicia Manus AI",
    imagen: "/ManusAIVideo.png",
    enlace: "http://youtube.com/watch?v=ZYd9gh-kzcc&t=4s"
  },
  {
    titulo: "El robot humanoide más avanzado",
    imagen: "/unitreeg1.jpeg",
    enlace: "https://www.unitree.com/g1"
  },
  {
    titulo: "Helix de Figure, robots colaborativos",
    imagen: "/helix.webp",
    enlace: "https://www.youtube.com/watch?v=Z3yQHYNXPws"
  },
  {
    titulo: "La primera Ley que regula la IA",
    imagen: "/ley IA.jpg",
    enlace: "https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai"
  },
  {
    titulo: "GROK AI, Elon Musk contra ChatGPT",
    imagen: "/Grok AI.png",
    enlace: "https://www.youtube.com/watch?v=lV0HzHGizJs&pp=ygUEZ3Jvaw%3D%3D"
  }
];

const Noticias = () => {
  return (
    <Layout>
      <Box p={6} textAlign="center" bg="#11132c" minH="100vh">
        <Text fontSize="2xl" fontWeight="bold" color="#057fc0" mb={6}>
          Noticias y Referencias
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {noticias.map((noticia, index) => (
            <GridItem key={index}>
              <Link href={noticia.enlace} isExternal>
                <Box
                  position="relative"
                  borderRadius="10px"
                  overflow="hidden"
                  boxShadow="0 0 15px rgba(5, 127, 192, 0.6)"
                  _hover={{ boxShadow: "0 0 20px rgba(5, 127, 192, 1)" }}
                >
                  <Image src={noticia.imagen} alt={noticia.titulo} w="100%" />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="rgba(0, 0, 0, 0.7)"
                    color="white"
                    textAlign="center"
                    p={2}
                  >
                    <Text fontSize="md" fontWeight="bold">{noticia.titulo}</Text>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Noticias;
