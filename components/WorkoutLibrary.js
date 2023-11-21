import React, { useState } from 'react';
import { Box, Heading, Select, VStack, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useColorModeValue } from '@chakra-ui/react';
import barbellExercises from 'components/barbellExercises';
import kettlebellExercises from 'components/kettlebellExercises';
import bodyweightExercises from 'components/bodyweightExercises';
import weightedVestExercises from 'components/weighted-vest-beltExercises';
import dumbbellExercises from 'components/dumbbellExercises';
import resistanceBandExercises from 'components/resistanceBandExercises'; 

const exerciseNameStyle = {
    fontFamily: 'Share Tech Mono', // Apply the "Share Tech Mono" font
  };

const allExercises = [
  ...barbellExercises,
  ...dumbbellExercises,
  ...kettlebellExercises,
  ...bodyweightExercises,
  ...weightedVestExercises,
  ...resistanceBandExercises,
];

const WorkoutLibrary = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const heroBgGradient = useColorModeValue('orange', 'blue');

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
    // No need to reset the selected muscle group when "All Equipment" is selected
    setSelectedExercise(null); // Clear selected exercise when changing filters
  };

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(event.target.value);
    setSelectedExercise(null); // Clear selected exercise when changing filters
  };

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true); // Open the modal when an exercise is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExercise(null);
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
        <option value="resistanceBand">Resistance Band</option>
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

      {/* Grid to display filtered workouts */}
      <Grid templateColumns="repeat(2, 1fr)" gap={4} style={exerciseNameStyle}>
        {filteredExercises.map((workout, index) => (
          <GridItem key={workout.id} w="100%">
            <Box
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
              {/* Removed the expanded details box */}
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Modal for displaying exercise details */}
      {selectedExercise && (
        <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent bg={heroBgGradient}>
            <ModalHeader>{selectedExercise.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>{selectedExercise.description}</p>
              {/* Exercise details like muscle groups, tips, etc. */}
              <strong>Muscle Groups:</strong>
              <ul>
                {selectedExercise.muscleGroups?.map((group, index) => (
                  <li key={index}>{group}</li>
                ))}
              </ul>
              <strong>Tips:</strong>
              <ul>
                {selectedExercise.tips?.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <strong>What Not to Do:</strong>
              <ul>
                {selectedExercise.whatNotToDo?.map((notToDo, index) => (
                  <li key={index}>{notToDo}</li>
                ))}
              </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default WorkoutLibrary;