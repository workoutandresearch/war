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
  Spacer,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';

export default function Merch() {
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
  const { activeAddress, signTransactions } = useWallet()
  const [loading, setLoading] = useState<boolean>(false)
  const [usdToAlgoRate, setUsdToAlgoRate] = useState(null);
  const [cart, setCart] = useState([]);
  const [algoToWarRate, setAlgoToWarRate] = useState(null);

  const fetchAlgoToWarRate = async () => {
    try {
      // Use the appropriate ASA ID for the WAR token
      const asaId = '1015673913';
      const response = await fetch(`https://free-api.vestige.fi/asset/${asaId}/price?currency=%24WAR`);
      const data = await response.json();
      setAlgoToWarRate(1 / data["price"]);
    } catch (error) {
      console.error('Error fetching WAR token conversion rate:', error);
      toast.error('Failed to fetch WAR token conversion rate.');
    }
  };

  useEffect(() => {
    fetchAlgoToWarRate();
  }, []);

  const convertAlgoToWar = (algoAmount: number) => {
    return algoToWarRate ? Math.ceil(algoAmount * algoToWarRate) : 0;
  };

  const items = [
    { name: 'Baseball Cap', price: 55, },
    { name: 'Beanie', price: 45, }]
  
  const addToCart = (item: { name?: string; price: any; }) => {
    const itemWithAlgoPrice = {
      ...item,
      price: convertUsdToAlgo(item.price)
    };
    setCart([...cart, itemWithAlgoPrice]);
  };

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

  const convertUsdToAlgo = (usd: number) => {
    return usdToAlgoRate ? (usd / usdToAlgoRate).toFixed(4) : 0;
  };
  
  useEffect(() => {
    async function fetchConversionRate() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=algorand&vs_currencies=usd');
        const data = await response.json();
        setUsdToAlgoRate(data.algorand.usd);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
        toast.error('Failed to fetch conversion rate.');
      }
    }
  
    fetchConversionRate();
  }, []);
  
  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Opt In</title>
        <meta name="description" content="Your opt in description goes here." />
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

          <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
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
            {/* Set the background color here */}
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
                <Link href="/merch" onClick={toggleMenu}>
                  Merch
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

        {/* Modal for Connecting Wallet */}
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

      {/* Content */}
      <Box as="section" py={10} bgGradient={heroBgGradient}>
        <VStack spacing={4} align="center">
          <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">
            Explore our hat collection.
          </Text>

          {/* Product Grid (Placeholder) */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={8}>
            {items.map((item, index) => (
              <Box
                key={index}
                maxW="md"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                bg={heroBgGradient}
                boxShadow="md"
              >
                <Image src={item.image} alt={item.name} />
                <Box p={4} bgGradient={heroBgGradient}>
                  <Text fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="center">
                    {item.name}
                  </Text>
                  <Text mt={2} textAlign="center">{convertAlgoToWar(convertUsdToAlgo(item.price))} WAR</Text>
                  <Button
                    mt={4}
                    colorScheme={buttonColorScheme}
                    variant="solid"
                    color={buttonTextColor}
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Shopping Cart */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={4} align="center">
          <Text fontSize="4xl" fontWeight="bold" color={textColor} textAlign="center">
            Shopping Cart
          </Text>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <Text color={textColor}>Your cart is empty.</Text>
          ) : (
            <Box borderWidth="1px" rounded="lg" overflow="hidden" bg={boxColorScheme} p={4} boxShadow="md">
              {/* We will generate the list of items with their quantities here */}
              {cart.reduce((acc, item) => {
                const existingItem = acc.find((i) => i.name === item.name);
                if (existingItem) {
                  existingItem.quantity++; // Increment quantity if item exists
                } else {
                  acc.push({ ...item, quantity: 1 }); // Add new item with quantity 1 if it does not exist
                }
                return acc;
              }, []).map((item, index) => (
                <Text key={index} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="center">
                  {`${item.name} x ${item.quantity} - ${convertAlgoToWar(item.price * item.quantity)} WAR`}
                </Text>
              ))}
              {/* Calculate and display the total price here */}
              <Text fontWeight="bold" textAlign="center" mt={4}>
                {`Total: ${cart.reduce((total, item) => total + convertAlgoToWar(item.price), 0)} WAR`}
              </Text>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
function setCart(arg0: any[]) {
  throw new Error('Function not implemented.');
}

