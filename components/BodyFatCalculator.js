import React, { useState } from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function BodyFatCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bodyFatPercentage, setBodyFatPercentage] = useState(null);
  const { colorMode } = useColorMode();
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');

  const calculateBodyFatPercentage = () => {
    // Perform the body fat percentage calculation here
    // Replace this with your actual calculation logic
    // For demonstration purposes, let's assume a fixed value
    const calculatedPercentage = 15.5; // Replace with your calculation result
    setBodyFatPercentage(calculatedPercentage);
  };

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

  const labelStyle = {
    color: colorMode === 'dark' ? 'white' : 'black', // Adjust text color based on color mode
    marginRight: '10px', // Add margin for spacing
  };

  return (
    <div>
      <h2>Body Fat Percentage Calculator</h2>
      <label style={labelStyle}>
        Weight (in kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle} // Apply the inputStyle for the input field
        />
      </label>
      <label style={labelStyle}>
        Height (in cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={inputStyle} // Apply the inputStyle for the input field
        />
      </label>
      <label style={labelStyle}>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle} // Apply the inputStyle for the input field
        />
      </label>
      <label style={labelStyle}>
        Gender:
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={inputStyle} // Apply the inputStyle for the select field
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <button onClick={calculateBodyFatPercentage}>Calculate</button>

      {bodyFatPercentage !== null && (
        <div>
          <h3>Result</h3>
          <p>Body Fat Percentage: {bodyFatPercentage}%</p>
        </div>
      )}
    </div>
  );
}

export default BodyFatCalculator;