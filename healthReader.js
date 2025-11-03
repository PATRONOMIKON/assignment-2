const fs = require('fs').promises;

async function healthMetricsCounter(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const healthData = JSON.parse(data);
        console.log(`Total health entries: ${healthData.length}`);
    } catch (error) {
        console.error('Error reading health data:', error.message);
    }
}

healthMetricsCounter('./data/health-metrics.json');