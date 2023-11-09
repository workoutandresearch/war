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
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { algodClient } from 'lib/algodClient';
import { useWallet } from '@txnlab/use-wallet';

export default function Tools() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');
  const buttonColorScheme = useColorModeValue('orange', 'blue');
  const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
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
  const [exerciseDuration, setExerciseDuration] = useState<number | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const ToolsTsx = () => {
    // Reference to the calisthenics section
    const calisthenicsRef = useRef<HTMLDivElement>(null);
    
  
    // Function to scroll to the calisthenics section
    const scrollToCalisthenics = () => {
        calisthenicsRef.current?.scrollIntoView({ behavior: 'smooth' });
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
  ]

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseDuration, setExerciseDuration] = useState<number | null>(null);

  // Function to start the calisthenics session
  const startCalisthenicsSession = () => {
    onOpen();
    setCurrentExerciseIndex(0);
    setExerciseDuration(extractDuration(calisthenicsExercises[0].time));
  };

  // Function to go to the next exercise or close the modal if the last exercise is reached
  const nextExercise = () => {
    if (currentExerciseIndex < calisthenicsExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setExerciseDuration(extractDuration(calisthenicsExercises[currentExerciseIndex + 1].time));
    } else {
      onClose();
    }
  };

  // Use useEffect to update exercise index and remaining time
  useEffect(() => {
    if (exerciseDuration !== null) {
      const timer = setTimeout(() => {
        nextExercise();
      }, exerciseDuration * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentExerciseIndex, exerciseDuration]);

  // Display the current exercise and remaining time
  const currentExercise = calisthenicsExercises[currentExerciseIndex];

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

    // Implement the extractDuration function properly
    function extractDuration(timeString: string) {
        // This regex matches the first occurrence of one or more digits
        const match = timeString.match(/\d+/);
        // Check if there is a match and return the first group converted to a number
        return match ? parseInt(match[0], 10) : 0;
      }

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
    
            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={drawerBgColor}>
                <ModalHeader>{currentExercise.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>{currentExercise.description}</p>
                    <p>Time: {currentExercise.time}</p>
                    <p>Instructions: {currentExercise.instructions}</p>
                    <p>Remaining Time: {exerciseDuration} seconds</p>
                </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
    
          {/* Button to show Calisthenics Section */}
          <Button onClick={startCalisthenicsSession} colorScheme="blue" size="lg" m={4}>
                Start Calisthenics
            </Button>

            {/* Calisthenics Section */}
            <Box as="section" bgGradient={heroBgGradient} h="60vh" ref={calisthenicsRef}>
                <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
                <Text fontSize="5xl" fontWeight="bold" color={textColor} textAlign="center">Empower Your Journey</Text>
                <Text fontSize="xl" color={textColor} mt={4} textAlign="center">Workout and Research</Text>
                </Container>
            </Box>
        </Box>
  );
}}
