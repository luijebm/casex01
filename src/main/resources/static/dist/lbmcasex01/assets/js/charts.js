//let this snippet run before your hashchange event binding code
if (!window.HashChangeEvent) (function () {
    var lastURL = document.URL;
    window.addEventListener("hashchange", function (event) {
        Object.defineProperty(event, "oldURL", { enumerable: true, configurable: true, value: lastURL });
        Object.defineProperty(event, "newURL", { enumerable: true, configurable: true, value: document.URL });
        lastURL = document.URL;
    });
}());


$(document).ready(function () {

    doneCharts = false;
    gotJson = false;
    statsData = new Object({ "totRequests": 4, "totRequestsOK": 3, "totRequests4xx": 1, "totRequests5xx": 0, "minResponseTime": 6, "maxResponseTime": 6071, "avgResponseTime": 1540 });

    // lbm@theline.pt
    // workaround. Having trouble to call native JS from Angular
    // made this workaround to make sure, the charts are working after having changed page
    setInterval(controlCharts, 500);


});

function controlCharts() {

    if ($('#endPointStats').length==0) {
        doneCharts = false;
    } else {
        if (!doneCharts) {

            // lbm@theline.pt
            // workaround. Having trouble to call native JS from Angular
            // made this workaroung to get environmente var from Angular
            endPointStats = $('#endPointStats').text();

            if (!gotJson){
                $.getJSON(endPointStats, function (data) {

                    $.each(data, function (key, val) {
                        statsData[key] = val;
    
                    })
                    resetCharts(statsData);
                    doneCharts = true;
                });
                gotJson=true;
            }


            resetCharts();
            doneCharts = true;
        }
    }
}
function resetCharts() {


    var ctx = document.getElementById("requests").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["OK", "4xx", "5xx", "Total"],
            datasets: [{
                label: 'Requests',
                data: [statsData.totRequestsOK, statsData.totRequests4xx, statsData.totRequests5xx, statsData.totRequests],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'

                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById("Responsetime").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Min", "Average", "Max"],
            datasets: [{
                label: 'Response Time',
                data: [statsData.minResponseTime, statsData.avgResponseTime, statsData.maxResponseTime],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'

                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}