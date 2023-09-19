// Get a reference to the canvas element for the first (vertical) chart
const ctx = document.getElementById('myChart').getContext('2d');

// Define the labels and data arrays for the first chart (vertical bar chart)
const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const data = [64, 89, 52, 49, 120, 65, 70];

// Data and options for the first (vertical) chart
const chartData = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: data,
        backgroundColor: [
            '#d9c5e3',
            '#d9c5e3',
            '#d9c5e3',
            '#d9c5e3',
            '#a434eb',
            '#d9c5e3',
            '#d9c5e3'
        ],
        borderWidth: 1
    }]
};

// Create the first (vertical) chart
const verticalChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            x: {
                display: true, // Show x-axis
            },
            y: {
                display: false, // Hide y-axis
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        }
    }
});

// Get a reference to the canvas element for the second (horizontal) chart
const ctxHorizontal = document.getElementById('myChartHorizontal').getContext('2d');

// Data for the second (horizontal) chart (example data with matching labels)
const chartDataHorizontal = {
    type: 'bar',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'Monthly Sales',
            data: [700, 360, 459, 600,200,500,120],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
           
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        cornerRadius: 100,

    }
};

// Create the second (horizontal) chart
const horizontalChart = new Chart(ctxHorizontal, chartDataHorizontal);


// Get a reference to the canvas element for the second (horizontal) chart
const ctxHorizontal1 = document.getElementById('myChartHorizontal1').getContext('2d');

// Data for the second (horizontal) chart (example data with matching labels)
const chartDataHorizontal1 = {
    type: 'bar',
    data: {
        labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12','14/12','15/12','16/12','17/12','18/12','19/12'],
        datasets: [{
            label: 'Monthly Sales',
            data: [700, 360, 459, 600,200,500,120,600,120,240,500,600,300,700],
            backgroundColor: '#75fabc',
            borderColor: '#75fabc',
            borderWidth: 2,
           
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
       
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        cornerRadius: 100,

    }
};

// Create the second (horizontal) chart
const horizontalChart1 = new Chart(ctxHorizontal1, chartDataHorizontal1);
