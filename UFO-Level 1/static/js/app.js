//Create a variable with the data from data.js
var tableData = data;
// Select the button
var tbody = d3.select("tbody");
//clear any existing data

//Step 1: Loop Through `data` and console.log each UFO sighting object
    data.forEach(function (ufoSighting) {
//Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
    var row = tbody.append("tr");
//Step 3:  Use `Object.entries` to console.log each UFO sighting value
    Object.entries(ufoSighting).forEach(function ([key, value]) {
//Step 4: Use d3 to append 1 cell per UFO sighting value  
        var cell = row.append("td");
// Step 5: Use d3 to update each cell's text with UFO sighting values 
// Append a cell to the row for each value in the UFO sighting object
        cell.text(value);
    });
});

//Create a function to add an event listener to the table
//Select the button
var button = d3.selectAll("#filter-btn");

//updated table
function buildTable(filteredDate) {
    console.log("building table")
    filteredDate.forEach(function (ufoSighting) {
    //Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
        var row = tbody.append("tr");
    //Step 3:  Use `Object.entries` to console.log each UFO sighting value
        Object.entries(ufoSighting).forEach(function ([key, value]) {
    //Step 4: Use d3 to append 1 cell per UFO sighting value  
            var cell = row.append("td");
    // Step 5: Use d3 to update each cell's text with UFO sighting values 
    // Append a cell to the row for each value in the UFO sighting object
            cell.text(value);

        });
    });
}

function handleClick(){
    console.log("a button was clicked")
    tbody.html(""); 
      //Select the input element and get the raw HTML node
      var inputElement = d3.select("#datetime");
     // Get the value property of the input element
     var date = inputElement.property("value");
      //Create a custom filtering function
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredDate = tableData.filter(row => row.datetime === date);
        console.log(filteredDate);
    }
    buildTable(filteredDate);
    return filteredDate
}
var filteredDate = button.on("click", handleClick);


 // Test
  console.log(filteredDate);

