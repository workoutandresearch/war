import React, { useState } from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function BodyweightWorkouts() {
  const [exercise, setExercise] = useState('Push-ups');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [workoutLogs, setWorkoutLogs] = useState([]);
  const { colorMode } = useColorMode();
  const workoutBgGradient = useColorModeValue('linear(to-r, #4286f4, #6b8dd6)', 'none');
  const aboutBgGradient = useColorModeValue('linear(to-b, #ff7e00, #ffa040)', 'none');
  const buttonColorScheme = useColorModeValue('blue', 'green');
  const textColor = useColorModeValue('#000000', 'inherit');
  const dropdownBgColor = useColorModeValue('white', 'gray.700'); // gray color for dark mode
  const dropdownTextColor = useColorModeValue('black', 'white'); // text color adjustment if needed
  const heroBgGradient = useColorModeValue('linear(to-b, #ff3a00, #ff7e00)', 'none');
    // Define background colors for light and dark modes
    const backgroundColorLight = 'transparent'; // For light mode
    const backgroundColorDark = 'gray'; // For dark mode, adjust the gray shade as needed
  
    // Use useColorModeValue to switch between light and dark mode colors
    const inputBackgroundColor = useColorModeValue(backgroundColorLight, backgroundColorDark);

  const bodyweightWorkouts = [
    'Push-ups', 'Pull-ups', 'Chin-ups', 'Sit-ups',
    'Squats', 'Lunges', 'Burpees', 
    'Jumping Jacks', 'Mountain Climbers',
    'Dips',
  ];

  const logWorkout = () => {
    const newEntry = { exercise, reps, sets };
    console.log(`Exercise: ${exercise}, Reps: ${reps}, Sets: ${sets}`);
    setWorkoutLogs(prevLogs => [...prevLogs, newEntry]);
    // Additional logic to save the workout data (to a server or local storage)
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    marginRight: '10px',
    border: '1px solid',
    borderColor: colorMode === 'dark' ? 'gray' : 'black',
    background: 'transparent', // Set a transparent background for the input boxes
    borderRadius: '4px',
  };

  const labelStyle = {
    color: colorMode === 'dark' ? 'white' : 'black',
    marginRight: '10px',
  };

  return (
    <div>
      <h2>Bodyweight Workout Tracker</h2>
      <label style={labelStyle} background={heroBgGradient}>
        Exercise:
        <select
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          color={textColor}
          style={inputStyle}
          background='transparent'
        >
          {bodyweightWorkouts.map((workout) => (
            <option key={workout} value={workout}>{workout}</option>
          ))}
        </select>
      </label>
      <label style={labelStyle}>
        Reps:
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          color={textColor}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Sets:
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          color={textColor}
          style={inputStyle}
        />
      </label>
      <button onClick={logWorkout} colorScheme={buttonColorScheme} variant="solid" color={textColor}>Log Workout</button>
      
      <h3>Workout Progress</h3>
      <ul>
        {workoutLogs.map((log, index) => (
          <li key={index}>{`${log.exercise}: ${log.reps} reps, ${log.sets} sets`}</li>
        ))}
      </ul>
    </div>
  );
}

export default BodyweightWorkouts;