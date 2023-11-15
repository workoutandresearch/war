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
import { useEffect, useState } from 'react';
import { algodClient } from 'lib/algodClient';
import { useWallet } from '@txnlab/use-wallet';
import { SiDiscord } from 'react-icons/si';
import { SiAlgorand } from "react-icons/si";
import { features } from 'process';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ads from 'components/Ads';

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
  const lightDarkColor = useColorModeValue('black', 'white');
  const drawerBgColor = useColorModeValue('#ff3a00', 'blue');
  const { activeAddress, signTransactions } = useWallet()
  const [loading, setLoading] = useState<boolean>(false)
  const [warTokenBalance, setWarTokenBalance] = useState(null);


const adImages = [
  // Array of ad image URLs
  'https://cdn.discordapp.com/attachments/999962417163419701/1169339622761967779/Untitled_Artwork.png?ex=65678063&is=65550b63&hm=f4d1b0fab7188e58a634891f93aec04ce1b94aa5c369250ca2edecb315002201&public/algopardad1.png',
  'https://cdn.discordapp.com/attachments/999962417163419701/1169339622761967779/Untitled_Artwork.png?ex=65678063&is=65550b63&hm=f4d1b0fab7188e58a634891f93aec04ce1b94aa5c369250ca2edecb315002201&public/algopardad1.png',
  'https://cdn.discordapp.com/attachments/999962417163419701/1169339622761967779/Untitled_Artwork.png?ex=65678063&is=65550b63&hm=f4d1b0fab7188e58a634891f93aec04ce1b94aa5c369250ca2edecb315002201&public/algopardad1.png',
  // Add more ad images as needed
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024, // Applies to screens smaller than 1024px
      settings: {
        arrows: false, // Hides arrows on smaller screens
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600, // Applies to screens smaller than 600px
      settings: {
        arrows: false, // Hides arrows on very small screens
        slidesToShow: 1,
        dots: false, // Optionally hide dots on very small screens for more space
      },
    },
  ],
};

const Adss = () => {
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
            <Image
              src={img}
              alt={`Ad ${index + 1}`}
              w="full"
              h="auto"
              objectFit="contain"
              borderRadius="lg" // Rounded edges for the image
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Adss;
