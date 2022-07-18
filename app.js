'use strict';


let seattle = {
  location: 'Seattle',
  minCust: 23, 
  maxCust: 65, 
  aveCookieSal: 6.3, 
  openingHour: 6,
  closingHour: 19,
  salesData: 0,
  customerCalc: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesCount: function(){
    let arr = [];  
    for(i = this.openingHour; i <= this.closingHour; i++) {
        let obj = {};
        let salesCalc = Math.floor(this.customerCalc() * this.aveCookieSal);
      if(i < 12) {
        obj[i + "am"] = salesCalc;
      } else if(i === 12){
        obj[i + "pm"] = salesCalc;
      }else {
        obj[i - 12 + "pm"] = salesCalc;
      }
        arr.push(obj);
      
        }
    return arr;
  },
  render: function(){
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    store-sales-data.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    store-sales-data.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is ${this.age} kitten`;
    articleElem.appendChild(imgElem);
  }
  
}

seattle.salesData = seattle.salesCount();


// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   aveCookieSale: 6.3,
//   customerCalc: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
    
// }



// let tokyo = {
//   location': 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   aveCookieSale: 1.2,
//   method: function(){};,
//   calcArr: []
// };

// let dubai = {
//   'Location': 'Dubai',
//   'Min / Cust': 11,
//   'Max / Cust': 38,
//   'Avg Cookie / Sale': 3.7,
//   method: function(){};,
//   calcArr: []
// };



// let paris = {
//   'Location': 'Paris',
//   'Min / Cust': 20,
//   'Max / Cust': 38,
//   'Avg Cookie / Sale': 2.3,
//   method: function(){};,
//   calcArr: []
// };

// let lima = {
//   'Location': 'Lima',
//   'Min / Cust': 2,
//   'Max / Cust': 16,
//   'Avg Cookie / Sale': 4.6,
//   method: function(){};,
//   calcArr: []
// };


// section: store-sales-data


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