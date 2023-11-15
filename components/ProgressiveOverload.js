// components/ProgressiveOverload.js

import React, { useState, useEffect } from 'react';
import { Box, Select, HStack, Input, Button, Drawer, Checkbox, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const ProgressiveOverload = () => {
    const [workouts, setWorkouts] = useState([]);
    const [currentExercise, setCurrentExercise] = useState('');
    const [currentWeight, setCurrentWeight] = useState('');
    const [currentReps, setCurrentReps] = useState('');
    const [currentSets, setCurrentSets] = useState('');
    const textColor = useColorModeValue('#000000', 'inherit');
    const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
      const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');


    // Define dynamic colors based on the color mode
    const lineColor = useColorModeValue('#000000', '#FFFFFF'); // Black in light mode, White in dark mode
    const axisTextColor = useColorModeValue('#000000', '#FFFFFF'); // Black in light mode, White in dark mode

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

      // Define styles for input fields and labels
  const inputStyle = {
    background: 'transparent', // Set a transparent background for the input boxes
    width: '100%', // Ensure input boxes take up the full width
    padding: '8px',
    marginBottom: '10px',
    marginRight: '10px', // Add margin for spacing
    background: aboutBgGradient, // Apply the background gradient
    border: '1px solid black', // Add border for style
    borderRadius: '4px', // Add border radius for style
  };

    const dataForGraph = workouts.map(workout => ({
        date: workout.date,
        weight: workout.weight,
        reps: workout.reps,
        sets: workout.sets
    }));

        // New state variables for toggling visibility
        const [showWeight, setShowWeight] = useState(true);
        const [showReps, setShowReps] = useState(true);
        const [showSets, setShowSets] = useState(true);

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Progressive Overload Tracker</Text>
            <VStack spacing={4}>
            <Select 
                placeholder="Select Exercise" 
                onChange={(e) => setCurrentExercise(e.target.value)} 
                color={textColor}
            >
                {/* Exercise options */}
                <option value="barbell">Barbell Exercises</option>
                <option value="dumbbell">Dumbbell Exercises</option>
                <option value="kettlebell">Kettlebell Exercises</option>
                <option value="cable machine">Machine Exercises</option>
                {/* You can add more options as needed */}
            </Select>
                <HStack>
                    <Input placeholder="Weight" type="number" onChange={(e) => setCurrentWeight(e.target.value)} style={inputStyle} color={textColor} />
                    <Input placeholder="Reps" type="number" onChange={(e) => setCurrentReps(e.target.value)} style={inputStyle} color={textColor} />
                    <Input placeholder="Sets" type="number" onChange={(e) => setCurrentSets(e.target.value)} style={inputStyle} color={textColor} />
                </HStack>
                <Button colorScheme={boxColorScheme} onClick={addWorkout} textColor={textColor}>Add Workout</Button>
                <HStack my={4}>
                <Checkbox isChecked={showWeight} onChange={(e) => setShowWeight(e.target.checked)} style={inputStyle}>Weight</Checkbox>
                <Checkbox isChecked={showReps} onChange={(e) => setShowReps(e.target.checked)} style={inputStyle}>Reps</Checkbox>
                <Checkbox isChecked={showSets} onChange={(e) => setShowSets(e.target.checked)} style={inputStyle}>Sets</Checkbox>
            </HStack>
            </VStack>

            {workouts.length > 0 && (
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={dataForGraph}>
                    <CartesianGrid strokeDasharray="3 3" stroke={lineColor} />
                    <XAxis dataKey="date" stroke={axisTextColor} />
                    <YAxis yAxisId="left" orientation="left" stroke={lineColor} allowDecimals={false} />
                    <YAxis yAxisId="right" orientation="right" stroke={lineColor} allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    {showWeight && <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#FF0000" activeDot={{ r: 8 }} />}
                    {showReps && <Line yAxisId="right" type="monotone" dataKey="reps" stroke="#00FF00" />}
                    {showSets && <Line yAxisId="right" type="monotone" dataKey="sets" stroke="#00CCCC" />}
                </LineChart>
            </ResponsiveContainer>
        )}
        </Box>
    );
};

export default ProgressiveOverload;