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
import { useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using this library for Carousel

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
  const [warTokenBalance, setWarTokenBalance] = useState(null);

  // Fetch WAR token balance
  const fetchWarTokenBalance = async (address: string) => {
    try {
      const accountInfo = await algodClient.accountInformation(address).do();
      const assets = accountInfo['assets'];
      const warAsset = assets.find((asset: { [x: string]: any; }) => asset['asset-id'] === 1015673913); // Replace WAR_TOKEN_ID with actual ID
      setWarTokenBalance(warAsset ? warAsset.amount : 0);
    } catch (error) {
      console.error('Error fetching WAR token balance:', error);
      setWarTokenBalance(null);
    }
  };

  // Effect to fetch the WAR token balance when the active address changes
  useEffect(() => {
    if (activeAddress) {
      fetchWarTokenBalance(activeAddress);
    }
  }, [activeAddress]);

  const sendOptIn = async () => {
    setLoading(true);
    try {
      if (!activeAddress) {
        // Wallet Not Connected, open the modal
        onOpen();
        setLoading(false);
        return;
      }
  
      const suggestedParams = await algodClient.getTransactionParams().do()
      suggestedParams.fee = 1000
      suggestedParams.flatFee = true
      const note = Uint8Array.from('Successfully Opted In To Workout and Research!'.split("").map(x => x.charCodeAt(0)))
  
      const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  from: activeAddress,
                  to: activeAddress,
                  amount: 0,
                  assetIndex: 1015673913,
                  suggestedParams,
                  note,
                })

      const encodedTransaction = algosdk.encodeUnsignedTransaction(txn)

      toast.loading('Awaiting Signature...', { id: 'txn', duration: Infinity })

      const signedTransaction = await signTransactions([encodedTransaction])

      toast.loading('Sending transaction...', { id: 'txn', duration: Infinity })

      algodClient.sendRawTransaction(signedTransaction).do()

      console.log(`Successfully Opted In!`)

      toast.success(`Transaction Successful!`, {
        id: 'txn',
        duration: 5000
      })
      setLoading(false)
    } catch (error) {
      console.error(error);
      toast.error('Oops! Opt In Failed!', { id: 'txn' });
    }
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

      {/* Hero Section */}
      <Box as="section" bgGradient={heroBgGradient} h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">
            OPT-IN TO $WAR
          </Text>
          <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
            ASA ID - 1015673913
          </Text>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={4} align="center">
          {/* Add a button with an onClick handler */}
          <VStack spacing={4}>
          <Text fontSize="sm" color={textColor} mt={4} textAlign="center">
            By clicking Opt In, you acknowledge and agree to the terms and conditions associated with this opt-in process.
          </Text>
          <Spacer h={4} />
          <Text fontSize="sm" color={textColor} mt={4} textAlign="center">
            Please review our <Link href="/termscond">Terms and Conditions</Link> and <Link href="/privacypolicy">Privacy Policy</Link> before proceeding.
          </Text>
          <Spacer h={4} />
            <Button
              as="a"
              colorScheme={buttonColorScheme}
              color={textColor}
              onClick={sendOptIn} // Add onClick handler here
            >
              Opt In
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}