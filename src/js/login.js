/* ---- variables ---- */

const form = document.querySelector("#signInform");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");

const SIGNED_IN_USER_KEY = "logged-in-user-storage-key";
let userArray = [];

/* ---- class for user's info ---- */

class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }
}

/* ---- form event listeners ---- */

form.addEventListener("submit", function (event) {
  event.preventDefault();
  loggedInUser(inputUsername.value, inputPassword.value);
  window.location.href = "/src/pages/home-page.html";
});

/* verifying user input and saving it */
function loggedInUser(username, password) {
  if (username !== "" && password !== "") {
    let loggedInUser = new User(username, password);
    userArray.push(loggedInUser);
    addToLocalStorage(userArray);
  }
}


/* ---- main local storage function ---- */

/* -- adding info to local storage to use throughout the "app" -- */

function addToLocalStorage(userArray) {
  userArray = JSON.stringify(userArray);
  localStorage.setItem(LOGGED_IN_USER_KEY, userArray);
}