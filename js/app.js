'use strict';

let salesSection = document.getElementById('store-sales-data');

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
    for(let i = this.openingHour; i <= this.closingHour; i++) {
        let obj = {};
        let salesCalc = Math.floor(this.customerCalc() * this.aveCookieSale);
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
}

Store.prototype.render = function(){
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

// //Tokyo

// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3, 
//   maxCust: 24, 
//   aveCookieSal: 1.2, 
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

// tokyo.salesData = tokyo.salesCount();
// tokyo.render();
// console.log(tokyo.salesData);

// //Dubai
// let dubai = {
//   location: 'Dubai',
//   minCust: 11, 
//   maxCust: 38, 
//   aveCookieSal: 3.7, 
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

// dubai.salesData = dubai.salesCount();
// dubai.render();
// console.log(dubai.salesData);

// //paris
// let paris = {
//   location: 'Paris',
//   minCust: 20, 
//   maxCust: 38, 
//   aveCookieSal: 2.3, 
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

// paris.salesData = paris.salesCount();
// paris.render();
// console.log(paris.salesData);




// // lima

// let lima = {
//   location: 'Lima',
//   minCust: 2, 
//   maxCust: 16, 
//   aveCookieSal: 4.6, 
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

// lima.salesData = lima.salesCount();
// lima.render();
// console.log(lima.salesData);

