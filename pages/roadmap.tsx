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
import { useWallet } from '@txnlab/use-wallet';
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomLogo from 'components/BookPress';

export default function Roadmap() {
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

  const adImages = [
    // Array of ad image URLs
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174531316566466570/Untitled_Artwork.png?ex=6567ee87&is=65557987&hm=6d5746616708cc4db9084658dd90e03010761fa35a06cee3ad0d2e1ea2d4f37c&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174540521381826612/Untitled_Artwork.png?ex=6567f71a&is=6555821a&hm=bd7b5ae3c3c4a01cbfbb810af707f394f2d7c95faac19f705c802c6bd7efeb06&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174539986100568124/Untitled_Artwork.png?ex=6567f69a&is=6555819a&hm=a36ce5c1d33be9c4263048923faa00fdc994d3c51423f32ca5a94625cb86a7ab&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1175592549445017660/Untitled_Artwork.png?ex=656bcae1&is=655955e1&hm=867bb807ff34e173e94d5e7cbc09d737946f2b9d47e3ad49f0e4596ff779cbc4&',
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
            <CustomLogo
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color={buttonTextColor} icon={undefined} ariaLabel={undefined}          />
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

      {/* Hero Section (You can modify this section for your roadmap) */}
      <Box as="section" bgGradient={heroBgGradient} h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">
            Roadmap
          </Text>
          <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
          This roadmap outlines a plan from early 2023 to early 2025. Initially, it focuses on launching a token, creating a website, and designing clothes. Then, it aims to build partnerships, launch the clothing line, and add new features. The plan also includes expanding internationally, improving customer experience, and building a community.
          </Text>
        </Container>
      </Box>

      {/* About Section (You can modify this section for your roadmap) */}
        <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={6} align="center">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
            Roadmap Section
            </Text>

            <SimpleGrid columns={2} spacing={4} maxW="container.lg" mx="auto">
            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q1-Q2 2023
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Launching the token on Algorand and creating initial liquidity for the token. Developing a user-friendly website.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q2-Q3 2023
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Developing and designing the clothing line. Creating a brand identity, designing the clothes, and sourcing materials.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q3-Q4 2023
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Building partnerships with retailers and online marketplaces to sell the clothing. This includes developing relationships with brick-and-mortar stores and online marketplaces.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q4-Q1 2023-2024
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Launching the clothing line. This includes announcing the launch, releasing the clothes for sale, and promoting the clothing and the use of the token through marketing and advertising campaigns.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q1-Q2 2024
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Adding new features to the token and clothing line. This includes adding new designs and styles of clothing, as well as adding new features to the token.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor }textAlign="center">
                Q2-Q3 2024
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Researching and entering new international markets, translating the website and other materials, and adapting the business to comply with regulations.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q3-Q4 2024
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Continuously improving the customer experience. This includes gathering feedback, implementing changes, and providing exceptional customer service to maintain customer loyalty.
                </Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" bg={boxColorScheme} _hover={{ shadow: "lg" }}>
                <Text fontSize="xl" fontWeight="bold" color={textColor} textAlign="center">
                Q4 2024-Q1 2025
                </Text>
                <Text fontSize="lg" color={textColor} textAlign="center">
                Focus on developing the community. This includes creating a community portal, hosting events and meetups, and encouraging token holders to engage with each other and with the business.
                </Text>
            </Box>
            </SimpleGrid>
        </VStack>
        </Box>
    </Box>
  );
}
