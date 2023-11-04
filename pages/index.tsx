import Head from 'next/head';
import { Box, Button, VStack, Text, Image, Link, Container, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useColorMode, SimpleGrid, ScaleFade } from '@chakra-ui/react';
import Connect from 'components/MainTools/Connect'; // Make sure to import the Connect component
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg="#ff3a00" py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          {/* Light and Dark Mode Toggle Button */}
          <Button onClick={toggleColorMode} variant="ghost" color="white">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Text fontSize="2xl" fontWeight="bold" color="white">Workout and Research</Text>
          <Button colorScheme="orange" variant="solid" onClick={onOpen}>
            Connect
          </Button>
        </Flex>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect Your Algorand Wallet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Connect />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      {/* Hero Section */}
      <Box as="section" bgGradient="linear(to-b, #ff3a00, #ff7e00)" h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color="white">Welcome to Workout and Research</Text>
          <Text fontSize="xl" color="white" mt={4}>Join our virtual fitness community and explore cutting-edge research</Text>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={10} bgGradient="linear(to-b, #ff7e00, #ffa040)">
        <VStack spacing={6} align="start">
          <Text fontSize="4xl" fontWeight="bold">Empower Your Wellness Journey</Text>
          <Text fontSize="xl">
            Step into our inclusive Discord community, where every fitness journey is celebrated. Our innovative workout tracker is designed for everyone, regardless of fitness level or background. Here, you&apos;ll find personalized support, expert nutritional advice, and the latest wellness research. It&apos;s a place where knowledge meets action, and where every member is empowered to achieve their best health.
          </Text>
          <Button as={Link} href="https://discord.gg/nRvacAzV" colorScheme="teal" target="_blank">
            Join Our Community
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={10} bgGradient="linear(to-b, #ffa040, #ffca80)">
        <Container maxW="container.lg">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6} color="white">Bot Features</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Cardio Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/cardio-tracking.jpg" alt="Cardio Tracking" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold">Cardio Tracking</Text>
                <Text fontSize="md">Track your cardio sessions and monitor your progress over time directly within Discord.</Text>
              </Box>
            </ScaleFade>

            {/* Calisthenics Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/calisthenics-tracking.jpg" alt="Calisthenics Tracking" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold">Calisthenics Tracking</Text>
                <Text fontSize="md">Log your calisthenics workouts and view your strength progression over time.</Text>
              </Box>
            </ScaleFade>

            {/* Weight Lifting Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/weight-lifting-tracking.jpg" alt="Weight Lifting Tracking" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold">Weight Lifting Tracking</Text>
                <Text fontSize="md">Keep a detailed log of your weight lifting sessions and analyze your performance improvements.</Text>
              </Box>
            </ScaleFade>

            {/* ... (add more feature cards as needed) ... */}
          </SimpleGrid>
        </Container>
      </Box>

       {/* Footer */}
       <Box as="footer" bg="#ffca80" color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
          <Flex mt={2}>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}