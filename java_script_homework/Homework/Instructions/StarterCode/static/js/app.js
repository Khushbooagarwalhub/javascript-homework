// create a variable for data.js
var tableData = data;
// console.log the data from data.js
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");
// Loop through data and console.log each nasa data object
data.forEach(function (nasadata){
  console.log(nasadata)
  var row = tbody.append("tr");
  Object.entries(nasadata).forEach(function([key,value]){
     console.log(key,value);
     var cell = row.append("td");
     cell.text(value);

  });
});

//select the input botton

var filterbtn = d3.select("#filter-btn");

filterbtn.on("click", function() {
  filteredData = tableData;
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element For multiple table columns and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
  // Get the value property of the input element for all table columns 
  var inputValue = inputElement.property("value").toLowerCase();
  var inputCityValue = inputCity.property("value").toLowerCase();
  var inputStateValue = inputState.property("value").toLowerCase();
  var inputCountryValue = inputCountry.property("value").toLowerCase();
  var inputShapeValue = inputShape.property("value").toLowerCase();
  console.log(inputValue);
  console.log(inputCityValue);
  console.log(inputStateValue);
  console.log(inputCountryValue);
  console.log(inputShapeValue);
  //console.log(tableData);
  //filter the data if user gives any user input
  if (inputValue != ""){
    filteredData = filteredData.filter(nasadata => nasadata.datetime === inputValue);
  }
  if (inputCityValue != ""){
    filteredData = filteredData.filter(nasadata => nasadata.city === inputCityValue);
  }
  if (inputStateValue != ""){
    filteredData = filteredData.filter(nasadata => nasadata.state === inputStateValue);
  }
  if (inputCountryValue != ""){
    filteredData = filteredData.filter(nasadata => nasadata.country === inputCountryValue);
  }
  if (inputShapeValue != ""){
    filteredData = filteredData.filter(nasadata => nasadata.shape === inputShapeValue);
  } 

  console.log(filteredData);
  //var tbody = d3.select("tbody");
  
  //Display the filtered data by removing the old table
  tbody.text("")
  filteredData.forEach(function (nasadata){
    console.log(nasadata)
    var row = tbody.append("tr");
    Object.entries(nasadata).forEach(function([key,value]){
       console.log(key,value);
       var cell = row.append("td");
       cell.text(value);
    });
  });
  
  


});
















