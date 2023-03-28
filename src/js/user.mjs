

const login = document.getElementById('login');
login.addEventListener('submit', async function (e){
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    let response = await fetch('', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    let result = await response.json();
    console.log(result);
});

if (login){

}

const register = document.getElementById('register');
register.addEventListener('submit', async function (e){
    e.preventDefault();
    const formData = new FormData(thisForm).entries();
    let response = await fetch ('https://lift-api.onrender.com/users/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    let result = await response.json();
    console.log(result);
})