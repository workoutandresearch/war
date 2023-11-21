const meals = [
    {
      name: 'Bodybuilder Steak & Grilled Cheese',
      ingredients: [
        '4 slices favorite bread',
        '½ green pepper, sliced',
        '½ small onion, sliced',
        '2 slices reduced fat pepper jack cheese',
        '8oz thinly sliced meat sirloin tip steak',
        'Steak seasoning of choice, optional'
      ],
      duration: '20 minutes',
      instructions: [
        'Season meat and cook as desired',
        'Add peppers and onions to medium skillet and cook until tender (or grill outside with steak)',
        'Layer steak, veggies and cheese onto bread',
        'Top with additional bread slice',
        'Heat medium skillet or grill pan over medium heat',
        'Can use butter on outside of toast if desired or just coat a pan with non-stick spray to keep fat and calories down.',
        'Add sandwich to pan and toast until golden',
        'Flip and toast until cheese is fully melted',
      ],
      nutrition: {
        calories: '391',
        protein: '38g',
        carbs: '35g',
        fat: '9g'
      },
      imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/bodybuilders_steak_grilled_cheese_sandwich_recipe.jpg'
    },
    {
        name: 'Lemon-Thyme Roast Chicken',
        ingredients: [
          'One 4-pound 8-ounce roasting chicken',
          '1 tsp freshly ground black pepper',
          '1/2 teaspoon salt',
          '2 large lemons',
          '6 garlic cloves, peeled',
          'Six 4" fresh thyme sprigs or 2 teaspoons dried thyme leaves',
          'Additional fresh thyme sprigs, to garnish'
        ],
        duration: '2 hours 20 minutes',
        instructions: [
          'Preheat oven to 350°F',
          'Sprinkle chicken cavities with 1/2 teaspoon of the pepper and 1/4 teaspoon of the salt',
          'Roll lemons on work surface until softened',
          'Pierce each lemon 15 times about 1" deep',
          'Place pierced lemons, 5 garlic cloves, and thyme into large cavity of chicken',
          'Place remaining garlic clove into small cavity',
          'Truss chicken and sprinkle evenly with remaining pepper and salt',
          'Place chicken, breast-side up, onto rack in large roasting pan',
          'Roast 2-2 1/4 hours, until cooked through',
          'Let stand 10 minutes, remove and discard skin and cavity contents; carve chicken',
          'Serve garnished with additional thyme sprigs'
        ],
        nutrition: {
          calories: '165',
          protein: '25g',
          carbs: '1g',
          fat: '6g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/recipe/lemon-thyme-450.jpg?itok=JOEleKUi'
      },
      {
        name: 'Peanut Butter Banana Bulking Protein Shake',
        ingredients: [
          '8 oz Choice of Milk',
          '1 banana',
          '1 tbsp peanut butter',
          '2 scoops of whey protein powder'
        ],
        duration: '5 minutes',
        instructions: [
          'Place ingredients into a blender',
          'Blend until smooth',
          'For a higher calorie shake, use whole milk and additional peanut butter'
        ],
        nutrition: {
          calories: '498',
          protein: '58g',
          carbs: '44.3g',
          fat: '11.2g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/peanut-butter-banana-shake.jpg'
      },
      {
        name: 'Protein Shake with Banana, Oats, and Whey Protein Powder',
        ingredients: [
          '8 oz Choice of Milk',
          '1 banana',
          '1/2 cup of oats',
          '2 scoops of protein powder'
        ],
        duration: '5 minutes',
        instructions: [
          'Choose your favorite protein powder flavor',
          'Combine all ingredients into a blender',
          'Blend until smooth'
        ],
        nutrition: {
          calories: '554',
          protein: '59g',
          carbs: '68.2g',
          fat: '6.1g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/banana-and-oat-protein-shake.jpg'
      },
      {
        name: 'Banana Nut Protein Shake',
        ingredients: [
          '8-12oz. Choice of Milk',
          '1 cup Ice',
          '1 scoop Protein Powder',
          '1 Banana',
          '1 pump Amoretti Sugar-Free Amaretto Syrup',
          '1 handful Roasted, Unsalted Cashews (optional)'
        ],
        duration: '5 minutes',
        instructions: [
          'Add all ingredients to blender in the order listed',
          'Blend until smooth',
          'Enjoy the drink'
        ],
        nutrition: {
          calories: '521',
          protein: '34g',
          carbs: '36g',
          fat: '19g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/easy_banana_nut_protein_shake.jpg'
      },
      {
        name: 'Chocolate Banana Berry Protein Shake',
        ingredients: [
          '12 oz Choice of Milk',
          '4 ice cubes',
          '1 banana',
          '1 ounce of your favorite fresh berry',
          '2 scoops of a chocolate flavored protein powder'
        ],
        duration: '5 minutes',
        instructions: [
          'Place all ingredients into a blender',
          'Blend until smooth',
          'Enjoy the shake'
        ],
        nutrition: {
          calories: '328',
          protein: '45.6g',
          carbs: '32.3g',
          fat: '2.6g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/recipe/chocolate-banana-450.jpg?itok=afjn0rJ2'
      },
      {
        name: 'Chewy Snickerdoodle Protein Cookies',
        ingredients: [
          '¼ cup (28g) Coconut Flour',
          '2 ½ scoops (84g) MusclePharm Snickerdoodle Protein Powder or vanilla protein powder + 2 tsp ground cinnamon',
          '¾ tsp. Baking Powder',
          '½ tsp. Sea Salt',
          '¼ cup (84g) Honey',
          '1 Large Egg',
          '1 tbsp. Coconut Oil, melted',
          '1 ½ tsp. Pure Vanilla Extract',
          '2 tsp. Cinnamon',
          '2 tbsp. xylitol (optional)'
        ],
        duration: '35 minutes',
        instructions: [
          'Sift together coconut flour, protein powder, baking powder, and salt',
          'Whisk together melted coconut oil, egg, vanilla, and honey',
          'Combine wet and dry ingredients',
          'Mix until just incorporated and refrigerate for 20 minutes',
          'Preheat oven to 325°F and line a baking sheet with parchment paper',
          'Mix cinnamon and xylitol in a small bowl (if using)',
          'Shape dough into balls (about 1.5 tbsp size) and roll in cinnamon/xylitol mixture',
          'Place cookies on baking sheet and flatten',
          'Bake for about 10 minutes',
          'Remove from oven and allow to cool'
        ],
        nutrition: {
          calories: '91',
          protein: '7g',
          carbs: '10g',
          fat: '3g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/snickedoodle.jpg',
        servings: 10
      },
      {
        name: 'High-Protein Grilled Chicken Gyros',
        ingredients: [
          '8 low carb pitas',
          '24 oz chicken breast, cut into cubes',
          '1.5 tsp olive oil',
          '1.5 tbsp red wine vinegar',
          '1¼ tsp garlic powder',
          '2 tsp fresh lemon juice',
          '1.5 tbsp oregano',
          '1 cup diced tomato',
          '1 cup chopped red onion',
          '1 cup chopped cucumber',
          'Tatziki Sauce: ½ cup non-fat Greek yogurt, ½ tsp dry dill, Splash of lemon juice, Salt & Pepper to taste'
        ],
        duration: 'Marinate 2-3 hours, Cook 20 minutes',
        instructions: [
          'Mix together all ingredients for Tatziki sauce and refrigerate',
          'Marinate chicken with olive oil, vinegar, garlic powder, lemon juice, and oregano for 2-3 hours or overnight',
          'Grill chicken until cooked through',
          'Evenly divide chicken between 8 pitas',
          'Top with tomato, cucumber, onion, and tatziki sauce'
        ],
        nutrition: {
          calories: '359',
          protein: '57.7g',
          carbs: '22.5g',
          fat: '7.9g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/high-protein-grilled-chicken-gyros-recipe.jpg',
        servings: 4
      },
      {
        name: 'High Protein Chicken Burrito Bowl',
        ingredients: [
          '2 cups cooked white rice (or brown rice)',
          '1 lime',
          '2 tbs cilantro',
          '12 oz chicken breast, raw weight (or alternative protein)',
          'Favorite Mexican seasoning',
          '⅓ cup no salt added black beans',
          '½ cup fresh pico de gallo or salsa',
          '¼ cup guacamole',
          '¼ cup nonfat Greek yogurt',
          '¼ cup shredded cheddar cheese',
          '1 cup shredded lettuce'
        ],
        duration: 'Prep 30 minutes, Cook 20 minutes',
        instructions: [
          'Toss cooked rice with cilantro, lime juice, and salt',
          'Season and cook chicken as desired, then cut into bite-size pieces',
          'Warm black beans in the microwave',
          'Build the bowl with rice, lettuce, chicken, black beans, guacamole, pico de gallo, Greek yogurt, and cheese',
          'Serve with a wedge of lime and chips, if desired'
        ],
        nutrition: {
          calories: '565',
          protein: '54g',
          carbs: '67g',
          fat: '9g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/burrito-bowl-feature.jpg',
        servings: 2
      },
      {
        name: 'High Protein Chipotle Cheddar Vegetarian Quesadilla',
        ingredients: [
          '4 low carb tortillas or high protein P28 wraps',
          '2 cups low sodium cottage cheese',
          '2 cups reduced fat cheddar cheese',
          '1 pepper, sliced',
          '1 small onion, sliced',
          '1 cup Portobello mushrooms',
          '2-3 tbsp chipotle seasoning, adjusted to taste',
          'Salsa for dipping (optional)'
        ],
        duration: 'Approx. 15 minutes',
        instructions: [
          'Grill sliced pepper, onion, and mushroom until tender',
          'Mix cottage cheese with chipotle seasoning',
          'Lay tortilla flat on grill, spread half with cottage cheese mixture, add grilled veggies and top with cheddar cheese',
          'Cook open with grill cover down for 2 minutes',
          'Fold tortilla over and flip gently, cook another 1-2 minutes until cheese is melted',
          'Slice and serve with salsa'
        ],
        nutrition: {
          calories: '287 - 477',
          protein: '32.6g - 52.6g',
          carbs: '29.8g - 37.8g',
          fat: '10.6g - 14.6g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/chipotle-cheddar-veggie-quesadilla-featured.jpg',
        servings: 4
      },
      {
        name: 'Lime BBQ Chicken With Salsa Cream Dipping Sauce',
        ingredients: [
          '2lbs Boneless, Skinless Chicken Breasts',
          '3 tbsps Cilantro, Finely Chopped',
          '1 Minced Garlic Clove',
          '1 Lime Zest',
          '5 tbsps Lime Juice',
          '1/2 cup Extra Virgin Olive Oil',
          '2 tsp Salt',
          '1 tsp Black Pepper',
          '1 cup Sour Cream',
          '1 cup Salsa'
        ],
        duration: 'Prep 1 hour, Cook 20 minutes',
        instructions: [
          'Cube chicken and mix with cilantro, garlic, lime zest, lime juice, olive oil, salt, and pepper for marinade',
          'Marinate for 30 to 60 minutes in the refrigerator',
          'Prepare dipping sauce by combining sour cream with salsa',
          'Place chicken on skewers and cook',
          'Serve with salsa cream dipping sauce'
        ],
        nutrition: {
          calories: '288',
          protein: '24.7g',
          carbs: '3.4g',
          fat: '21.3g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/recipe/bbq-chicken-450.jpg?itok=oN-GuDeE',
        servings: 8
      },
      {
        name: 'Pulled BBQ Chicken Potato Skins',
        ingredients: [
          '2 lbs small dutch potatoes',
          '1 lb (raw weight) chicken breast',
          '½ cup favorite BBQ sauce',
          '1 cup reduced fat shredded cheddar cheese'
        ],
        duration: 'Prep 10 minutes, Cook 1 hour 20 minutes',
        instructions: [
          'Preheat oven to 425 degrees and line a baking sheet with foil',
          'Rinse potatoes, pierce with a fork, and bake for about 1 hour until tender',
          'Boil chicken until cooked, then shred with forks',
          'Toss shredded chicken with BBQ sauce',
          'Halve potatoes and scoop out the middle, leaving a bit of potato',
          'Divide BBQ chicken among potatoes, top with cheese, and bake for 20 minutes until cheese melts',
          'Finish with extra BBQ sauce if desired'
        ],
        nutrition: {
          calories: '327',
          protein: '38g',
          carbs: '28g',
          fat: '7g'
        },
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/recipe/bbq-chicken-potato-skin-recipe.jpg',
        servings: 4
      },
      // ... other meals
    ];

  export default meals;
  