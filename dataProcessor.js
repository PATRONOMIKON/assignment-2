USER_NAME=Rebecca
WEEKLY_GOAL=150

require('dotenv').config();

console.log(process.env.USER_NAME); // "Rebecca"
console.log(process.env.WEEKLY_GOAL); // "150"

const { workoutCalculator } = require('./workoutReader');
const { healthMetricsCounter } = require('./healthReader');
require('dotenv').config();

async function processFiles() {
    console.log(`Processing data for: ${process.env.USER_NAME}`);
    console.log('📁 Reading workout data...');
    await workoutCalculator('./data/workouts.csv');
    console.log('📁 Reading health data...');
    await healthMetricsCounter('./data/health-metrics.json');
    
    const weeklyGoal = process.env.WEEKLY_GOAL;
}

processFiles();