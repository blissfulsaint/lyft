const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () => {
  console.log('hello world')
  if (themeBtn.innerHTML === 'dark_mode') {
    document.body.classList.add("changeTheme");
    themeBtn.innerHTML = 'light_mode'
  } else {
    document.body.classList.remove("changeTheme");
    themeBtn.innerHTML = 'dark_mode'
  }
}