const barbellExercises = [
    {
      id: 1,
      name: 'Barbell Squat',
      equipment: 'barbell',
      description: 'The barbell squat is a compound exercise that primarily targets the quadriceps, hamstrings, and glutes.',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      tips: [
        'Keep your back straight throughout the movement.',
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
      name: 'Barbell Bench Press',
      equipment: 'barbell',
      description: 'The barbell bench press is a compound chest exercise that also works the shoulders and triceps.',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      tips: [
        'Maintain a firm grip on the bar and keep your wrists straight.',
        'Lower the bar to your chest with control, and press it back up explosively.',
        'Use a spotter if lifting heavy weights.'
      ],
      whatNotToDo: [
        'Do not bounce the bar off your chest.',
        'Avoid excessive arching of the back.',
        'Don\'t flare your elbows excessively; keep them at a moderate angle.'
      ]
    },
    {
      id: 3,
      name: 'Barbell Deadlift',
      equipment: 'barbell',
      description: 'The barbell deadlift is a compound exercise that targets the lower back, hamstrings, glutes, and traps.',
      muscleGroups: ['Back', 'Hamstrings', 'Glutes', 'Traps'],
      tips: [
        'Maintain a flat back throughout the movement.',
        'Stand with your feet hip-width apart and grip the barbell just outside your knees.',
        'Lift the bar by straightening your hips and knees while keeping it close to your body.'
      ],
      whatNotToDo: [
        'Avoid rounding your back.',
        'Don\'t jerk the barbell off the ground; lift it smoothly.',
        'Use proper form to prevent lower back injury.'
      ]
    },
    {
      id: 4,
      name: 'Barbell Bent Over Row',
      equipment: 'barbell',
      description: 'The barbell bent over row targets the back, lats, and biceps.',
      muscleGroups: ['Back', 'Lats', 'Biceps'],
      tips: [
        'Hold the barbell with an overhand grip and stand with your feet shoulder-width apart.',
        'Bend your knees slightly and hinge at your hips, keeping your back straight.',
        'Pull the barbell towards your lower ribcage, squeezing your shoulder blades together.'
      ],
      whatNotToDo: [
        'Avoid rounding your back or using momentum.',
        'Don\'t lift with your lower back; engage your back muscles.',
        'Use controlled, smooth movements.'
      ]
    },
    {
      id: 5,
      name: 'Barbell Overhead Press',
      equipment: 'barbell',
      description: 'The barbell overhead press targets the shoulders and triceps.',
      muscleGroups: ['Shoulders', 'Triceps'],
      tips: [
        'Stand with your feet shoulder-width apart and grip the barbell at shoulder height.',
        'Press the barbell overhead, extending your arms fully.',
        'Lower the barbell back to shoulder height with control.'
      ],
      whatNotToDo: [
        'Avoid arching your lower back.',
        'Don\'t use excessive body sway or momentum.',
        'Use proper form to protect your shoulders.'
      ]
    },
    {
      id: 6,
      name: 'Barbell Lunges',
      equipment: 'barbell',
      description: 'Barbell lunges are excellent for targeting the quadriceps and glutes while also improving balance and stability.',
      muscleGroups: ['Quadriceps', 'Glutes'],
      tips: [
        'Hold a barbell across your back, behind your neck.',
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
      name: 'Barbell Romanian Deadlift',
      equipment: 'barbell',
      description: 'The barbell Romanian deadlift targets the hamstrings, glutes, and lower back while improving hip flexibility.',
      muscleGroups: ['Hamstrings', 'Glutes', 'Back'],
      tips: [
        'Stand with your feet hip-width apart and hold the barbell in front of your thighs.',
        'Keeping your back straight, hinge at your hips and lower the barbell while keeping it close to your legs.',
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
      name: 'Barbell Bicep Curl',
      equipment: 'barbell',
      description: 'The barbell bicep curl is an effective exercise for building bicep strength and size.',
      muscleGroups: ['Biceps'],
      tips: [
        'Stand with your feet shoulder-width apart and hold the barbell with an underhand grip.',
        'Keep your elbows close to your sides and curl the barbell towards your chest.',
        'Lower the barbell back down with control.'
      ],
      whatNotToDo: [
        'Avoid using momentum to lift the weight.',
        'Don\'t arch your back or use excessive body sway.',
        'Focus on isolating the biceps for best results.'
      ]
    },
    {
      id: 9,
      name: 'Barbell Upright Row',
      equipment: 'barbell',
      description: 'The barbell upright row targets the shoulders and traps.',
      muscleGroups: ['Shoulders', 'Traps'],
      tips: [
        'Stand with your feet shoulder-width apart and hold the barbell with an overhand grip, hands close together.',
        'Pull the barbell straight up toward your chin, leading with your elbows.',
        'Lower the barbell back down slowly to shoulder height.'
      ],
      whatNotToDo: [
        'Avoid using excessive weight; prioritize proper form.',
        'Don\'t lift the barbell too high, as it can strain your shoulders.',
        'Engage your core to stabilize your body during the exercise.'
      ]
    },
    {
      id: 10,
      name: 'Barbell Hip Thrust',
      equipment: 'barbell',
      description: 'The barbell hip thrust is a great exercise for targeting the glutes and building strength in the hip area.',
      muscleGroups: ['Glutes'],
      tips: [
        'Sit on the ground with your back against a bench and place the barbell over your hips.',
        'Roll the barbell over your thighs and lean back against the bench.',
        'Drive your hips upward, squeezing your glutes at the top of the movement.'
      ],
      whatNotToDo: [
        'Avoid arching your lower back excessively.',
        'Don\'t push with your lower back; use your glutes to lift.',
        'Start with lighter weights to master the movement before going heavy.'
      ]
    }
    // Add more barbell exercises as needed
  ];
  
  export default barbellExercises;
  