'use strict';

let salesSection = document.getElementById('store-sales-data');
let salesTable = document.querySelector('table');

//constructor below

function Store(location, minCust, maxCust, aveCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSale = aveCookieSale;
  this.openingHour = 6;
  this.closingHour = 19;
  this.salesData = 0;
}


Store.prototype.customerCalc = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}



Store.prototype.salesCount = function(){
  let arr = [];
  let total = 0;  
    for(let i = this.openingHour; i <= this.closingHour; i++) {
        let obj = {};
        let salesCalc = Math.floor(this.customerCalc() * this.aveCookieSale);
        total += salesCalc;
          if(i < 12) {
            obj[i + "am"] = salesCalc;
          } else if(i === 12){
            obj[i + "pm"] = salesCalc;
          }else {
            obj[i - 12 + "pm"] = salesCalc;
          }
            arr.push(obj);
    }
    let totObj = {};
    totObj['Total'] = total;
    arr.push(totObj);
    return arr;
}

function renderHeader(){
  let tHeadElem = document.createElement('thead');
  salesTable.appendChild(tHeadElem);
  
  let tHRowElem = document.createElement('tr');
  tHeadElem.appendChild(tHRowElem);

  let tHElem = document.createElement('th');
  tHElem.textContent = "Shop Location";
  tHRowElem.appendChild(tHElem);
 
  let openingHour = 6;
  let closingHour = 19;

  for(let i = openingHour; i <= closingHour; i++){
      let tHElem = document.createElement('th');
      if(i < 12) {
        tHElem.textContent = `${i}:00am`;;
      } else if(i === 12){
        tHElem.textContent = `${i}:00pm`;
      }else  {
        tHElem.textContent = `${i-12}:00pm`;
      } 
      
      tHRowElem.appendChild(tHElem);
    }
    let tHElemX = document.createElement('th');
    tHElemX.textContent = "Daily Location Total";
    tHRowElem.appendChild(tHElemX);
    
}

// function renderFooter(){
//   let tFootElem = document.createElement('tfoot');
//   salesTable.appendChild(tFootElem);
  
//   let tFRowElem = document.createElement('tr');
//   tFootElem.appendChild(tFRowElem);

//   let tFElem = document.createElement('td');
//   tFElem.textContent = "Totals";
//   tFRowElem.appendChild(tFElem);
//  /////above this probably makes sense
//   let 
//   for(let i = openingHour; i <= closingHour; i++){
//       let tHElem = document.createElement('th');
//       if(i < 12) {
//         tHElem.textContent = `${i}:00am`;;
//       } else if(i === 12){
//         tHElem.textContent = `${i}:00pm`;
//       }else  {
//         tHElem.textContent = `${i-12}:00pm`;
//       } 
      
//       tHRowElem.appendChild(tHElem);
//     }
//     let tHElemX = document.createElement('th');
//     tHElemX.textContent = "Daily Location Total";
//     tHRowElem.appendChild(tHElemX);
    
// }


////////////array model below from lecture 07

// THIS - refer to the whole object that gets created
let students = [];

function Student(fullName, pronouns){
  this.fullName = fullName;
  this.pronouns = pronouns;
  this.course = '201d88';
  this.interests = [];
  students.push(this);
}

// PROTOTYPES - inherits
Student.prototype.greeting = function(){
  console.log(`Hey ${this.course}, this is ${this.fullName}!!`);
}


new Student('Liliane Lendvai', 'she/her');
new Student('Dan Awesome', 'he/him');
new Student('Tim Traylor', 'he/him');

students[0].interests.push('reading');


console.log(students)

/////////////////
Store.prototype.render = function(){
    
  let tBodyElem = document.createElement('tbody');
  salesTable.appendChild(tBodyElem);

  let tRowElem = document.createElement('tr');
  tBodyElem.appendChild(tRowElem);
  
  let tHElem = document.createElement('th');
  tHElem.textContent = `${this.location}`;
  tRowElem.appendChild(tHElem);
 
  for(let i = 0; i < this.salesData.length; i++){
    let innerObj = this.salesData[i];
    for(let key in innerObj) {
      let tDElem = document.createElement('td');
      tDElem.textContent = `${innerObj[key]}`;
      tRowElem.appendChild(tDElem);
     }
  }
}

let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.salesData = seattle.salesCount();
seattle.render();
console.log(seattle.salesData);

let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.salesData = tokyo.salesCount();
tokyo.render();

let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.salesData = dubai.salesCount();
dubai.render();

let paris = new Store('Paris', 20, 38, 2.3);
paris.salesData = paris.salesCount();
paris.render();

let lima = new Store('Lima', 2, 16, 4.6);
lima.salesData = lima.salesCount();
lima.render();

renderHeader();

// ////object literals below
// let seattle = {
//   location: 'Seattle',
//   minCust: 23, 
//   maxCust: 65, 
//   aveCookieSal: 6.3, 
//   openingHour: 6,
//   closingHour: 19,
//   salesData: 0,
//   customerCalc: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   salesCount: function(){
//     let arr = [];  
//     for(let i = this.openingHour; i <= this.closingHour; i++) {
//         let obj = {};
//         let salesCalc = Math.floor(this.customerCalc() * this.aveCookieSal);
//       if(i < 12) {
//         obj[i + "am"] = salesCalc;
//       } else if(i === 12){
//         obj[i + "pm"] = salesCalc;
//       }else {
//         obj[i - 12 + "pm"] = salesCalc;
//       }
//         arr.push(obj);
      
//         }
//     return arr;
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
        
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.salesData.length; i++){
//       let innerObj = this.salesData[i];
//       for(let key in innerObj) {
//         let liElem = document.createElement('li');
//         liElem.textContent = `${key}: ${innerObj[key]}`;
//         ulElem.appendChild(liElem);
//       }
      
//     }

    
//   }
  
// }

// seattle.salesData = seattle.salesCount();
// seattle.render();
// console.log(seattle.salesData);
