// Load the Google Charts library
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Function to draw the pie chart
function drawChart() {

  // Event listener for the dropdown selection
  document.getElementById('presidentDropdown').addEventListener('change', function() {
    var selectedPresident = this.value;
    if (selectedPresident !== '') {
      var counts = sentimentCounts[selectedPresident];

      var data = google.visualization.arrayToDataTable([
        ['Sentiment', 'Count'],
        ['Positive', counts.positive],
        ['Negative', counts.negative],
        ['Neutral', counts.neutral]
      ]);

      var options = {
        'title': 'Sentiment Counts',
        'width': 600,
        'height': 500
      };

      var chart = new google.visualization.PieChart(document.getElementById('sentimentChart'));
      chart.draw(data, options);
    }
  });

  // Event listener for the dropdown selection
  document.getElementById('presidentDropdown').addEventListener('change', function() {
    var selectedPresident = this.value;
    if (selectedPresident !== '') {
      var counts = sentimentCounts[selectedPresident];

      var data = google.visualization.arrayToDataTable([
        ['Sentiment', 'Count'],
        ['Positive', counts.positive],
        ['Negative', counts.negative],
        ['Neutral', counts.neutral]
      ]);

      var options = {
        'title': 'Sentiment Counts',
        'width': 600,
        'height': 500
      };

      var chart1 = new google.visualization.BarChart(document.getElementById('sentimentBarChart'));
      chart1.draw(data, options);
    }
  });

}

