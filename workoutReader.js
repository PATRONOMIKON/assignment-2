const fs = require('fs');
const csv = require('csv-parser');

async function workoutCalculator(filePath) {
    let totalMinutes = 0;
    let totalWorkouts = 0;

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            totalMinutes += parseInt(row.minutes, 10);
            totalWorkouts++;
        })
        .on('end', () => {
            console.log(`Total workouts: ${totalWorkouts}`);
            console.log(`Total minutes: ${totalMinutes}`);
        })
        .on('error', (error) => {
            console.error('Error reading workout data:', error.message);
        });
}

workoutCalculator('./data/workouts.csv');