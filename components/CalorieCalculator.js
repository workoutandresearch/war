import { Input, Select, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('#000000', 'inherit');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');

  const calculateCalories = (event) => {
    event.preventDefault();

    const genderFactor = gender === 'male' ? 5 : -161;

    const bmr = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + genderFactor;

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

    setCalories(tdee.toFixed(2));
  };

  const divStyle = {
    backgroundColor: aboutBgGradient, // Set the background color for the container div
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
      <h2>Calorie Calculator</h2>
      <form onSubmit={calculateCalories}>
        <div>
          <label style={labelStyle}>Weight (in kilograms):</label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={inputStyle} // Apply the inputStyle for the input field
          />
        </div>
        <div>
          <label style={labelStyle}>Height (in centimeters):</label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={inputStyle} // Apply the inputStyle for the input field
          />
        </div>
        <div>
          <label style={labelStyle}>Age:</label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle} // Apply the inputStyle for the input field
          />
        </div>
        <div>
          <label style={labelStyle}>Gender:</label>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={inputStyle} // Apply the inputStyle for the select field
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
            style={inputStyle} // Apply the inputStyle for the select field
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