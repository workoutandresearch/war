import React, { useState, useEffect } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';


const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const textColor = useColorModeValue('#000000', 'inherit');
  
  const formatTime = (time) => {
    return ('0' + Math.floor((time / 3600) % 60)).slice(-2) + ':' +
           ('0' + Math.floor((time / 60) % 60)).slice(-2) + ':' +
           ('0' + (time % 60)).slice(-2);
  };


  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <Text fontSize="9xl" color={textColor}>
        Timer
      </Text>
      <Text fontSize="4xl" color={textColor}>
        {formatTime(seconds)}
      </Text>
      <div className="timer-buttons">
        <button
          onClick={toggleTimer}
          style={{
            backgroundColor: 'transparent',
            color: { textColor },
            border: '1px solid black',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          style={{
            backgroundColor: 'transparent',
            color: { textColor },
            border: '1px solid black',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
