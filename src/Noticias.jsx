import { Box, Grid, GridItem, Image, Text, Link } from "@chakra-ui/react";

const noticias = [
  {
    titulo: "La IA revoluciona la salud",
    imagen: "public/noticia1.jpg",
    enlace: "https://example.com/noticia1"
  },
  {
    titulo: "Nuevas aplicaciones de la impresión 3D",
    imagen: "public/noticia2.jpg",
    enlace: "https://example.com/noticia2"
  },
  {
    titulo: "Avances en la robótica con IA",
    imagen: "public/noticia3.jpg",
    enlace: "https://example.com/noticia3"
  }
];

const Noticias = () => {
  return (
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
  );
};

export default Noticias;
