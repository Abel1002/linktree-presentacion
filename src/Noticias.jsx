import { Box, Grid, GridItem, Image, Text, Link, Input, InputGroup, InputLeftElement, Heading, Flex, Tag, VStack, Container, Select, HStack, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Layout from "./Layout";
import { useState, useMemo } from "react";

const noticias = [
  {
    titulo: "Manus AI, el mejor agente de IA a dia de hoy",
    imagen: "/manusAI.png",
    enlace: "https://manus.im/",
    categorias: ["Inteligencia Artificial", "Noticia"]
  },
  {
    titulo: "Probando en primicia Manus AI",
    imagen: "/ManusAIVideo.png",
    enlace: "http://youtube.com/watch?v=ZYd9gh-kzcc&t=4s",
    categorias: ["Video", "Noticia"]
  },
  {
    titulo: "El robot humanoide más avanzado",
    imagen: "/unitreeg1.jpeg",
    enlace: "https://www.unitree.com/g1",
    categorias: ["Robótica", "Noticia"]
  },
  {
    titulo: "Helix de Figure, robots colaborativos",
    imagen: "/helix.webp",
    enlace: "https://www.youtube.com/watch?v=Z3yQHYNXPws",
    categorias: ["Video", "Robótica"]
  },
  {
    titulo: "La primera Ley que regula la IA",
    imagen: "/ley IA.jpg",
    enlace: "https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai",
    categorias: ["Legislación", "Noticia"]
  },
  {
    titulo: "GROK AI, Elon Musk contra ChatGPT",
    imagen: "/Grok AI.png",
    enlace: "https://www.youtube.com/watch?v=lV0HzHGizJs&pp=ygUEZ3Jvaw%3D%3D",
    categorias: ["Inteligencia Artificial", "Noticia"]
  },
  {
    titulo: "ERNIR 4.5: El Google Made In China",
    imagen: "/Ernir.png",
    enlace: "https://www.youtube.com/watch?v=GEKT4Q2oGEY",
    categorias: ["Video", "Noticia"]
  },
  {
    titulo: "Chantaje y amenaza a la IA",
    imagen: "/Chantaje.png",
    enlace: "https://www.youtube.com/watch?v=ZMUdY6X9U4M&t=173s",
    categorias: ["Video", "Noticia"]
  },
  {
    titulo: "La Inteligencia Artificial del Gobierno de España",
    imagen: "/IA españa.jpg",
    enlace: "https://www.linkedin.com/posts/abel-p-7430a5255_inteligenciaartificial-espaaeha-alia-activity-7288177000123371522-RDz_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7W3-MBA8DxVc-UCn10umbNwMzDcEI2gUQ",
    categorias: ["Post", "Noticia"]
  }
];

const proyectos = [
  {
    titulo: "Sistema de predicción meteorológica",
    imagen: "/SistemaPrediccion.png",
    enlace: "https://github.com/Dekiuv/PrediccionMeteo",
    categorias: ["Meteorología", "Proyecto"]
  },
  {
    titulo: "Sistema de optimización de logística",
    imagen: "/SistemaLogistica.png",
    enlace: "https://github.com/Miguelstucom/Route_Generator",
    categorias: ["Logística", "Proyecto"]
  },
  {
    titulo: "Todo el código de esta Web a tu alcance",
    imagen: "/WEB.png",
    enlace: "https://github.com/Miguelstucom/Route_Generator",
    categorias: ["Desarrollo Web", "Proyecto"]
  }
];

const cursos = [
  {
    titulo: "Inteligencia Artificial en Local",
    imagen: "/IALocal.png",
    enlace: "https://www.youtube.com/watch?v=KJ3qKW6iiCs&t=770s",
    categorias: ["Curso", "Video"]
  },
  {
    titulo: "Inteligencia Artificial en Visual Studio",
    imagen: "/VScode.png",
    enlace: "https://www.youtube.com/watch?v=L13CHhZeTYw",
    categorias: ["Curso", "Video"]
  },
  {
    titulo: "Curso Intensivo GOOGLE ML Machine Learning",
    imagen: "/MLGoogle.png",
    enlace: "https://www.youtube.com/watch?v=L13CHhZeTYw",
    categorias: ["Curso", "Machine Learning"]
  }
];

const Noticias = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  
  // Extraer todas las categorías únicas
  const todasLasCategorias = useMemo(() => {
    const categorias = new Set();
    
    // Función para añadir categorías de un array de items al Set
    const agregarCategorias = (items) => {
      items.forEach(item => {
        item.categorias.forEach(cat => categorias.add(cat));
      });
    };
    
    agregarCategorias(noticias);
    agregarCategorias(proyectos);
    agregarCategorias(cursos);
    
    // Convertir el Set a un Array y ordenarlo alfabéticamente
    return Array.from(categorias).sort();
  }, []);
  
  // Función para filtrar elementos por título y categoría
  const filtrarItems = (items) => {
    return items.filter(item => {
      const coincideTitulo = item.titulo.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = categoriaSeleccionada === "" || 
                               item.categorias.includes(categoriaSeleccionada);
      return coincideTitulo && coincideCategoria;
    });
  };
  
  // Aplicar filtros a cada sección
  const noticiasFiltradas = filtrarItems(noticias);
  const proyectosFiltrados = filtrarItems(proyectos);
  const cursosFiltrados = filtrarItems(cursos);
  
  // Estilos con tema
  const cardBgGradient = "linear(to-b, #1a202c, #2d3748)";
  const cardBorderColor = "#057fc0";
  const tagBgColor = "#057fc0";
  
  // Componente Card reutilizable
  const Card = ({ item }) => (
    <Link href={item.enlace} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
        border="1px"
        borderColor={cardBorderColor}
        transition="all 0.3s"
        h="100%"
        bgGradient={cardBgGradient}
        _hover={{ 
          transform: "translateY(-5px)", 
          boxShadow: "0 0 25px rgba(5, 127, 192, 0.8)" 
        }}
      >
        <Box position="relative">
          <Image 
            src={item.imagen} 
            alt={item.titulo} 
            w="100%" 
            h="180px"
            objectFit="cover"
          />
          <Wrap spacing={1} position="absolute" top="2" right="2">
            {item.categorias.map((categoria, i) => (
              <WrapItem key={i}>
                <Tag 
                  bg={tagBgColor} 
                  color="white"
                  fontWeight="bold"
                  fontSize="xs"
                  borderRadius="full"
                  size="sm"
                >
                  {categoria}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <VStack 
          p={4} 
          spacing={2} 
          align="start"
        >
          <Text 
            fontSize="md" 
            fontWeight="bold" 
            color="white"
            noOfLines={2}
          >
            {item.titulo}
          </Text>
        </VStack>
      </Box>
    </Link>
  );

  return (
    <Layout>
      <Box 
        bgGradient="linear(to-b, #0a0b1c, #11132c)" 
        minH="100vh" 
        py={10}
      >
        <Container maxW="container.xl">
          {/* Encabezado y buscador */}
          <VStack spacing={6} mb={10}>
            <Heading 
              as="h1" 
              size="xl" 
              color="white" 
              textAlign="center"
              bgGradient="linear(to-r, #057fc0, #00d4ff)"
              bgClip="text"
            >
              Tecnología e Innovación
            </Heading>
            
            <HStack spacing={4} w="100%" maxW="800px" mx="auto">
              <InputGroup flex={1}>
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="#a0aec0" />
                </InputLeftElement>
                <Input
                  placeholder="Buscar por título..."
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px"
                  borderColor="#057fc0"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  _hover={{ borderColor: "#00d4ff" }}
                  _focus={{ borderColor: "#00d4ff", boxShadow: "0 0 0 1px #00d4ff" }}
                  onChange={(e) => setBusqueda(e.target.value)}
                  value={busqueda}
                />
              </InputGroup>
              
              <Select
                placeholder="Todas las categorías"
                bg="rgba(255, 255, 255, 0.1)"
                border="1px"
                borderColor="#057fc0"
                color="white"
                _placeholder={{ color: "gray.400" }}
                _hover={{ borderColor: "#00d4ff" }}
                _focus={{ borderColor: "#00d4ff", boxShadow: "0 0 0 1px #00d4ff" }}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                value={categoriaSeleccionada}
                width={{ base: "100%", md: "250px" }}
                sx={{
                  // Esto corrige el color del texto en las opciones del menú
                  option: {
                    bg: "#2d3748",
                    color: "white",
                    _hover: {
                      bg: "#3a4a63"
                    },
                    _focus: {
                      bg: "#3a4a63"
                    }
                  }
                }}
                iconColor="white"
              >
                {todasLasCategorias.map((categoria, index) => (
                  <option key={index} value={categoria} style={{backgroundColor: "#2d3748"}}>{categoria}</option>
                ))}
              </Select>
            </HStack>
          </VStack>

          {/* Mostrar mensaje si no hay resultados */}
          {noticiasFiltradas.length === 0 && proyectosFiltrados.length === 0 && cursosFiltrados.length === 0 && (
            <Box textAlign="center" p={10}>
              <Text color="gray.400" fontSize="lg">
                No se encontraron resultados para "{busqueda}"{categoriaSeleccionada && ` en la categoría "${categoriaSeleccionada}"`}
              </Text>
            </Box>
          )}

          {/* Sección de Noticias */}
          {noticiasFiltradas.length > 0 && (
            <Box mb={12}>
              <Flex align="center" mb={6}>
                <Box w="8px" h="30px" bg="#057fc0" borderRadius="full" mr={3}></Box>
                <Heading 
                  as="h2" 
                  size="lg" 
                  color="white"
                >
                  Noticias y Referencias
                </Heading>
              </Flex>
              <Grid 
                templateColumns={{ 
                  base: "1fr", 
                  sm: "repeat(2, 1fr)", 
                  md: "repeat(3, 1fr)" 
                }} 
                gap={6}
              >
                {noticiasFiltradas.map((noticia, index) => (
                  <GridItem key={index}>
                    <Card item={noticia} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}

          {/* Sección de Proyectos */}
          {proyectosFiltrados.length > 0 && (
            <Box mb={12}>
              <Flex align="center" mb={6}>
                <Box w="8px" h="30px" bg="#057fc0" borderRadius="full" mr={3}></Box>
                <Heading 
                  as="h2" 
                  size="lg" 
                  color="white"
                >
                  Proyectos Master
                </Heading>
              </Flex>
              <Grid 
                templateColumns={{ 
                  base: "1fr", 
                  sm: "repeat(2, 1fr)", 
                  md: "repeat(3, 1fr)" 
                }} 
                gap={6}
              >
                {proyectosFiltrados.map((proyecto, index) => (
                  <GridItem key={index}>
                    <Card item={proyecto} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}

          {/* Sección de Cursos */}
          {cursosFiltrados.length > 0 && (
            <Box>
              <Flex align="center" mb={6}>
                <Box w="8px" h="30px" bg="#057fc0" borderRadius="full" mr={3}></Box>
                <Heading 
                  as="h2" 
                  size="lg" 
                  color="white"
                >
                  Cursos de Formación
                </Heading>
              </Flex>
              <Grid 
                templateColumns={{ 
                  base: "1fr", 
                  sm: "repeat(2, 1fr)", 
                  md: "repeat(3, 1fr)" 
                }} 
                gap={6}
              >
                {cursosFiltrados.map((curso, index) => (
                  <GridItem key={index}>
                    <Card item={curso} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default Noticias;