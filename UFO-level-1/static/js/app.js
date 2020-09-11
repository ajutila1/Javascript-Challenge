// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and append table
tableData.forEach((ufoActivity) => {
    
    var row = tbody.append("tr");

    Object.entries(ufoActivity).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
});

// Select button
var button = d3.select("#filter-btn");

// Create event handler
button.on("click", runEnter);

// Function for event
function runEnter() {

    // Clear table
    d3.select("tbody").html("");

    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select input value
    var inputValue = d3.select("#datetime").property("value");

    // Filter data
    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue);

    // Append filtered data to table
    filteredData.forEach((userQuery) => {
        var row = tbody.append("tr");
        Object.entries(userQuery).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
