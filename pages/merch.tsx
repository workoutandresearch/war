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
  List,
  ListItem,
  DrawerFooter,
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import { MdOutlineShoppingCart } from "react-icons/md";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SetStateAction, useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';
import { addToCart } from 'components/addtocart'; // Import the addToCart function
import { AiFillShop } from "react-icons/ai";
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomLogo from 'components/BookPress';
import Checkout from '../components/checkout.js';

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
  // Define background color styles for light and dark mode
  const lightModeBg = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
  const darkModeBg =  useColorModeValue('none', 'linear(to-b, #0000FF, #000000)');
  const lightDarkColor = useColorModeValue('black', 'white');
  
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const toggleCartModal = () => setIsCartModalOpen(!isCartModalOpen);
  // Function to update cart items count (you'll need to implement the logic)
  const updateCartItemCount = () => {
    const cart = getCartItems();
    const itemCount = cart.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener('storage', updateCartItemCount);
    
    return () => {
      window.removeEventListener('storage', updateCartItemCount);
    };
  }, []);

  // Function to fetch cart items from local storage
  const getCartItems = () => {
    // Check if window is defined (i.e., running in the browser)
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    }
    // Return a default value if not running in a browser
    return [];
  };  

  // Function to remove an item from the cart
  const removeFromCart = (productId: any) => {
    let cartItems = getCartItems();
    cartItems = cartItems.filter((item: { id: any; }) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartItemCount(); // Update the cart item count
    // Re-render the component to reflect changes
    // Depending on your setup, you may need to use a state variable to trigger a re-render
  };
  
  const products = [
    // Example product data
    { id: 1, name: "Beanie", price: 1, imageUrl: "https://media.discordapp.net/attachments/999962417163419701/1092867880057573557/beanie-removebg-preview.png?width=486&height=450" },
    { id: 2, name: "Baseball Cap", price: 55, imageUrl: "https://media.discordapp.net/attachments/999962417163419701/1097212741502107881/preview-removebg-preview.png?width=468&height=467" },
    // ... more products
  ];

  const [usdToAlgoRate, setUsdToAlgoRate] = useState(0);
  const [algoToWarRate, setAlgoToWarRate] = useState(0);

  useEffect(() => {
    // Function to fetch USD to ALGO rate
    const fetchUsdToAlgoRate = async () => {
      const cgBaseUrl = "https://api.coingecko.com/api/v3";
      const cgEndpoint = "/simple/price";
      const cgParams = new URLSearchParams({
        ids: "algorand",
        vs_currencies: "usd"
      });
    
      try {
        const response = await fetch(`${cgBaseUrl}${cgEndpoint}?${cgParams.toString()}`);
        const data = await response.json();
        const usdToAlgo = data.algorand.usd;
        setUsdToAlgoRate(usdToAlgo); // Assuming you have a state variable 'setUsdToAlgoRate'
      } catch (error) {
        console.error('Error fetching USD to ALGO rate:', error);
        // Handle errors appropriately
      }
    };    
  
    // Function to fetch ALGO to WAR rate
    const fetchAlgoToWarRate = async () => {
      const asaId = "1015673913"; // Replace with your actual ASA ID
      const url = `https://free-api.vestige.fi/asset/${asaId}/price?currency=%24WAR`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        const algoToWar = 1 /data.price; // Assuming the API returns the WAR to ALGO rate
        setAlgoToWarRate(algoToWar); // Assuming you have a state variable 'setAlgoToWarRate'
      } catch (error) {
        console.error('Error fetching ALGO to WAR rate:', error);
        // Handle errors appropriately
      }
    };    
  
    fetchUsdToAlgoRate();
    fetchAlgoToWarRate();
    // Any other data fetching logic
  }, []);
  
  const getWarPrice = (usdPrice: number) => {
    const warPrice = usdPrice / usdToAlgoRate * algoToWarRate;
    return Math.floor(warPrice); // Round down to the nearest whole number
  };  
  
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
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Merch</title>
        <meta name="description" content="Merch Coming Soon" />
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
              color={buttonTextColor} icon={undefined} ariaLabel={undefined}          
              />

              {/* Shopping Cart Icon */}
              <Button colorScheme={buttonColorScheme} onClick={toggleCartModal}>
                <MdOutlineShoppingCart fontSize='md' />
                {cartItemCount > 0 && (
                  <Box as="span" ml={2} color={textColor}>
                    {cartItemCount}
                  </Box>
                )}
              </Button>

              {/* Shopping Cart Drawer */}
              <Drawer isOpen={isCartModalOpen} placement="left" onClose={toggleCartModal}>
                <DrawerOverlay />
                <DrawerContent bg={drawerBgColor}>
                  <DrawerHeader borderBottomWidth="1px">Your Shopping Cart</DrawerHeader>
                  <DrawerBody>
                    {getCartItems().map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; id: any; }, index: Key | null | undefined) => (
                      <Box key={index} justifyContent="space-between" alignItems="center" p={2}>
                        <Flex direction="column" align="center" flexGrow={1}>
                          <Text>{item.name} - Qty: {item.quantity}</Text>
                          <Button size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                        </Flex>
                      </Box>
                    ))}

                    {getCartItems().length === 0 ? (
                      <Text>Your cart is empty.</Text>
                    ) : (
                      <Text textAlign="center">Total in WAR: {getCartItems().reduce((total: number, item: { price: number; quantity: number; }) => total + getWarPrice(item.price) * item.quantity, 0).toFixed()} WAR</Text>
                    )}
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={toggleCartModal}>
                      Close
                    </Button>
                    <Button colorScheme={buttonColorScheme} onClick={() => Checkout(signTransactions, activeAddress, usdToAlgoRate, algoToWarRate)}>Checkout</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
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

  {/* Hero Section with Modern Enhancements */}
  <Box as="section" bgGradient={heroBgGradient} minH="60vh" textAlign="center">
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} alignItems="center">
        {products.map((product) => (
          <Box key={product.id} shadow="md" borderWidth="1px" borderRadius="lg" p={5} border="black" transition="transform 0.3s" _hover={{ transform: 'scale(1.05)' }}>
            <Image src={product.imageUrl} alt={product.name} borderRadius="lg" loading="lazy" />
            <Text fontSize="xl" fontWeight="bold" mt={2}>{product.name}</Text>
            <Text fontSize="md" mt={1}>{getWarPrice(product.price)} WAR</Text>
            <Button colorScheme={buttonColorScheme} textColor={buttonTextColor} mt={4} onClick={() => addToCart(product, 1)} _hover={{ opacity: 0.8 }}>
              Coming Soon
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>

      {/* About Section */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={6} align="center">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
          Connect and Engage with Our Community
        </Text>

          <Box maxW="container.lg" mx="auto">
            <Text fontSize="xl" textAlign="center" color={textColor}>
              Connect with fellow enthusiasts, stay updated on the latest news, and engage in discussions about our project. Empower your journey with the latest tools added to the server!
            </Text>
          </Box>
          <Button as={Link} href="https://discord.gg/JpwXaKAvGM" colorScheme={buttonColorScheme} target="_blank" color={buttonTextColor}>
            Join The Community
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={10} bgGradient={featuresBgGradient}>
        <Container maxW="container.lg">
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6} color={textColor}>Community Participation</Text>
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
            {/* More feature sections can follow the same pattern */}
          </SimpleGrid>
        </Container>
      </Box>
     
      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
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