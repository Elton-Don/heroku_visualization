
d3.json("data/samples.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
  // Sort the data array using the greekSearchResults value
  data.sort(function(a, b) {
    return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  });

  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Trace1 for the Sample Data
  var trace1 = {
    x: data.map(row => row.sample_values),
    y: data.map(row => row.otu_ids),
    text: data.map(row => row.otu_labels),
    name: "Bacteria levels",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "Bacteria Results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot("bar", chartData, layout);
};


  

