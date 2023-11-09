import { Input, Select, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState<number | string>('');
  const [height, setHeight] = useState<number | string>('');
  const [age, setAge] = useState<number | string>('');
  const [gender, setGender] = useState<string>('male');
  const [activityLevel, setActivityLevel] = useState<string>('sedentary');
  const [calories, setCalories] = useState<string | null>(null);
  const { colorMode } = useColorMode(); // Get the current color mode
  const textColor = useColorModeValue('#000000', 'inherit');
  const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none'); // Define the background gradient

  const calculateCalories = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent form submission and page reload

    // Constants for Mifflin-St Jeor equation
    const genderFactor = gender === 'male' ? 5 : -161;

    // Calculate BMR (Basal Metabolic Rate)
    const bmr = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age)) + genderFactor;

    // Calculate TDEE (Total Daily Energy Expenditure) based on activity level
    let tdee = 0;
    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'lightlyActive':
        tdee = bmr * 1.375;
        break;
      case 'moderatelyActive':
        tdee = bmr * 1.55;
        break;
      case 'veryActive':
        tdee = bmr * 1.725;
        break;
      case 'superActive':
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }

    // Update the 'calories' state with the calculated TDEE
    setCalories(tdee.toFixed(2)); // Round to two decimal places and store in 'calories' state
  };

  // Define a style for the label elements
  const labelStyle = {
    color: textColor,
    bgGradient: { aboutBgGradient }
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <form onSubmit={calculateCalories}>
        <div>
          <label style={labelStyle}>Weight (in kilograms):</label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            bg={aboutBgGradient} // Set the background color based on color mode
          />
        </div>
        <div>
          <label style={labelStyle}>Height (in centimeters):</label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            bg={aboutBgGradient} // Set the background color based on color mode
          />
        </div>
        <div>
          <label style={labelStyle}>Age:</label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            bg={aboutBgGradient} // Set the background color based on color mode
          />
        </div>
        <div>
          <label style={labelStyle}>Gender:</label>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            bg={aboutBgGradient} // Set the background color based on color mode
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <div>
          <label style={labelStyle}>Activity Level:</label>
          <Select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            bg={aboutBgGradient} // Set the background color based on color mode
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightlyActive">Lightly Active (light exercise or sports 1-3 days a week)</option>
            <option value="moderatelyActive">Moderately Active (moderate exercise or sports 3-5 days a week)</option>
            <option value="veryActive">Very Active (hard exercise or sports 6-7 days a week)</option>
            <option value="superActive">Super Active (very hard exercise, physical job, or training)</option>
          </Select>
        </div>
        <button type="submit">Calculate Calories</button>
      </form>
      {calories !== null && (
        <div>
          <h3>Your Daily Calorie Needs:</h3>
          <p>{calories} calories per day</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
