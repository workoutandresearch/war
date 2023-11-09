import React, { useState } from 'react';
import {
  Box,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

function CalorieCounter() {
  const [caloriesIntake, setCaloriesIntake] = useState(0);
  const [caloriesGoal, setCaloriesGoal] = useState(0);
  const buttonColorScheme = useColorModeValue('orange', 'blue');
  const featuresBgGradient = useColorModeValue('linear(to-b, #ffa040, #ffca80)', 'none');
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
  const textColor = useColorModeValue('#000000', 'inherit');

  const handleCaloriesIntakeChange = (event) => {
    const newCaloriesIntake = parseInt(event.target.value, 10);
    setCaloriesIntake(newCaloriesIntake);
  };

  const handleCaloriesGoalChange = (event) => {
    const newCaloriesGoal = parseInt(event.target.value, 10);
    setCaloriesGoal(newCaloriesGoal);
  };

  const remainingCalories = caloriesGoal - caloriesIntake;
  const divStyle = {
    backgroundColor: featuresBgGradient, // Set the background color for the container div
    padding: '10px',
    borderRadius: '8px',
  };

  const inputStyle = {
    background: 'transparent', // Set a transparent background for the input boxes
    width: '100%', // Ensure input boxes take up the full width
    padding: '8px',
    marginBottom: '10px',
  };

  const labelStyle = {
    color: textColor,
  };

  return (
    <div style={divStyle}>
      <h2>Calorie Counter</h2>
      <div>
        <label style={labelStyle}>Calories Intake:</label>
        <Input
          style={inputStyle} // Apply the inputStyle for the input field
          type="number"
          id="caloriesIntake"
          value={caloriesIntake}
          onChange={handleCaloriesIntakeChange}
        />
      </div>
      <div>
        <label style={labelStyle}>Calories Goal:</label>
        <Input
          style={inputStyle} // Apply the inputStyle for the input field
          type="number"
          id="caloriesGoal"
          value={caloriesGoal}
          onChange={handleCaloriesGoalChange}
        />
      </div>
      <div>
        <p>Remaining Calories: {remainingCalories}</p>
      </div>
    </div>
  );
}

export default CalorieCounter;
