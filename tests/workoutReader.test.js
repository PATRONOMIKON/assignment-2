const { workoutCalculator } = require('./workoutReader');

test('should calculate total workout minutes', async () => {
    const mockFilePath = './data/mock-workouts.csv';
    const result = await workoutCalculator(mockFilePath);
    expect(result.totalMinutes).toBeGreaterThan(0);
});
