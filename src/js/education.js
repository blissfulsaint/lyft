import { loadHeaderFooter } from "./utils.mjs";

let response = await fetch('https://lift-api.onrender.com/exercises/');
let data = await response.json();

const container = document.querySelector('.cards');

data.forEach((item) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card';

  // Construct card content
  const content = 
  `<div class="card">
    <div class="img-container">
      <img src="../images/lungesample.jpg" alt="">
    </div>
    <h2> ${item.name}</h2>
    <h3> ${item.categories}</h3>
    <p> ${item.description}</p>
  </div>`;

  container.innerHTML += content;

});





