// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }
  
  
  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
  
  console.log(findMatching(drivers, "Bobby")); 
  console.log(findMatching(drivers, "bobby"));  
  console.log(findMatching(drivers, "Jonathan")); 
  
// Sample driver data
const driverss= [
    { name: "Bobby" },
    { name: "Sammy" },
    { name: "Sally" },
    { name: "Annette" },
    { name: "Sarah" },
    { name: "Bobby" }
  ];
  
  // Function to return drivers whose names start with the given letters
  function fuzzyMatch(driverss, letters) {
    return driverss.filter(function(driver) {
      return driver.startsWith(letters); // Check if name starts with the provided letters
    });
  }
  
  // Test cases for fuzzyMatch
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "B")); // Expected: ["Bobby"]
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "Sa")); // Expected: ["Sammy", "Sally"]
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "Ann")); // Expected: ["Annette"]
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "y")); // Expected: []
  
  // Function to match drivers by name
  function matchName(driverss, name) {
    return driverss.filter(function(driver) {
      return driver.name === name; // Check if name property matches
    });
  }

  // Test cases for matchName
  console.log(matchName(driverss, "Bobby")); // Expected: [{ name: "Bobby" }, { name: "Bobby" }]
  console.log(matchName(driverss, "Annette")); // Expected: [{ name: "Annette" }]
  console.log(matchName(driverss, "Sarah")); // Expected: [{ name: "Sarah" }]
  console.log(matchName(driverss, "John")); // Expected: []
  
