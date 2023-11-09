// components/CalisthenicsSession.js

import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Spacer, Progress } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Link, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';



const CalisthenicsSession = () => {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [exerciseDuration, setExerciseDuration] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [sessionStarted, setSessionStarted] = useState(false);
    const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
    const textColor = useColorModeValue('#000000', 'inherit');
    const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
    const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');

      const buttonColorScheme = useColorModeValue('orange', 'blue');
  const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');

  const calisthenicsExercises = [
    {
      name: 'Neck Rolls Clockwise',
      description: 'Perform gentle neck rolls in a clockwise motion to release neck tension and improve flexibility.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and relax your shoulders. Slowly roll your head in a circular motion, starting from one side and moving to the other.'
    },
    {
      name: 'Neck Rolls Counter-Clockwise',
      description: 'Perform gentle neck rolls in a counter-clockwise motion to promote neck mobility and alleviate stiffness.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and relax your shoulders. Slowly roll your head in a circular motion, starting from one side and moving to the other.'
    },
    {
      name: 'Big Arm Circles Clockwise',
      description: 'Engage in big arm circles in a clockwise motion - perform large circles for 3 seconds to warm up your shoulder muscles and enhance circulation.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make large clockwise circular motions with your arms, moving them forward for 3 seconds.'
    },
    {
      name: 'Big Arm Circles Counter-Clockwise',
      description: 'Engage in big arm circles in a counter-clockwise motion - perform large circles for 3 seconds to boost shoulder mobility and blood flow.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make large circular motions with your arms, moving them forward for 3 seconds.'
    },
    {
      name: 'Small Arm Circles Clockwise',
      description: 'Perform small arm circles in a clockwise motion - make small circles for 3 seconds to activate shoulder muscles and enhance joint stability.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make small clockwise circular motions with your arms, moving them forward for 3 seconds.'
    },
    {
      name: 'Small Arm Circles Counter-Clockwise',
      description: 'Perform small arm circles in a counter-clockwise motion - make small circles for 3 seconds to improve shoulder flexibility and reduce tension.',
      time: '15 seconds each direction',
      instructions: 'Extend your arms out to the sides. Make small circular counter-clockwise motions with your arms, moving them forward for 3 seconds.'
    },
    {
      name: 'Touch Your Toes',
      description: 'Gently bend forward and reach for your toes for 3 seconds to stretch your lower back and hamstrings effectively.',
      time: '30 seconds',
      instructions: 'Stand with your feet shoulder-width apart and slightly bend your knees. Slowly bend forward from your hips, maintaining a straight back. Reach down towards your toes as far as you can comfortably go. Hold the stretch for 3 seconds.'
    },
    {
      name: 'Left Leg Stretch',
      description: 'Stretch your left leg by shifting your weight to your right leg and bending towards the left for 3 seconds. This exercise enhances lateral flexibility and balance.',
      time: '30 seconds',
      instructions: 'Stand with your legs wider than shoulder-width apart. Shift your weight to your right leg. Slowly bend your body to the left, reaching your left arm towards your left leg. Feel the stretch along the right side of your body. Hold the stretch for 3 seconds.'
    },
    {
      name: 'Right Leg Stretch',
      description: 'Stretch your right leg by shifting your weight to your left leg and bending towards the right for 3 seconds. This exercise enhances lateral flexibility and balance.',
      time: '30 seconds',
      instructions: 'Stand with your legs wider than shoulder-width apart. Shift your weight to your left leg. Slowly bend your body to the right, reaching your right arm towards your right leg. Feel the stretch along the left side of your body. Hold the stretch for 3 seconds.'
    }
    ];

     // Function to extract the duration from the exercise time string
    const extractDuration = (timeString) => {
        const match = timeString.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    };

    useEffect(() => {
        if (sessionStarted && calisthenicsExercises.length > 0) {
        const duration = extractDuration(calisthenicsExercises[currentExerciseIndex].time);
        setExerciseDuration(duration);
        setRemainingTime(duration);
        }
    }, [sessionStarted, currentExerciseIndex]);

    useEffect(() => {
        let timer;
        if (sessionStarted && remainingTime > 0) {
        timer = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);
        } else if (remainingTime === 0) {
        if (currentExerciseIndex < calisthenicsExercises.length - 1) {
            setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
        } else {
            // Session complete, reset for next session
            setSessionStarted(false);
            setCurrentExerciseIndex(0);
        }
        }
        return () => clearInterval(timer);
    }, [sessionStarted, remainingTime, currentExerciseIndex]);

    const startSession = () => {
        setSessionStarted(true);
      };
    
      const currentExercise = calisthenicsExercises[currentExerciseIndex] || {};
    
      return (
      <Box as="section" py={10}>
          {!sessionStarted && (
            <Button colorScheme={buttonColorScheme} onClick={startSession} color={textColor} className="bold">
              Start Calisthenics Session
            </Button>
          )}
          {sessionStarted && (
            <VStack spacing={4} align="left">
              <Text fontSize="lg" color={textColor}>{currentExercise.name}</Text>
              <Text fontSize="md" fontStyle="italic">
                {currentExercise.description}
              </Text>
              <Text fontSize="md" color={textColor}>{currentExercise.instructions}</Text>
              <HStack>
                <Text>Time for this exercise: {currentExercise.time}</Text>
                <Spacer />
                <Text>Remaining Time: {remainingTime} seconds</Text>
              </HStack>
              <Progress
                value={((exerciseDuration - remainingTime) / exerciseDuration) * 100}
                size="sm"
                colorScheme={buttonColorScheme}
              />
            </VStack>
          )}
        </Box>
      );
    };
export default CalisthenicsSession;