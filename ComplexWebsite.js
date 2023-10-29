/* 
   Filename: ComplexWebsite.js
   Content: JavaScript code for a complex and sophisticated website
*/

// Global variable to store user information
let user = {
  name: "",
  age: 0,
  email: "",
  subscribed: false
};

// Function to display welcome message
function displayWelcomeMessage() {
  let welcomeMsg = "Welcome to our website, " + user.name + "!";
  if (user.subscribed) {
    welcomeMsg += " Thank you for being a valued subscriber!";
  }
  console.log(welcomeMsg);
}

// Function to validate user input
function validateInput(input) {
  return !(input === "" || input === null || input === undefined);
}

// Function to prompt user for information
function promptUserInformation() {
  let name = prompt("Please enter your name:");
  if (validateInput(name)) {
    user.name = name;
    let age = prompt("Please enter your age:");
    if (validateInput(age)) {
      user.age = parseInt(age);
      let email = prompt("Please enter your email address:");
      if (validateInput(email)) {
        user.email = email;
        let subscribe = confirm("Would you like to subscribe to our newsletter?");
        user.subscribed = subscribe;
      } else {
        console.log("Email address is required.");
      }
    } else {
      console.log("Age is required.");
    }
  } else {
    console.log("Name is required.");
  }
}

// Function to calculate retirement age
function calculateRetirementAge() {
  let retirementAge = 65;
  if (user.age >= 65) {
    console.log("Congratulations! You are already eligible for retirement.");
  } else {
    let yearsLeft = retirementAge - user.age;
    console.log("You have " + yearsLeft + " years left until retirement.");
  }
}

// Execute code

displayWelcomeMessage();
promptUserInformation();
calculateRetirementAge();

// ... More lines of code for the sophisticated website go here