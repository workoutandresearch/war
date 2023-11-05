import Link from 'next/link';
import * as React from 'react';
import {
  Flex,
  HStack,
  Button,
  Center,
  Menu,
  MenuItem,
  MenuButton,
  Image,
  MenuList,
  MenuDivider,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, InfoIcon, UpDownIcon } from '@chakra-ui/icons';
import Connect from './Connect';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        bg={useColorModeValue('orange.400', 'cyan.400')}
        w="100%"
        h="64px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          ml={2}
          bg="transparent"
          _hover={{ color: 'white' }}
          _active={{ bg: 'transparent' }}
          color="black"
          fontSize="14px"
          fontFamily="Orbitron"
          size="md"
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Link href="/">
          <Image src="/logo.svg" alt="Fallen Order" w="60px" />
        </Link>
        <Menu>
          <MenuButton
            bg="transparent"
            _hover={{ color: 'white' }}
            _active={{ bg: 'transparent' }}
            color="black"
            fontSize="14px"
            fontFamily="Orbitron"
            size="md"
            as={Button}
            cursor="pointer"
            minW={0}
            mr={2}
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList p={0} m={3} borderRadius="20px">
            <Connect />
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}
