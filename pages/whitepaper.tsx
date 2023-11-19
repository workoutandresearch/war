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
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomLogo from 'components/BookPress';

export default function Whitepaper() {
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
  const pageBgGradient = useColorModeValue('none', 'linear(to-b, #0000FF, #000000)'); // Seamless gradient for dark mode
  const drawerBgColor = useColorModeValue('#ff3a00', 'blue');

  const footerBgColorLight = 'linear(to-b, #ffca80, #ffd7b5)'; // New gradient for light mode
    const footerBgColorDark = 'transparent'; // Keep dark mode as it was
    const footerBgColor = useColorModeValue(footerBgColorLight, footerBgColorDark);

    const adImages = [
      // Array of ad image URLs
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174531316566466570/Untitled_Artwork.png?ex=6567ee87&is=65557987&hm=6d5746616708cc4db9084658dd90e03010761fa35a06cee3ad0d2e1ea2d4f37c&',
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174540521381826612/Untitled_Artwork.png?ex=6567f71a&is=6555821a&hm=bd7b5ae3c3c4a01cbfbb810af707f394f2d7c95faac19f705c802c6bd7efeb06&',
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174539986100568124/Untitled_Artwork.png?ex=6567f69a&is=6555819a&hm=a36ce5c1d33be9c4263048923faa00fdc994d3c51423f32ca5a94625cb86a7ab&',
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174531316566466570/Untitled_Artwork.png?ex=6567ee87&is=65557987&hm=6d5746616708cc4db9084658dd90e03010761fa35a06cee3ad0d2e1ea2d4f37c&',
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174540521381826612/Untitled_Artwork.png?ex=6567f71a&is=6555821a&hm=bd7b5ae3c3c4a01cbfbb810af707f394f2d7c95faac19f705c802c6bd7efeb06&',
      'https://cdn.discordapp.com/attachments/1125446630775201882/1174539986100568124/Untitled_Artwork.png?ex=6567f69a&is=6555819a&hm=a36ce5c1d33be9c4263048923faa00fdc994d3c51423f32ca5a94625cb86a7ab&',
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
    <CustomLogo
    onClick={toggleColorMode}
    aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
    variant="ghost"
    color={buttonTextColor} icon={undefined} ariaLabel={undefined}          />
  );

  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Whitepaper</title>
        <meta name="description" content="Your WhitepaperWhitepaper description goes here." />
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

      {/* Hero Section (You can modify this section for your Whitepaper) */}
      <Box as="section" bgGradient={heroBgGradient} h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
        <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">
            Workout And Research
          </Text>
          <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
            WAR Token created on 01.19.2023
          </Text>
          <Text fontSize="xl" color={textColor} mt={4} textAlign="center">
            Token ASA 1015673913
          </Text>
        </Container>
      </Box>

      {/* About Section (You can modify this section for your Whitepaper) */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={6} align="center">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
            Introduction
          </Text>

          <Box maxW="container.lg" mx="auto">
            <Text fontSize="xl" textAlign="center" color={textColor}>
              Fitness is a crucial aspect of our daily lives that often gets overlooked. It is not just 
              about looking good, but feeling good as well. In todays fast paced world, it can be 
              challenging to find the time and motivation to stay fit and healthy. That is why we are 
              excited to announce the launch of our new project, WAR, which combines the power of 
              blockchain technology with the world of fitness.
            </Text>
          </Box>
        </VStack>
      </Box>
      {/* Features Section */}
        <Box as="section" py={10} bgGradient={featuresBgGradient}>
        <VStack spacing={6} align="center">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
            Why WAR is the Future of Fitness
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            {/* Feature 1 */}
            <VStack spacing={4} align="center" border="1px solid black" p={5}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" color={textColor}>
                Easy Accessibility
                </Text>
                <Text fontSize="md" textAlign="center" color={textColor}>
                WAR is built on the Algorand blockchain, which is known for thier high performance, security, and scalability. This means that it is easy to use and accessible to everyone, regardless of their technical expertise. The token can be easily stored in a wallet and used to purchase fitness merchandise with just a few clicks.
                </Text>
            </VStack>
            {/* Feature 2 */}
            <VStack spacing={4} align="center" border="1px solid black" p={5}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" color={textColor}>
                Deals and Discounts
                </Text>
                <Text fontSize="md" textAlign="center" color={textColor}>
                As a holder of WAR, you will have access to exclusive deals and discounts on the best fitness products available. This means that you will be able to get the best deals on the latest workout clothes and other products we may have to offer. This is a huge advantage as it will allow you to save money and stay on top of the latest trends in fitness.
                </Text>
            </VStack>
            {/* Feature 3 */}
            <VStack spacing={4} align="center" border="1px solid black" p={5}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" color={textColor}>
                Community Support
                </Text>
                <Text fontSize="md" textAlign="center" color={textColor}>
                WAR is more than just a token, it is a community. By holding WAR, you will be supporting fitness communities and promoting a healthy lifestyle. You will be able to connect with other fitness enthusiasts and share tips, advice, and inspiration. This will help to create a positive and supportive environment for everyone who is interested in fitness.
                </Text>
            </VStack>
            {/* Feature 4 */}
            <VStack spacing={4} align="center" border="1px solid black" p={5}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" color={textColor}>
                Innovative Technology
                </Text>
                <Text fontSize="md" textAlign="center" color={textColor}>
                Blockchain technology is the backbone of WAR. It provides transparency and security, ensuring that all transactions are recorded and traceable. This means that you can trust that your purchases are secure and that your data is protected.
                </Text>
            </VStack>
            </SimpleGrid>
        </VStack>
        </Box>

        {/* Conclusion Section (You can modify this section for your Whitepaper) */}
        <Box as="section" py={10} bgGradient={footerBgColor}>
            <VStack spacing={6} align="center">
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
            Conclusion
            </Text>

            <Box maxW="container.lg" mx="auto">
                <Text fontSize="xl" textAlign="center" color={textColor}>
                WAR is a revolutionary new token that combines the power of blockchain technology with the world of fitness. It provides access to exclusive deals and discounts on the best fitness products available from Workout and Research, making it easy and accessible for everyone. With WAR, you will be supporting fitness communities and promoting a healthy lifestyle. We invite you to join our community and become a part of the future of fitness.
                </Text>
            </Box>
            </VStack>
        </Box>
    </Box>
  );
}
