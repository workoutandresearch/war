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
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { SetStateAction, useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';

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

  // Sample data for collections
  const outerwearCollection: never[] = [
    // ... more items
  ];

  const tshirtsCollection: never[] = [
    // ... more items
  ];

  const hatsCollection = [
    {
      id: 1,
      name: "Baseball Cap",
      description: "Comfortable hat for any day of the week",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Beanie",
      description: "Warm hat for the cooler days",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const accessoriesCollection = [
    {
      id: 1,
      name: "Misc",
      description: "Misc",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Misc",
      description: "Misc",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Misc",
      description: "Misc",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  // Collections for sub-categories (Mens, Womens, Kids)
  const mensOuterwearCollection = [
    {
      id: 1,
      name: "Mens Winter Jacket",
      description: "Warm winter jacket for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Mens Winter Jacket",
      description: "Warm winter jacket for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Mens Winter Jacket",
      description: "Warm winter jacket for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const womensOuterwearCollection = [
    {
      id: 1,
      name: "Womens Winter Jacket",
      description: "Warm winter jacket for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Womens Winter Jacket",
      description: "Warm winter jacket for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Womens Winter Jacket",
      description: "Warm winter jacket for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const kidsOuterwearCollection = [
    {
      id: 1,
      name: "Kids Winter Jacket",
      description: "Warm winter jacket for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Kids Winter Jacket",
      description: "Warm winter jacket for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Kids Winter Jacket",
      description: "Warm winter jacket for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const mensTshirtsCollection = [
    {
      id: 1,
      name: "Mens Graphic Tee",
      description: "Cool graphic t-shirt for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Mens Graphic Tee",
      description: "Cool graphic t-shirt for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Mens Graphic Tee",
      description: "Cool graphic t-shirt for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Mens Graphic Tee",
      description: "Cool graphic t-shirt for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Mens Graphic Tee",
      description: "Cool graphic t-shirt for men",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const womensTshirtsCollection = [
    {
      id: 1,
      name: "Womens Graphic Tee",
      description: "Cool graphic t-shirt for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Womens Graphic Tee",
      description: "Cool graphic t-shirt for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Womens Graphic Tee",
      description: "Cool graphic t-shirt for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Womens Graphic Tee",
      description: "Cool graphic t-shirt for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Womens Graphic Tee",
      description: "Cool graphic t-shirt for women",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const kidsTshirtsCollection = [
    {
      id: 1,
      name: "Kids Graphic Tee",
      description: "Cool graphic t-shirt for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Kids Graphic Tee 2",
      description: "Cool graphic t-shirt for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Kids Graphic Tee 3",
      description: "Cool graphic t-shirt for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Kids Graphic Tee 2",
      description: "Cool graphic t-shirt for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Kids Graphic Tee 3",
      description: "Cool graphic t-shirt for kids",
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];

  const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category (e.g., outerwear, tshirts, etc.)
  const [selectedSubCategory, setSelectedSubCategory] = useState(''); // Track selected sub-category (e.g., Mens, Womens, Kids)

  // Function to handle category selection
  const selectCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    setSelectedSubCategory(''); // Reset sub-category selection
  };

  // Function to handle sub-category selection
  const selectSubCategory = (subCategory: SetStateAction<string>) => {
    setSelectedSubCategory(subCategory);
  };

  // Function to render sub-categories based on the selected category
  const renderSubCategories = () => {
    if (selectedCategory === 'outerwear' || selectedCategory === 'tshirts') {
      return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Button
            colorScheme={buttonColorScheme}
            color={textColor}
            variant="solid"
            size="lg"
            onClick={() => selectSubCategory('Mens')}
          >
            Mens
          </Button>
          <Button
            colorScheme={buttonColorScheme}
            color={textColor}
            variant="solid"
            size="lg"
            onClick={() => selectSubCategory('Womens')}
          >
            Womens
          </Button>
          <Button
            colorScheme={buttonColorScheme}
            color={textColor}
            variant="solid"
            size="lg"
            onClick={() => selectSubCategory('Kids')}
          >
            Kids
          </Button>
        </SimpleGrid>
      );
    }
    return null; // Return nothing for other categories (hats, accessories)
  };

// Function to render the selected collection items
const renderCollectionItems = () => {
  let collectionItems;
  if (selectedCategory === 'outerwear') {
    switch (selectedSubCategory) {
      case 'Mens':
        collectionItems = mensOuterwearCollection;
        break;
      case 'Womens':
        collectionItems = womensOuterwearCollection;
        break;
      case 'Kids':
        collectionItems = kidsOuterwearCollection;
        break;
      default:
        collectionItems = outerwearCollection;
        break;
    }
  } else if (selectedCategory === 'tshirts') {
    switch (selectedSubCategory) {
      case 'Mens':
        collectionItems = mensTshirtsCollection;
        break;
      case 'Womens':
        collectionItems = womensTshirtsCollection;
        break;
      case 'Kids':
        collectionItems = kidsTshirtsCollection;
        break;
      default:
        collectionItems = tshirtsCollection;
        break;
    }
  } else if (selectedCategory === 'hats') { // Handle "Hats" category
    switch (selectedSubCategory) {
      // Add cases for Mens, Womens, and Kids if needed
      default:
        collectionItems = hatsCollection;
        break;
    }
  } else if (selectedCategory === 'accessories') { // Handle "Accessories" category
    switch (selectedSubCategory) {
      // Add cases for Mens, Womens, and Kids if needed
      default:
        collectionItems = accessoriesCollection;
        break;
    }
  } else {
    return <Text textAlign="center" backgroundColor="transparent">Select a category to view items.</Text>;
  }

    return (
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
        {collectionItems.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px">
            <Image
              src={item.image}
              alt={item.name}
              boxSize="200px" // Set the desired image size
              objectFit="cover" // Adjust as needed (e.g., "contain" or "fill")
            />
            <Text fontWeight="bold">{item.name}</Text>
            <Text>{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    );
  };

  // Effect to fetch the WAR token balance when the active address changes
  useEffect(() => {
    if (activeAddress) {
      fetchWarTokenBalance(activeAddress);
    }
  }, [activeAddress]);

  const sendOptIn = async () => {
    setLoading(true);
    try {
      if (!activeAddress) {
        // Wallet Not Connected, open the modal
        onOpen();
        setLoading(false);
        return;
      }
  
      const suggestedParams = await algodClient.getTransactionParams().do()
      suggestedParams.fee = 1000
      suggestedParams.flatFee = true
      const note = Uint8Array.from('Successfully Opted In To Workout and Research!'.split("").map(x => x.charCodeAt(0)))
  
      const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  from: activeAddress,
                  to: activeAddress,
                  amount: 0,
                  assetIndex: 1015673913,
                  suggestedParams,
                  note,
                })

      const encodedTransaction = algosdk.encodeUnsignedTransaction(txn)

      toast.loading('Awaiting Signature...', { id: 'txn', duration: Infinity })

      const signedTransaction = await signTransactions([encodedTransaction])

      toast.loading('Sending transaction...', { id: 'txn', duration: Infinity })

      algodClient.sendRawTransaction(signedTransaction).do()

      console.log(`Successfully Opted In!`)

      toast.success(`Transaction Successful!`, {
        id: 'txn',
        duration: 5000
      })
      setLoading(false)
    } catch (error) {
      console.error(error);
      toast.error('Oops! Opt In Failed!', { id: 'txn' });
    }
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
  
    // Add the renderItems function here
    function renderItems(items: any[]) {
      return items.map((item: any) => (
        <Box key={item.id} p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{item.name}</Text>
          <Text>{item.description}</Text>
        </Box>
      ));
    }
  

  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Merch</title>
        <meta name="description" content="Your opt in description goes here." />
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

        {/* Modal for Connecting Wallet */}
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

      {/* Merch Section */}
      <Box as="section" py={10} bgGradient={heroBgGradient}>
        <VStack spacing={4} align="center">
          {/* ... (existing code for Text) */}

          {/* Buttons for Categories */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={8} justifyItems="center">
            <Button
              colorScheme={buttonColorScheme}
              color={textColor}
              variant="solid"
              size="lg"
              bgGradient={pageBgGradient}
              onClick={() => selectCategory('outerwear')}
            >
              Outerwear
            </Button>
            <Button
              colorScheme={buttonColorScheme}
              color={textColor}
              variant="solid"
              size="lg"
              bgGradient={pageBgGradient}
              onClick={() => selectCategory('tshirts')}
            >
              T-Shirts
            </Button>
            <Button
              colorScheme={buttonColorScheme}
              color={textColor}
              variant="solid"
              size="lg"
              bgGradient={pageBgGradient}
              onClick={() => selectCategory('hats')}
            >
              Hats
            </Button>
            <Box textAlign="center"> {/* Wrap the Accessories button in a Box */}
              <Button
                colorScheme={buttonColorScheme}
                color={textColor}
                variant="solid"
                size="lg"
                bgGradient={pageBgGradient}
                onClick={() => selectCategory('accessories')}
              >
                Accessories
              </Button>
            </Box>
          </SimpleGrid>

          {/* Render sub-categories based on selected category */}
          {renderSubCategories()}
        </VStack>
      </Box>

      {/* Render the selected collection */}
      {renderCollectionItems()}

      {/* About Section */}
      <Box as="section" py={10} bgGradient={aboutBgGradient}>
        <VStack spacing={4} align="center">
          {/* Add a button with an onClick handler */}
          <VStack spacing={4}>
          <Text fontSize="sm" color={textColor} mt={4} textAlign="center">
            By clicking Opt In, you acknowledge and agree to the terms and conditions associated with this opt-in process.
          </Text>
          <Spacer h={4} />
          <Text fontSize="sm" color={textColor} mt={4} textAlign="center">
            Please review our <Link href="/termscond">Terms and Conditions</Link> and <Link href="/privacypolicy">Privacy Policy</Link> before proceeding.
          </Text>
          <Spacer h={4} />
            <Button
              as="a"
              colorScheme={buttonColorScheme}
              color={textColor}
              onClick={sendOptIn} // Add onClick handler here
            >
              Opt In
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

function renderItems(collectionItems: any) {
  throw new Error('Function not implemented.');
}
