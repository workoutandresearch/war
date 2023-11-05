import Head from 'next/head';
import {
  Box,
  Container,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export default function Roadmap() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');
  const headerBgColor = useColorModeValue('#ff3a00', 'transparent');
  const footerBgColor = useColorModeValue('#ffca80', 'transparent');
  
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
    <Box>
      <Head>
        <title>Workout and Research - Roadmap</title>
        <meta name="description" content="Our roadmap to success" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          <ToggleColorModeButton />
          <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">Roadmap</Text>
          {/* Add other navbar elements here if needed */}
        </Flex>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={10}>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" color={textColor}>
        Our Roadmap
        </Text>
        <Text fontSize="xl" mt={4} color={textColor} textAlign="center">
          Explore the strategic steps we're taking to achieve our goals and milestones.
        </Text>
        {/* Add more content here */}
      </Container>

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
