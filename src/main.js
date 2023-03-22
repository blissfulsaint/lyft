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


// This was added to the main index.html file.
    // const themeBtn = document.getElementById("theme-btn");
    // themeBtn.onclick = () => {
    //   console.log('hello world')
    //   if (themeBtn.innerHTML === 'dark_mode') {
    //     document.body.classList.add("changeTheme");
    //     themeBtn.innerHTML = 'light_mode'
    //   } else {
    //     document.body.classList.remove("changeTheme");
    //     themeBtn.innerHTML = 'dark_mode'
    //   }
    // }
    
const parallax = document.getElementById("hero-img");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 - 30 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});


