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
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Disclaimer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue('#000000', 'inherit');
    const buttonColorScheme = useColorModeValue('orange', 'blue');
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    // Corrected gradient and color variables for light mode
    const headerBgGradient = useColorModeValue('none', 'transparent'); // No gradient for light mode
    const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
    const boxColorScheme = useColorModeValue('ff3a00', '##ffa040');

    const pageBgGradient = useColorModeValue(
        'linear(to-b, #ff3a00, #ff7e00)', // Updated gradient colors for light mode
        'linear(to-b, #0000FF, #000000)' // Gradient colors for dark mode
      );
      
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
    <Box bgGradient={pageBgGradient}>
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg={headerBgGradient} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          {/* Hamburger Menu and Color Mode Toggle */}
          <Flex align="center">
            {/* Hamburger Menu Icon */}
            <IconButton
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              aria-label="Open Menu"
              variant="ghost"
              color="white"
            />

            {/* Color Mode Toggle */}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color="white"
            />
          </Flex>
          
          <Text fontSize="2xl" fontWeight="bold" color="textColor" textAlign="center">Workout and Research</Text>
          
          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
            Connect
          </Button>
        </Flex>
        {/* Drawer for Hamburger Menu */}
        <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/roadmap" onClick={toggleMenu}>Roadmap</Link>
                <Link href="/whitepaper" onClick={toggleMenu}>Whitepaper</Link>
                <Link href="/optin" onClick={toggleMenu}>Opt In</Link>
                <Link href="/disclaimer" onClick={toggleMenu}>Disclaimer</Link>
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

        {/* Hero Section (You can modify this section for your roadmap) */}
        <Box as="section" py={10}>
            <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
            <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">
                Disclaimer
            </Text>
            <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
            The information provided on this website, www.workoutandresearch.com, is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</Text>
            </Container>
        </Box>

            {/* Hero Section (You can modify this section for your roadmap) */}
            <Box as="section" py={10}>
                <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
                <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
                Through this website you are able to link to other websites which are not under the control of  www.workoutandresearch.com. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However,  www.workoutandresearch.com takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. </Text>
                </Container>
            </Box>
                {/* Main Content Section */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {/* Roadmap */}
                <ScaleFade initialScale={0.9} in={true}>
                    <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                    <Center>
                        <Button as={Link} href="/roadmap" variant="ghost" color={textColor} w="full" justifyContent="center">
                        Roadmap
                        </Button>
                    </Center>
                    <Text fontSize="md" color={textColor} textAlign="center">The steps we are taking to bring our project to fruition and give you an understanding of what to expect from us.</Text>
                    </Box>
                </ScaleFade>

                {/* Opt In */}
                <ScaleFade initialScale={0.9} in={true}>
                    <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                    <Center>
                        <Button as={Link} href="/optin" variant="ghost" color={textColor} w="full" justifyContent="center">
                        Opt-In
                        </Button>
                    </Center>
                    <Text fontSize="md" color={textColor} textAlign="center">By clicking this button, you will be directed to opt in to WAR, a coin that offers unique features and benefits.</Text>
                    </Box>
                </ScaleFade>

                {/* Whitepaper */}
                <ScaleFade initialScale={0.9} in={true}>
                    <Box p={5} shadow="md" borderWidth="1px" borderColor="black" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                    <Center>
                        <Button as={Link} href="/whitepaper" variant="ghost" color={textColor} w="full" justifyContent="center">
                        Whitepaper
                        </Button>
                    </Center>
                    <Text fontSize="md" color={textColor} textAlign="center">Our whitepaper provides valuable insights and information that can help you make informed decisions.</Text>
                    </Box>
                </ScaleFade>
                </SimpleGrid>

            {/* Footer */}
            <Box as="section" py={10}>
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