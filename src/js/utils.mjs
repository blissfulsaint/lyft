export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML('afterbegin', template);
    if (callback) {
        callback(data);
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const headerElement = document.querySelector('header');
    const navTemplate = await loadTemplate('../partials/nav.html');
    const navElement = document.querySelector('nav');
    const footerTemplate = await loadTemplate('../partials/footer.html');
    const footerElement = document.querySelector('footer');
    const loginTemplate = await loadTemplate('../partials/login.html');
    const loginElement = document.querySelector('#id01');
    const workoutTemplate = await loadTemplate('../partials/addWorkout.html');
    const workoutElement = document.querySelector('#addWorkoutForm');

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(navTemplate, navElement);
    renderWithTemplate(footerTemplate, footerElement);
    renderWithTemplate(loginTemplate, loginElement);
    renderWithTemplate(workoutTemplate, workoutElement);
}