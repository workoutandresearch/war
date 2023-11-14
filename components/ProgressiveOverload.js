// components/ProgressiveOverload.js

import React, { useState, useEffect } from 'react';
import { Box, Select, HStack, Input, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressiveOverload = () => {
    const [workouts, setWorkouts] = useState([]);
    const [currentExercise, setCurrentExercise] = useState('');
    const [currentWeight, setCurrentWeight] = useState('');
    const [currentReps, setCurrentReps] = useState('');
    const [currentSets, setCurrentSets] = useState('');
    const textColor = useColorModeValue('#000000', 'inherit');
    const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');

    const addWorkout = () => {
        const newWorkout = {
            exercise: currentExercise,
            weight: parseInt(currentWeight, 10),
            reps: parseInt(currentReps, 10),
            sets: parseInt(currentSets, 10),
            date: new Date().toISOString().split('T')[0] // Store the current date
        };
        setWorkouts([...workouts, newWorkout]);
    };

    useEffect(() => {
        // Implement logic to fetch and set previous workout data if needed
    }, []);

    const dataForGraph = workouts.map(workout => ({
        date: workout.date,
        weight: workout.weight,
        reps: workout.reps,
        sets: workout.sets
    }));

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Progressive Overload Tracker</Text>
            <VStack spacing={4}>
                <Select placeholder="Select Exercise" onChange={(e) => setCurrentExercise(e.target.value)} color={textColor}>
                    {/* Add exercise options here */}
                </Select>
                <HStack>
                    <Input placeholder="Weight" type="number" onChange={(e) => setCurrentWeight(e.target.value)} color={textColor} />
                    <Input placeholder="Reps" type="number" onChange={(e) => setCurrentReps(e.target.value)} color={textColor} />
                    <Input placeholder="Sets" type="number" onChange={(e) => setCurrentSets(e.target.value)} color={textColor} />
                </HStack>
                <Button colorScheme={boxColorScheme} onClick={addWorkout}>Add Workout</Button>
            </VStack>

            {workouts.length > 0 && (
                <ResponsiveContainer width="95%" height={400}>
                    <LineChart data={dataForGraph}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="reps" stroke="#82ca9d" />
                        <Line yAxisId="right" type="monotone" dataKey="sets" stroke="#ffc658" />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </Box>
    );
};

export default ProgressiveOverload;