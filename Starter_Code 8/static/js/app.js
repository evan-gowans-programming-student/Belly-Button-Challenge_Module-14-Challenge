console.log("app.js is running!");

// Build the metadata panel
function buildMetadata(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
        let metadata = data.metadata;

        // Filter the metadata for the object with the desired sample number
        let resultArray = metadata.filter(sampleObj => sampleObj.id === parseInt(sample));
        let result = resultArray[0]; // Get the first matching sample

        // Use d3 to select the panel with id of `#sample-metadata`
        let panel = d3.select("#sample-metadata");

        // Clear any existing metadata
        panel.html("");

        // Loop through each key-value pair and display it
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
    });
}

// Populate the dropdown menu
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Dropdown Data:", data.names); // Check if dropdown data loads correctly

    let dropdown = d3.select("#selDataset"); // Select the dropdown menu

    data.names.forEach((id) => {
        dropdown.append("option").text(id).property("value", id);
    });

    // Load the first sample by default
    let firstSample = data.names[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
});

// 🔴 ADD THIS EVENT LISTENER BELOW
d3.select("#selDataset").on("change", function() {
    let newSample = d3.select(this).property("value");
    console.log(`Dropdown changed, new sample ID: ${newSample}`);

    buildMetadata(newSample);
    buildCharts(newSample);
});

// Function to build charts
function buildCharts(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        console.log("Filtered Sample Data:", result);  // Debugging line

        if (!result) {
            console.error(`No data found for sample ID: ${sample}`);
            return;
        }

        // (Your chart building logic should go here)
    });
}


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let samples = data.samples;
      let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];

      console.log("Filtered Sample Data:", result); // Debugging line

      if (!result) {
          console.error(`No data found for sample ID: ${sample}`);
          return;
      }

      // Extract Data
      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;

      // 📊 Bar Chart Data (Top 10 values)
      let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
      let barData = [{
          x: sample_values.slice(0, 10).reverse(),
          y: yticks,
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h"
      }];

      let barLayout = {
          title: "Top 10 Bacteria Cultures Found",
          margin: { t: 30, l: 150 }
      };

      Plotly.newPlot("bar", barData, barLayout);

      // 🟢 Bubble Chart Data
      let bubbleData = [{
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Earth"
          }
      }];

      let bubbleLayout = {
          title: "Bacteria Cultures Per Sample",
          margin: { t: 30 },
          hovermode: "closest",
          xaxis: { title: "OTU ID" }
      };

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}
