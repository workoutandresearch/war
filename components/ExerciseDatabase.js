import React, { useState, useEffect } from 'react';

const exercises = [
    {
      id: 1,
      name: 'Push-up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      equipment: 'None',
      instructions: 'Start in a plank position with hands directly under shoulders. Lower down, keeping elbows close to the body, then push back up.',
      tips: 'Keep your core tight and back straight.',
      mistakes: 'Avoid letting your hips sag or stick up in the air.'
    },
    {
      id: 2,
      name: 'Pull-up',
      muscleGroup: 'Back',
      difficulty: 'Intermediate',
      equipment: 'Pull-up Bar',
      instructions: 'Grip the bar with palms facing outwards. Pull yourself up until your chin is above the bar, then lower back down with control.',
      tips: 'Focus on squeezing your shoulder blades together as you pull up.',
      mistakes: 'Avoid swinging your legs or using momentum to get up.'
    },
    {
      id: 3,
      name: 'Squats',
      muscleGroup: 'Legs',
      difficulty: 'Beginner',
      equipment: 'Barbell (optional)',
      instructions: 'Stand with feet shoulder-width apart. Bend your knees and lower your hips as if sitting back into a chair, then stand back up.',
      tips: 'Keep your chest up and your weight on your heels.',
      mistakes: 'Do not let your knees cave inward or extend past your toes.'
    },
    {
      id: 4,
      name: 'Deadlift',
      muscleGroup: 'Back, Legs',
      difficulty: 'Advanced',
      equipment: 'Barbell',
      instructions: 'Stand with feet hip-width apart, grip the barbell with hands just outside your legs. Keep your back straight, push through your heels and lift the bar.',
      tips: 'Keep the bar close to your body throughout the lift.',
      mistakes: 'Avoid rounding your back or jerking the weight up.'
    },
    {
      id: 5,
      name: 'Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      equipment: 'Bench, Barbell',
      instructions: 'Lie on the bench, feet flat on the floor. Grip the barbell slightly wider than shoulder-width. Lower the bar to your chest, then press it back up.',
      tips: 'Keep your wrists straight and elbows tucked slightly to protect your shoulders.',
      mistakes: 'Do not arch your back excessively.'
    },
    {
        id: 6,
        name: 'Lunges',
        muscleGroup: 'Legs',
        difficulty: 'Beginner',
        equipment: 'None',
        instructions: 'Stand with feet hip-width apart. Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Return to the starting position.',
        tips: 'Keep your upper body straight and shoulders back.',
        mistakes: 'Avoid letting the front knee extend past your toes.'
      },
      {
        id: 7,
        name: 'Plank',
        muscleGroup: 'Core',
        difficulty: 'Beginner',
        equipment: 'None',
        instructions: 'Lie face down with forearms on the floor and elbows beneath your shoulders. Lift your body to form a straight line from head to heels.',
        tips: 'Engage your core and glutes to maintain form.',
        mistakes: 'Do not let your hips rise or drop.'
      },
      {
        id: 8,
        name: 'Tricep Dips',
        muscleGroup: 'Arms',
        difficulty: 'Intermediate',
        equipment: 'Bench or Chair',
        instructions: 'Sit on the edge of a bench or chair and place hands next to hips. Slide your butt off the edge and lower your body by bending at the elbows.',
        tips: 'Keep your shoulders down as you lower and raise your body.',
        mistakes: 'Avoid flaring your elbows out to the sides.'
      },    
      {
        id: 9,
        name: 'Bicep Curls',
        muscleGroup: 'Arms',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        instructions: 'Stand with feet shoulder-width apart, arms hanging at your sides with a dumbbell in each hand. Curl the weights while keeping your upper arms stationary.',
        tips: 'Exhale as you curl up, and inhale as you lower.',
        mistakes: 'Avoid swinging your arms; the movement should be controlled.'
      },
      {
        id: 10,
        name: 'Leg Press',
        muscleGroup: 'Legs',
        difficulty: 'Intermediate',
        equipment: 'Leg Press Machine',
        instructions: 'Sit on the machine with your back flat against the seat. Place your feet on the footplate about hip-width apart. Extend your legs to push the plate away.',
        tips: 'Do not lock your knees at the top of the movement.',
        mistakes: 'Ensure not to round your lower back as you release the weights.'
      },
      {
        id: 11,
        name: 'Russian Twists',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'Medicine Ball',
        instructions: 'Sit on the floor with knees bent, feet lifted slightly. Lean back at a 45-degree angle and hold the medicine ball with both hands. Rotate your torso to the right and touch the ball to the floor beside you, then rotate left.',
        tips: 'Keep your feet off the ground for added difficulty.',
        mistakes: 'Avoid slouching; keep your back straight throughout the movement.'
      },
      {
        id: 12,
        name: 'Burpees',
        muscleGroup: 'Full Body',
        difficulty: 'Advanced',
        equipment: 'None',
        instructions: 'Start in a standing position, drop into a squat with your hands on the ground, kick your feet back into a plank position, do a push-up, then return to the squat and jump up.',
        tips: 'Keep the movements fluid and controlled for maximum efficiency.',
        mistakes: 'Do not let your hips sag in the plank position.'
      },
      {
        id: 13,
        name: 'Mountain Climbers',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'None',
        instructions: 'Start in a plank position. Drive one knee towards your chest, then quickly switch to the other knee, alternating rapidly.',
        tips: 'Keep a brisk pace while maintaining good form.',
        mistakes: 'Avoid lifting your hips too high.'
      },
      {
        id: 14,
        name: 'Wall Sit',
        muscleGroup: 'Legs',
        difficulty: 'Beginner',
        equipment: 'Wall',
        instructions: 'Stand with your back against a wall, walk your feet out and slide down until your knees are at a 90-degree angle. Hold the position.',
        tips: 'Press your back flat against the wall.',
        mistakes: 'Do not let your knees extend over your toes.'
      },
      {
        id: 15,
        name: 'Shoulder Press',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells',
        instructions: 'Stand with feet shoulder-width apart, dumbbells at shoulder height. Extend arms above your head, then lower the dumbbells back to shoulder height.',
        tips: 'Keep your core engaged to support your back.',
        mistakes: 'Do not arch your back as you press the weights overhead.'
      },
      {
        id: 16,
        name: 'Tuck Jump',
        muscleGroup: 'Legs',
        difficulty: 'Intermediate',
        equipment: 'None',
        instructions: 'Stand with your knees slightly bent, then jump up while tucking your knees toward your chest.',
        tips: 'Use your arms to gain momentum.',
        mistakes: 'Land softly to avoid knee injury.'
      },
      {
        id: 17,
        name: 'Calf Raises',
        muscleGroup: 'Calves',
        difficulty: 'Beginner',
        equipment: 'None',
        instructions: 'Stand straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Lower slowly back to the start.',
        tips: 'Hold onto a surface for balance if needed.',
        mistakes: 'Avoid rushing the movement.'
      },
      {
        id: 18,
        name: 'Leg Curls',
        muscleGroup: 'Hamstrings',
        difficulty: 'Intermediate',
        equipment: 'Leg Curl Machine',
        instructions: 'Lie face down on a leg curl machine, tucking your ankles securely under the footpad. Bend your knees to pull the pad towards your butt.',
        tips: 'Perform the exercise slowly for maximum benefit.',
        mistakes: 'Avoid lifting your hips off the bench.'
      },
      {
        id: 19,
        name: 'Triceps Extension',
        muscleGroup: 'Arms',
        difficulty: 'Intermediate',
        equipment: 'Dumbbell',
        instructions: 'Stand with feet shoulder-width apart, hold a dumbbell with both hands behind your head. Extend your arms to raise the dumbbell, then lower it back.',
        tips: 'Keep your elbows close to your head.',
        mistakes: 'Do not let your elbows flare out.'
      },
      {
        id: 20,
        name: 'Lat Pulldown',
        muscleGroup: 'Back',
        difficulty: 'Intermediate',
        equipment: 'Lat Pulldown Machine',
        instructions: 'Sit down at a lat pulldown machine and secure your thighs under the pads. Grasp the bar wider than shoulder width, and pull it down to your chest.',
        tips: 'Focus on using your lats to pull your elbows down.',
        mistakes: 'Avoid leaning too far back.'
      },
      {
        id: 21,
        name: 'Box Jumps',
        muscleGroup: 'Legs',
        difficulty: 'Intermediate',
        equipment: 'Box or platform',
        instructions: 'Stand in front of a sturdy box or platform. Drop into a quarter squat, then extend your hips, swing your arms, and jump onto the box. Step back down and repeat.',
        tips: 'Land softly with your knees slightly bent to absorb the impact.',
        mistakes: 'Do not jump on a box that is too high and risk injury.'
      },
      {
        id: 22,
        name: 'Front Squats',
        muscleGroup: 'Legs',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        instructions: 'Place the barbell just above your shoulders against the front of your shoulders. Squat by driving your hips back and bending your knees, then stand back up.',
        tips: 'Keep your elbows up and your core tight throughout the movement.',
        mistakes: 'Avoid letting your knees go too far forward past your toes.'
      },
      {
        id: 23,
        name: 'Hanging Leg Raise',
        muscleGroup: 'Core',
        difficulty: 'Advanced',
        equipment: 'Pull-up Bar',
        instructions: 'Hang from a pull-up bar with your legs straight. Lift your legs to make a 90-degree angle with your torso, then slowly lower them back down.',
        tips: 'Do not swing your legs; the movement should be controlled.',
        mistakes: 'Avoid using momentum instead of muscular action to lift your legs.'
      },
      {
        id: 24,
        name: 'Seated Cable Row',
        muscleGroup: 'Back',
        difficulty: 'Intermediate',
        equipment: 'Cable Row Machine',
        instructions: 'Sit at the cable row machine, place your feet on the footrests, knees slightly bent. Grab the handle, keep your back straight, and pull the handle towards your waist.',
        tips: 'Squeeze your shoulder blades together at the end of the movement.',
        mistakes: 'Do not round your back or use your body weight to pull the weight.'
      },
      {
        id: 25,
        name: 'Overhead Triceps Extension',
        muscleGroup: 'Arms',
        difficulty: 'Intermediate',
        equipment: 'Dumbbell',
        instructions: 'Hold a dumbbell with both hands above your head, arms fully extended. Lower the weight behind your head, then extend your arms back to the start.',
        tips: 'Keep your elbows pointing forward and close to your head.',
        mistakes: 'Avoid locking your elbows when you extend your arms.'
      },
      {
        id: 26,
        name: 'Dumbbell Flyes',
        muscleGroup: 'Chest',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Bench',
        instructions: 'Lie on a bench with a dumbbell in each hand, arms extended above your chest. With a slight bend in your elbows, lower the weights out to the sides of your chest, then bring them back to the starting position.',
        tips: 'Keep the movement smooth and controlled; focus on the chest muscles throughout.',
        mistakes: 'Avoid bending your elbows too much during the movement or dropping the weights too low.'
      },
      {
        id: 27,
        name: 'Reverse Flyes',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Bench',
        instructions: 'Bend forward at the waist while sitting or standing. Hold a dumbbell in each hand and, with a slight bend in the elbows, lift the weights out to the sides until they are in line with your shoulders.',
        tips: 'Keep your back flat and look straight ahead as you perform the exercise.',
        mistakes: 'Do not use excessive weight, causing you to use momentum to lift the dumbbells.'
      },
      {
        id: 28,
        name: 'Leg Extensions',
        muscleGroup: 'Quadriceps',
        difficulty: 'Beginner',
        equipment: 'Leg Extension Machine',
        instructions: 'Sit on a leg extension machine with your legs under the pad. Lift the weight by extending your legs to the maximum, pause at the top, then lower back to the starting position.',
        tips: 'Control the weight throughout the movement, especially when returning to the starting position.',
        mistakes: 'Avoid locking your knees at the top of the movement.'
      },
      {
        id: 29,
        name: 'Hammer Curls',
        muscleGroup: 'Arms',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        instructions: 'Stand with feet shoulder-width apart holding a dumbbell in each hand with a neutral grip. Curl the weights while keeping your palms facing each other, then lower them back down.',
        tips: 'Keep your elbows close to your torso and perform the exercise without swinging.',
        mistakes: 'Avoid rotating your wrists; keep them in a neutral position throughout the curl.'
      },
      {
        id: 30,
        name: 'Incline Dumbbell Press',
        muscleGroup: 'Chest',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Incline Bench',
        instructions: 'Lie back on an incline bench with a dumbbell in each hand at shoulder level. Press the dumbbells up until your arms are extended, then lower them back down.',
        tips: 'Keep your wrists straight and avoid arching your back excessively.',
        mistakes: 'Do not bounce the dumbbells off your chest.'
      },
      {
        id: 31,
        name: 'Bicycle Crunches',
        muscleGroup: 'Core',
        difficulty: 'Beginner',
        equipment: 'Mat',
        instructions: 'Lie on your back with your hands behind your head. Bring your knees in towards your chest and lift your shoulder blades off the ground. Straighten one leg out while turning your upper body to the opposite side, bringing your elbow towards the opposite knee. Switch sides and continue in a pedaling motion.',
        tips: 'Do not pull on your neck; your hands are there for light support.',
        mistakes: 'Ensure not to rush; maintain a controlled motion for better muscle engagement.'
      },
      {
        id: 32,
        name: 'Lateral Raise',
        muscleGroup: 'Shoulders',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        instructions: 'Stand with feet hip-width apart holding a dumbbell in each hand at your sides. Keeping a slight bend in your elbows, lift the dumbbells out to the side until your arms are parallel with the floor, then lower back down.',
        tips: 'Focus on lifting with your shoulders, not with momentum.',
        mistakes: 'Avoid swinging the weights or shrugging your shoulders.'
      },
      {
        id: 33,
        name: 'Rear Delt Fly',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Bench',
        instructions: 'Lie face down on a bench set to a slight incline. Hold a dumbbell in each hand and, with a slight bend in the elbows, lift the weights out to the side until they are in line with your shoulders.',
        tips: 'Lead with your elbows and squeeze your shoulder blades together.',
        mistakes: 'Do not lift the dumbbells too high or use your back to hoist the weights.'
      },
      {
        id: 34,
        name: 'Glute Bridge',
        muscleGroup: 'Glutes',
        difficulty: 'Beginner',
        equipment: 'Mat',
        instructions: 'Lie on your back with your knees bent and feet flat on the floor. Lift your hips off the ground until your knees, hips, and shoulders form a straight line. Squeeze your glutes hard and keep your abs drawn in so you don’t overextend your back during the exercise.',
        tips: 'Ensure to drive through your heels to activate the glutes.',
        mistakes: 'Avoid pushing from your toes, which can put unnecessary stress on your knees.'
      },
      {
        id: 35,
        name: 'Step-ups',
        muscleGroup: 'Legs',
        difficulty: 'Beginner',
        equipment: 'Bench or step platform',
        instructions: 'Stand facing the bench or platform. Place one foot on the step, push through your heel to lift your body up, and step back down.',
        tips: 'Keep your chest up and shoulders back throughout the exercise.',
        mistakes: 'Avoid pushing off your lower foot too much – the leg on the step should do most of the work.'
      },
      {
        id: 36,
        name: 'Plank with Shoulder Taps',
        muscleGroup: 'Core, Shoulders',
        difficulty: 'Intermediate',
        equipment: 'None',
        instructions: 'Start in a plank position with your feet shoulder-width apart. Tap your left shoulder with your right hand and place it back down. Repeat on the other side and continue alternating.',
        tips: 'Keep your core engaged to prevent your hips from swaying.',
        mistakes: 'Avoid rushing; maintain a controlled and stable posture throughout the exercise.'
      },
      {
        id: 37,
        name: 'Sumo Squat',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Beginner',
        equipment: 'None, Dumbbell (optional)',
        instructions: 'Stand with feet wider than shoulder-width apart, toes pointing out. Holding a dumbbell with both hands in front of you, squat down until your thighs are parallel to the floor, then drive back up to the starting position.',
        tips: 'Keep your back straight and chest lifted throughout the movement.',
        mistakes: 'Do not let your knees collapse inward as you squat.'
      },
      {
        id: 38,
        name: 'Superman',
        muscleGroup: 'Lower Back',
        difficulty: 'Beginner',
        equipment: 'Mat',
        instructions: 'Lie face down on the floor with arms and legs extended. Lift your hands and feet off the floor approximately 6 inches, or until you feel a contraction in your lower back.',
        tips: 'Keep your head in a neutral position by looking down at the floor.',
        mistakes: 'Avoid lifting your head and straining your neck.'
      },
      {
        id: 39,
        name: 'Tricep Kickback',
        muscleGroup: 'Arms',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        instructions: 'Bend forward at the waist, your back straight, holding a dumbbell in each hand. Keep your elbows close to your body and extend the weights behind you until your arms are straight.',
        tips: 'Keep your spine neutral and squeeze your triceps at the top of the movement.',
        mistakes: 'Do not swing the dumbbells; use a controlled motion.'
      },
      {
        id: 40,
        name: 'Leg Raises',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'Mat',
        instructions: 'Lie on your back with your legs straight. Lift your legs up to the ceiling until your butt comes off the floor. Lower your legs back down just above the floor.',
        tips: 'Keep your lower back pressed to the floor and engage your core muscles.',
        mistakes: 'Avoid letting your lower back arch off the ground.'
      },
      {
        id: 41,
        name: 'Chest Fly',
        muscleGroup: 'Chest',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Bench',
        instructions: 'Lie on a flat bench with a dumbbell in each hand, arms extended directly above your chest. With a slight bend in your elbows, lower the weights out to the sides of your body until your chest feels a stretch. Bring the dumbbells back together over your chest.',
        tips: 'Perform the movement slowly and focus on the stretch and contraction of the chest muscles.',
        mistakes: 'Avoid lowering the weights too far past shoulder level to prevent strain.'
      },
      {
        id: 42,
        name: 'Skull Crushers',
        muscleGroup: 'Triceps',
        difficulty: 'Intermediate',
        equipment: 'EZ Bar, Bench',
        instructions: 'Lie on a bench with an EZ bar, hands close together. Start with arms extended and slowly lower the bar towards your forehead by bending at the elbows. Extend your arms to return to the starting position.',
        tips: 'Keep your elbows stationary and pointing towards the ceiling throughout the exercise.',
        mistakes: 'Do not let your elbows flare out to the sides.'
      },
      {
        id: 43,
        name: 'Goblet Squat',
        muscleGroup: 'Legs',
        difficulty: 'Beginner',
        equipment: 'Dumbbell or Kettlebell',
        instructions: 'Hold a dumbbell or kettlebell close to your chest with both hands. With your feet shoulder-width apart, perform a squat while keeping the weight in front of your chest. Push back up to the starting position.',
        tips: 'Keep your back straight and core tight throughout the movement.',
        mistakes: 'Avoid letting your knees track over your toes or rounding your back as you squat.'
      },
      {
        id: 44,
        name: 'Single-Leg Deadlift',
        muscleGroup: 'Hamstrings, Glutes',
        difficulty: 'Advanced',
        equipment: 'Dumbbells',
        instructions: 'Stand on one leg with a dumbbell in the opposite hand. Hinge at the hip and extend the free leg behind you for balance. Lower the dumbbell towards the ground, keeping your back flat, then return to the upright position.',
        tips: 'Keep a slight bend in the standing leg and focus on balance and the stretch in your hamstrings.',
        mistakes: 'Do not round your back or lock the knee of your standing leg.'
      },
      {
        id: 45,
        name: 'Standing Calf Raise',
        muscleGroup: 'Calves',
        difficulty: 'Beginner',
        equipment: 'Machine or Dumbbells',
        instructions: 'Stand with the balls of your feet on an elevated surface, heels hanging off. Push through the balls of your feet to raise your heel as high as possible, then slowly lower back down.',
        tips: 'Use a slow and controlled motion to maximize calf engagement.',
        mistakes: 'Avoid bouncing at the bottom of the movement or not lifting high enough.'
      },
      {
        id: 46,
        name: 'Arnold Press',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells',
        instructions: 'Sit on a bench with back support. Start with dumbbells in front of your shoulders, palms facing you. As you press the dumbbells overhead, rotate your hands so that your palms face forward at the top of the movement. Reverse the motion as you lower the dumbbells back to the starting position.',
        tips: 'Ensure a full rotation of the wrists during the press.',
        mistakes: 'Avoid arching your back as you lift the weights; keep your core engaged.'
      },
      {
        id: 47,
        name: 'Pendlay Row',
        muscleGroup: 'Back',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        instructions: 'Bend over at the waist with your back parallel to the floor. Grip the barbell with an overhand grip. Pull the bar straight up to your chest and return it to the floor with control.',
        tips: 'Keep your back flat and avoid using momentum to lift the weight.',
        mistakes: 'Do not jerk the weight; lift with your back muscles, not your arms.'
      },
      {
        id: 48,
        name: 'Face Pull',
        muscleGroup: 'Shoulders, Upper Back',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine, Rope Attachment',
        instructions: 'Attach a rope to a cable machine at upper chest level. Grab the rope with both hands and pull it towards your face, separating your hands as you pull.',
        tips: 'Focus on squeezing your shoulder blades together as you pull.',
        mistakes: 'Do not use excessive weight that can cause you to lean backward.'
      },
      {
        id: 49,
        name: 'Cable Crunch',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine, Rope Attachment',
        instructions: 'Kneel below a cable machine with a rope attachment. Hold the rope with both hands near your face. Crunch down towards your knees, using your core to pull the weight.',
        tips: 'Keep your hips stationary and focus on using your abs to perform the movement.',
        mistakes: 'Avoid pulling with your arms instead of your abs.'
      },
      {
        id: 50,
        name: 'Farmer’s Walk',
        muscleGroup: 'Full Body',
        difficulty: 'Beginner',
        equipment: 'Heavy Dumbbells or Kettlebells',
        instructions: 'Stand up straight with a weight in each hand at your sides. Walk forward quickly, taking short, quick steps while keeping your back straight and shoulders back.',
        tips: 'Grip the weights firmly and keep your core tight throughout the walk.',
        mistakes: 'Do not slouch or let the weights pull your shoulders down.'
      },
      {
        id: 51,
        name: 'Hip Thrust',
        muscleGroup: 'Glutes, Hamstrings',
        difficulty: 'Intermediate',
        equipment: 'Bench, Barbell',
        instructions: 'Sit on the ground with a bench behind you and a barbell over your legs. Lean back against the bench so that your shoulder blades are near the top of it. Drive through your feet, extending your hips vertically. Hold the weight at your pelvis and extend your hips until your body forms a straight line from your shoulders to your knees. Lower back down after a short pause.',
        tips: 'Keep your chin tucked and spine neutral throughout the movement.',
        mistakes: 'Avoid hyperextending your lower back at the top of the movement.'
      },
      {
        id: 52,
        name: 'Romanian Deadlift',
        muscleGroup: 'Hamstrings, Glutes, Lower Back',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        instructions: 'Stand with your feet hip-width apart, holding a barbell at hip level. Keep your knees slightly bent, push your hips back and lower the barbell while keeping it close to your legs. Lower as far as your flexibility allows without rounding your back, then return to the starting position.',
        tips: 'Keep the barbell close to your body and maintain a flat back throughout the movement.',
        mistakes: 'Do not round your back or bend your knees too much during the movement.'
      },
      {
        id: 53,
        name: 'Incline Bench Press',
        muscleGroup: 'Chest, Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Barbell, Incline Bench',
        instructions: 'Lie back on an incline bench. Grip the barbell with hands just wider than shoulder-width. Unrack the barbell and lower it to your upper chest, then press it back up to full arm extension.',
        tips: 'Control the barbell throughout the movement and focus on the contraction of your upper chest.',
        mistakes: 'Do not bounce the bar off your chest or arch your back off the bench.'
      },
      {
        id: 54,
        name: 'Leg Press',
        muscleGroup: 'Quadriceps, Hamstrings, Glutes',
        difficulty: 'Beginner',
        equipment: 'Leg Press Machine',
        instructions: 'Sit down in a leg press machine and place your feet on the platform in front of you at hip-width. Lower the safety bars and press the platform away with your feet. Lower the platform until your legs are at 90 degrees, then press back to the starting position.',
        tips: 'Keep your lower back in contact with the seat during the entire movement.',
        mistakes: 'Do not lock out your knees at the top of the press.'
      },
      {
        id: 55,
        name: 'EZ-Bar Curl',
        muscleGroup: 'Biceps',
        difficulty: 'Beginner',
        equipment: 'EZ-Bar',
        instructions: 'Stand up with your torso upright while holding an EZ-Bar at the wide outer handle. Keep your elbows close to your torso and curl the weights while contracting your biceps. Continue to lift the weights until your biceps are fully contracted, then lower back to the starting position.',
        tips: 'Keep your upper arms stationary throughout the exercise.',
        mistakes: 'Avoid swinging your body to lift the weights.'
      },
      {
        id: 56,
        name: 'T-Bar Row',
        muscleGroup: 'Back',
        difficulty: 'Intermediate',
        equipment: 'T-Bar Row Machine',
        instructions: 'Stand on the T-Bar row machine, bending forward at the hips. Hold the handles and pull the weight towards your chest, keeping your back straight. Return to the starting position with a controlled movement.',
        tips: 'Focus on squeezing your shoulder blades together at the top of the movement.',
        mistakes: 'Avoid rounding your back or using momentum to lift the weight.'
      },
      {
        id: 57,
        name: 'Decline Push-up',
        muscleGroup: 'Chest, Shoulders, Triceps',
        difficulty: 'Intermediate',
        equipment: 'None',
        instructions: 'Place your feet on an elevated surface and hands on the ground, slightly wider than shoulder-width apart. Perform push-ups as usual, lowering your chest to the ground and then pushing back up.',
        tips: 'Keep your body straight from head to heels.',
        mistakes: 'Dont let your hips sag or stick up in the air.'
      },
      {
        id: 58,
        name: 'Seated Leg Curl',
        muscleGroup: 'Hamstrings',
        difficulty: 'Beginner',
        equipment: 'Seated Leg Curl Machine',
        instructions: 'Sit on the machine with your back against the pad and place your legs under the lever. Flex your knees to pull the weight towards you, then return to the starting position.',
        tips: 'Perform the movement in a controlled manner, focusing on contracting your hamstrings.',
        mistakes: 'Avoid jerky movements or lifting your torso off the pad.'
      },
      {
        id: 59,
        name: 'Cable Lateral Raise',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        instructions: 'Stand next to a cable machine with the handle at the lowest setting. Grab the handle with the hand farthest from the machine and, keeping your arm straight, raise it to shoulder height. Lower it back down with control.',
        tips: 'Keep your core engaged and stand upright throughout the exercise.',
        mistakes: 'Avoid using momentum to lift the weight; move deliberately.'
      },
      {
        id: 60,
        name: 'Concentration Curl',
        muscleGroup: 'Biceps',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        instructions: 'Sit on a bench with your legs spread. Lean forward slightly, resting your arm holding the dumbbell against your inner thigh. Curl the weight towards your shoulder, squeezing your bicep at the top, then slowly lower it back down.',
        tips: 'Keep your upper arm stationary throughout the exercise.',
        mistakes: 'Do not swing the dumbbell or use your back to lift it.'
      },
      {
        id: 61,
        name: 'Split Squat',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Intermediate',
        equipment: 'None, Dumbbells (optional)',
        instructions: 'Begin in a staggered stance with one foot in front of the other, spaced about two feet apart. Lower your body until your rear knee nearly touches the ground and your front thigh is parallel to the ground. Push back up to the starting position.',
        tips: 'Keep your front knee in line with your foot and avoid letting it travel too far forward.',
        mistakes: 'Do not let your front heel come off the ground.'
      },
      {
        id: 62,
        name: 'Barbell Shrug',
        muscleGroup: 'Shoulders, Traps',
        difficulty: 'Beginner',
        equipment: 'Barbell',
        instructions: 'Stand with feet shoulder-width apart, holding a barbell in front of your thighs. Shrug your shoulders straight up towards your ears without bending the elbows, and then lower them back down.',
        tips: 'Keep your arms straight and focus on the contraction of your traps at the top.',
        mistakes: 'Avoid rolling your shoulders or using your biceps to lift the bar.'
      },
      {
        id: 63,
        name: 'Standing Overhead Dumbbell Press',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells',
        instructions: 'Stand with feet shoulder-width apart, holding a dumbbell in each hand at shoulder height. Press the dumbbells overhead until your arms are fully extended, then lower them back to the starting position.',
        tips: 'Keep your core braced and maintain a neutral spine throughout the movement.',
        mistakes: 'Do not arch your back or use your legs to push the weights up.'
      },
      {
        id: 64,
        name: 'Good Morning',
        muscleGroup: 'Hamstrings, Lower Back',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        instructions: 'Place a barbell on your shoulders behind your neck. With your feet shoulder-width apart, bend at the waist, pushing your hips back until your upper body is almost parallel to the floor. Return to the starting position.',
        tips: 'Keep your back straight and knees slightly bent throughout the movement.',
        mistakes: 'Do not round your back or bend too low, which can cause strain.'
      },
      {
        id: 65,
        name: 'Bulgarian Split Squat',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Intermediate',
        equipment: 'Bench, Dumbbells (optional)',
        instructions: 'Stand about two feet in front of a bench and place one foot on it behind you. Lower your hips until your front thigh is almost parallel to the ground, then drive back up to the starting position.',
        tips: 'Keep your torso upright and your front knee in line with your foot.',
        mistakes: 'Do not let your front knee travel past your toes or let your back arch.'
      },
      {
        id: 66,
        name: 'Dumbbell Pullover',
        muscleGroup: 'Chest, Back',
        difficulty: 'Intermediate',
        equipment: 'Dumbbell, Bench',
        instructions: 'Lie on a bench with your upper back resting on it and your feet flat on the floor. Hold a dumbbell with both hands above your chest, arms fully extended. Lower the dumbbell back and over your head, keeping your arms straight, then bring it back to the starting position.',
        tips: 'Keep a slight bend in your elbows throughout the exercise and move your arms in a smooth arc.',
        mistakes: 'Avoid letting the dumbbell pull your arms too far back, which can strain the shoulder joints.'
      },
      {
        id: 67,
        name: 'Lying Leg Curl',
        muscleGroup: 'Hamstrings',
        difficulty: 'Intermediate',
        equipment: 'Leg Curl Machine',
        instructions: 'Lie face down on a leg curl machine with the pad of the lever on the back of your legs. Curl the weight up as far as possible without lifting your thighs off the pad. Then lower the weight back to the starting position.',
        tips: 'Ensure full hamstring contraction by curling the weight as much as you can.',
        mistakes: 'Do not lift your torso off the bench or use momentum to swing the weight.'
      },
      {
        id: 68,
        name: 'Seated Calf Raise',
        muscleGroup: 'Calves',
        difficulty: 'Beginner',
        equipment: 'Seated Calf Raise Machine',
        instructions: 'Sit on the machine and place your feet flat on the platform with your knees under the pads. Lower your heels below the level of the platform, then push up onto your toes as high as possible.',
        tips: 'Pause at the top of the movement to maximize calf muscle contraction.',
        mistakes: 'Avoid bouncing at the bottom or failing to achieve a full range of motion.'
      },
      {
        id: 69,
        name: 'Cable Cross-over',
        muscleGroup: 'Chest',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        instructions: 'Stand in the middle of a cable machine with the pulleys set above head height. Grab the handles with your arms extended out to the sides and slightly forward. Bring your hands together in front of you, crossing one hand over the other, and then return to the starting position.',
        tips: 'Focus on squeezing your chest muscles as you bring your hands together.',
        mistakes: 'Do not let your shoulders roll forward; keep them back and down.'
      },
      {
        id: 70,
        name: 'Dragon Flag',
        muscleGroup: 'Core',
        difficulty: 'Advanced',
        equipment: 'Bench',
        instructions: 'Lie on a bench and grab it behind your head with both hands. Keep your body straight and lift your legs and hips up towards the ceiling, then lower them back down without letting your lower back touch the bench.',
        tips: 'Control the movement with your core, keeping your body rigid as a board.',
        mistakes: 'Avoid bending at the hips or using momentum to lift your body.'
      },
      {
        id: 71,
        name: 'Kettlebell Swing',
        muscleGroup: 'Hamstrings, Glutes, Lower Back',
        difficulty: 'Intermediate',
        equipment: 'Kettlebell',
        instructions: 'Stand with your feet shoulder-width apart, holding a kettlebell with both hands in front of you. Bend at your hips and knees, swinging the kettlebell between your legs, then forcefully extend your hips to swing the kettlebell up to shoulder height. Allow it to swing back between your legs and repeat.',
        tips: 'Keep your back flat and use the momentum from your hip thrust to swing the kettlebell, not your arms.',
        mistakes: 'Do not round your back or try to lift with your shoulders.'
      },
      {
        id: 72,
        name: 'Turkish Get-Up',
        muscleGroup: 'Full Body',
        difficulty: 'Advanced',
        equipment: 'Kettlebell',
        instructions: 'Lie on your back with a kettlebell next to your right hand. Roll towards the kettlebell, grasp it with both hands, and press it above your chest. Keeping the kettlebell locked out at all times, move through a series of motions to stand up, then reverse the motion to return to the starting position.',
        tips: 'Keep your eyes on the kettlebell throughout the movement and move smoothly.',
        mistakes: 'Do not rush the exercise or lose focus on the weight.'
      },
      {
        id: 73,
        name: 'Barbell Hack Squat',
        muscleGroup: 'Quadriceps, Glutes',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        instructions: 'Stand with your feet shoulder-width apart and a barbell behind your legs. Squat down and grasp the barbell with an overhand grip. Stand up by straightening your hips and knees to a full standing position, then lower the barbell back to the ground.',
        tips: 'Keep your back straight and core tight throughout the movement.',
        mistakes: 'Avoid leaning too far forward or rounding your back.'
      },
      {
        id: 74,
        name: 'Standing Pallof Press',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        instructions: 'Stand with your side to a cable machine, feet shoulder-width apart. Grasp the cable handle with both hands and press it straight out in front of your chest, resisting the twist towards the machine. Return the handle to your chest and repeat.',
        tips: 'Keep your movements controlled and focus on resisting the rotational force.',
        mistakes: 'Do not let the cable pull you sideways; maintain your stance.'
      },
      {
        id: 75,
        name: 'Reverse Hyperextension',
        muscleGroup: 'Lower Back, Glutes',
        difficulty: 'Intermediate',
        equipment: 'Hyperextension Bench',
        instructions: 'Position yourself face down on a hyperextension bench, tucking your ankles securely under the footpads. Bend at the waist and slowly lower your upper body towards the ground, then raise it back up to the level of the bench.',
        tips: 'Focus on using your glutes and hamstrings to lift your torso up.',
        mistakes: 'Do not swing or use momentum; the motion should be slow and controlled.'
      },
      {
        id: 76,
        name: 'Stiff-Legged Deadlift',
        muscleGroup: 'Hamstrings, Glutes, Lower Back',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        instructions: 'Stand with feet hip-width apart, holding a barbell in front of your thighs. With legs straight and a slight bend in the knees, hinge at the hips to lower the barbell along the front of your legs until you feel a stretch in your hamstrings. Return to the starting position.',
        tips: 'Keep the barbell close to your legs throughout the movement and maintain a neutral spine.',
        mistakes: 'Avoid rounding your back or bending your knees too much as you lower the weight.'
      },
      {
        id: 77,
        name: 'Incline Dumbbell Row',
        muscleGroup: 'Upper Back, Lats',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Incline Bench',
        instructions: 'Lie chest-down on an incline bench holding a dumbbell in each hand. Let the dumbbells hang straight down, then row them towards your hips, keeping your elbows close to your body. Lower them back down with control.',
        tips: 'Squeeze your shoulder blades together at the top of the movement.',
        mistakes: 'Do not jerk the weights or let your shoulders creep up towards your ears.'
      },
      {
        id: 78,
        name: 'Dumbbell Bench Press',
        muscleGroup: 'Chest, Triceps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells, Bench',
        instructions: 'Lie on a flat bench holding a dumbbell in each hand at chest level. Press the dumbbells up until your arms are fully extended, then lower them back down to the sides of your chest.',
        tips: 'Align the dumbbells over your chest, not your face, and press with a smooth, controlled motion.',
        mistakes: 'Avoid letting the dumbbells drift towards your head or your stomach.'
      },
      {
        id: 79,
        name: 'Box Squat',
        muscleGroup: 'Quadriceps, Glutes',
        difficulty: 'Intermediate',
        equipment: 'Barbell, Box or Bench',
        instructions: 'Stand with feet shoulder-width apart, facing away from a box or bench with a barbell across your upper back. Sit back and down onto the box, then drive through your heels to return to standing.',
        tips: 'Control your descent, lightly touch the box without fully relaxing, then power back up.',
        mistakes: 'Do not round your back or plop down uncontrolled onto the box.'
      },
      {
        id: 80,
        name: 'Lateral Lunge',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Beginner',
        equipment: 'None',
        instructions: 'Stand with feet together and take a large step to the side. Bend your stepping leg while keeping your other leg straight, lowering your body until the thigh is parallel to the floor. Push back to the starting position.',
        tips: 'Keep your chest up and back straight during the lunge.',
        mistakes: 'Do not let the knee of your lunging leg extend past your toes.'
      },
      {
        id: 81,
        name: 'Dumbbell Shoulder Press',
        muscleGroup: 'Shoulders',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        instructions: 'Sit on a bench with back support or stand with feet shoulder-width apart. Start with dumbbells at shoulder height and press them overhead until your arms are extended. Lower the dumbbells back to the starting position.',
        tips: 'Keep your back straight and core tight throughout the movement.',
        mistakes: 'Avoid using too heavy a weight that causes you to arch your back or use momentum.'
      },
      {
        id: 82,
        name: 'Reverse Lunge',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Beginner',
        equipment: 'None, Dumbbells (optional)',
        instructions: 'Stand with your feet hip-width apart. Step back with one leg and lower your hips until your front thigh is parallel to the floor and your back knee is close to touching it. Push through your front heel to return to the starting position.',
        tips: 'Keep your upper body straight and core engaged throughout the movement.',
        mistakes: 'Do not let your front knee extend over your toes or let your back knee slam into the floor.'
      },
      {
        id: 83,
        name: 'Tricep Overhead Extension',
        muscleGroup: 'Triceps',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        instructions: 'Stand or sit with a dumbbell held by both hands. Your upper arms should remain stationary, extending the dumbbell overhead with your arms fully extended. Lower the weight behind your head, then extend your arms back to the starting position.',
        tips: 'Keep your elbows close to your head and pointing straight up throughout the exercise.',
        mistakes: 'Avoid letting your elbows flare out to the sides or using your lower back to lift the weight.'
      },
      {
        id: 84,
        name: 'Upright Row',
        muscleGroup: 'Shoulders, Upper Back',
        difficulty: 'Intermediate',
        equipment: 'Barbell or Dumbbells',
        instructions: 'Stand with feet shoulder-width apart, holding a barbell or dumbbells in front of you with an overhand grip. Lift the weights straight up to your chest level, leading with your elbows, then lower them back down.',
        tips: 'Keep the weights close to your body as you lift and lower them.',
        mistakes: 'Do not jerk the weights or compromise form to lift heavier.'
      },
      {
        id: 85,
        name: 'Single-Arm Dumbbell Row',
        muscleGroup: 'Back',
        difficulty: 'Beginner',
        equipment: 'Dumbbell, Bench',
        instructions: 'Place one knee and hand on a bench for support, other foot on the floor. With the free hand, lift a dumbbell from the floor until your upper arm is parallel with your torso, then lower it back down.',
        tips: 'Keep your back flat and core engaged throughout the exercise.',
        mistakes: 'Avoid twisting your torso to lift the weight; the motion should come from the arm and back.'
      },
      {
        id: 86,
        name: 'Prone Horizontal Abduction',
        muscleGroup: 'Shoulders',
        difficulty: 'Beginner',
        equipment: 'Mat, Dumbbells (optional)',
        instructions: 'Lie face down on a mat with arms extended out to the sides, thumbs pointing upward. Lift your arms up and away from the floor as high as comfortably possible, then slowly lower them back down.',
        tips: 'Keep your head and neck in a neutral position, looking down at the mat.',
        mistakes: 'Avoid lifting your head or straining your neck; movement should come from the shoulders.'
      },
      {
        id: 87,
        name: 'Zottman Curl',
        muscleGroup: 'Biceps, Forearms',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells',
        instructions: 'Stand holding dumbbells at your sides with palms facing forward. Curl the weights up to your shoulders. At the top of the curl, rotate your hands so your palms face downward and lower the dumbbells back to the starting position.',
        tips: 'Rotate the dumbbells smoothly at the top of the movement; keep your elbows stationary.',
        mistakes: 'Do not swing the weights or use momentum; the motion should be controlled.'
      },
      {
        id: 88,
        name: 'Cable Front Raise',
        muscleGroup: 'Shoulders',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        instructions: 'Stand facing away from a cable machine with the cable attached to a low pulley. Hold the handle with one hand and lift it straight up in front of you to shoulder height, then lower back down with control.',
        tips: 'Keep your core tight and stand straight, resisting the pull of the cable.',
        mistakes: 'Avoid using your body weight to lift the cable; isolate the movement in your shoulder.'
      },
      {
        id: 89,
        name: 'Cable Kickback',
        muscleGroup: 'Triceps',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        instructions: 'Face a cable machine and hold onto the handle with one hand. Hinge forward slightly from the hips. Extend your arm back in a kicking motion until it is straight and parallel to the floor, then return to the starting position.',
        tips: 'Keep your elbow close to your body and focus on moving your forearm only.',
        mistakes: 'Do not let your elbow drift away from your side or swing the weight.'
      },
      {
        id: 90,
        name: 'Hanging Knee Raise',
        muscleGroup: 'Core',
        difficulty: 'Intermediate',
        equipment: 'Pull-up Bar',
        instructions: 'Hang from a pull-up bar with your legs straight down. Brace your core and lift your knees toward your chest, then slowly lower them back to the starting position.',
        tips: 'Avoid swinging; initiate the movement from your core muscles.',
        mistakes: 'Do not use momentum to swing your legs up; the movement should be controlled.'
      },
      {
        id: 91,
        name: 'Swiss Ball Hamstring Curl',
        muscleGroup: 'Hamstrings, Core',
        difficulty: 'Intermediate',
        equipment: 'Swiss Ball',
        instructions: 'Lie on your back with your feet on top of a Swiss ball. Lift your hips off the ground and roll the ball towards your butt by bending your knees. Straighten your legs to roll the ball back to the starting position.',
        tips: 'Keep your hips raised throughout the exercise to engage your core.',
        mistakes: 'Do not let your hips sag; maintain a straight line from shoulders to knees.'
      },
      {
        id: 92,
        name: 'Decline Bench Press',
        muscleGroup: 'Chest',
        difficulty: 'Intermediate',
        equipment: 'Barbell, Decline Bench',
        instructions: 'Lie on a decline bench with your feet secured. Hold the barbell above your lower chest with arms straight. Lower the bar to your chest, then press it back up to the starting position.',
        tips: 'Keep your wrists straight and elbows close to your body.',
        mistakes: 'Do not bounce the bar off your chest or arch your back off the bench.'
      },
      {
        id: 93,
        name: 'Battle Ropes',
        muscleGroup: 'Full Body',
        difficulty: 'Intermediate',
        equipment: 'Battle Ropes',
        instructions: 'Stand with feet shoulder-width apart, knees slightly bent. Hold one rope in each hand. Alternate moving your arms up and down rapidly to create waves with the ropes.',
        tips: 'Use your whole body, not just your arms, and maintain a rhythmic motion.',
        mistakes: 'Do not stand too rigid; use your legs and core to assist in the movement.'
      },
      {
        id: 94,
        name: 'Weighted Step-Up',
        muscleGroup: 'Legs, Glutes',
        difficulty: 'Intermediate',
        equipment: 'Dumbbells, Bench or Step Platform',
        instructions: 'Holding a dumbbell in each hand, place one foot on the step or bench. Press through your heel to lift your body up onto the step, then step back down and repeat.',
        tips: 'Keep your chest up and focus on using your leg to lift your body, not momentum.',
        mistakes: 'Avoid letting the knee of the stepping leg go past your toes or leaning too far forward.'
      },
      {
        id: 95,
        name: 'Plank Row',
        muscleGroup: 'Core, Back',
        difficulty: 'Advanced',
        equipment: 'Dumbbells',
        instructions: 'Start in a plank position with a dumbbell in each hand. Row one dumbbell up towards your waist while balancing on the other. Lower the dumbbell back to the ground and repeat on the other side.',
        tips: 'Keep your body in a straight line and resist the urge to twist your hips.',
        mistakes: 'Do not let your hips sag or pike up; maintain a strong plank position throughout.'
      },
    ];
  
    const ExerciseDatabase = ({ exercises }) => {
        const [searchTerm, setSearchTerm] = useState('');
        const [filteredExercises, setFilteredExercises] = useState(exercises); // Initialize with all exercises
      
        useEffect(() => {
          setFilteredExercises(exercises);
        }, [exercises]);
      
        const handleSearch = (event) => {
          const value = event.target.value.toLowerCase();
          setSearchTerm(value);
          const filtered = exercises.filter((exercise) =>
            exercise.name.toLowerCase().includes(value) ||
            exercise.muscleGroup.toLowerCase().includes(value) ||
            exercise.difficulty.toLowerCase().includes(value) ||
            exercise.equipment.toLowerCase().includes(value)
          );
          setFilteredExercises(filtered);
        };
      
        return (
          <div>
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div>
              {filteredExercises.length === 0 ? (
                <p>No exercises found.</p>
              ) : (
                filteredExercises.map((exercise) => (
                  <div key={exercise.id} className="exercise-card">
                    <h2>{exercise.name}</h2>
                    <p>ID: {exercise.id}</p>
                    <p>Muscle Group: {exercise.muscleGroup}</p>
                    <p>Difficulty: {exercise.difficulty}</p>
                    <p>Equipment: {exercise.equipment}</p>
                    <p>Instructions: {exercise.instructions}</p>
                    <p>Tips: {exercise.tips}</p>
                    <p>Common Mistakes: {exercise.mistakes}</p>
                  </div>
                ))
              )}
            </div>
            <style jsx>{`
              .exercise-card {
                border: 1px solid #ccc;
                padding: 16px;
                margin: 8px 0;
                border-radius: 8px;
              }
            `}</style>
          </div>
        );
      };
      
      export default ExerciseDatabase;