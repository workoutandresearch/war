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
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function socialmedia() {
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
  const drawerBgColor = useColorModeValue('#ff3a00', 'blue');

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
        <title>Workout and Research - Roadmap</title>
        <meta name="description" content="Your roadmap description goes here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          {/* Hamburger Menu and Color Mode Toggle */}
          <Flex align="center">
            {/* Hamburger Menu Icon */}
            <IconButton
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              aria-label="Open Menu"
              variant="ghost"
              color={boxColorScheme}
            />

            {/* Color Mode Toggle */}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color={boxColorScheme}
            />
          </Flex>
          
          <Text fontSize="2xl" fontWeight="bold" color="textColor" textAlign="center">Workout and Research</Text>
          
          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
            Connect
          </Button>
        </Flex>
        {/* Drawer for Hamburger Menu */}
        <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu} >
          <DrawerOverlay />
          <DrawerContent bg={drawerBgColor}> {/* Set the background color here */}
            <DrawerHeader borderBottomWidth="1px" textAlign="center">Menu</DrawerHeader>
            <DrawerBody>
            <VStack spacing={4}>
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/whitepaper" onClick={toggleMenu}>Whitepaper</Link>
                <Link href="/roadmap" onClick={toggleMenu}>Roadmap</Link>
                <Link href="/optin" onClick={toggleMenu}>Opt In</Link>
                <Link href="/socialmedia" onClick={toggleMenu}>Social Media</Link>
                <Link href="/termscond" onClick={toggleMenu}>Terms and Conditions</Link>
                <Link href="/privacypolicy" onClick={toggleMenu}>Privacy Policy</Link>
                <Link href="/disclaimer" onClick={toggleMenu}>Disclaimer</Link>
                <Link href="/returnpolicy" onClick={toggleMenu}>Return Policy</Link>
                <Link href="/shippingpolicy" onClick={toggleMenu}>Shipping Policy</Link>
                {/* ... Additional menu links ... */}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

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
      {/* Social Media Section */}
        <Box bgGradient={heroBgGradient} minH="100vh" py={10}>
        <Container maxW="container.md" p={6} bg={boxColorScheme} boxShadow="lg" borderRadius="md">
            <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
            Social Media
            </Text>
            <Text fontSize="md" color={textColor} mb={4}textAlign="center">
            Connect with us on social media to stay updated on the latest news and developments.
            </Text>
            <SimpleGrid columns={2} spacing={6}>
            {/* Twitter */}
            <Link href="https://twitter.com/workoutresearch" target="_blank" rel="noopener noreferrer">
                <Box
                p={5}
                shadow="md"
                bg={boxColorScheme} // Use boxColorScheme for background color
                // Add styling and content for the Twitter link
                >
                {/* Add content for the Twitter link */}
                <Text fontWeight="bold" textAlign="center">Twitter</Text>
                </Box>
            </Link>
            {/* Instagram */}
            <Link href="https://www.instagram.com/workoutandresearch" target="_blank" rel="noopener noreferrer">
                <Box
                p={5}
                shadow="md"
                bg={boxColorScheme} // Use boxColorScheme for background color
                // Add styling and content for the Instagram link
                >
                {/* Add content for the Instagram link */}
                <Text fontWeight="bold" textAlign="center">Instagram</Text>
                </Box>
            </Link>
            {/* Discord */}
            <Link href="https://discord.gg/JpwXaKAvGM" target="_blank" rel="noopener noreferrer">
                <Box
                p={5}
                shadow="md"
                bg={boxColorScheme} // Use boxColorScheme for background color
                // Add styling and content for the Discord link
                >
                {/* Add content for the Discord link */}
                <Text fontWeight="bold" textAlign="center">Discord</Text>
                </Box>
            </Link>
            {/* Medium */}
            <Link href="https://medium.com/@workoutandresearch" target="_blank" rel="noopener noreferrer">
                <Box
                p={5}
                shadow="md"
                bg={boxColorScheme} // Use boxColorScheme for background color
                // Add styling and content for the Medium link
                >
                {/* Add content for the Medium link */}
                <Text fontWeight="bold" textAlign="center">Medium</Text>
                </Box>
            </Link>
            {/* Add more social media links here */}
            </SimpleGrid>
        </Container>
        </Box>
    </Box>
  );
}