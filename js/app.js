'use strict';

let seattle = {
  'Location': 'Seattle',
  'Min / Cust': 23,
  'Max / Cust': 65,
  'Avg Cookie / Sale': 6.3
};


let tokyo = {
  'Location': 'Tokyo',
  'Min / Cust': 3,
  'Max / Cust': 24,
  'Avg Cookie / Sale': 1.2
};

let dubai = {
  'Location': 'Dubai',
  'Min / Cust': 11,
  'Max / Cust': 38,
  'Avg Cookie / Sale': 3.7
};



let paris = {
  'Location': 'Paris',
  'Min / Cust': 20,
  'Max / Cust': 38,
  'Avg Cookie / Sale': 2.3
};

let lima = {
  'Location': 'Lima',
  'Min / Cust': 2,
  'Max / Cust': 16,
  'Avg Cookie / Sale': 4.6
};





/*
1.	Store the min/max hourly customers, and the average cookies per customer, in object properties.
2.	Use a method of that object to generate a random number of customers per hour. Objects/Math/random
3.	Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
4.	Store the results for each location in a separate array… perhaps as a property of the object representing that location.
5.	Display the values of each array as unordered lists in the browser.
6.	Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle
•	6am: 16 cookies
•	7am: 20 cookies
•	8am: 35 cookies
•	9am: 48 cookies
•	10am: 56 cookies
•	11am: 77 cookies
•	12pm: 93 cookies
•	1pm: 144 cookies
•	2pm: 119 cookies
•	3pm: 84 cookies
•	4pm: 61 cookies
•	5pm: 23 cookies
•	6pm: 42 cookies
•	7pm: 57 cookies
•	Total: 875 cookies

Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.



*/