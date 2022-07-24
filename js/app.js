'use strict';

let salesSection = document.getElementById('store-sales-data');
let salesTable = document.querySelector('table');


let salesDataArr = [];
let storesArr = [];

function Store(location, minCust, maxCust, aveCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSale = aveCookieSale;
  this.openingHour = 6;
  this.closingHour = 19;
  this.salesData = 0;

  salesDataArr.push(this.salesCount());
  storesArr.push(this);
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

function renderFooter(){
    let tFootElem = document.createElement('tfoot');
    salesTable.appendChild(tFootElem);
    
    let tRowElem = document.createElement('tr');
    tFootElem.appendChild(tRowElem);
  
    let tHElem = document.createElement('th');
    tHElem.textContent = "Totals";
    tRowElem.appendChild(tHElem);
   
    for(let i = 0; i < 15; i++){
      let total = 0; 
      for(let j = 0; j <salesDataArr.length; j++){
        let innerObj = salesDataArr[j][i];
        // console.log('innerObj', innerObj);
        for(let key in innerObj){
          total += innerObj[key];
        }
      }
      let tDElem = document.createElement('td');
      tDElem.textContent = total;
      tRowElem.appendChild(tDElem);
    }
    
}

let storeForm = document.getElementById('store-form');

function handleSubmit(event) {
  event.preventDefault();
  let location = event.target.location.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let aveCookieSale = +event.target.aveCookieSale.value;
  let newStore = new Store(location, minCust, maxCust, aveCookieSale);
  salesTable.deleteTFoot();
  storesArr[storesArr.length-1].salesData = salesDataArr[salesDataArr.length-1];
  storesArr[storesArr.length-1].render();
  renderFooter();
  document.getElementById('store-form').reset();

}

storeForm.addEventListener('submit', handleSubmit);


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

for(let i = 0; i < storesArr.length; i++) {
  storesArr[i].salesData = salesDataArr[i];
  storesArr[i].render();
}

renderHeader();
renderFooter();






