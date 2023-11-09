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

export default function Shippingpolicy() {
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

        {/* Modal */}
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
      </Box>

        {/* Shipping Policy Section */}
        <Box as="section" py={10} bgGradient={heroBgGradient}>
        <Container maxW="container.lg">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6} color={textColor}>
            Shipping Policy
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Processing Time */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Processing Time
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    Orders are typically processed within 1-2 business days. During peak seasons or sales, processing time may take longer, but we will notify you if this is the case.
                </Text>
                </Box>
            </ScaleFade>

            {/* Shipping Rates */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Shipping Rates
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    We offer free standard shipping on all orders within the United States. For international orders, shipping rates are calculated based on the destination and weight of the package.
                </Text>
                </Box>
            </ScaleFade>

            {/* Shipping Methods */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Shipping Methods
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    We ship orders using USPS, UPS, or FedEx depending on the destination and the weight of the package. If you require a specific shipping carrier, please contact us before placing your order, and we will do our best to accommodate your request.
                </Text>
                </Box>
            </ScaleFade>

            {/* Available international shipping destinations */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Available International Shipping Destinations
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    Austria, Belgium, Switzerland, Czech Republic, Germany, Denmark, Spain, Finland, France, Greece, Ireland, Iceland, Netherlands, Norway, Poland, Portugal, Sweden, Italy, and the United Kingdom.
                </Text>
                </Box>
            </ScaleFade>

            {/* Delivery Time */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Delivery Time
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    Delivery time varies depending on the shipping method and destination. Standard shipping within the United States usually takes 3-5 business days, while international shipping can take 7-14 business days.
                </Text>
                </Box>
            </ScaleFade>

            {/* Tracking Your Order */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Tracking Your Order
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                Once your order has shipped, you will receive an email with a tracking number so you can monitor the delivery status of your package. If you have any questions or concerns about your order, please contact us, and we will be happy to assist you.
                </Text>
                </Box>
            </ScaleFade>

            {/* Undeliverable Packages */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Undeliverable Packages
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    If a package is returned to us as undeliverable, we will contact you to confirm the shipping address and arrange for reshipment. Additional shipping charges may apply for reshipment.
                </Text>
                </Box>
            </ScaleFade>

            {/* Lost or Stolen Packages */}
            <ScaleFade initialScale={0.9} in={true}>
                <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderColor="black"
                borderRadius="lg"
                bg={boxColorScheme}
                _hover={{ shadow: "lg" }}
                >
                <Text fontSize="lg" fontWeight="bold" color={textColor} textAlign="center">
                    Lost or Stolen Packages
                </Text>
                <Text fontSize="md" color={textColor} textAlign="center">
                    We are not responsible for lost or stolen packages once they have been marked as delivered by the carrier. If you have concerns about the safety of your package, we recommend adding signature confirmation or insurance to your shipping method.
                </Text>
                </Box>
            </ScaleFade>
            </SimpleGrid>
        </Container>
        </Box>




    </Box>
  );
}
