// pages/tools.tsx

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useWallet } from '@txnlab/use-wallet';
import { algodClient } from 'lib/algodClient';

// Import the CalisthenicsSession component
import CalisthenicsSession from '../components/CalisthenicsSession';
import CalorieCalculator from 'components/CalorieCalculator';
import CalorieCounter from 'components/CalorieCounter';
import SocialSharing from '../components/SocialSharing';
import workoutProgress from '../components/workoutProgress';

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

  const { activeAddress, signTransactions } = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const [warTokenBalance, setWarTokenBalance] = useState(null);
  
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

    const workoutProgress = [
      {
        exercise: 'Push-ups',
        sets: 3,
        reps: 15,
      },
      {
        exercise: 'Squats',
        sets: 4,
        reps: 12,
      },
      {
        exercise: 'Plank',
        duration: '1 minute',
      },
      // Add more exercises and progress data as needed
    ];    
  };

  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Tools</title>
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
              color={buttonTextColor}
            />

            {/* Color Mode Toggle */}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="ghost"
              color={buttonTextColor}
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
      </Box>

    {/* Grid Layout for Tools */}
    <Grid
      templateColumns="repeat(1, 1fr)" // 3 columns
      gap={6} // Gap between columns and rows
      p={4} // Padding for the grid
      bgGradient={pageBgGradient}
    >
      {/* First Tool Box - Calisthenics Session */}
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

      {/* Second Tool Box - Calorie Calculator */}
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

      {/* Third Tool Box - Calorie Counter */}
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

      {/* Social Sharing Component */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        border="black"
        overflow="hidden"
        p={4}
        m={4}
        color={textColor}
        textAlign="center"
        bgGradient={footerBgColor} // Use a gradient that matches your design
      >
        <SocialSharing workoutProgress={workoutProgress} />
      </Box>
      {/* Add more tool boxes here */}
    </Grid>

    {/* Footer */}
    <Box as="footer" bg={footerBgColor} color={textColor} py={4} px={8}>
      <Flex direction="column" align="center" justify="center" color={textColor}>
        <Text textAlign="center" color={textColor}>
          &copy; {new Date().getFullYear()} Workout and Research. All rights reserved.
        </Text>
      </Flex>
    </Box>
  </Box>
);
}