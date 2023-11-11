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
} from '@chakra-ui/react';
import Connect from 'components/Connect';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { SetStateAction, useEffect, useState } from 'react';
import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';
import { addToCart } from 'components/addtocart'; // Import the addToCart function
import { AiFillShop } from "react-icons/ai";

export default function Merch() {
  const [cart, setCart] = useState([]); // Initialize cart state with an empty array

  useEffect(() => {
    // Check if window is defined (i.e., running in the browser)
    if (typeof window !== 'undefined') {
      // Access localStorage
      const storedCart = localStorage.getItem('cart');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    }
  }, []);

  const algosdk = require('algosdk');
  const Merch = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Function to add an item to the cart
  const addToCart = (item: {
    price: number; name: any; 
}) => {
    // Create a copy of the cart with the new item
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    // Calculate the total cost by iterating over the items in the cart
    const updatedTotalCost = updatedCart.reduce((acc, cartItem) => acc + cartItem.price, 0);
    setTotalCost(updatedTotalCost);
  }};

const handleCheckout = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    if (!warTokenBalance || warTokenBalance <= 0) {
      alert("Insufficient WAR token balance for checkout.");
      return;
    }

    // Assuming totalCost is calculated based on the cart
    function calculateTotalCost(cart: any[]) {
      // Assuming each item in the cart has a 'price' property
      const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
      return totalCost;
    }

    try {
      // User's Algorand account details
      const userAccountAddress = getUserAlgorandAddress(); // Implement this function
      const userAccount = algosdk.mnemonicToSecretKey(getUserAlgorandMnemonic()); // Implement this function to securely retrieve user's mnemonic

      // Prepare Algorand transaction
      const transaction = await prepareAlgorandTransaction(userAccountAddress, totalCost); // Implement this function

      // Sign the transaction
      const signedTxn = algosdk.signTransaction(transaction, userAccount.sk);

      // Submit the transaction
      const sendTx = await algosdk.sendRawTransaction(signedTxn.blob);

      // Wait for confirmation
      const confirmedTxn = await waitForConfirmation(sendTx.txId); // Implement this function

      if (confirmedTxn) {
        const result = await checkout(cart); // Proceed with your checkout process
        if (result.success) {
          alert(`Checkout successful! Order ID: ${result.orderId}`);
        } else {
          alert("Checkout failed. Please try again.");
        }
      } else {
        alert("Algorand transaction failed. Please try again.");
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert("An error occurred during checkout.");
    }
};

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
  

    // New disclosure for the cart drawer
    const {
      isOpen: isCartDrawerOpen,
      onOpen: onCartDrawerOpen,
      onClose: onCartDrawerClose
    } = useDisclosure();

// Use a ternary operator to set the background color based on the current color mode
const background = colorMode === 'light' ? lightModeBg : darkModeBg;

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

  const handleButtonClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Perform your custom action here
    console.log('Button clicked');
    // Any other logic
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
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const accessoriesCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  // Collections for sub-categories (Mens, Womens, Kids)
  const mensOuterwearCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const womensOuterwearCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const kidsOuterwearCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const mensTshirtsCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const womensTshirtsCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
  const kidsTshirtsCollection = [
    {
      id: 1,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 2,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 4,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    {
      id: 5,
      name: "Coming Soon",
      description: "",
      price: 19.99, // Replace with the actual price of the item
      image: `https://media.discordapp.net/attachments/1125446630775201882/1172564616988078120/Untitled_Artwork.png?ex=6560c6e5&is=654e51e5&hm=338aa89e964897cb7c9d29e85f9ab4c1752490bd07d387a71b2679d0c9d76244&=&width=625&height=625` // Replace with the actual path to the image
    },
    // ... more items
  ];
  
    useEffect(() => {
      // Check if window is defined (i.e., running in the browser)
      if (typeof window !== 'undefined') {
        // Access localStorage
        const storedCart = localStorage.getItem('cart');
        setCart(storedCart ? JSON.parse(storedCart) : []);
      }
    }, []);
  
    // Function to render cart items in the drawer
    const renderCartItems = (cart: { name: any; quantity: any; }[] | undefined) => {
      if (!cart || cart.length === 0) {
        return <p>Your cart is empty.</p>;
      }

      // Render the cart items here
      return (
        <List spacing={3}>
          {cart.map((item: { name: any; quantity: any; }, index: any) => (
            <ListItem key={index}>
              {item.name} - Quantity: {item.quantity}
              {/* Add more item details as needed */}
            </ListItem>
          ))}
        </List>
      );
    };

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

    // Handler for adding item to cart
    const handleAddToCart = (item: { name: any; }) => {
      addToCart(item, 1); // Assuming you want to add one quantity of the item
      alert(`${item.name} added to cart.`); // Feedback to the user
    };

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
    } else if (selectedCategory === 'hats') {
      // Handle "Hats" category
      switch (selectedSubCategory) {
        // Add cases for Mens, Womens, and Kids if needed
        default:
          collectionItems = hatsCollection;
          break;
      }
    } else if (selectedCategory === 'accessories') {
      // Handle "Accessories" category
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
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} bgColor="transparent">
            {collectionItems.map((item) => (
              <Center key={item.id}>
                <Box p={5} shadow="md" borderWidth="1px" textAlign="center" display="flex" flexDirection="column" alignItems="center" bgColor="transparent" border={'black'}>
                  {/* Existing item display code */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    boxSize="200px"
                    objectFit="cover"
                    bg="transparent"
                  />
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.description}</Text>

                  {/* Add to Cart Button */}
                  <Button colorScheme={buttonColorScheme} mt={3} onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                </Box>
              </Center>
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
      icon={<AiFillShop />}
      onClick={onCartDrawerOpen}
      aria-label="Open cart"
    />
  );

  function onCartOpen(event: React.MouseEvent<HTMLButtonElement>): void {
    // Your implementation...
  }
  
  function onCartClose(): void {
    // Your implementation...
  }

  return (
    <Box bgGradient={colorMode === 'dark' ? pageBgGradient : 'none'}>
      <Head>
        <title>Workout and Research - Merch</title>
        <meta name="description" content="Merch Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Box as="header" bg={headerBgColor} py={4} px={8} boxShadow="sm">
        <Flex justify="space-between" align="center">
          {/* Left side - Hamburger Menu and Color Mode Toggle */}
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

            {/* Cart Button */}
            <IconButton
              icon={<AiFillShop />}
              colorScheme="blue"
              onClick={onCartDrawerOpen}
              aria-label="View Cart"
              ml={3} // Margin-left for spacing
              color={textColor}
            />
          </Flex>

          {/* Center - Title Text */}
          <Text fontSize="2xl" fontWeight="bold" color={textColor} textAlign="center">
            Workout and Research
          </Text>

          {/* Right side - Wallet Connection and Wallet Balance */}
          <Flex align="center">
            {/* Conditional rendering based on whether a wallet is connected */}
            {activeAddress && warTokenBalance !== null && (
              <Text color={textColor} pr={4}>
                WAR Balance: {warTokenBalance}
              </Text>
            )}

            {/* Connect Button */}
            <Button colorScheme={buttonColorScheme} variant="solid" onClick={onOpen} color={textColor}>
              Connect
            </Button>
          </Flex>
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

      {/* Drawer for Cart */}
      <Drawer isOpen={isCartDrawerOpen} placement="right" onClose={onCartDrawerClose}>
        <DrawerOverlay />
        <DrawerContent bg={drawerBgColor}> {/* Set the background color here */}
          <DrawerHeader>Cart</DrawerHeader>
          <DrawerBody>
            {renderCartItems()}
            {/* Checkout button inside the drawer */}
            <Button colorScheme="green" onClick={handleCheckout}>
              Checkout
            </Button>
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

        {/* Hero Section */}
        <Box bg={heroBgGradient} color="white" py={20} px={{ base: 4, md: 8 }}>
            <Container maxW="6xl" textAlign="center">
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
                Welcome to the Workout and Research Merchandise Store
              </Text>
              <Text mt={4} fontSize={{ base: 'lg', md: 'xl' }}>
                Discover our collection of high-quality workout and research merchandise.
              </Text>
            </Container>
          </Box>

          {/* Categories Section */}
          <Box bg={aboutBgGradient} py={12} px={{ base: 4, md: 8 }}>
            <Container maxW="6xl">
              <VStack spacing={4} textAlign="center">
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                  Explore Our Collections
                </Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>
                  Choose from a variety of categories and sub-categories to find the perfect workout and research merchandise for you.
                </Text>
              </VStack>
              <Box mt={8}>
                {/* Category Buttons */}
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                  <Button
                    colorScheme={buttonColorScheme}
                    color={textColor}
                    variant={selectedCategory === 'outerwear' ? 'solid' : 'outline'}
                    size="lg"
                    onClick={() => selectCategory('outerwear')}
                  >
                    Outerwear
                  </Button>
                  <Button
                    colorScheme={buttonColorScheme}
                    color={textColor}
                    variant={selectedCategory === 'tshirts' ? 'solid' : 'outline'}
                    size="lg"
                    onClick={() => selectCategory('tshirts')}
                  >
                    T-Shirts
                  </Button>
                  <Button
                    colorScheme={buttonColorScheme}
                    color={textColor}
                    variant={selectedCategory === 'hats' ? 'solid' : 'outline'}
                    size="lg"
                    onClick={() => selectCategory('hats')}
                  >
                    Hats
                  </Button>
                  <Button
                    colorScheme={buttonColorScheme}
                    color={textColor}
                    variant={selectedCategory === 'accessories' ? 'solid' : 'outline'}
                    size="lg"
                    onClick={() => selectCategory('accessories')}
                  >
                    Accessories
                  </Button>
                </SimpleGrid>
              </Box>
              {/* Sub-categories */}
              <Box mt={6}>{renderSubCategories()}</Box>
            </Container>
          </Box>

        {/* Collection Section */}
        <Box bg={background} py={12} px={{ base: 4, md: 8 }}>
          <Container maxW="6xl">
            <VStack spacing={4} textAlign="center" bg={background}>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                {selectedSubCategory ? `${selectedSubCategory} ${selectedCategory}` : 'All Collections'}
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }}>
                Explore our latest collection of workout and research merchandise.
              </Text>
            </VStack>
            <Box mt={8} bg={background}>
              {/* Collection Items */}
              {renderCollectionItems()}
            </Box>
          </Container>
        </Box>

          {/* Footer */}
          <Box as="footer" bg={footerBgColor} py={8} px={{ base: 4, md: 8 }} textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Workout and Research
            </Text>
            <Text fontSize="sm" color={textColor}>
              © 2023 Workout and Research. All rights reserved.
            </Text>
          </Box>
        </Box>
  );
}

function renderItems(collectionItems: any) {
  return (
    <div>
      {collectionItems.map((item: any) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          {/* Add more item details and UI elements as needed */}
        </div>
      ))}
    </div>
  );
}

function setSomeState(newValue: any) {
  throw new Error('Function not implemented.');
}

function prepareAlgorandTransaction(userAccountAddress: any, totalCost: any) {
  const sender = userAccountAddress; // Sender's Algorand address
  const receiver = 'RECEIVER_ALGORAND_ADDRESS'; // Receiver's Algorand address
  const amount = totalCost; // Amount to send in microAlgos (microAlgo = 0.000001 Algo)

  const params = algosdk.GetTransactionParams(); // Get suggested transaction parameters
  const transaction = new algosdk.Transaction.Payment({
    sender: sender,
    fee: params.fee,
    firstRound: params.lastRound + 1,
    lastRound: params.lastRound + 1000,
    genesisID: params.genesisID,
    genesisHash: params.genesisHash,
    receiver: receiver,
    amount: amount,
  });

  return transaction;
}


function calculateTotalCost(cart: never[]) {
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
  return totalCost;
}

function getUserAlgorandAddress() {
  // Implement logic to retrieve the user's Algorand address
  // e.g., fetch it from a user profile or wallet service
  return 'USER_ALGORAND_ADDRESS';
}

function getUserAlgorandMnemonic(): any {
  // Implement logic to securely retrieve the user's mnemonic or private key
  // e.g., retrieve it from a secure storage mechanism
  return 'USER_ALGORAND_MNEMONIC';
}

async function waitForConfirmation(txId: any) {
  const client = new algosdk.Algodv2();
  const status = await client.status().do();
  let lastRound = status.lastRound;

  while (true) {
    const pendingInfo = await client.pendingTransactionInformation(txId).do();

    if (pendingInfo !== undefined) {
      if (pendingInfo.confirmedRound !== null && pendingInfo.confirmedRound > 0) {
        return true; // Transaction confirmed
      } else if (pendingInfo.poolError) {
        return false; // Transaction failed
      }
    }

    await client.statusAfterBlock(lastRound + 1).do();
    lastRound++;
  }
}

function checkout(cart: never[]) {
  throw new Error('Function not implemented.');
}

function setCart(arg0: any) {
  throw new Error('Function not implemented.');
}

