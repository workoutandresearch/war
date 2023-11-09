import React, { useState } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';


const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const textColor = useColorModeValue('#000000', 'inherit');

  const addWorkout = () => {
    if (inputValue) {
      setWorkouts([...workouts, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Workout History</h2>
      <div className="workout-input">
        <input
          type="text"
          placeholder="Enter a workout"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ backgroundColor: 'transparent', border: '1px solid black' }}
        />
        <button
          onClick={addWorkout}
          style={{
            backgroundColor: 'transparent',
            color: { textColor },
            border: '1px solid black',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <ul className="workout-list">
        {workouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;
