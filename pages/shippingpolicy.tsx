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
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomLogo from 'components/BookPress';

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

  const adImages = [
    // Array of ad image URLs
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174531316566466570/Untitled_Artwork.png?ex=6567ee87&is=65557987&hm=6d5746616708cc4db9084658dd90e03010761fa35a06cee3ad0d2e1ea2d4f37c&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174540521381826612/Untitled_Artwork.png?ex=6567f71a&is=6555821a&hm=bd7b5ae3c3c4a01cbfbb810af707f394f2d7c95faac19f705c802c6bd7efeb06&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1174539986100568124/Untitled_Artwork.png?ex=6567f69a&is=6555819a&hm=a36ce5c1d33be9c4263048923faa00fdc994d3c51423f32ca5a94625cb86a7ab&',
    'https://cdn.discordapp.com/attachments/1125446630775201882/1175592549445017660/Untitled_Artwork.png?ex=656bcae1&is=655955e1&hm=867bb807ff34e173e94d5e7cbc09d737946f2b9d47e3ad49f0e4596ff779cbc4&',
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
