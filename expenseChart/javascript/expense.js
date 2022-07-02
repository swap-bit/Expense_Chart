$(document).ready(function () {

    const labels = [
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat',
        'Sun',
    ];

    const data = {
        labels: labels,
        // scaleShowLabels : false,
        datasets: [{
            // label: 'My First dataset',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                '#DD6E57',
                '#DD6E57',
                '#74B4BB',
                '#DD6E57',
                '#DD6E57',
                '#DD6E57',
                '#DD6E57',
            ],
            borderColor: [
                '#DD6E57',
                '#DD6E57',
                '#74B4BB',
                '#DD6E57',
                '#DD6E57',
                '#DD6E57',
                '#DD6E57',
            ], 
            borderRadius : 10,

        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options : {
            scales:{
                x: {
                    grid: {
                        display: false ,//this will remove all the x-axis grid lines
                    }
                },
                y : {
                    display: false
                }
            },
            plugins:{
                legend: {
                    display: false
                }
            }
        }
    };

    const myChart = new Chart(
        $('#expenseChart'),
        config
      );
});