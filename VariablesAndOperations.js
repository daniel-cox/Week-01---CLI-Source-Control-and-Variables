//create a variable to hold the quantity of available plane seats left on a flight
let seatsAvailable = 15;

//create a variable to hold the cost of groceries at checkout
let groceryCost = 45.25;

//create a variable to hold a person's middle initial
let middleInitial = "E";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = false;
//create a variable to hold a customer's first name
let customerFirstName = "Daniel";

//create a variable to hold a street address
let streetAddress = "1234 Commerce Street";

//print all variables to the console
console.log(seatsAvailable);
console.log(groceryCost);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable

seatsAvailable = seatsAvailable - 2;

//impulse candy bar purchase, add 2.15 to the grocery total
groceryCost = groceryCost + 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
let newInitial = "G";

middleInitial = newInitial;
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was

isHotOutside = !isHotOutside;
console.log(isHotOutside);
//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let lastName = "Cool";
let fullName = customerFirstName + " " + middleInitial + " " + lastName;
console.log("Hi my name is " + fullName, "lives at", streetAddress);
//print a line to the console that introduces the customer and says they live at the address variable
