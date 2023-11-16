// components/OneRepMaxCalculator.js

import React, { useState } from 'react';
import { Input, Center } from '@chakra-ui/react';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';
import { Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

const OneRepMaxCalculator = () => {
    const [weight, setWeight] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [reps, setReps] = useState(5); // Default reps value
    const [formula, setFormula] = useState('epley');
    const [oneRepMax, setOneRepMax] = useState(null);
    const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');
    const lightDarkColor = useColorModeValue('black', 'white');
    const buttonColorScheme = useColorModeValue('orange', 'blue');
    const textColor = useColorModeValue('#000000', 'inherit');

    const inputStyle = {
        background: 'transparent', // Ensures a transparent background
        borderColor: 'gray.300', // You can adjust this to match your design
        color: textColor, // Dynamic text color based on color mode
        _placeholder: { color: 'gray.500' }, // Style for placeholder text
    };

    const calculateOneRepMax = () => {
        let max = 0;
        if (weight && reps) {
            switch (formula) {
                case 'epley':
                    max = weight * (1 + 0.0333 * reps);
                    break;
                case 'brzycki':
                    max = weight / (1.0278 - 0.0278 * reps);
                    break;
                case 'lombardi':
                    max = weight * Math.pow(reps, 0.10);
                    break;
                // ... other formulas ...
            }
            setOneRepMax(Math.round(max));
        }
    };

    return (
        <Box>
            <Text fontSize="xl" mb={4}>One Rep Max Calculator</Text>
            <Input
                placeholder="Enter weight lifted"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                mb={2}
                style={inputStyle}
            />
            <Text mb={2}>Number of Reps: {reps}</Text>
            <Slider defaultValue={5} min={1} max={12} onChange={setReps} >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            <Select placeholder="Select formula" onChange={(e) => setFormula(e.target.value)} mb={4}>
                <option value="epley">Epley</option>
                <option value="brzycki">Brzycki</option>
                <option value="lombardi">Lombardi</option>
                {/* ... other formulas ... */}
            </Select>
            <Button onClick={calculateOneRepMax} colorScheme={buttonColorScheme} variant="solid" color={textColor}>Calculate</Button>
            {oneRepMax && <Text mt={4}>Estimated 1RM: {oneRepMax} lbs</Text>}
        </Box>
    );
};

export default OneRepMaxCalculator;