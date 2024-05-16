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
  Divider,
  HStack,
  keyframes,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { algodClient } from 'lib/algodClient';
import { useWallet } from '@txnlab/use-wallet';
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import CustomLogo from 'components/BookPress';


export default function Onboard() {
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
  const lightDarkColor = useColorModeValue('black', 'white');
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

  const adImages = [
    // Array of ad image URLs
    'https://media.discordapp.net/attachments/999962417163419701/1240715667502792785/Untitled_Artwork_1.png?ex=66479202&is=66464082&hm=f25ed94e312b6118d59a2910d54707d0702e76ad80d67ad124ebfdc5ab1548d0&=&format=webp&quality=lossless&width=1393&height=325',
    'https://cdn.discordapp.com/attachments/999962417163419701/1169339622761967779/Untitled_Artwork.png?ex=6646f6a3&is=6645a523&hm=7ccd840614073b44bee5523e0b907f8a81c7ac376af7a51fe9cc9c84534137ba&',
    'https://media.discordapp.net/attachments/999962417163419701/1240715667255066686/Untitled_Artwork_2.png?ex=66479202&is=66464082&hm=da7776a3b0efccb92736bc9aae141073a359ea07dda41ab8de9d378c271a7fa8&=&format=webp&quality=lossless&width=1393&height=325',
    'https://media.discordapp.net/attachments/999962417163419701/1240715666978508980/Untitled_Artwork.png?ex=66479202&is=66464082&hm=76372a478f7b09065ed6c26ce36b23085cfde723f64da4260d16e819323fe063&=&format=webp&quality=lossless&width=1393&height=325',
  ];

  const adUrls = [
    'https://algorandtechnologies.com/',
    'https://discord.gg/gj4BVrVuBD',
    'https://vestige.fi/asset/1015673913',
    'https://chat.openai.com/g/g-dGy79T36H-workout-and-research',
  ];  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024, // Applies to screens smaller than 1024px
        settings: {
          arrows: false, // Hides arrows on smaller screens
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600, // Applies to screens smaller than 600px
        settings: {
          arrows: false, // Hides arrows on very small screens
          slidesToShow: 2,
          dots: false // Optionally hide dots on very small screens for more space
        }
      }
    ]
  };
  
  const AdCarousel = () => {
    // Use the same color value as used for the header background
    const borderColor = useColorModeValue('#ff3a00', 'transparent');
  
    return (
    <Box as="section" py={10} bg={headerBgColor}>
      <Slider {...settings}>
          {adImages.map((img, index) => (
          <Box 
          key={index} 
          p={2} // Padding around each image
          bg={headerBgColor}
          borderWidth="1px" // Border width
          borderColor={borderColor} // Matching the header background color
          borderRadius="lg" // Rounded edges
        >
          <Link href={adUrls[index]} isExternal>
            <Image 
              src={img} 
              alt={`Ad ${index + 1}`} 
              w="full" 
              h="auto" 
              objectFit="contain" 
              borderRadius="lg" // Rounded edges for the image
            />
          </Link>
        </Box>
      ))}
    </Slider>
  </Box>
    );
  };

  // Effect to fetch the WAR token balance when the active address changes
  useEffect(() => {
    if (activeAddress) {
      fetchWarTokenBalance(activeAddress);
    }
  }, [activeAddress]);

  // Function to handle color mode toggle and provide an appropriate icon
  const ToggleColorModeButton = () => (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon color={lightDarkColor} /> : <SunIcon color={lightDarkColor} />}
      onClick={toggleColorMode}
      aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
      variant="ghost"
      color={lightDarkColor}
    />
  );

  const introText = "The fitness industry is poised for a transformative leap with the integration of blockchain technology. Renowned for its security and transparency, blockchain brings a new level of trust and efficiency to fitness services. It offers a secure way to handle transactions, track workouts, and manage personal fitness data. This technology not only improves the reliability of fitness services but also opens up exciting opportunities for rewarding fitness achievements and enhancing customer engagement. By adopting blockchain, the fitness industry can offer a more connected, transparent, and user-focused experience."
  const walletWarningText = "*Ensure you NEVER share your 25-word seed phrase with anyone! Do not store or screenshot it on any device. Write it down on a piece of paper and store it securely*"
  const buttonText = useColorModeValue('linear(to-tr, red, yellow)', 'linear(to-tr, purple.600, cyan)')

  
    const animationKeyframes2 = keyframes`
        0% { transform: scale(1.04)}
        25% { transform: scale(1)}
        50% { transform: scale(1.04)}
        75% { transform: scale(1)}
        100% { transform: scale(1.04)}
        `
  
    const animation2 = `${animationKeyframes2} 3s ease-in-out infinite`

    return (
      <>
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
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
            <CustomLogo
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color={buttonTextColor} icon={undefined} ariaLabel={undefined}          />
          </Flex>

          <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
            Workout and Research
          </Text>
              
          <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
          <SiAlgorand size="24px" />
          </Button>
        </Flex>
        {/* Drawer for Hamburger Menu */}
        <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu} >
          <DrawerOverlay />
          <DrawerContent bg={drawerBgColor}> {/* Set the background color here */}
            <DrawerHeader borderBottomWidth="1px" textAlign="center">Menu</DrawerHeader>
            <DrawerBody>
            <VStack spacing={4}>
              {/* Conditional rendering based on whether a wallet is connected */}
                {activeAddress && warTokenBalance !== null && (
                  <Text color={textColor} pr={4}>
                    WAR Balance: {warTokenBalance}
                  </Text>
                )}
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/onboard" onClick={toggleMenu}>Onboard</Link>
                <Link href="/happeningnow" onClick={toggleMenu}>Happening Now</Link>
                <Link href="/tools" onClick={toggleMenu}>Tools</Link>
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
          <ModalContent bg={drawerBgColor}>
            <ModalHeader>Connect Your Algorand Wallet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Connect />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      <AdCarousel />
      <Box w='stretch' h="100%" bgGradient={heroBgGradient}>
      <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
            - Onboard Center -
          </Text>            
          <Center>
            <VStack w='80%' alignItems='center' spacing='36px'>
              <Text fontSize='24px' color={buttonTextColor}>
                1 - Intro
              </Text>
              <Text textAlign='center' fontWeight='hairline' fontSize='20px' textColor={textColor}>
                {introText}
              </Text>
              <Divider w='30%' minW='240px' borderColor={textColor} />
              <Text fontSize='24px' color={buttonTextColor}>
                2 - Wallets
              </Text>
              <HStack w='90%' maxW='600px' spacing='60px' justifyContent='center'>
                <VStack alignItems='center' spacing='36px'>
                  <Text textAlign='center' fontFamily="Share Tech Mono" fontSize='20px' textColor={textColor}>
                    Pera
                  </Text>
                </VStack>
                <VStack alignItems='center'>
                <Text textAlign='center' fontFamily="Share Tech Mono" fontSize='20px' textColor={textColor}>
                  Defly
                </Text>
                </VStack>
                <VStack alignItems='center'>
                <Text textAlign='center' fontFamily="Share Tech Mono" fontSize='20px' textColor={textColor}>
                  Daffi
                </Text>
                </VStack>
              </HStack>
              <Text textAlign='center' fontWeight='hairline' fontSize='16px' textColor={textColor}>
                {walletWarningText}
              </Text>
              <Divider w='30%' minW='240px' borderColor={textColor} />
              <Text className="hFont" textColor={textColor}>
                3 - Charts and Aggregators
              </Text>
              <VStack h='stretch' alignItems='center' justifyContent='space-between'>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Vestige</Text>
                    </Box>
              </VStack>
              <Divider w='30%' minW='240px' borderColor={textColor} />
              <Text fontSize='24px' color={buttonTextColor}>
                4 - DeFi
              </Text>
              <VStack alignItems='center' justifyContent='space-between' spacing='36px'>
                  <Text mb={4} textAlign='center' fontFamily="Share Tech Mono" fontSize='16px' textColor={textColor}>
                    Below are examples of the top projects leading the Algorand DeFi space:
                  </Text>
                  <HStack py='40px' spacing='60px'>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Tinyman</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Humble DeFi</Text>
                    </Box>
                  </HStack>
                  <HStack py='40px' spacing='60px'>
                  <Box as={motion.div} animation={animation2} boxSize='24'>
                    <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Folks Finance</Text>
                  </Box>
                  <Box as={motion.div} animation={animation2} boxSize='24'>
                    <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>XBacked</Text>
                  </Box>
                  </HStack>
              </VStack>
              <Divider w='30%' minW='240px' borderColor={textColor} />
              <Text fontSize='24px' color={buttonTextColor}>
                5 - NFTs
              </Text>
              <VStack h='stretch' alignItems='center' justifyContent='space-between' spacing='36px'>
                  <Text textAlign='center' fontFamily="Share Tech Mono" fontSize='16px'  textColor={textColor}>
                    Analytics and Data
                  </Text>
                  <HStack p={2} spacing='36px'>
                    <Box as={motion.div} animation={animation2} boxSize='28'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>NFTExplorer</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='28'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Asalytic</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='28'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Gator Finance</Text>
                    </Box>
                  </HStack>
                  <Text pt={8} textAlign='center' fontFamily="Share Tech Mono" fontSize='16px' textColor={textColor}>
                    Marketplaces
                  </Text>
                  <HStack p={2} spacing='36px'>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>ALGOxNFT</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={6} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Shufl</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>AlgoGems</Text>
                    </Box>
                  </HStack>
              </VStack>
              <Divider w='30%' minW='240px' borderColor={textColor} />
              <Text fontSize='24px' color={buttonTextColor}>
                6 - Develop and Build
              </Text>
              <VStack h='stretch' alignItems='center' justifyContent='space-between' spacing='36px'>
                  <Text textAlign='center' fontFamily="Share Tech Mono" fontSize='16px' textColor={textColor}>
                    Everything you need to build efficiently on Algorand
                  </Text>
                  <HStack p={2} spacing='36px'>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Dev Portal</Text>
                    </Box>
                    <Box as={motion.div} animation={animation2} boxSize='24'>
                      <Text mb={1} textAlign='center' fontFamily="Share Tech Mono" fontSize='14px' textColor={textColor}>Reach Lang</Text>
                    </Box>
                  </HStack>
              </VStack>
              
            </VStack>
            </Center>
      </Box>
      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center" color={textColor}>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
        </Flex>
      </Box>
    </>
    )
  }