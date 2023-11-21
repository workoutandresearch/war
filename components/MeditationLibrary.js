import React, { useState } from 'react';
import { Box, Heading, Select, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useColorModeValue } from '@chakra-ui/react';
import meditationTechniquesData from 'components/meditationTechniques'; // Import a list of meditation techniques

const MeditationLibrary = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroBgGradient = useColorModeValue('orange', 'blue');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedTechnique(null); // Clear selected technique when changing filters
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
    setSelectedTechnique(null); // Clear selected technique when changing filters
  };

  const handleTechniqueClick = (technique) => {
    setSelectedTechnique(technique);
    setIsModalOpen(true); // Open the modal when a technique is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTechnique(null);
  };

  const filteredTechniques = meditationTechniquesData
    .filter((technique) => {
      const typeFilter =
        selectedType === 'all' || technique.type === selectedType;
      const durationFilter =
        selectedDuration === 'all' || technique.duration === selectedDuration;
      return typeFilter && durationFilter;
    });

  // Component JSX
  return (
    <Box p={4}>
      <Heading as="h2" size="md" mb={4}>
        Meditation Library
      </Heading>

      {/* Type filter dropdown */}
      <Select value={selectedType} onChange={handleTypeChange} mb={4}>
        <option value="all">All Types</option>
        {Array.from(new Set(meditationTechniquesData.map((technique) => technique.type))).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>

      <Select value={selectedDuration} onChange={handleDurationChange} mb={4}>
        <option value="all">All Durations</option>
        {Array.from(new Set(meditationTechniquesData.map((technique) => technique.duration))).map((duration) => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </Select>

      {/* Grid to display filtered techniques */}
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {filteredTechniques.map((technique, index) => (
          <GridItem key={index}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              cursor="pointer"
              onClick={() => handleTechniqueClick(technique)}
            >
              <Heading as="h3" size="md">
                {technique.name}
              </Heading>
              <p>Type: {technique.type}</p>
              <p>Duration: {technique.duration}</p>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Modal for displaying technique details */}
      {selectedTechnique && (
        <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent bg={heroBgGradient}>
            <ModalHeader>{selectedTechnique.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <strong>Type:</strong> {selectedTechnique.type}
              <br />
              <strong>Duration:</strong> {selectedTechnique.duration}
              <br />
              <strong>Description:</strong> {selectedTechnique.description}
              <br />
              <strong>What to Do:</strong>
              <ul>
                {selectedTechnique.whatToDo &&
                  selectedTechnique.whatToDo.split('\n').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <strong>What Not to Do:</strong>
              <ul>
                {selectedTechnique.whatNotToDo &&
                  selectedTechnique.whatNotToDo.split('\n').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default MeditationLibrary;
