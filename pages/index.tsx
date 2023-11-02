import Head from 'next/head';
import { Box, Button, VStack, Text, Image, Link, Container, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import Connect from 'components/MainTools/Connect'; // Make sure to import the Connect component

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Workout and Research - Home</title>
        <meta name="description" content="Your ultimate virtual fitness and research platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      {/* Navbar */}
      <Box as="header" bg="teal.500" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="white">Workout and Research</Text>
          <Button colorScheme="teal" variant="outline" color="white" onClick={onOpen}>
            Connect Wallet
          </Button>
        </Flex>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect with Us</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Connect />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/hero-background.jpg')" bgSize="cover" bgPos="center" h="60vh">
        <Container maxW="container.lg" h="full" display="flex" flexDirection="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color="white">Welcome to Workout and Research</Text>
          <Text fontSize="xl" color="white" mt={4}>Join our virtual fitness community and explore cutting-edge research</Text>
        </Container>
      </Box>

      {/* About Section */}
      <Container as="section" maxW="container.lg" py={10}>
        <VStack spacing={6} align="start">
          <Text fontSize="4xl" fontWeight="bold">Why Choose Us?</Text>
          <Text fontSize="xl">We provide a comprehensive platform that blends fitness with scientific research, offering personalized workout plans, nutritional guides, and access to the latest research papers.</Text>
          <Button as={Link} href="/about" colorScheme="teal">
            Learn More
          </Button>
        </VStack>
      </Container>

      {/* Features Section */}
      <Flex as="section" wrap="wrap" justify="center" py={10} bg="gray.50">
        <VStack w="full" maxW="md" p={5} textAlign="center" spacing={4}>
          <Image src="/feature1.jpg" alt="Personalized Training" borderRadius="lg" />
          <Text fontSize="xl" fontWeight="bold">Personalized Training</Text>
          <Text fontSize="md">Get customized workout plans tailored to your goals and preferences.</Text>
        </VStack>
        <VStack w="full" maxW="md" p={5} textAlign="center" spacing={4}>
          <Image src="/feature2.jpg" alt="Nutritional Guidance" borderRadius="lg" />
          <Text fontSize="xl" fontWeight="bold">Nutritional Guidance</Text>
          <Text fontSize="md">Access nutritional guides and meal plans curated by experts.</Text>
        </VStack>
        <VStack w="full" maxW="md" p={5} textAlign="center" spacing={4}>
          <Image src="/feature3.jpg" alt="Research Resources" borderRadius="lg" />
          <Text fontSize="xl" fontWeight="bold">Research Resources</Text>
          <Text fontSize="md">Explore an extensive library of research papers and studies.</Text>
        </VStack>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} px={8}>
        <Text textAlign="center">&copy; {new Date().getFullYear()} Workout and Research. All rights reserved.</Text>
      </Box>
    </>
  );
}
