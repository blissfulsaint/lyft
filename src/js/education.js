// import { loadHeaderFooter } from "./utils.mjs";




async function init() {
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
}

init();




var workoutForm = document.getElementById('addWorkoutForm');

workoutForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById('exercise-name').value;
  const categories = document.getElementById('category-name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('exercise-image').value;
  

  // let data = await document.getElementById('addWorkoutForm');
  // let FORM = (await new FormData(data.value))
  // console.log(FORM);

  let response = await fetch('https://lift-api.onrender.com/exercises', {
    method: 'POST',
    headers: {"accept": "application/json"},

    // body: JSON.stringify(FORM)

    body: JSON.stringify({
      categories: categories,
      name: name,
      description: description,
      images: image
    }),

  }); 
  

  console.log(response);
  let result = response.json();
  console.log(result);
});


