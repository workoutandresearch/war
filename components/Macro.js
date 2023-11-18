import React, { useState, useEffect } from 'react';
import { Box, Button, Image, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, HStack, useColorMode, useColorModeValue, useDisclosure, useInterval, Input, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { Alert, AlertIcon } from "@chakra-ui/react";

const Macro = () => {
const { colorMode, toggleColorMode } = useColorMode();
const textColor = useColorModeValue('#000000', 'inherit');
const buttonColorScheme = useColorModeValue('orange', 'blue');
const boxColorScheme = useColorModeValue('#ff3a00', '#ffa040');
const buttonTextColor = colorMode === 'dark' ? 'white' : 'inherit';
  const [foodItem, setFoodItem] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState({
    servingSize: '',
    calories: 0,
    carbs: 0,
    protein: 0,
    fats: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalNutrition, setTotalNutrition] = useState({
    calories: 0,
    carbs: 0,
    protein: 0,
    fats: 0,
  });

  const fetchNutritionalData = async (food) => {
    try {
      const apiKey = 'a377a2de'; // Replace with your actual API key
      const applicationId = '64920067c1d745507429f9a9de34190f'; // Replace with your actual Application ID

      setLoading(true);
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/natural/nutrients',
        { query: food },
        {
          headers: {
            'x-app-id': apiKey,
            'x-app-key': applicationId,
          },
        }
      );

      const foodData = response.data.foods[0];
      setNutritionInfo({
        servingSize: `${foodData.serving_qty} ${foodData.serving_unit} (${foodData.serving_weight_grams}g)`,
        calories: foodData.nf_calories,
        carbs: foodData.nf_total_carbohydrate,
        protein: foodData.nf_protein,
        fats: foodData.nf_total_fat,
      });
    } catch (err) {
      setError('Error fetching nutritional data: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Calculate total nutrition whenever nutritionInfo changes
    setTotalNutrition((prevTotalNutrition) => ({
      calories: prevTotalNutrition.calories + nutritionInfo.calories,
      carbs: prevTotalNutrition.carbs + nutritionInfo.carbs,
      protein: prevTotalNutrition.protein + nutritionInfo.protein,
      fats: prevTotalNutrition.fats + nutritionInfo.fats,
    }));
  }, [nutritionInfo]);

  const calculateMacros = async () => {
    setError('');
    await fetchNutritionalData(foodItem);
    setFoodItem('');
  };

  const resetForm = () => {
    setFoodItem('');
    setError('');
    setNutritionInfo({
      servingSize: '',
      calories: 0,
      carbs: 0,
      protein: 0,
      fats: 0,
    });
    setTotalNutrition({
      calories: 0,
      carbs: 0,
      protein: 0,
      fats: 0,
    });
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="xl" border={'black'}>Calculate Macronutrients</Text>
      <HStack>
        <Input
          placeholder="Food Item"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <Button onClick={calculateMacros} disabled={loading} colorScheme={buttonColorScheme} color={textColor}>
          {loading ? <Spinner size="sm" color={textColor} /> : 'Add Item'}
        </Button>
        <Button onClick={resetForm} colorScheme={buttonColorScheme} color={textColor}>
          Reset
        </Button>
      </HStack>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {nutritionInfo.servingSize && (
        <Box>
          <Text fontSize="lg">Nutritional Information:</Text>
          <Text>Serving Size: {nutritionInfo.servingSize}</Text>
          <Text>Calories: {nutritionInfo.calories.toFixed(2)}</Text>
          <Text>Carbohydrates: {nutritionInfo.carbs.toFixed(2)}g</Text>
          <Text>Protein: {nutritionInfo.protein.toFixed(2)}g</Text>
          <Text>Fats: {nutritionInfo.fats.toFixed(2)}g</Text>
        </Box>
      )}
      <Box>
        <Text fontSize="lg" >Total Nutrition:</Text>
        <Text>Calories: {totalNutrition.calories.toFixed(2)}</Text>
        <Text>Carbohydrates: {totalNutrition.carbs.toFixed(2)}g</Text>
        <Text>Protein: {totalNutrition.protein.toFixed(2)}g</Text>
        <Text>Fats: {totalNutrition.fats.toFixed(2)}g</Text>

      </Box>
    </VStack>
  );
};

export default Macro;
