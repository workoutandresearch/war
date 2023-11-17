import React, { useState } from 'react';
import { Box, Input, Button, Text, useToast } from '@chakra-ui/react';
import { createProfile } from 'api/backend';
import { useWallet } from '@txnlab/use-wallet';

const CreateUserProfile: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const toast = useToast();
  const { activeAddress } = useWallet();
  

  const handleCreateProfile = async () => {
    if (!userId.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a valid User ID.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await createProfile(activeAddress, userId);
      if (response && response.success) {
        console.log('Profile created successfully:', response);
        toast({
          title: 'Success',
          description: 'Profile created successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setUserId('');
      } else {
        toast({
          title: 'Error',
          description: response?.message || 'Profile creation failed. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while creating the profile.';
      console.error('Error creating profile:', errorMessage);
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text fontSize="xl" mb={2}>Create Your Profile</Text>
      <Input 
        placeholder="User ID" 
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
        mb={3} 
      />
      <Button colorScheme="blue" onClick={handleCreateProfile}>Create Profile</Button>
    </Box>
  );
};

export default CreateUserProfile;
