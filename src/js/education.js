import { loadHeaderFooter } from "./utils.mjs";

let response = await fetch('https://lift-api.onrender.com/exercises/');
let data = await response.json();

const container = document.querySelector('.cards');

data.forEach((item) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = '.card';

  // Construct card content
  const content = 
  `<div id="cardSection">
        <div class="exerciseCard">
        <img src="../images/lungesample.jpg" alt="">
        <h2> ${item.name}</h2>
        <h3> ${item.categories}</h3>
        <p> ${item.description}</p>
        </div>
    </div>`;

  container.innerHTML += content;

});





