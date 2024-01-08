let time = [1,2,3,4,5,6]; // Example: ['00:00', '01:00', '02:00', ...]

fetch('http://127.0.0.1:5000/get-data/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Create the graphs using fetched data
        createGraph('voltageChart', data.voltage, 'Voltage', 'Voltage (V)');
        createGraph('currentChart', data.current, 'Current', 'Current (A)');
        createGraph('solarPowerChart', data.solar_power, 'Solar Power', 'Power (W)');
        
        // If you have a "test" data point in your fetched data
        // createGraph('testChart', data.test, 'Test', 'Test');
    })
    .catch(error => console.error('Error fetching data:', error));

function createGraph(canvasId, data, title, yLabel) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: title,
                data: [data], // Assuming data here is a single value. If it's an array, you can directly pass data
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yLabel
                    }
                }
            }
        }
    });
}

// Removing these lines because the graphs should only be created inside the fetch callback after data retrieval
// createGraph('voltageChart', voltage, 'Voltage', 'Voltage (V)');
// createGraph('currentChart', current, 'Current', 'Current (A)');
// createGraph('solarPowerChart', solarPower, 'Solar Power', 'Power (W)');
// createGraph('testChart', test, 'Test', 'Test');
