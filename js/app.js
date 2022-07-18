'use strict';

let salesSection = document.getElementById('store-sales-data');

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
    for(let i = this.openingHour; i <= this.closingHour; i++) {
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
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
        
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.salesData.length; i++){
      let innerObj = this.salesData[i];
      for(let key in innerObj) {
        let liElem = document.createElement('li');
        liElem.textContent = `${key}: ${innerObj[key]}`;
        ulElem.appendChild(liElem);
      }
      
    }

    
  }
  
}

seattle.salesData = seattle.salesCount();
seattle.render();
console.log(seattle.salesData);

//Tokyo

let tokyo = {
  location: 'Tokyo',
  minCust: 3, 
  maxCust: 24, 
  aveCookieSal: 1.2, 
  openingHour: 6,
  closingHour: 19,
  salesData: 0,
  customerCalc: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesCount: function(){
    let arr = [];  
    for(let i = this.openingHour; i <= this.closingHour; i++) {
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
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
        
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.salesData.length; i++){
      let innerObj = this.salesData[i];
      for(let key in innerObj) {
        let liElem = document.createElement('li');
        liElem.textContent = `${key}: ${innerObj[key]}`;
        ulElem.appendChild(liElem);
      }
      
    }

    
  }
  
}

tokyo.salesData = tokyo.salesCount();
tokyo.render();
console.log(tokyo.salesData);

//Dubai
let dubai = {
  location: 'Dubai',
  minCust: 11, 
  maxCust: 38, 
  aveCookieSal: 3.7, 
  openingHour: 6,
  closingHour: 19,
  salesData: 0,
  customerCalc: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesCount: function(){
    let arr = [];  
    for(let i = this.openingHour; i <= this.closingHour; i++) {
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
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
        
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.salesData.length; i++){
      let innerObj = this.salesData[i];
      for(let key in innerObj) {
        let liElem = document.createElement('li');
        liElem.textContent = `${key}: ${innerObj[key]}`;
        ulElem.appendChild(liElem);
      }
      
    }

    
  }
  
}

dubai.salesData = dubai.salesCount();
dubai.render();
console.log(dubai.salesData);

//paris
let paris = {
  location: 'Paris',
  minCust: 20, 
  maxCust: 38, 
  aveCookieSal: 2.3, 
  openingHour: 6,
  closingHour: 19,
  salesData: 0,
  customerCalc: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesCount: function(){
    let arr = [];  
    for(let i = this.openingHour; i <= this.closingHour; i++) {
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
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
        
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.salesData.length; i++){
      let innerObj = this.salesData[i];
      for(let key in innerObj) {
        let liElem = document.createElement('li');
        liElem.textContent = `${key}: ${innerObj[key]}`;
        ulElem.appendChild(liElem);
      }
      
    }

    
  }
  
}

paris.salesData = paris.salesCount();
paris.render();
console.log(paris.salesData);




// lima

let lima = {
  location: 'Lima',
  minCust: 2, 
  maxCust: 16, 
  aveCookieSal: 4.6, 
  openingHour: 6,
  closingHour: 19,
  salesData: 0,
  customerCalc: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesCount: function(){
    let arr = [];  
    for(let i = this.openingHour; i <= this.closingHour; i++) {
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
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
        
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.salesData.length; i++){
      let innerObj = this.salesData[i];
      for(let key in innerObj) {
        let liElem = document.createElement('li');
        liElem.textContent = `${key}: ${innerObj[key]}`;
        ulElem.appendChild(liElem);
      }
      
    }

    
  }
  
}

lima.salesData = lima.salesCount();
lima.render();
console.log(lima.salesData);


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