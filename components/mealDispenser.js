import React, { useState } from 'react';
import meals from 'components/meals';
import 'styles/glow.module.css'; // Ensure the file name matches this import

const MealDispenser = () => {
    const [meal, setMeal] = useState(null);
  
    const getHealthyMeal = () => {
      const randomIndex = Math.floor(Math.random() * meals.length);
      const randomMeal = meals[randomIndex];
      console.log('Selected meal:', randomMeal); // Debugging
      setMeal(randomMeal);
    }
  
    return (
      <div className="meal-dispenser">
        <h2>Healthy Meal Dispenser</h2>
        <div className="button-container">
          <button onClick={getHealthyMeal}>Get a Healthy Meal</button>
        </div>
        {meal && (
          <div className="meal-container">
            <img 
              src={meal.imageUrl} 
              alt={meal.name} 
              className="meal-image"
            />
            <h3 className="meal-title">{meal.name}</h3>
            <div className="meal-info">
              <div className="ingredients">
                <h4><strong>Ingredients</strong></h4>
                <ul>
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>- {ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h4><strong>Instructions</strong></h4>
                <ol>
                  {meal.instructions.map((step, index) => (
                    <li key={index}>{index + 1}. {step}</li>
                  ))}
                </ol>
              </div>
            </div>
            <p><strong>Duration:</strong> {meal.duration}</p>
          </div>
        )}
      </div>
    );
}

export default MealDispenser;
