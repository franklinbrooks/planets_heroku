function ageOnMercury(year) {
  event.preventDefault();
  let userAge = document.querySelector('input').value;
  userAge = parseInt(userAge);
  let newAge = 0.241;
  newAge = userAge * year;
  let target = document.getElementById("mercuryAnswer");
  target.innerHTML=`With Mercury's year only ${year} of an Earth year, your age on Mercury would be ${newAge}!`
}

function tempOnVenus(temperature) {
  event.preventDefault();
  let userTemp = document.querySelector('input').value;
  userTemp = parseInt(userTemp);
  let newTemp = 449;
  newTemp = userTemp * temperature;
  let target = document.getElementById("venusAnswer");
  target.innerHTML=`As average Venusian temperature is (${temperature} - 15) degrees C more than that on Earth, the temperature there today may be ${newTemp}!`
}

function distanceOnEarth() {
  event.preventDefault();
  let userCommute = document.querySelector('input').value;
  userCommute = parseInt(userCommute);
  let moonDistance = 384400;
  let newCommute = 449;
  newCommute = (moonDistance / userCommute);
  let target = document.getElementById("earthAnswer");
  target.innerHTML=`You would need to commute ${newCommute} times to travel the distance from the Earth to the moon!`
}

function weightOnMars(gravity) {
  event.preventDefault();
  let userWeight = document.querySelector('input').value;
  userWeight = parseInt(userWeight);
  let newWeight = 0.377;
  newWeight = userWeight * gravity;
  let target = document.getElementById("marsAnswer");
  target.innerHTML=`With Martian gravity only ${gravity} of that on Earth, your weight on Mars would only be ${newWeight}!`
}

function weightOnJupiter(gravity) {
  event.preventDefault();
  let userWeight = document.querySelector('input').value;
  userWeight = parseInt(userWeight);
  let newWeight = 0.377;
  newWeight = userWeight * gravity;
  let target = document.getElementById("jupiterAnswer");
  target.innerHTML=`With Jupiter's gravity ${gravity} times that on Earth, your weight on Jupiter would be ${newWeight}!`
}


function ageOnNeptune() {
  alert("ageOnNeptune!");
}


/* Exporting functions */
/*module.exports = {
  ageOnMercury,
  ageOnNeptune
}*/
