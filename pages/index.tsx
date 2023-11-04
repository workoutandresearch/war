import Head from 'next/head';
import {
  Box,
  Button,
  VStack,
  Text,
  Image,
  Link,
  Container,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorMode,
  SimpleGrid,
  ScaleFade,
  useColorModeValue,
  IconButton // Import IconButton
} from '@chakra-ui/react';
import Connect from 'components/MainTools/Connect'; // Make sure to import the Connect component
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#ff3a00', 'inherit'); // 'inherit' will keep the original color in dark mode
  const buttonColorScheme = useColorModeValue('orange', 'blue');

  
  // Define the background gradients for light and dark modes
  const headerBgColor = useColorModeValue('#ff3a00', 'transparent');
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');
  const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
  const footerBgColor = useColorModeValue('#ffca80', 'transparent');
  const pageBgGradient = useColorModeValue('none', 'linear(to-b, #0000FF, #000000)'); // Seamless gradient for dark mode
  
  // Function to handle color mode toggle and provide appropriate icon
  const ToggleColorModeButton = () => (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
      variant="ghost"
      color="white"
    />
  );
  
  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}> {/* Apply the gradient conditionally */}
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <ToggleColorModeButton />
          <Text fontSize="2xl" fontWeight="bold" color="white">Workout and Research</Text>
          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen}>
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
      <Box as="section" bgGradient={heroBgGradient} h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color="white" textAlign="center">Empower Your Journey</Text>
          <Text fontSize="xl" color="white" mt={4} textAlign="center">Join our virtual fitness community and explore cutting-edge research</Text>
        </Container>
      </Box>
  
      {/* About Section */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={6} align="center">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">Unleash Your Potential</Text>
          <Box maxW="container.lg" mx="auto">
            <Text fontSize="xl" textAlign="center">
              Step into our inclusive Discord community, where every fitness journey is celebrated. Our innovative workout tracker is designed for everyone, regardless of fitness level or background. Here, you&apos;ll find personalized support, expert nutritional advice, and the latest wellness research. It&apos;s a place where knowledge meets action, and where every member is empowered to achieve their best health.
            </Text>
          </Box>
          <Button as={Link} href="https://discord.gg/nRvacAzV" colorScheme={buttonColorScheme} target="_blank">
            Join Our Community
          </Button>
        </VStack>
      </Box>
  
      {/* Features Section */}
      <Box as="section" py={10} bgGradient={featuresBgGradient}>
        <Container maxW="container.lg">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6} color="black">Bot Features</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Cardio Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/cardio-tracking.jpg" alt="Cardio" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Cardio</Text>
                <Text fontSize="md" color="black">Track your cardio sessions and monitor your progress over time directly within Discord.</Text>
              </Box>
            </ScaleFade>

            {/* Calisthenics Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/calisthenics-tracking.jpg" alt="Calisthenics" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Calisthenics</Text>
                <Text fontSize="md" color="black">Log your calisthenics workouts and view your strength progression over time.</Text>
              </Box>
            </ScaleFade>

            {/* Weight Lifting Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/weight-lifting-tracking.jpg" alt="Weight Lifting" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Weight Lifting</Text>
                <Text fontSize="md" color="black">Keep a detailed log of your weight lifting sessions and analyze your performance.</Text>
              </Box>
            </ScaleFade>
            {/* Nutrition Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/nutrition-tracking.jpg" alt="Nutrition" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Nutrition</Text>
                <Text fontSize="md" color="black">Monitor your dietary habits and nutritional intake to align with your fitness goals.</Text>
              </Box>
            </ScaleFade>

            {/* Sleep Analysis */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/sleep-analysis.jpg" alt="Sleep" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Sleep Analysis</Text>
                <Text fontSize="md" color="black">Track and analyze your sleep patterns to improve recovery and performance.</Text>
              </Box>
            </ScaleFade>

            {/* Hydration Reminder */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ shadow: "lg" }}>
                <Image src="/hydration-reminder.jpg" alt="Hydration" borderRadius="lg" mb={4} />
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">Hydration Reminder</Text>
                <Text fontSize="md" color="black">Set reminders to stay hydrated throughout the day for optimal health and performance.</Text>
              </Box>
            </ScaleFade>
          </SimpleGrid>
        </Container>
      </Box>

  
      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
          <Flex mt={2}>
            {/* Additional footer content can go here */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
