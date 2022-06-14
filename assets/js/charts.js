google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Tea', 11],
        ['Nap', 2],
        ['Eat', 2],
        ['Environmental', 2],
        ['Green tech', 7]
    ]);

    var options = {
        title: 'Industries'
    };

    var chart = new google.visualization.PieChart(document.getElementById('indust'));

    chart.draw(data, options);
}