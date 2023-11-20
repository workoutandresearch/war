const weightedVestBeltExercises = [
    {
      id: 1,
      name: 'Weighted Vest Lunges',
      equipment: 'weighted-vest',
      description: 'Weighted vest lunges are excellent for targeting the quadriceps and glutes while also improving balance and stability.',
      muscleGroups: ['Quadriceps', 'Glutes'],
      tips: [
        'Wear a weighted vest for added resistance.',
        'Take a step forward and lower your back knee until it\'s almost touching the ground.',
        'Push back to the starting position and repeat on the other leg.'
      ],
      whatNotToDo: [
        'Avoid leaning too far forward or backward.',
        'Don\'t let your front knee extend past your toes.',
        'Use controlled movements to prevent injury.'
      ]
    },
    {
      id: 2,
      name: 'Weighted Belt Squats',
      equipment: 'weighted-vest',
      description: 'Weighted belt squats target the quadriceps, hamstrings, and glutes while reducing stress on the spine compared to traditional squats.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Use a weighted belt to add resistance to the exercise.',
        'Stand on a platform or elevated surface with your feet hip-width apart.',
        'Lower your body by bending your knees and hips, keeping your back straight.',
        'Push through your heels to return to the starting position.'
      ],
      whatNotToDo: [
        'Avoid rounding your lower back.',
        'Don\'t let your knees collapse inward.',
        'Use proper form to prevent injury to your back and knees.'
      ]
    },
    {
      id: 3,
      name: 'Weighted Vest Push-Ups',
      equipment: 'weighted-vest',
      description: 'Weighted vest push-ups are a challenging variation of the classic push-up that targets the chest, shoulders, and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Wear a weighted vest to increase the resistance.',
        'Maintain a straight line from head to heels throughout the movement.',
        'Lower your chest to the ground and push back up to the starting position.'
      ],
      whatNotToDo: [
        'Avoid sagging your hips or arching your back.',
        'Don\'t let your elbows flare out excessively.',
        'Use proper push-up form to maximize chest engagement.'
      ]
    },
    {
      id: 4,
      name: 'Weighted Vest Pull-Ups',
      equipment: 'weighted-vest',
      description: 'Weighted vest pull-ups add resistance to the classic pull-up exercise, targeting the back, biceps, and shoulders.',
      muscleGroups: ['Back', 'Biceps', 'Shoulders'],
      tips: [
        'Wear a weighted vest or attach weights to a dip belt.',
        'Hang from a pull-up bar with an overhand grip.',
        'Pull your body upward until your chin is above the bar and lower back down with control.'
      ],
      whatNotToDo: [
        'Avoid swinging or using momentum to lift your body.',
        'Don\'t hunch your shoulders; keep them down and back.',
        'Use a controlled and full range of motion for each rep.'
      ]
    },
    {
      id: 5,
      name: 'Weighted Vest Step-Ups',
      equipment: 'weighted-vest',
      description: 'Weighted vest step-ups are a lower-body exercise that targets the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Wear a weighted vest to add resistance.',
        'Stand in front of a bench or platform.',
        'Step onto the bench with one foot, pushing through the heel.',
        'Step back down and repeat on the other leg.'
      ],
      whatNotToDo: [
        'Avoid using excessive momentum to step up.',
        'Don\'t let your knee collapse inward during the movement.',
        'Use proper form to engage the targeted muscles.'
      ]
    },
    {
      id: 6,
      name: 'Weighted Vest Planks',
      equipment: 'weighted-vest',
      description: 'Weighted vest planks are a core-strengthening exercise that also engages the shoulders and back.',
      muscleGroups: ['Core', 'Shoulders', 'Back'],
      tips: [
        'Wear a weighted vest for added challenge.',
        'Start in a forearm plank position with elbows directly under your shoulders.',
        'Engage your core and hold the position for the desired duration.'
      ],
      whatNotToDo: [
        'Avoid letting your hips sag or lifting them too high.',
        'Don\'t hold your breath; breathe regularly while planking.',
        'Maintain a straight line from head to heels.'
      ]
    },
    {
      id: 7,
      name: 'Weighted Vest Russian Twists',
      equipment: 'weighted-vest',
      description: 'Weighted vest Russian twists are an effective oblique exercise that also engages the core and shoulders.',
      muscleGroups: ['Obliques', 'Core', 'Shoulders'],
      tips: [
        'Hold a weighted vest or a weighted object in your hands.',
        'Sit on the ground with your knees bent and feet lifted off the floor.',
        'Twist your torso to one side, bringing the weight close to the ground, and then to the other side.'
      ],
      whatNotToDo: [
        'Avoid rounding your back during the twists.',
        'Don\'t use excessive momentum to twist; focus on controlled movements.',
        'Engage your core throughout the exercise.'
      ]
    },
    {
      id: 8,
      name: 'Weighted Vest Dips',
      equipment: 'weighted-vest',
      description: 'Weighted vest dips target the triceps, chest, and shoulders while also engaging the core.',
      muscleGroups: ['Triceps', 'Chest', 'Shoulders', 'Core'],
      tips: [
        'Wear a weighted vest or attach weights to a dip belt.',
        'Position yourself on parallel bars or a dip station.',
        'Lower your body by bending your elbows and then push back up to the starting position.'
      ],
      whatNotToDo: [
        'Avoid letting your shoulders shrug up toward your ears.',
        'Don\'t use excessive momentum to perform the dips.',
        'Engage your triceps and chest muscles for each rep.'
      ]
    },
    {
      id: 9,
      name: 'Weighted Vest Burpees',
      equipment: 'weighted-vest',
      description: 'Weighted vest burpees are a full-body exercise that combines squats, push-ups, and jumps while wearing a weighted vest.',
      muscleGroups: ['Full Body'],
      tips: [
        'Wear a weighted vest for added resistance.',
        'Begin in a standing position, perform a squat, and then place your hands on the ground.',
        'Kick your feet back into a push-up position, perform a push-up, and then jump back to the squat position.',
        'Explosively jump up and extend your arms overhead.'
      ],
      whatNotToDo: [
        'Avoid sacrificing form for speed.',
        'Don\'t let your back sag during push-ups.',
        'Engage your core throughout the exercise.'
      ]
    },
    {
      id: 10,
      name: 'Weighted Vest Box Jumps',
      equipment: 'weighted-vest',
      description: 'Weighted vest box jumps are an explosive lower-body exercise that targets the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Wear a weighted vest for added challenge.',
        'Stand in front of a sturdy box or platform.',
        'Bend your knees and hips, then jump onto the box with both feet.',
        'Land softly, absorbing the impact through your legs.'
      ],
      whatNotToDo: [
        'Avoid using a box that is too high for your current fitness level.',
        'Don\'t let your knees collapse inward upon landing.',
        'Engage your leg muscles for a controlled jump and landing.'
      ]
    }
  ];
  
  export default weightedVestBeltExercises;
  