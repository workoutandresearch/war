import React, { useState } from 'react';
import { Box, Heading, Select, VStack } from '@chakra-ui/react';
import barbellExercises from 'components/barbellExercises';
import kettlebellExercises from 'components/kettlebellExercises';
import bodyweightExercises from 'components/bodyweightExercises';
import weightedVestExercises from 'components/weighted-vest-beltExercises';
import dumbbellExercises from 'components/dumbbellExercises';

const exerciseNameStyle = {
    fontFamily: 'Share Tech Mono', // Apply the "Share Tech Mono" font
  };

const allExercises = [
  ...barbellExercises,
  ...dumbbellExercises,
  ...kettlebellExercises,
  ...bodyweightExercises,
  ...weightedVestExercises,
];

const WorkoutLibrary = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
    // No need to reset the selected muscle group when "All Equipment" is selected
    setSelectedExercise(null); // Clear selected exercise when changing filters
  };
  

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(event.target.value);
    setSelectedExercise(null); // Clear selected exercise when changing filters
  };

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const filteredExercises = allExercises
    .filter((workout) => {
      const equipmentFilter =
        selectedEquipment === 'all' || workout.equipment === selectedEquipment;
      const muscleGroupFilter =
        selectedMuscleGroup === 'all' ||
        (workout.muscleGroups && workout.muscleGroups.includes(selectedMuscleGroup));
      return equipmentFilter && muscleGroupFilter;
    });

  return (
    <Box p={4}>
      <Heading as="h2" size="md" mb={4} style={exerciseNameStyle}>
        Workout Library
      </Heading>

      {/* Equipment filter dropdown */}
      <Select value={selectedEquipment} onChange={handleEquipmentChange} mb={4}>
        <option value="all">All Equipment</option>
        <option value="barbell">Barbell</option>
        <option value="dumbbell">Dumbbell</option>
        <option value="kettlebell">Kettlebell</option>
        <option value="weighted-vest">Weighted Vest / Belt</option>
        <option value="bodyweight">Bodyweight</option>
      </Select>

      {/* Muscle group filter dropdown */}
      <Select value={selectedMuscleGroup} onChange={handleMuscleGroupChange} mb={4} style={exerciseNameStyle}> 
        <option value="all">All Muscle Groups</option>
        {/* Dynamically generate muscle group options */}
        {allExercises.reduce((uniqueGroups, exercise) => {
          return exercise.muscleGroups
            ? [...uniqueGroups, ...exercise.muscleGroups]
            : uniqueGroups;
        }, []).filter((group, index, self) => self.indexOf(group) === index).map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </Select>

      {/* Display filtered workouts */}
      <VStack spacing={4} style={exerciseNameStyle}>
        {filteredExercises.map((workout, index) => (
          <Box
            key={workout.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="md"
            cursor="pointer"
            onClick={() => handleExerciseClick(workout)}
          >
            <Heading as="h3" size="md" style={exerciseNameStyle}> 
              {workout.name}
            </Heading>
            <p>{workout.description}</p>
            {selectedExercise === workout && (
              <div>
                <strong>Muscle Groups:</strong>
                <ul>
                  {workout.muscleGroups ? (
                    workout.muscleGroups.map((group) => (
                      <li key={group}>{group}</li>
                    ))
                  ) : (
                    <li>No muscle groups specified</li>
                  )}
                </ul>
                <strong>Tips:</strong>
                <ul>
                  {workout.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
                <strong>What Not to Do:</strong>
                <ul>
                  {workout.whatNotToDo.map((notToDo, index) => (
                    <li key={index}>{notToDo}</li>
                  ))}
                </ul>
              </div>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default WorkoutLibrary;