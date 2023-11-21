const bodyweightExercises = [
    {
      id: 1,
      name: 'Push-Ups',
      equipment: 'bodyweight',
      description: 'Push-ups are a classic bodyweight exercise that primarily target the chest, shoulders, and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Start in a plank position with your hands slightly wider than shoulder-width apart.',
        'Lower your body by bending your elbows until your chest nearly touches the ground.',
        'Push back up to the starting position.'
      ],
      whatNotToDo: [
        'Avoid sagging your hips or arching your back.',
        'Don\'t let your elbows flare out excessively.',
        'Use proper push-up form to maximize chest engagement.'
      ]
    },
    {
      id: 2,
      name: 'Pull-Ups',
      equipment: 'bodyweight',
      description: 'Pull-ups are a challenging bodyweight exercise that primarily target the back, biceps, and shoulders.',
      muscleGroups: ['Back', 'Biceps', 'Shoulders'],
      tips: [
        'Hang from a pull-up bar with an overhand grip.',
        'Pull your body upward until your chin is above the bar.',
        'Lower back down with control to complete one repetition.'
      ],
      whatNotToDo: [
        'Avoid swinging or using momentum to lift your body.',
        'Don\'t hunch your shoulders; keep them down and back.',
        'Use a controlled and full range of motion for each rep.'
      ]
    },
    {
      id: 3,
      name: 'Bodyweight Squats',
      equipment: 'bodyweight',
      description: 'Bodyweight squats are a lower-body exercise that primarily target the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Stand with your feet shoulder-width apart.',
        'Lower your body by bending your knees and hips, keeping your back straight.',
        'Return to the starting position by pushing through your heels.'
      ],
      whatNotToDo: [
        'Avoid letting your knees collapse inward.',
        'Don\'t allow your back to round during the squat.',
        'Engage your leg muscles for proper form.'
      ]
    },
    {
      id: 4,
      name: 'Planks',
      equipment: 'bodyweight',
      description: 'Planks are a core-strengthening exercise that also engage the shoulders and back.',
      muscleGroups: ['Core', 'Shoulders', 'Back'],
      tips: [
        'Start in a forearm plank position with elbows directly under your shoulders.',
        'Engage your core and hold the position for the desired duration.',
        'Maintain a straight line from head to heels.'
      ],
      whatNotToDo: [
        'Avoid letting your hips sag or lifting them too high.',
        'Don\'t hold your breath; breathe regularly while planking.',
        'Focus on core engagement throughout the exercise.'
      ]
    },
    {
      id: 5,
      name: 'Lunges',
      equipment: 'bodyweight',
      description: 'Lunges are a lower-body exercise that primarily target the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Stand with your feet together and take a step forward with one leg.',
        'Lower your body until both knees are bent at a 90-degree angle.',
        'Push back to the starting position and repeat on the other leg.'
      ],
      whatNotToDo: [
        'Avoid letting your front knee extend past your toes.',
        'Don\'t allow your back knee to touch the ground forcefully.',
        'Use proper form to protect your knees.'
      ]
    },
    {
      id: 6,
      name: 'Burpees',
      equipment: 'bodyweight',
      description: 'Burpees are a full-body exercise that combine squats, push-ups, and jumps.',
      muscleGroups: ['Full Body'],
      tips: [
        'Start in a standing position, perform a squat, and place your hands on the ground.',
        'Kick your feet back into a push-up position, perform a push-up, and jump your feet back to the squat position.',
        'Explosively jump up and extend your arms overhead to complete one repetition.'
      ],
      whatNotToDo: [
        'Avoid sacrificing form for speed.',
        'Don\'t let your back sag during push-ups.',
        'Engage your core throughout the exercise.'
      ]
    },
    {
      id: 7,
      name: 'Mountain Climbers',
      equipment: 'bodyweight',
      description: 'Mountain climbers are a dynamic core exercise that also engage the shoulders and legs.',
      muscleGroups: ['Core', 'Shoulders', 'Legs'],
      tips: [
        'Start in a plank position with your hands under your shoulders and your body in a straight line.',
        'Bring one knee toward your chest, then switch and bring the other knee forward in a running motion.',
        'Keep your core engaged and maintain a brisk pace.'
      ],
      whatNotToDo: [
        'Avoid letting your hips rise or sag during the exercise.',
        'Don\'t rush the movement; focus on proper form and control.',
        'Engage your core muscles throughout.'
      ]
    },
    {
      id: 8,
      name: 'Tricep Dips',
      equipment: 'bodyweight',
      description: 'Tricep dips are an effective bodyweight exercise that primarily target the triceps and shoulders.',
      muscleGroups: ['Triceps', 'Shoulders'],
      tips: [
        'Sit on the edge of a bench or sturdy surface with your hands placed beside your hips.',
        'Lower your body by bending your elbows to a 90-degree angle.',
        'Push back up to the starting position.'
      ],
      whatNotToDo: [
        'Avoid shrugging your shoulders during the exercise.',
        'Don\'t use momentum to lift your body; focus on tricep engagement.',
        'Use proper form to protect your shoulders.'
      ]
    },
    {
      id: 9,
      name: 'Bicycle Crunches',
      equipment: 'bodyweight',
      description: 'Bicycle crunches are a core-strengthening exercise that primarily target the obliques and rectus abdominis.',
      muscleGroups: ['Obliques', 'Rectus Abdominis'],
      tips: [
        'Lie on your back with your hands behind your head and your knees bent.',
        'Alternate bringing your right elbow to your left knee while extending your right leg straight.',
        'Repeat the motion on the other side in a pedaling motion.'
      ],
      whatNotToDo: [
        'Avoid pulling on your neck with your hands.',
        'Don\'t rush through the exercise; focus on controlled movements.',
        'Engage your core muscles throughout each rep.'
      ]
    },
    {
      id: 10,
      name: 'Jumping Jacks',
      equipment: 'bodyweight',
      description: 'Jumping jacks are a cardio exercise that also engage the shoulders and legs.',
      muscleGroups: ['Cardio', 'Shoulders', 'Legs'],
      tips: [
        'Start in a standing position with your feet together and arms at your sides.',
        'Jump your feet apart while raising your arms overhead.',
        'Return to the starting position by jumping your feet together and lowering your arms.'
      ],
      whatNotToDo: [
        'Avoid locking your knees when landing.',
        'Don\'t bring your arms down too forcefully; use controlled movements.',
        'Focus on maintaining a steady pace for cardio benefits.'
      ]
    },
    {
      id: 11,
      name: 'Chin-Ups',
      equipment: 'bodyweight',
      description: 'Chin-ups are a bodyweight exercise that primarily target the biceps, back, and shoulders.',
      muscleGroups: ['Biceps', 'Back', 'Shoulders'],
      tips: [
        'Hang from a pull-up bar with an underhand grip (palms facing you).',
        'Pull your body upward until your chin is above the bar.',
        'Lower back down with control to complete one repetition.'
      ],
      whatNotToDo: [
        'Avoid swinging or using momentum to lift your body.',
        'Don\'t hunch your shoulders; keep them down and back.',
        'Use a controlled and full range of motion for each rep.'
      ]
    },
    {
      id: 12,
      name: 'Sit-Ups',
      equipment: 'bodyweight',
      description: 'Sit-ups are an abdominal-strengthening exercise that target the rectus abdominis.',
      muscleGroups: ['Rectus Abdominis'],
      tips: [
        'Lie on your back with your knees bent and feet flat on the ground.',
        'Cross your arms over your chest or place your hands behind your head.',
        'Engage your core and lift your upper body off the ground, then lower it back down.'
      ],
      whatNotToDo: [
        'Avoid using your neck to pull your upper body up.',
        'Don\'t use momentum to sit up; use your abdominal muscles.',
        'Focus on controlled movements and proper form.'
      ]
    },
    {
      id: 13,
      name: 'Dips',
      equipment: 'bodyweight',
      description: 'Dips are a bodyweight exercise that primarily target the triceps and shoulders.',
      muscleGroups: ['Triceps', 'Shoulders'],
      tips: [
        'Find parallel bars or use the edge of a sturdy surface with your hands placed beside your hips.',
        'Lower your body by bending your elbows to a 90-degree angle.',
        'Push back up to the starting position.'
      ],
      whatNotToDo: [
        'Avoid shrugging your shoulders during the exercise.',
        'Don\'t use momentum to lift your body; focus on tricep engagement.',
        'Use proper form to protect your shoulders.'
      ]
    },
    // Add more bodyweight exercises as needed
  ];
  
  export default bodyweightExercises;
  