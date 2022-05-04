const form = document.querySelector("#signInform");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");

const SIGNED_IN_KEY = "logged-in-user-storage-key";
let userArray = [];

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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  SignedInUser(inputUsername.value, inputPassword.value);
  window.location.href = "/src/pages/home.html";
});

/* verifying user input and saving it */
function SignedInUser(username, password) {
  if (username !== "" && password !== "") {
    let SignedInUser = new User(username, password);
    userArray.push(SignedInUser);
    addToLocalStorage(userArray);
  }
}

function addToLocalStorage(userArray) {
  userArray = JSON.stringify(userArray);
  localStorage.setItem(SIGNED_IN_KEY, userArray);
}