// CustomLogo.js

import React, { useState } from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const CustomLogo = ({ icon, onClick, ariaLabel, variant, color }) => {
  const { colorMode } = useColorMode();
  const [isDarkModeLogo, setIsDarkModeLogo] = useState(false);

  // Define different URLs for your logo images for light and dark modes
  const lightModeLogoUrl = 'https://media.discordapp.net/attachments/999962417163419701/1240719973064769678/Untitled_Artwork.png?ex=66479605&is=66464485&hm=01675692a690289e6452249a26b683727de2301b8f417cc1e53fe1ef00b7dfae&=&format=webp&quality=lossless&width=668&height=668';
  const darkModeLogoUrl = 'https://media.discordapp.net/attachments/999962417163419701/1240719973064769678/Untitled_Artwork.png?ex=66479605&is=66464485&hm=01675692a690289e6452249a26b683727de2301b8f417cc1e53fe1ef00b7dfae&=&format=webp&quality=lossless&width=668&height=668';

  // Determine the appropriate URL based on the current color mode and the manual toggle
  const logoUrl = isDarkModeLogo ? darkModeLogoUrl : lightModeLogoUrl;

  // Handle click to toggle between light and dark mode logos
  const handleLogoClick = () => {
    setIsDarkModeLogo(!isDarkModeLogo);
    // Toggle the color mode when clicking the logo
    onClick();
  };

  return (
    <Box
      boxSize="40px" // Set the size as per your design
      cursor="pointer" // Show pointer cursor on hover
      onClick={handleLogoClick} // Handle click to toggle the logo and color mode
    >
      {icon}
      <Image
        src={logoUrl}
        alt="Custom Logo Alt"
        boxSize="40px" // Set the size as per your design
        ml={2} // Add margin to separate the logo from the icon
      />
    </Box>
  );
};

export default CustomLogo;
