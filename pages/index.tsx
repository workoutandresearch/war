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
  IconButton,
  Center,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');
  const buttonColorScheme = useColorModeValue('orange', 'blue');
  const boxColorScheme = useColorModeValue('ff3a00', '##ffa040');
  const buttonTextColor = colorMode === 'dark' ? 'white' : 'inherit'; // Use colorMode to determine text color
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define the background gradients for light and dark modes
  const headerBgColor = useColorModeValue('#ff3a00', 'transparent');
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');
  const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
  const footerBgColor = useColorModeValue('#ffca80', 'transparent');
  const pageBgGradient = useColorModeValue('none', 'linear(to-b, #0000FF, #000000)'); // Seamless gradient for dark mode

  // Function to handle color mode toggle and provide an appropriate icon
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
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <ToggleColorModeButton />
          
          {/* Hamburger Menu Icon */}
          <IconButton
            display={{ base: 'block', md: 'none' }}
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            aria-label="Open Menu"
            variant="ghost"
            color="white"
          />

          {/* Navigation Links */}
          <Flex display={{ base: 'none', md: 'flex' }} align="center">
            <Button as={Link} href="/" variant="ghost" color={textColor}>Home</Button>
            <Button as={Link} href="/roadmap" variant="ghost" color={textColor}>Roadmap</Button>
            {/* ... other navigation links ... */}
          </Flex>
          
          <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">Workout and Research</Text>
          
          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
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
          <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">Empower Your Journey</Text>
          <Text fontSize="xl" color={textColor} mt={4} textAlign="center">Workout and Research</Text>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={6} align="center">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
          Connect and Engage with Our Community
        </Text>

          <Box maxW="container.lg" mx="auto">
            <Text fontSize="xl" textAlign="center" color={textColor}>
              Connect with fellow enthusiasts, stay updated on the latest news, and engage in discussions about our project. Empower your journey with the latest tools added to the server!
            </Text>
          </Box>
          <Button as={Link} href="https://discord.gg/nRvacAzV" colorScheme={buttonColorScheme} target="_blank" color={buttonTextColor}>
            Join The Community
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={10} bgGradient={featuresBgGradient}>
        <Container maxW="container.lg">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6} color={textColor}>Community Participation</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Cardio Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Center>
                  <Button mt={4} colorScheme={buttonColorScheme} color={buttonTextColor}>Roadmap</Button>
                </Center>
                <Text fontSize="md" color={textColor} textAlign="center">The steps we are taking to bring our project to fruition and give you an understanding of what to expect from us.</Text>
              </Box>
            </ScaleFade>

            {/* Calisthenics Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Center>
                  <Button mt={4} colorScheme={buttonColorScheme} color={buttonTextColor}>Opt-In</Button>
                </Center>
                <Text fontSize="md" color={textColor} textAlign="center">By clicking this button, you will be directed to opt in to WAR, a coin that offers unique features and benefits.</Text>
              </Box>
            </ScaleFade>

            {/* Weight Lifting Tracking */}
            <ScaleFade initialScale={0.9} in={true}>
              <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Center>
                  <Button mt={4} colorScheme={buttonColorScheme} color={buttonTextColor}>Whitepaper</Button>
                </Center>
                <Text fontSize="md" color={textColor} textAlign="center">Our whitepaper provides valuable insights and information that can help you make informed decisions.</Text>
              </Box>
            </ScaleFade>
            {/* More feature sections can follow the same pattern */}
          </SimpleGrid>
        </Container>
      </Box>

      
      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center" color={textColor}>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
          <Flex mt={2}>
            {/* Additional footer content can go here */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
