import Head from 'next/head';
import {Box, Button, VStack, Text, Image, Link, Container, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useColorMode, SimpleGrid, ScaleFade, useColorModeValue,IconButton, Center, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { algodClient } from 'lib/algodClient';
import { useWallet } from '@txnlab/use-wallet';
import { SiDiscord } from 'react-icons/si';
import { SiAlgorand } from "react-icons/si";
import { features } from 'process';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomLogo from 'components/BookPress';


export default function UserPr() {
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
  const [userData, setUserData] = useState({
    discordID: null,
    // ... include other user data fields as needed
  });
  const fetchDiscordID = async (walletAddress: string) => {
    try {
      const response = await fetch(`/api/getDiscordId?wallet=${walletAddress}`);
      const data = await response.json();
      return data.discordID;
    } catch (error) {
      console.error('Error fetching Discord ID:', error);
      return null;
    }
  };

  useEffect(() => {
    const retrieveDiscordID = async () => {
      if (activeAddress) {
        const discordID = await fetchDiscordID(activeAddress);
        setUserData({ ...userData, discordID });
      }
    };
  
    retrieveDiscordID();
  }, [activeAddress]);

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
    'https://cdn.discordapp.com/attachments/999962417163419701/1240715667502792785/Untitled_Artwork_1.png?ex=66bb9602&is=66ba4482&hm=976167e21b37a500238ec50f0c645034f3109d5915ca5847341631b14bca38e5&',
    'https://cdn.discordapp.com/attachments/999962417163419701/1169339622761967779/Untitled_Artwork.png?ex=66bba363&is=66ba51e3&hm=bbf13d43244f72321653ed9c75a9384b40deb341a6cb01d58645a3dbb32bf6be&',
    'https://media.discordapp.net/attachments/999962417163419701/1240715667255066686/Untitled_Artwork_2.png?ex=66bb9602&is=66ba4482&hm=a1600845e0db7942d0eaedac339a97c888ba4bb3824596809f8eb98469e08c96&=&format=webp&quality=lossless&width=1115&height=260',
    'https://media.discordapp.net/attachments/999962417163419701/1240715666978508980/Untitled_Artwork.png?ex=66bb9602&is=66ba4482&hm=1188acbc835e97ab2354983fe14986feb77a9057123d8103f92246a1ddc2dc5f&=&format=webp&quality=lossless&width=1115&height=260',
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

  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'} bg={headerBgColor}>
      <Head>
        <title>User Profile - Workout and Research</title>
        <meta name="description" content="Manage your user profile" />
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
                <Link href="/userprofile" onClick={toggleMenu}>My Profile</Link>
                <Link href="/happeningnow" onClick={toggleMenu}>Happening Now</Link>
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

      <AdCarousel />

    {/* User Profile Section */}
    <Container maxW="container.md" py={10}>
    <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
        My Profile
        </Text>
        <Box p={5} shadow="md" borderWidth="1px">
        <Text fontWeight="bold">Wallet: {activeAddress && `${activeAddress.slice(0, 5)}...${activeAddress.slice(-5)}`}</Text>
        <Text fontWeight="bold">WAR Balance: {warTokenBalance}</Text>
        {userData && userData.discordID && (
        <Text fontWeight="bold">Discord ID: {userData.discordID}</Text>
        )}
        {/* Additional user-related information can be added here */}
        </Box>
    </VStack>
    </Container>

      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center" color={textColor}>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
}
function setUserData(arg0: any) {
    throw new Error('Function not implemented.');
}

function fetchDataFromBackend(activeAddress: string) {
    throw new Error('Function not implemented.');
}

