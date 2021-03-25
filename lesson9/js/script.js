function toggleMenu() {
   document.getElementsByClassName("navbar")[0].classList.toggle("menu-id");
 }
 
 const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var d = new Date();
 var day = d.getDay() 
 var date = d.getDate();
 var month = d.getMonth();
 var year = d.getFullYear();
 var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
 document.getElementById("currentDate").innerHTML = dateStr;
 document.getElementById("currentYear").innerHTML = year;
 
 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  //console.table(jsonObject);  // temporary checking for valid response and data parsing
  const towns = jsonObject['towns'];
  towns.sort((a,b) => (a.averageRainfall > b.averageRainfall) ? 1 : ((b.averageRainfall > a.averageRainfall) ? -1 : 0));
  towns.reverse();
  for (let i = 0; i < towns.length; i++) {
     if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
     let card = document.createElement('section');
     let name = document.createElement('h2');
     let motto = document.createElement('h4');
     let image = document.createElement('img');
     let yearFounded = document.createElement('p');
     let currentPopulation = document.createElement('p');
     let averageRainfall = document.createElement('p');
     let details = document.createElement('div');
     name.textContent = towns[i].name;
     motto.textContent = towns[i].motto;
     currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
     averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
     yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
     image.setAttribute('src', "towns/" + towns[i].photo);
     image.setAttribute('alt', towns[i].name);
     details.setAttribute('id', 'details');
     card.appendChild(details);
     card.appendChild(image);
     details.appendChild(name);
     details.appendChild(motto);
     details.appendChild(yearFounded);
     details.appendChild(currentPopulation);
     details.appendChild(averageRainfall);
     document.querySelector('div.cards').appendChild(card);
     }
  }
});