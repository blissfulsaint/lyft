import { loadHeaderFooter } from './js/utils.mjs';

loadHeaderFooter();

const url = "./json/workouts.json";

// Fetches the JSON data and returns it as an array of workouts.
async function fetchData() {
    let response = await fetch('./json/workouts.json');
    let data = await response.json();
    let workouts = data.workouts;
    console.log(workouts);
    return workouts;
}

// This just displays the workouts into the console.
async function ConsoleLogWorkouts() {
    const items = await fetchData();
    items.forEach(element => {
        console.log(element);
    });
}
ConsoleLogWorkouts();

// Select the node that will be observed for mutations
const targetNode = document.querySelector("header");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
      darkMode();
      observer.disconnect();
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

async function darkMode() {
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.onclick = () => {
        if (themeBtn.innerHTML === 'dark_mode') {
            document.body.classList.add("changeTheme");
            themeBtn.innerHTML = 'light_mode'
        } else {
            document.body.classList.remove("changeTheme");
            themeBtn.innerHTML = 'dark_mode'
        }
    }
}
    
const parallax = document.getElementById("hero-img");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 - 35 + "px";
});



// Login Form Javascript
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}