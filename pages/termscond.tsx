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
  HStack,
  Spacer,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function termscond() {
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
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'linear(to-b, #0000FF, #000000)'); // Added heroBgGradient
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
        <title>Workout and Research - Shipping Policy</title>
        <meta name="description" content="Your return policy description goes here." />
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

          <Text fontSize="2xl" fontWeight="bold" color="textColor" textAlign="center">
            Workout and Research
          </Text>

          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
            Connect
          </Button>
        </Flex>
        {/* Drawer for Hamburger Menu */}
        <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu}>
          <DrawerOverlay />
          <DrawerContent bg={drawerBgColor}>
            <DrawerHeader borderBottomWidth="1px" textAlign="center">
              Menu
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/whitepaper" onClick={toggleMenu}>
                  Whitepaper
                </Link>
                <Link href="/roadmap" onClick={toggleMenu}>
                  Roadmap
                </Link>
                <Link href="/optin" onClick={toggleMenu}>
                  Opt In
                </Link>
                <Link href="/socialmedia" onClick={toggleMenu}>
                  Social Media
                </Link>
                <Link href="/termscond" onClick={toggleMenu}>
                  Terms and Conditions
                </Link>
                <Link href="/privacypolicy" onClick={toggleMenu}>
                  Privacy Policy
                </Link>
                <Link href="/disclaimer" onClick={toggleMenu}>
                  Disclaimer
                </Link>
                <Link href="/returnpolicy" onClick={toggleMenu}>
                  Return Policy
                </Link>
                <Link href="/shippingpolicy" onClick={toggleMenu}>
                  Shipping Policy
                </Link>
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

    {/* Terms and Conditions Section */}
    <Box bgGradient={heroBgGradient} minH="100vh" py={10}>
      <Container maxW="container.md" p={6} bg={boxColorScheme} boxShadow="lg" borderRadius="md" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Terms and Conditions
        </Text>
        <Text fontSize="md" color={textColor} mb={4}>
          This website is a free resource of information. All the information is provided by independent third parties cannot be held responsible for any inaccuracies, discrepancies, or other issues that can arise from the use of our website.
        </Text>
        <Text fontSize="md" color={textColor} mb={4}>
          This website is intended to provide incentives to purchase goods and services, which may or may not be available. As you know, our attention to this matter is of great importance.
        </Text>
        <Text fontSize="md" color={textColor}>
          All of the content on this website is provided by independent third parties. While we at https://www.workoutandresearch.com strive to make all of the information as accurate and up to date as possible, there can be mistakes in data entry or presentation. Before acting on any of this information, we suggest you do additional research and investigate the information on your own.
        </Text>
        {/* Add more terms and conditions content here */}
      </Container>
    </Box>
  </Box>
  );
}
