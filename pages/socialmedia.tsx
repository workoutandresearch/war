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
import { FaMediumM } from "react-icons/fa";
import { TfiTwitter, TfiYoutube, TfiInstagram  } from "react-icons/tfi";
 import { SiDiscord } from "react-icons/si";
 import { TbBrandX } from "react-icons/tb";
 import { Carousel } from 'react-responsive-carousel'; // Assuming you're using this library for Carousel

export default function Socialmedia() {
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
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Flex as="header" bg={headerBgColor} justify="space-between" align="center" py={4} px={8} boxShadow="sm">
        {/* Hamburger Menu and Light/Dark Mode Toggle */}
        <Flex align="center">
          <IconButton
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            aria-label="Open Menu"
            variant="ghost"
            color={boxColorScheme}
          />
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            variant="ghost"
            color={boxColorScheme}
          />
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
          Workout and Research
        </Text>

        <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
          Connect
        </Button>
      </Flex>

        {/* Carousel with Ads */}
        <Box w="full" h="60vh" bg={headerBgColor}>
          <Center h="full" >
            <Carousel 
              showThumbs={false} 
              showIndicators={false} 
              showArrows={false} 
              showStatus={false} 
              infiniteLoop 
              autoPlay 
              emulateTouch 
              interval={5000} 
              swipeScrollTolerance={3}
            >
              <Box p={2} px={5}>
                <a href='https://fallenorder.xyz/' target='_blank' rel='noreferrer'>
                  <Image borderTopRadius='xl' borderBottomRadius='xl' alt='Fallen Order' src='fallenad1.png' />
                </a>
              </Box>
              <Box p={6} py={2}>
                <a href='https://algoxnft.com/shuffle/1385' target='_blank' rel='noreferrer'>
                  <Image borderTopRadius='xl' borderBottomRadius='xl' alt='Join The Pards! - AlgoPard' src='algopardad1.png' />
                </a>
              </Box>
              <Box p={2} px={5}>
                <a href='https://angelsofares.xyz/ghost' target='_blank' rel='noreferrer'>
                  <Image borderTopRadius='xl' borderBottomRadius='xl' alt='Ghosts Of Algo' src='ghost.png' />
                </a>
              </Box>
              <Box p={2} px={5}>
                <a href='https://www.algoleagues.com/' target='_blank' rel='noreferrer'>
                  <Image borderTopRadius='xl' borderBottomRadius='xl' alt='AlgoLeagues' src='alcad.png' />
                </a>
              </Box>
            </Carousel>
          </Center>
        </Box>

      {/* Drawer for Hamburger Menu */}
      <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu} >
          <DrawerOverlay />
          <DrawerContent bg={drawerBgColor}> {/* Set the background color here */}
            <DrawerHeader borderBottomWidth="1px" textAlign="center">Menu</DrawerHeader>
            <DrawerBody>
            <VStack spacing={4}>
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/tools" onClick={toggleMenu}>Tools</Link>
                <Link href="/whitepaper" onClick={toggleMenu}>Whitepaper</Link>
                <Link href="/roadmap" onClick={toggleMenu}>Roadmap</Link>
                <Link href="/optin" onClick={toggleMenu}>Opt In</Link>
                <Link href="/merch" onClick={toggleMenu}>Merch</Link>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={drawerBgColor}>
          <ModalHeader>Connect Your Algorand Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Connect />
          </ModalBody>
        </ModalContent>
      </Modal>

    {/* Social Media Section */}
    <Box bgGradient={heroBgGradient} minH="100vh" py={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Container maxW="container.md" p={6} bg={boxColorScheme} boxShadow="lg" borderRadius="md" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Social Media
        </Text>
        <Text fontSize="md" color={textColor} mb={4}>
          Connect with us on social media to stay updated on the latest news and developments.
        </Text>
        <SimpleGrid columns={2} spacing={6} width="100%">
          {/* Twitter */}
          <Link href="https://twitter.com/workoutresearch" target="_blank" rel="noopener noreferrer">
            <Box p={5} shadow="md" bg={boxColorScheme} display="flex" alignItems="center" justifyContent="center">
              <TbBrandX size="24px" />
              <Text ml={2} fontWeight="bold">Twitter</Text>
            </Box>
          </Link>
          {/* Instagram */}
          <Link href="https://www.instagram.com/workoutandresearch" target="_blank" rel="noopener noreferrer">
            <Box p={5} shadow="md" bg={boxColorScheme} display="flex" alignItems="center" justifyContent="center">
              <TfiInstagram size="24px" />
              <Text ml={2} fontWeight="bold">Instagram</Text>
            </Box>
          </Link>
          {/* Discord */}
          <Link href="https://discord.gg/JpwXaKAvGM" target="_blank" rel="noopener noreferrer">
            <Box p={5} shadow="md" bg={boxColorScheme} display="flex" alignItems="center" justifyContent="center">
              <SiDiscord size="24px" />
              <Text ml={2} fontWeight="bold">Discord</Text>
            </Box>
          </Link>
          {/* Medium */}
          <Link href="https://medium.com/@workoutandresearch" target="_blank" rel="noopener noreferrer">
            <Box p={5} shadow="md" bg={boxColorScheme} display="flex" alignItems="center" justifyContent="center">
              <FaMediumM size="24px" />
              <Text ml={2} fontWeight="bold">Medium</Text>
            </Box>
          </Link>
          {/* YouTube */}
          <Link href="https://www.youtube.com/@WorkoutAndResearch" target="_blank" rel="noopener noreferrer">
            <Box p={5} shadow="md" bg={boxColorScheme} display="flex" alignItems="center" justifyContent="center">
              <TfiYoutube size="24px" />
              <Text ml={2} fontWeight="bold">YouTube</Text>
            </Box>
          </Link>
          {/* Additional social media links here if needed */}
        </SimpleGrid>
      </Container>
    </Box>
    </Box>
  );
}