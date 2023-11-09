import Head from 'next/head';
import {
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function WorkoutProgress() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');

  // Define the background gradients for light and dark modes
  const headerBgColor = useColorModeValue('#ff3a00', 'transparent');
  const pageBgGradient = useColorModeValue('none', 'linear(to-b, #0000FF, #000000)'); // Seamless gradient for dark mode
  const lightDarkColor = useColorModeValue('black', 'white');

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
        <title>Workout and Research - Workout Progress</title>
        <meta name="description" content="Your workout progress page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
            Workout Progress
          </Text>
          <Spacer />
          <ToggleColorModeButton />
        </Flex>
      </Box>

      {/* Workout Progress Content */}
      <Box as="section" p={8}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
          Your Workout Progress
        </Text>
        {/* Include your workout progress components and content here */}
      </Box>

      {/* Footer */}
      <Box as="footer" bg={headerBgColor} color="white" py={4} px={8}>
        <Flex direction="column" align="center" justify="center" color={textColor}>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
}
