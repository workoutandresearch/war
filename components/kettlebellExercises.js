const kettlebellExercises = [
    {
      id: 1,
      name: 'Kettlebell Squat',
      equipment: 'kettlebell',
      description: 'The kettlebell squat is a compound exercise that primarily targets the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Hold a kettlebell with both hands close to your chest.',
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
      name: 'Kettlebell Bench Press',
      equipment: 'kettlebell',
      description: 'The kettlebell bench press is a compound chest exercise that also works the shoulders and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Lie on a bench and hold a kettlebell in each hand above your chest.',
        'Lower the kettlebells to your chest with control, and press them back up explosively.',
        'Use a spotter if lifting heavy weights.'
      ],
      whatNotToDo: [
        'Do not bounce the kettlebells off your chest.',
        'Avoid excessive arching of the back.',
        'Don\'t flare your elbows excessively; keep them at a moderate angle.'
      ]
    },
    {
      id: 3,
      name: 'Kettlebell Deadlift',
      equipment: 'kettlebell',
      description: 'The kettlebell deadlift is a compound exercise that targets the lower back, hamstrings, glutes, and traps.',
      muscleGroups: ['Back', 'Hamstrings', 'Glutes', 'Traps'],
      tips: [
        'Hold a kettlebell in each hand in front of your thighs.',
        'Maintain a flat back throughout the movement.',
        'Stand with your feet hip-width apart and kettlebells close to your body.',
        'Lift the kettlebells by straightening your hips and knees.'
      ],
      whatNotToDo: [
        'Avoid rounding your back.',
        'Don\'t jerk the kettlebells off the ground; lift them smoothly.',
        'Use proper form to prevent lower back injury.'
      ]
    },
    {
      id: 4,
      name: 'Kettlebell Bent Over Row',
      equipment: 'kettlebell',
      description: 'The kettlebell bent over row targets the upper back, lats, and biceps.',
      muscleGroups: ['Back', 'Lats', 'Biceps'],
      tips: [
        'Hold a kettlebell in each hand with a neutral grip.',
        'Bend your knees slightly and hinge at your hips, keeping your back straight.',
        'Pull the kettlebells towards your lower ribcage, squeezing your shoulder blades together.'
      ],
      whatNotToDo: [
        'Avoid rounding your back or using momentum.',
        'Don\'t lift with your lower back; engage your upper back muscles.',
        'Use controlled, smooth movements.'
      ]
    },
    {
      id: 5,
      name: 'Kettlebell Overhead Press',
      equipment: 'kettlebell',
      description: 'The kettlebell overhead press targets the shoulders and triceps.',
      muscleGroups: ['Shoulders', 'Triceps'],
      tips: [
        'Hold a kettlebell in each hand at shoulder height.',
        'Press the kettlebells overhead, extending your arms fully.',
        'Lower the kettlebells back to shoulder height with control.'
      ],
      whatNotToDo: [
        'Avoid arching your lower back.',
        'Don\'t use excessive body sway or momentum.',
        'Use proper form to protect your shoulders.'
      ]
    },
    {
      id: 6,
      name: 'Kettlebell Lunges',
      equipment: 'kettlebell',
      description: 'Kettlebell lunges are excellent for targeting the quadriceps and glutes while also improving balance and stability.',
      muscleGroups: ['Quadriceps', 'Glutes'],
      tips: [
        'Hold a kettlebell in each hand at your sides.',
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
      id: 7,
      name: 'Kettlebell Romanian Deadlift',
      equipment: 'kettlebell',
      description: 'The kettlebell Romanian deadlift targets the hamstrings, glutes, and lower back while improving hip flexibility.',
      muscleGroups: ['Hamstrings', 'Glutes', 'Back'],
      tips: [
        'Hold a kettlebell in each hand in front of your thighs.',
        'Keeping your back straight, hinge at your hips and lower the kettlebells while keeping them close to your legs.',
        'Return to the starting position by extending your hips and standing tall.'
      ],
      whatNotToDo: [
        'Avoid rounding your back; maintain a neutral spine.',
        'Don\'t use excessive weight without proper form.',
        'Engage your core to protect your lower back.'
      ]
    },
    {
      id: 8,
      name: 'Kettlebell Bicep Curl',
      equipment: 'kettlebell',
      description: 'The kettlebell bicep curl is an effective exercise for building bicep strength and size.',
      muscleGroups: ['Biceps'],
      tips: [
        'Hold a kettlebell in each hand with a supine (palms up) grip.',
        'Keep your elbows close to your sides and curl the kettlebells towards your chest.',
        'Lower the kettlebells back down with control.'
      ],
      whatNotToDo: [
        'Avoid using momentum to lift the weight.',
        'Don\'t arch your back or use excessive body sway.',
        'Focus on isolating the biceps for best results.'
      ]
    },
    {
      id: 9,
      name: 'Kettlebell Upright Row',
      equipment: 'kettlebell',
      description: 'The kettlebell upright row targets the shoulders and upper traps.',
      muscleGroups: ['Shoulders', 'Traps'],
      tips: [
        'Hold a kettlebell in each hand with an overhand grip, hands close together.',
        'Pull the kettlebells straight up toward your chin, leading with your elbows.',
        'Lower the kettlebells back down slowly to shoulder height.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight; prioritize proper form.',
        'Don\'t lift the kettlebells too high, as it can strain your shoulders.',
        'Engage your core to stabilize your body during the exercise.'
      ]
    },
    {
      id: 10,
      name: 'Kettlebell Hip Thrust',
      equipment: 'kettlebell',
      description: 'The kettlebell hip thrust is a great exercise for targeting the glutes and building strength in the hip area.',
      muscleGroups: ['Glutes'],
      tips: [
        'Sit on the ground with your upper back against a bench and place a kettlebell over your hips.',
        'Roll the kettlebell over your thighs and lean back against the bench.',
        'Drive your hips upward, squeezing your glutes at the top of the movement.'
      ],
      whatNotToDo: [
        'Avoid arching your lower back excessively.',
        'Don\'t push with your lower back; use your glutes to lift.',
        'Start with lighter weights to master the movement before going heavy.'
      ]
    }
    // Add more kettlebell exercises as needed
  ];
  
  export default kettlebellExercises;
  