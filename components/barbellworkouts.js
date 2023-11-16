import React, { useState } from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function BarbellWorkouts() {
  const [exercise, setExercise] = useState('Barbell Squat');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const barbellWorkouts = [
    'Barbell Squat', 'Barbell Deadlift', 'Barbell Lunges',
    'Barbell Bench Press', 'Incline Bench Press', 'Decline Bench Press',
    'Close Grip Bench Press', 'Wide Grip Bench Press',
    'Barbell Shoulder Press', 'Barbell Lateral Raise',
    'Barbell Row', 'Barbell Bicep Curl',
    'Barbell Tricep Extension', 'Barbell Tricep Skull Crushers'
  ];

  const logWorkout = () => {
    if (weight && reps && sets) {
      const newEntry = { exercise, weight: parseFloat(weight), reps: parseInt(reps, 10), sets: parseInt(sets, 10) };
      setWorkoutLogs([...workoutLogs, newEntry]);

      // Clear the input fields after logging
      setWeight('');
      setReps('');
      setSets('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid',
    borderColor: useColorModeValue('black', 'gray'),
    borderRadius: '4px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: useColorModeValue('black', 'white'),
  };

  return (
    <div>
      <h2>Barbell Workout Tracker</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Exercise:</label>
        <select
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          style={inputStyle}
        >
          {barbellWorkouts.map(workout => (
            <option key={workout} value={workout}>{workout}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button onClick={logWorkout} style={{ marginBottom: '20px' }}>Log Workout</button>
      
      <h3>Workout Progress</h3>
      <ul>
        {workoutLogs.map((log, index) => (
          <li key={index}>{`${log.exercise}: ${log.weight} lbs, ${log.reps} reps, ${log.sets} sets`}</li>
        ))}
      </ul>
    </div>
  );
}


export default BarbellWorkouts;