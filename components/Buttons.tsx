import {
  Button,
  Container,
  HStack,
  Image,
  useColorModeValue,
  Text,
  Icon,
} from '@chakra-ui/react';
import * as React from 'react';

interface TextProp {
  fontsize?: any;
  text?: string;
  ref?: any;
  isLoading?: any;
  type?: any;
  icon?: any;
  id?: any;
  disabled?: any;
  leftIcon?: any;
  onClick?: (event: any) => void;
}

export const FullGlowButton = ({
  fontsize,
  type,
  leftIcon,
  ref,
  text,
  onClick,
  disabled,
}: TextProp) => {
  return (
    <Button
      borderRadius="10px"
      bg={useColorModeValue('orange.400', 'cyan.400')}
      color="white"
      leftIcon={leftIcon ? leftIcon : null}
      _hover={{ bg: 'black' }}
      fontSize={fontsize ? fontsize : '12px'}
      size="md"
      ref={ref}
      type={type}
      onClick={onClick}
      isDisabled={disabled}
    >
      <Text zIndex={1}>{text}</Text>
    </Button>
  );
};

export const IconGlowButton = ({ icon, onClick, disabled }: TextProp) => {
  return (
    <Button
      p="1.5px"
      bg={useColorModeValue('orange.400', 'cyan.400')}
      color="white"
      _hover={{ bg: 'black' }}
      fontSize="11px"
      size="sm"
      onClick={onClick}
      isDisabled={disabled}
    >
      <Icon boxSize={6} as={icon} zIndex={1} />
    </Button>
  );
};

export const IconGlowButton2 = ({ icon, onClick, disabled }: TextProp) => {
  return (
    <Button
      p="1.5px"
      bg={useColorModeValue('orange.400', 'cyan.400')}
      color="white"
      _hover={{ bg: 'black' }}
      fontSize="11px"
      size="md"
      onClick={onClick}
      isDisabled={disabled}
    >
      <Icon boxSize={8} as={icon} zIndex={1} />
    </Button>
  );
};
