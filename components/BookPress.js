// CustomLogo.js

import React, { useState } from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const CustomLogo = ({ icon, onClick, ariaLabel, variant, color }) => {
  const { colorMode } = useColorMode();
  const [isDarkModeLogo, setIsDarkModeLogo] = useState(false);

  // Define different URLs for your logo images for light and dark modes
  const lightModeLogoUrl = 'https://cdn.discordapp.com/attachments/1125446630775201882/1175593329820438538/Untitled_Artwork.png?ex=656bcb9b&is=6559569b&hm=b7d86232bbf152fc9b3370e4333b026f7c38cbf44dd2438935618c4842e512d6&';
  const darkModeLogoUrl = 'https://cdn.discordapp.com/attachments/1125446630775201882/1175593163705036820/Untitled_Artwork.png?ex=656bcb73&is=65595673&hm=96aadc0f282a3d9a8c96ee6d97d98ea23c3933963b9b4314abebbefc50af3fff&';

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
