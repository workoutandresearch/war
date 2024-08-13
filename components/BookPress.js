// CustomLogo.js

import React, { useState } from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const CustomLogo = ({ icon, onClick, ariaLabel, variant, color }) => {
  const { colorMode } = useColorMode();
  const [isDarkModeLogo, setIsDarkModeLogo] = useState(false);

  // Define different URLs for your logo images for light and dark modes
  const lightModeLogoUrl = 'https://cdn.discordapp.com/attachments/999962417163419701/1240719973064769678/Untitled_Artwork.png?ex=66bb9a05&is=66ba4885&hm=31fb73522a4e3c25a16e18b2bc9a3e8982e4919836b43fdc81b2a32d217b82f0&';
  const darkModeLogoUrl = 'https://cdn.discordapp.com/attachments/999962417163419701/1240719973601644544/Untitled_Artwork.png?ex=66bb9a05&is=66ba4885&hm=250733df1cafe286f3e915b2184ad0d6391ebd02f362bbb5a3b151a481d840ab&';

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
