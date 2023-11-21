import React, { useState } from 'react';

const SleepTracker = () => {
    const [sleepData, setSleepData] = useState([]);
    const [bedTime, setBedTime] = useState('');
    const [wakeUpTime, setWakeUpTime] = useState('');
    const [sleepQuality, setSleepQuality] = useState(5); // Default sleep quality
    const [environmentFactors, setEnvironmentFactors] = useState({ temperature: '', noiseLevel: '', lightLevel: '' });
    const [lifestyleFactors, setLifestyleFactors] = useState({ exercise: '', diet: '', caffeineConsumption: '', alcoholConsumption: '', stressLevel: '', medications: '' });

    const calculateSleepDuration = () => {
        if (!bedTime || !wakeUpTime) {
            return 0; // Return 0 if either time is not set
        }
    
        let sleepStart = new Date(`01/01/2000 ${bedTime}`);
        let sleepEnd = new Date(`01/01/2000 ${wakeUpTime}`);
    
        if (sleepEnd < sleepStart) {
            sleepEnd.setDate(sleepEnd.getDate() + 1); // Adjust for crossing midnight
        }
    
        const duration = (sleepEnd - sleepStart) / (1000 * 60 * 60); // Convert milliseconds to hours
        return duration >= 0 ? duration : 0; // Ensure non-negative duration
    };

    // Function to handle form submission
    const handleSubmit = () => {
        const duration = calculateSleepDuration();
        if (typeof duration !== 'number' || isNaN(duration)) {
        }
        const feedback = sleepFeedback(duration);
        const newEntry = {
            date: new Date().toLocaleDateString(),
            bedTime,
            wakeUpTime,
            sleepDuration: duration.toFixed(2),
            sleepQuality,
            environmentFactors,
            lifestyleFactors,
            feedback
        };
        setSleepData([...sleepData, newEntry]);
        // Reset form
        // Existing logic
    };

    return (
        <div>
            <h2>Sleep Tracker</h2>
            <input type="time" value={bedTime} onChange={(e) => setBedTime(e.target.value)} />
            <input type="time" value={wakeUpTime} onChange={(e) => setWakeUpTime(e.target.value)} />
            <button onClick={handleSubmit}>Log Sleep</button>
            {sleepData.map((entry, index) => (
                <div key={index}>
                    <p>Date: {entry.date}</p>
                    <p>Sleep Duration: {entry.sleepDuration} hours</p>
                    <p>Feedback: {entry.feedback}</p>
                </div>
            ))}
        </div>
    );
};

export default SleepTracker;
