const dumbbellExercises = [
    {
      id: 1,
      name: 'Dumbbell Squat',
      equipment: 'dumbbell',
      description: 'The dumbbell squat is a compound exercise that primarily targets the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Hold a dumbbell in each hand at your sides.',
        'Keep your back straight and chest up.',
        'Descend until your thighs are parallel to the ground or as low as your flexibility allows.',
        'Push through your heels as you return to the starting position.'
      ],
      whatNotToDo: [
        'Avoid rounding your lower back.',
        'Don\'t let your knees collapse inward.',
        'Do not use excessive weight if you cannot maintain proper form.'
      ]
    },
    {
      id: 2,
      name: 'Dumbbell Deadlift',
      equipment: 'dumbbell',
      description: 'The dumbbell deadlift is a compound exercise that targets the lower back, hamstrings, glutes, and traps.',
      muscleGroups: ['Back', 'Hamstrings', 'Glutes', 'Traps'],
      tips: [
        'Hold a dumbbell in each hand in front of your thighs.',
        'Maintain a flat back throughout the movement.',
        'Stand with your feet hip-width apart and dumbbells close to your body.',
        'Lift the dumbbells by straightening your hips and knees.'
      ],
      whatNotToDo: [
        'Avoid rounding your back.',
        'Don\'t jerk the dumbbells off the ground; lift them smoothly.',
        'Use proper form to prevent lower back injury.'
      ]
    },
    {
      id: 3,
      name: 'Dumbbell Lunges',
      equipment: 'dumbbell',
      description: 'Dumbbell lunges are excellent for targeting the quadriceps and glutes while also improving balance and stability.',
      muscleGroups: ['Quadriceps', 'Glutes'],
      tips: [
        'Hold a dumbbell in each hand at your sides.',
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
      id: 4,
      name: 'Dumbbell Bench Press',
      equipment: 'dumbbell',
      description: 'The dumbbell bench press is a compound chest exercise that also works the shoulders and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Lie on a bench and hold a dumbbell in each hand above your chest.',
        'Lower the dumbbells to your chest with control, and press them back up explosively.',
        'Use a spotter if lifting heavy weights.'
      ],
      whatNotToDo: [
        'Do not bounce the dumbbells off your chest.',
        'Avoid excessive arching of the back.',
        'Don\'t flare your elbows excessively; keep them at a moderate angle.'
      ]
    },
    {
      id: 5,
      name: 'Dumbbell Incline Bench Press',
      equipment: 'dumbbell',
      description: 'The dumbbell incline bench press targets the upper chest, shoulders, and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Lie on an incline bench and hold a dumbbell in each hand above your chest.',
        'Lower the dumbbells to your upper chest with control, and press them back up.',
        'Maintain proper form and control throughout the exercise.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t flare your elbows excessively; keep them at a moderate angle.',
        'Maintain stability on the bench.'
      ]
    },
    {
      id: 6,
      name: 'Dumbbell Decline Bench Press',
      equipment: 'dumbbell',
      description: 'The dumbbell decline bench press targets the lower chest, shoulders, and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Lie on a decline bench and hold a dumbbell in each hand above your chest.',
        'Lower the dumbbells to your lower chest with control, and press them back up.',
        'Maintain proper form and control throughout the exercise.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t flare your elbows excessively; keep them at a moderate angle.',
        'Maintain stability on the bench.'
      ]
    },
    {
      id: 7,
      name: 'Dumbbell Bicep Curl',
      equipment: 'dumbbell',
      description: 'The dumbbell bicep curl is an effective exercise for building bicep strength and size.',
      muscleGroups: ['Biceps'],
      tips: [
        'Hold a dumbbell in each hand with a supine (palms up) grip.',
        'Keep your elbows close to your sides and curl the dumbbells towards your chest.',
        'Lower the dumbbells back down with control.'
      ],
      whatNotToDo: [
        'Avoid using momentum to lift the weight.',
        'Don\'t arch your back or use excessive body sway.',
        'Focus on isolating the biceps for best results.'
      ]
    },
    {
      id: 8,
      name: 'Dumbbell Preacher Curl',
      equipment: 'dumbbell',
      description: 'The dumbbell preacher curl is an isolation exercise that targets the biceps.',
      muscleGroups: ['Biceps'],
      tips: [
        'Sit on a preacher bench with your upper arms resting on the pad and hold a dumbbell in each hand.',
        'Curl the dumbbells upward while keeping your upper arms against the pad.',
        'Lower the dumbbells back down with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t swing or use momentum to lift the dumbbells.',
        'Maintain strict form and control.'
      ]
    },
    {
      id: 9,
      name: 'Dumbbell Tricep Extension',
      equipment: 'dumbbell',
      description: 'The dumbbell tricep extension is an effective exercise for targeting the triceps.',
      muscleGroups: ['Triceps'],
      tips: [
        'Hold a dumbbell with both hands overhead, arms fully extended.',
        'Bend at the elbows to lower the dumbbell behind your head.',
        'Extend your arms to raise the dumbbell back to the starting position.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t allow your elbows to flare out excessively.',
        'Maintain control throughout the movement.'
      ]
    },
    {
      id: 10,
      name: 'Dumbbell Tricep Skull Crushers',
      equipment: 'dumbbell',
      description: 'The dumbbell tricep skull crushers target the triceps.',
      muscleGroups: ['Triceps'],
      tips: [
        'Lie on a bench with a dumbbell in each hand above your chest, palms facing each other.',
        'Bend your elbows to lower the dumbbells towards your forehead.',
        'Extend your arms to raise the dumbbells back to the starting position.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t allow your elbows to flare out excessively.',
        'Maintain control throughout the movement.'
      ]
    },
    {
      id: 11,
      name: 'Dumbbell Lateral Raise',
      equipment: 'dumbbell',
      description: 'The dumbbell lateral raise targets the lateral deltoids (shoulders).',
      muscleGroups: ['Shoulders'],
      tips: [
        'Hold a dumbbell in each hand at your sides, palms facing your body.',
        'Raise the dumbbells to the sides until they reach shoulder level.',
        'Lower the dumbbells back down with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t use momentum to lift the dumbbells.',
        'Maintain proper form and control throughout the exercise.'
      ]
    },
    {
      id: 12,
      name: 'Dumbbell Row',
      equipment: 'dumbbell',
      description: 'The dumbbell row targets the upper back, lats, and biceps.',
      muscleGroups: ['Back', 'Lats', 'Biceps'],
      tips: [
        'Hold a dumbbell in each hand with a neutral grip.',
        'Bend your knees slightly and hinge at your hips, keeping your back straight.',
        'Pull the dumbbells towards your lower ribcage, squeezing your shoulder blades together.'
      ],
      whatNotToDo: [
        'Avoid rounding your back or using momentum.',
        'Don\'t lift with your lower back; engage your upper back muscles.',
        'Use controlled, smooth movements.'
      ]
    },
    {
      id: 13,
      name: 'Dumbbell Shoulder Press',
      equipment: 'dumbbell',
      description: 'The dumbbell shoulder press targets the shoulders and triceps.',
      muscleGroups: ['Shoulders', 'Triceps'],
      tips: [
        'Hold a dumbbell in each hand at shoulder height.',
        'Press the dumbbells overhead, extending your arms fully.',
        'Lower the dumbbells back to shoulder height with control.'
      ],
      whatNotToDo: [
        'Avoid arching your lower back.',
        'Don\'t use excessive body sway or momentum.',
        'Use proper form to protect your shoulders.'
      ]
    },
    {
      id: 14,
      name: 'Dumbbell Tricep Pushdown',
      equipment: 'dumbbell',
      description: 'The dumbbell tricep pushdown targets the triceps.',
      muscleGroups: ['Triceps'],
      tips: [
        'Hold a dumbbell with both hands behind your head.',
        'Extend your arms upward, fully contracting your triceps.',
        'Lower the dumbbell back down with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t allow your elbows to flare out excessively.',
        'Maintain control throughout the movement.'
      ]
    },
    {
      id: 15,
      name: 'Dumbbell Chest Flys',
      equipment: 'dumbbell',
      description: 'The dumbbell chest flys target the chest muscles.',
      muscleGroups: ['Chest'],
      tips: [
        'Lie on a bench with a dumbbell in each hand above your chest.',
        'Lower the dumbbells to the sides, keeping a slight bend in your elbows.',
        'Raise the dumbbells back to the starting position with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t allow your elbows to lock out.',
        'Maintain proper form and control throughout the exercise.'
      ]
    },
    {
      id: 16,
      name: 'Dumbbell Crush Press',
      equipment: 'dumbbell',
      description: 'The dumbbell crush press is an exercise that targets the chest and triceps.',
      muscleGroups: ['Chest', 'Triceps'],
      tips: [
        'Lie on a bench with a dumbbell in each hand above your chest.',
        'Press the dumbbells together with force, squeezing your chest muscles.',
        'Lower the dumbbells back to the starting position with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t compromise form for heavier weights.',
        'Focus on proper chest contraction.'
      ]
    },
    {
      id: 17,
      name: 'Dumbbell Pullover',
      equipment: 'dumbbell',
      description: 'The dumbbell pullover is an exercise that targets the chest, back, and triceps.',
      muscleGroups: ['Chest', 'Back', 'Triceps'],
      tips: [
        'Lie on a bench with your upper back supported and hold a dumbbell with both hands overhead.',
        'Lower the dumbbell behind your head, keeping a slight bend in your elbows.',
        'Raise the dumbbell back to the starting position with control.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight without control.',
        'Don\'t let your lower back arch excessively.',
        'Maintain proper form and control throughout the exercise.'
      ]
    }
    // Add more dumbbell exercises as needed
  ];
  
  export default dumbbellExercises;
  