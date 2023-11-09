// components/CalorieCounter.js

import React, { useState } from 'react';
import {
  Box,
  Input, // Import Input from Chakra UI
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

function CalorieCounter() {
  // State to store the user's daily calorie intake and goal
  const [caloriesIntake, setCaloriesIntake] = useState(0);
  const [caloriesGoal, setCaloriesGoal] = useState(0);
  const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
  const buttonColorScheme = useColorModeValue('orange', 'blue');
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');

  // Function to update the daily calorie intake
  const handleCaloriesIntakeChange = (event) => {
    const newCaloriesIntake = parseInt(event.target.value, 10);
    setCaloriesIntake(newCaloriesIntake);
  };

  // Function to update the calorie goal
  const handleCaloriesGoalChange = (event) => {
    const newCaloriesGoal = parseInt(event.target.value, 10);
    setCaloriesGoal(newCaloriesGoal);
  };

  // Function to calculate the remaining calories
  const remainingCalories = caloriesGoal - caloriesIntake;

  return (
    <div>
      <h2>Calorie Counter</h2>
      <div>
        <label htmlFor="caloriesIntake">Calories Intake:</label>
        <Input
            bgGradient={heroBgGradient}
            type="number"
          id="caloriesIntake"
          value={caloriesIntake}
          onChange={handleCaloriesIntakeChange}
        />
      </div>
      <div>
        <label htmlFor="caloriesGoal">Calories Goal:</label>
        <Input
            bgGradient={heroBgGradient}
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
