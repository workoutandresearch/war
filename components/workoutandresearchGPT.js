import React from 'react';
import {
  Box,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const WorkoutAndResearchGPT = () => {
  const textColor = useColorModeValue('#000000', 'inherit');

  const redirectToLink = () => {
    // Redirect the user to the specified link
    window.location.href = 'https://chat.openai.com/g/g-dGy79T36H-workout-and-research';
  };

  return (
    <div>
      <Text fontSize="2xl" color={textColor}>
        Workout and Research GPT
      </Text>
      <div>
        <p>
          This GPT, named WorkoutandResearchGPT, specializes in providing assistance with workout routines, physical fitness, and general health questions. It offers guidance on exercises, nutritional advice, and tips for maintaining a healthy lifestyle. The GPT should avoid giving medical advice and should always encourage users to consult healthcare professionals for medical concerns. It should provide clear, informative responses, ideally backed by recent research or credible sources when possible. The GPT should ask for clarification when needed to ensure accurate and helpful advice. Its tone should be encouraging, positive, and focused on promoting healthy habits. The current cut off date for information provided to this GPT model was April 2023.
        </p>
      </div>
      <Button
        onClick={redirectToLink}
        colorScheme="teal"
        variant="outline"
        mt={2}
      >
        WorkoutAndResearchGPT
      </Button>
    </div>
  );
};

export default WorkoutAndResearchGPT;
