import React, { useState, useMemo  } from 'react';
import { Box, Heading, Image, Center, Select, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useColorModeValue } from '@chakra-ui/react';
import meals from 'components/meals';
import 'styles/glow.module.css';

const MealDispenser = () => {
    const [selectedDuration, setSelectedDuration] = useState('all');
    const [selectedServings, setSelectedServings] = useState('all');
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const heroBgGradient = useColorModeValue('orange', 'blue');

    const durationToMinutes = (duration) => {
        let totalMinutes = 0;
        const parts = duration.match(/\d+\s\w+/g); // Matches '2 hours', '30 minutes', etc.

        if (parts) {
            parts.forEach(part => {
                const [value, unit] = part.split(' ');
                if (unit.startsWith('hour')) {
                    totalMinutes += parseInt(value) * 60;
                } else if (unit.startsWith('minute')) {
                    totalMinutes += parseInt(value);
                }
            });
        }

        return totalMinutes;
    };

    const uniqueDurations = useMemo(() => {
        const durationSet = new Set(meals.map(meal => meal.duration));
        return Array.from(durationSet).sort((a, b) => durationToMinutes(a) - durationToMinutes(b));
    }, [meals]);

    const uniqueServings = useMemo(() => {
        const servingsSet = new Set(meals
            .filter(meal => meal.servings)
            .map(meal => meal.servings.toString())
        );
        return Array.from(servingsSet).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    }, [meals]);

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
        setSelectedMeal(null);
    };

    const handleServingsChange = (event) => {
        setSelectedServings(event.target.value);
        setSelectedMeal(null);
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMeal(null);
    };

    const filteredMeals = meals.filter((meal) => {
        const durationFilter = selectedDuration === 'all' || meal.duration.includes(selectedDuration);
        const servingsFilter = selectedServings === 'all' || (meal.servings && meal.servings.toString() === selectedServings);
        return durationFilter && servingsFilter;
    });

    const getHealthyMeal = () => {
      const randomIndex = Math.floor(Math.random() * filteredMeals.length);
      const randomMeal = filteredMeals[randomIndex];
      handleMealClick(randomMeal);
    };

    return (
        <Box p={4}>
            <Heading as="h2" size="md" mb={4}>
                Meal Dispenser
            </Heading>

            {/* Duration Filter */}
            <Select value={selectedDuration} onChange={handleDurationChange} mb={4}>
                <option value="all">All Durations</option>
                {uniqueDurations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                ))}
            </Select>

            {/* Servings Filter */}
            <Select value={selectedServings} onChange={handleServingsChange} mb={4}>
                <option value="all">All Servings</option>
                {uniqueServings.map(serving => (
                    <option key={serving} value={serving}>{serving}</option>
                ))}
            </Select>

            {/* Get a Healthy Meal Button */}
            <Box mb={4}>
                <button onClick={getHealthyMeal}>Get a Random Healthy Meal</button>
            </Box>

            {/* Grid for Meals */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {filteredMeals.map((meal, index) => (
                    <GridItem key={index} onClick={() => handleMealClick(meal)} borderWidth="1px" borderRadius="lg" p={4} boxShadow="md" cursor="pointer" textAlign="center">
                        <Center>
                            <Image src={meal.imageUrl} alt={meal.name} boxSize="150px" objectFit="cover" mb={2} />
                        </Center>
                        <Heading as="h3" size="md">{meal.name}</Heading>
                        <p>Duration: {meal.duration}</p>
                        {meal.servings && <p>Servings: {meal.servings}</p>}
                    </GridItem>
                ))}
            </Grid>

            {/* Modal for Meal Details */}
            {selectedMeal && (
                <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
                    <ModalOverlay />
                    <ModalContent bg={heroBgGradient}>
                        <ModalHeader>{selectedMeal.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Image src={selectedMeal.imageUrl} alt={selectedMeal.name} boxSize="100px" objectFit="cover" mb={2} />
                            </Center>
                        <p><strong>Duration:</strong> {selectedMeal.duration}</p>
                        {selectedMeal.servings && <p><strong>Servings:</strong> {selectedMeal.servings}</p>}

                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            {selectedMeal.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                        <p><strong>Instructions:</strong></p>
                        <ol>
                            {selectedMeal.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                            ))}
                        </ol>

                        <p><strong>Nutrition:</strong></p>
                        <p>Calories: {selectedMeal.nutrition.calories}</p>
                        <p>Protein: {selectedMeal.nutrition.protein}</p>
                        <p>Carbs: {selectedMeal.nutrition.carbs}</p>
                        <p>Fat: {selectedMeal.nutrition.fat}</p>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default MealDispenser;
