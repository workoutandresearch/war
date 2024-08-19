// CustomLogo.js

import React, { useState } from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const CustomLogo = ({ icon, onClick, ariaLabel, variant, color }) => {
  const { colorMode } = useColorMode();
  const [isDarkModeLogo, setIsDarkModeLogo] = useState(false);

  // Define different URLs for your logo images for light and dark modes
  const lightModeLogoUrl = 'https://i.postimg.cc/cJtY4mNj/lightmode.png';
  const darkModeLogoUrl = 'https://i.postimg.cc/0yWdNjK6/darkmode.png';

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
