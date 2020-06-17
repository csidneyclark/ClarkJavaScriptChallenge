//from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//clear any existing data


//Step 1: Loop Through `data` and console.log each UFO sighting object
    data.forEach(function (ufoSighting) {
//Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
    var row = tbody.append("tr");
//Step 3:  Use `Object.entries` to console.log each UFO sighting value
    Object.entries(ufoSighting).forEach(function ([key, value]) {
//Step 4: Use d3 to append 1 cell per UFO sighting value  
        var cell = row.append("td");
// Step 5: Use d3 to update each cell's text with UFO sighting values 
// Append a cell to the row for each value in the UFO sighting object
        cell.text(value);
    });
});

//Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  //Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

  //Create a custom filtering function
function selectUFO(date) {
    return date.datetime === inputValue;
  }
  
 // filter() uses the custom function as its argument
  var filteredDate = data.filter(selectUFO);
  
 // Test
  console.log(filteredDate);
});






