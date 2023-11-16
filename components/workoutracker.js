import React, { useState } from 'react';
import { Box, Select, Input, Button, Radio, RadioGroup, Stack, Text, useColorMode, useColorModeValue, useDisclosure, useInterval } from '@chakra-ui/react';

function WorkoutTracker() {
    const { colorMode } = useColorMode();
    const [selectedType, setSelectedType] = useState('barbell');
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState('miles'); // Default to miles
    const [workoutLogs, setWorkoutLogs] = useState([]);
    const [weightUnit, setWeightUnit] = useState('lbs'); // Default to pounds
    const buttonColorScheme = useColorModeValue('orange', 'blue');
    const textColor = useColorModeValue('#000000', 'inherit');

    const workoutTypes = {
        barbell: ['Barbell Squat', 'Barbell Deadlift', 'Barbell Lunges', 'Barbell Bench Press', 'Incline Bench Press', 'Decline Bench Press', 'Close Grip Bench Press', 'Wide Grip Bench Press', 'Barbell Shoulder Press', 'Barbell Lateral Raise', 'Barbell Row', 'Barbell Bicep Curl', 'Barbell Tricep Extension', 'Barbell Tricep Skull Crushers'],
        dumbbell: ['Dumbbell Squat', 'Dumbbell Deadlift', 'Dumbbell Lunges', 'Dumbbell Bench Press', 'Dumbbell Incline Bench Press', 'Dumbbell Decline Bench Press', 'Dumbbell Bicep Curl', 'Dumbbell Preacher Curl', 'Dumbbell Tricep Extension', 'Dumbbell Tricep Skull Crushers', 'Dumbbell Lateral Raise', 'Dumbbell Row', 'Dumbbell Shoulder Press', 'Dumbbell Tricep Pushdown','Dumbbell Chest Flys', 'Dumbbell Crush Press', 'Dumbbell Pullover'],
        kettlebell: ['Kettlebell Squat', 'Kettlebell Deadlift', 'Kettlebell Lunges', 'Kettlebell Bench Press', 'Kettlebell Incline Bench Press', 'Kettlebell Decline Bench Press', 'Kettlebell Bicep Curl', 'Kettlebell Preacher Curl', 'Kettlebell Tricep Extension', 'Kettlebell Tricep Skull Crushers', 'Kettlebell Lateral Raise', 'Kettlebell Row', 'Kettlebell Shoulder Press', 'Kettlebell Tricep Pushdown', 'Kettlebell Chest Flys', 'Kettlebell Crush Press', 'Kettlebell Pullover'],
        weighted_vest: ['Weighted Push-ups', 'Weighted Pull-ups', 'Weighted Chin-ups', 'Weighted Sit-ups', 'Weighted Squats', 'Weighted Lunges', 'Weighted Burpees', 'Weighted Jumping Jacks', 'Weighted Mountain Climbers','Weighted Dips',],
        bodyweight: ['Push-ups', 'Pull-ups', 'Chin-ups', 'Sit-ups', 'Squats', 'Lunges', 'Burpees',  'Jumping Jacks', 'Mountain Climbers', 'Dips',],
        cardio: ['Indoor/Outdoor Walk', 'Indoor/Outdoor Jog', 'Indoor/Outdoor Run/Sprint', 'Indoor/Outdoor Speed-Walk', 'Treadmill', 'Elliptical', 'Stationary Bike']
    };

    const inputStyle = {
        background: 'transparent', // Ensures a transparent background
        borderColor: 'gray.300', // You can adjust this to match your design
        color: textColor, // Dynamic text color based on color mode
        _placeholder: { color: textColor }, // Style for placeholder text
    };

    const logWorkout = () => {
        let newEntry;
    
        switch(selectedType) {
            case 'barbell':
            case 'dumbbell':
            case 'kettlebell':
            case 'weighted_vest':
            case 'bodyweight':
            
                // For weight-based workouts, log exercise, weight, reps, and sets
                if (!exercise || !weight || !reps || !sets) {
                    alert('Please fill all fields');
                    return;
                }
                newEntry = {
                    type: selectedType,
                    exercise,
                    weight: `${weight} ${unit === 'kg' ? 'kg' : 'lbs'}`,
                    reps,
                    sets,
                    date: new Date().toLocaleDateString()
                };
                break;
            case 'cardio':
                // For cardio workouts, log exercise, distance, and unit
                if (!exercise || !distance) {
                    alert('Please fill all fields');
                    return;
                }
                newEntry = {
                    type: selectedType,
                    exercise,
                    distance: `${distance} ${unit}`,
                    date: new Date().toLocaleDateString()
                };
                break;
            default:
                return;
        }
        setWorkoutLogs([...workoutLogs, newEntry]); // This line was missing earlier
    }; // Closing bracket for logWorkout was missing

        const renderWorkoutInputs = () => {
            const inputStyle = {
                background: 'transparent', // Ensures a transparent background
                borderColor: 'gray.300', // You can adjust this to match your design
                _placeholder: { color: textColor }, // Style for placeholder text
            };
            
            switch(selectedType) {
                    case 'barbell':
                    case 'dumbbell':
                    case 'kettlebell':
                    case 'weighted_vest':
                        return (
                            <>
                                <Input placeholder="Weight" color={textColor} type="number" value={weight} onChange={(e) => setWeight(e.target.value)}  style={inputStyle}/>
                                <RadioGroup onChange={setWeightUnit} value={weightUnit}>
                                    <Stack direction="row">
                                        <Radio value="lbs">Lbs</Radio>
                                        <Radio value="kg">Kg</Radio>
                                    </Stack>
                                </RadioGroup>
                                <Input placeholder="Reps" color={textColor} type="number" value={reps} onChange={(e) => setReps(e.target.value)}  style={inputStyle}/>
                                <Input placeholder="Sets" color={textColor} type="number" value={sets} onChange={(e) => setSets(e.target.value)}  style={inputStyle}/>
                            </>
                        );
                case 'cardio':
                    return (
                        <>
                            <Input placeholder="Distance" color={textColor} type="number" value={distance} onChange={(e) => setDistance(e.target.value)} style={inputStyle}/>
                            <RadioGroup onChange={setUnit} value={unit}>
                                <Stack direction="row">
                                    <Radio value="miles">Miles</Radio>
                                    <Radio value="km">Km</Radio>
                                </Stack>
                            </RadioGroup>
                        </>
                    );
                default:
                    return null;
            }
        };

    return (
        <Box>
            <Text fontSize="2xl" color={textColor}>Workout Tracker</Text>
            <Select placeholder="Select Workout Type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} color={textColor}>
                {Object.keys(workoutTypes).map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </Select>
            <Select placeholder="Select Exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} color={textColor}>
                {workoutTypes[selectedType].map(ex => (
                    <option key={ex} value={ex}>{ex}</option>
                ))}
            </Select>
            {renderWorkoutInputs()}
            <Button colorScheme={buttonColorScheme} color={textColor} onClick={logWorkout}>Log Workout</Button>
            
            {/* Display of logged workouts */}
            {workoutLogs.length > 0 && (
                <Box mt="4">
                    <Text fontSize="lg" mb="2" color={textColor}>Workout Progress:</Text>
                    {workoutLogs.map((log, index) => (
                        <Box key={index} p="2" mb="2" borderWidth="1px" borderRadius="lg">
                            <Text color={textColor}>Type: {log.type}</Text>
                            <Text color={textColor}>Exercise: {log.exercise}</Text>
                            {log.weight && <Text color={textColor}>Weight: {log.weight}</Text>}
                            {log.reps && <Text color={textColor}>Reps: {log.reps}</Text>}
                            {log.sets && <Text color={textColor}>Sets: {log.sets}</Text>}
                            {log.distance && <Text color={textColor}>Distance: {log.distance}</Text>}
                            <Text color={textColor}>Date: {log.date}</Text>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
}

export default WorkoutTracker;
