// pages/tools.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Image, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import CustomLogo from 'components/BookPress';
import { useWallet } from '@txnlab/use-wallet';
import { algodClient } from 'lib/algodClient';
import Connect from 'components/Connect';
import Timer from 'components/Timer'; // Import the Timer component
import BodyFatCalculator from 'components/BodyFatCalculator';
import OneRepMaxCalculator from 'components/Onerepmax'; // Import the OneRepMaxCalculator component
import ProgressiveOverload from 'components/ProgressiveOverload'; // Import the OneRepMaxCalculator component
import CalisthenicsSession from '../components/CalisthenicsSession';
import CalorieCalculator from 'components/CalorieCalculator';
import CalorieCounter from 'components/CalorieCounter';
import WorkoutTracker from 'components/workoutracker'; // Adjust the path as per your file structure
import { SiAlgorand } from "react-icons/si";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import CreateUserProfile from 'components/CreateUserProfile';
import WorkoutAndResearchGPT from 'components/workoutandresearchGPT';
import WorkoutLibrary from 'components/WorkoutLibrary';
import Macro from 'components/Macro'; // Adjust the path as per your file structure
import MeditationLibrary from 'components/MeditationLibrary'; // Import a list of meditation techniques
import meditationTechniquesData from 'components/meditationTechniques'; // Import a list of meditation techniques

export default function Tools() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');
  const buttonColorScheme = useColorModeValue('orange', 'blue');
  const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
  const buttonTextColor = colorMode === 'dark' ? 'white' : 'inherit'; // Use colorMode to determine text color
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);

  // Define the background gradients for light and dark modes
  const headerBgColor = useColorModeValue('#ff3a00', 'transparent');
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');
  const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
  const footerBgColor = useColorModeValue('#ffca80', 'transparent');
  const pageBgGradient = useColorModeValue('none', 'linear(to-b, #0000FF, #000000)'); // Seamless gradient for dark mode
  const lightDarkColor = useColorModeValue('black', 'white');
  const drawerBgColor = useColorModeValue('#ff3a00', 'blue');
  const headerBgGradient = useColorModeValue('#ff3a00', 'transparent');
  const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  const { activeAddress, signTransactions } = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const [warTokenBalance, setWarTokenBalance] = useState(null);
  const [ userID, setUserID ] = useState<any>(null)

  const handleToolChange = (tool: React.SetStateAction<string>) => {
    console.log('Selected Tool:', tool); // Add this line to debug
    setSelectedTool(tool);
  };  
  
  const calisthenicsExercises = [
    {
      name: 'Neck Rolls Clockwise',
      description: 'Perform gentle neck rolls in a clockwise motion to release neck tension and improve flexibility.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and relax your shoulders. Slowly roll your head in a circular motion, starting from one side and moving to the other.'
    },
    {
      name: 'Neck Rolls Counter-Clockwise',
      description: 'Perform gentle neck rolls in a counter-clockwise motion to promote neck mobility and alleviate stiffness.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and relax your shoulders. Slowly roll your head in a circular motion, starting from one side and moving to the other.'
    },
    {
      name: 'Big Arm Circles Clockwise',
      description: 'Engage in big arm circles in a clockwise motion - perform large circles for 15 seconds to warm up your shoulder muscles and enhance circulation.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make large clockwise circular motions with your arms, moving them forward for 15 seconds.'
    },
    {
      name: 'Big Arm Circles Counter-Clockwise',
      description: 'Engage in big arm circles in a counter-clockwise motion - perform large circles for 15 seconds to boost shoulder mobility and blood flow.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make large circular motions with your arms, moving them forward for 15 seconds.'
    },
    {
      name: 'Small Arm Circles Clockwise',
      description: 'Perform small arm circles in a clockwise motion - make small circles for 15 seconds to activate shoulder muscles and enhance joint stability.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make small clockwise circular motions with your arms, moving them forward for 15 seconds.'
    },
    {
      name: 'Small Arm Circles Counter-Clockwise',
      description: 'Perform small arm circles in a counter-clockwise motion - make small circles for 15 seconds to improve shoulder flexibility and reduce tension.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make small circular counter-clockwise motions with your arms, moving them forward for 15 seconds.'
    },
    {
      name: 'Touch Your Toes',
      description: 'Gently bend forward and reach for your toes for 30 seconds to stretch your lower back and hamstrings effectively.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and slightly bend your knees. Slowly bend forward from your hips, maintaining a straight back. Reach down towards your toes as far as you can comfortably go. Hold the stretch for 30 seconds.'
    },
    {
      name: 'Left Leg Stretch',
      description: 'Stretch your left leg by shifting your weight to your right leg and bending towards the left for 30 seconds. This exercise enhances lateral flexibility and balance.',
      time: '30 seconds',
      instructions: 'Stand with your legs wider than shoulder-width apart. Shift your weight to your right leg. Slowly bend your body to the left, reaching your left arm towards your left leg. Feel the stretch along the right side of your body. Hold the stretch for 30 seconds.'
    },
    {
      name: 'Right Leg Stretch',
      description: 'Stretch your right leg by shifting your weight to your left leg and bending towards the right for 30 seconds. This exercise enhances lateral flexibility and balance.',
      time: '30 seconds',
      instructions: 'Stand with your legs wider than shoulder-width apart. Shift your weight to your left leg. Slowly bend your body to the right, reaching your right arm towards your right leg. Feel the stretch along the left side of your body. Hold the stretch for 30 seconds.'
    }
    ];

    const tools = [
      { name: '1RM Calculator', id: 'onerepmax' },
      { name: 'Body Fat %', id: 'bodyfat' },
      { name: 'Cal. Calculator', id: 'calculator' },
      { name: 'Cal. Counter', id: 'counter' },
      { name: 'Calisthenics', id: 'calisthenics' },
      { name: 'GPT Model', id: 'workoutandresearchGPT' },
      { name: 'Macros Calc.', id: 'macro' },
      { name: 'Meditation Tech', id: 'MeditationLibrary' },
      { name: 'Prog. Overload', id: 'progressiveoverload' },
      { name: 'Timer', id: 'timer' },
      { name: 'Workout Library', id: 'WorkoutLibrary' },
      { name: 'Workout Tracker', id: 'workouttracker' }
      // Add more tools as needed
    ];    

  // Fetch WAR token balance
  const fetchWarTokenBalance = async (address: string) => {
    try {
      const accountInfo = await algodClient.accountInformation(address).do();
      const assets = accountInfo['assets'];
      const warAsset = assets.find((asset: { [x: string]: any }) => asset['asset-id'] === 1015673913); // Replace WAR_TOKEN_ID with actual ID
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const startSession = () => {
    setSessionStarted(true);
  };
  // State for the countdown timer
  const [countdown, setCountdown] = useState(30);
  const [isCountingDown, setIsCountingDown] = useState(false);

  // Custom hook to handle interval
  useInterval(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    } else {
      setIsCountingDown(false);
    }
  }, isCountingDown ? 1000 : null); // Interval runs every second if counting down

  // Function to start the countdown
  const startCountdown = () => {
    setCountdown(30); // Reset countdown to 30 seconds
    setIsCountingDown(true);
  };
  const [selectedTool, setSelectedTool] = useState('calisthenics');

  // Define the disclaimer text as a constant
  const disclaimerText =
    "Disclaimer: Please note that if you refresh or exit this page, your progress may be lost.";

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
  
  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Tools</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <IconButton
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              aria-label="Open Menu"
              variant="ghost"
              color={buttonTextColor}
            />
          <CustomLogo
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color={buttonTextColor} icon={undefined} ariaLabel={undefined}          />
          </Flex>
          <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
            Workout and Research
          </Text>
              {/* Conditional rendering based on whether a wallet is connected */}
              {activeAddress && warTokenBalance !== null && (
                <Text color={textColor} pr={4}>
                  WAR Balance: {warTokenBalance}
                </Text>
              )}
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

        <AdCarousel />
        
      </Box>
      <Head>
        <title>Workout and Research - Tools</title>
        <meta name="description" content="Your ultimate virtual workout and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justify="center" align="center" my={4} bgGradient={heroBgGradient}>
        <Grid templateColumns="repeat(3, 2fr)" gap={4}>
          {tools.map((tool) => (
            <Button
              key={tool.id}
              onClick={() => handleToolChange(tool.id)}
              colorScheme={selectedTool === tool.id ? buttonColorScheme : 'transparent'}
              color={textColor}
            >
              {tool.name}
            </Button>
          ))}
        </Grid>
      </Flex>
      {selectedTool === 'workoutandresearchGPT' && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          border="black"
          overflow="hidden"
          p={4}
          m={4}
          color={textColor}
          textAlign="center"
          bgGradient={heroBgGradient}
        >
          <WorkoutAndResearchGPT/>
        </Box>
      )}
      {selectedTool === 'calisthenics' && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          border="black"
          overflow="hidden"
          p={4}
          m={4}
          color={textColor}
          textAlign="center"
          bgGradient={heroBgGradient}
        >
          <CalisthenicsSession />
        </Box>
      )}
      {selectedTool === 'calculator' && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          border="black"
          overflow="hidden"
          p={4}
          m={4}
          color={textColor}
          textAlign="center"
          bgGradient={aboutBgGradient}
        >
          <CalorieCalculator />
        </Box>
      )}
      {selectedTool === 'counter' && (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          border="black"
          overflow="hidden"
          p={4}
          m={4}
          color={textColor}
          textAlign="center"
          bgGradient={featuresBgGradient}
        >
          <CalorieCounter />
        </Box>
      )}
      {selectedTool === 'timer' && (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        border="black"
        overflow="hidden"
        p={4}
        m={4}
        color={textColor}
        textAlign="center"
        bgGradient={featuresBgGradient}
      >
        <Timer />
      </Box>
    )}      
      {selectedTool === 'bodyfat' && (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        border="black"
        overflow="hidden"
        p={4}
        m={4}
        color={textColor}
        textAlign="center"
        bgGradient={aboutBgGradient}
      >
        <BodyFatCalculator />
      </Box>
    )}

    {selectedTool === 'onerepmax' && (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            border="black"
            overflow="hidden"
            p={4}
            m={4}
            color={textColor}
            textAlign="center"
            bgGradient={aboutBgGradient}
        >
            <OneRepMaxCalculator />
        </Box>
    )}

    {selectedTool === 'progressiveoverload' && (
            <Box
                borderWidth="1px"
                borderRadius="lg"
                border="black"
                overflow="hidden"
                p={4}
                m={4}
                color={textColor}
                textAlign="center"
                bgGradient={aboutBgGradient}
            >
                <ProgressiveOverload />
            </Box>
        )}

    {selectedTool === 'workouttracker' && (
            <Box
                borderWidth="1px"
                borderRadius="lg"
                border="black"
                overflow="hidden"
                p={4}
                m={4}
                color={textColor}
                textAlign="center"
                bgGradient={aboutBgGradient}
            >
                <WorkoutTracker />
            </Box>
        )}

        {selectedTool === 'macro' && (
            <Box
                borderWidth="1px"
                borderRadius="lg"
                border="black"
                overflow="hidden"
                p={4}
                m={4}
                color={textColor}
                textAlign="center"
                bgGradient={aboutBgGradient}
            >
                <Macro />
            </Box>
        )}

      {selectedTool === 'WorkoutLibrary' && (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        border="black"
        overflow="hidden"
        p={4}
        m={4}
        color={textColor}
        textAlign="center"
        bgGradient={featuresBgGradient}
      >
        <WorkoutLibrary/>
      </Box>
    )}

    {selectedTool === 'MeditationLibrary' && (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        border="black"
        overflow="hidden"
        p={4}
        m={4}
        color={textColor}
        textAlign="center"
        bgGradient={featuresBgGradient}
      >
        <MeditationLibrary />
      </Box>
    )}

      {/* Disclaimer Section */}
      <Box
        p={4}
        borderRadius="md"
        m={4}
        textAlign="center"
        fontSize="sm"
        bgGradient={aboutBgGradient}
      >
        {disclaimerText}
      </Box>

      {/* Footer */}
      <Box as="footer" bg={footerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center" color={textColor}>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
}