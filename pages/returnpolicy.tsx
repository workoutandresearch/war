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
import { useWallet } from '@txnlab/use-wallet';
import { algodClient } from 'lib/algodClient';
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Returnpolicy() {
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

  const adImages = [
    // Array of ad image URLs
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174531316566466570/Untitled_Artwork.png?ex=6567ee87&is=65557987&hm=6d5746616708cc4db9084658dd90e03010761fa35a06cee3ad0d2e1ea2d4f37c&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174540521381826612/Untitled_Artwork.png?ex=6567f71a&is=6555821a&hm=bd7b5ae3c3c4a01cbfbb810af707f394f2d7c95faac19f705c802c6bd7efeb06&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174539986100568124/Untitled_Artwork.png?ex=6567f69a&is=6555819a&hm=a36ce5c1d33be9c4263048923faa00fdc994d3c51423f32ca5a94625cb86a7ab&',
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024, // Applies to screens smaller than 1024px
        settings: {
          arrows: false, // Hides arrows on smaller screens
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600, // Applies to screens smaller than 600px
        settings: {
          arrows: false, // Hides arrows on very small screens
          slidesToShow: 1,
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
              <Image 
                src={img} 
                alt={`Ad ${index + 1}`} 
                w="full" 
                h="auto" 
                objectFit="contain" 
                borderRadius="lg" // Rounded edges for the image
              />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

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
        <title>Workout and Research - Return Policy</title>
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

        {/* About Section (You can modify this section for your opt-in) */}
        <Box as="section" py={10} bgGradient={heroBgGradient} border={'black'}>
        <VStack spacing={4} align="center" border={'black'}>
            {/* Container for Box 1 and Box 2 */}
            <Box>
            {/* Return Policy - Part 1 */}
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }} border={'black'}>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Thank you for shopping with us. We value your business and strive to provide you with exceptional products and services.
                </Text>
            </Box>

            {/* Return Policy - Part 2 */}
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }} border={'black'}>
                <Text fontSize="lg" color={textColor} textAlign="center">
                In order to maintain the highest level of customer satisfaction, we kindly ask you to familiarize yourself with our No Return Policy.
                </Text>
            </Box>
            </Box>
            <Spacer h={4} />

            {/* Container for Box 3 and Box 4 */}
            <Box>
            {/* Return Policy - Part 3 */}
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }} border={'black'}>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Please note that all sales are final, and we do not accept returns on items purchased. This policy has been established to ensure the quality and authenticity of our products.
                </Text>
            </Box>
            {/* Return Policy - Part 4 */}
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }} border={'black'}>
                <Text fontSize="lg" color={textColor} textAlign="center">
                As a result, we encourage you to review the product descriptions, images, and sizing information carefully before making a purchase.
                </Text>
            </Box>
            </Box>
            <Spacer h={4} />
            <Box>
            {/* Return Policy - Part 5 */}
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }} border={'black'}>
                <Text fontSize="lg" color={textColor} textAlign="center">
                If you have any questions or concerns, please do not hesitate to reach out to our Customer Support team. We are always here to help and ensure you have the best possible shopping experience.
                </Text>
            </Box>
            </Box>
        </VStack>
        </Box>
    </Box>
  );
}
