import { loadHeaderFooter } from './js/utils.mjs';
import Workout from './js/workout.js'
import { baseHtml } from './js/baseHomepage'

loadHeaderFooter();

const url = "./json/workouts.json";

// Fetches the JSON data and returns it as an array of workouts.
async function fetchData() {
    const login = true
    
    let response = await fetch('./json/workouts.json');
    let data = await response.json();
    let workouts = data.workouts;
    let e = document.getElementById("dropdown")
    let workoutType = ""
    
    let workoutCards = new Array()
    let i = 0

    e.addEventListener('change', function handleChange(event) {
        workoutType = event.target.value 
        document.getElementById('exercises-home').innerHTML = ''

        if (login === true) {
            workouts.forEach(element => {
                if (element.muscle === workoutType) {
                    workoutCards[i] = new Workout(element.name, element.type, element.muscle, element.equipment, element.difficulty)
                    i++
                }
            })
        } else {
            baseHomepage()
        }
    });

    return workouts;
}

const baseHomepage = () => document.getElementById('exercises-home').insertAdjacentHTML('beforeend', baseHtml)

// This just displays the workouts into the console.
async function ConsoleLogWorkouts() {
    const items = await fetchData();
    items.forEach(element => {
       // console.log(element);
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

if (window.localStorage.getItem('darkmode') == 'TRUE') {
    document.body.classList.add('changeTheme');
    document.getElementById('theme-btn')
}

async function darkMode() {
    const themeBtn = document.getElementById("theme-btn");
    if (window.localStorage.getItem('darkmode') == 'TRUE') {
        document.body.classList.add('changeTheme');
        themeBtn.innerHTML = 'light_mode';
    }
    themeBtn.onclick = () => {
        if (themeBtn.innerHTML === 'dark_mode') {
            document.body.classList.add("changeTheme");
            themeBtn.innerHTML = 'light_mode';
            window.localStorage.setItem('darkmode', 'TRUE');
        } else {
            document.body.classList.remove("changeTheme");
            themeBtn.innerHTML = 'dark_mode';
            window.localStorage.setItem('darkmode', 'FALSE');
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