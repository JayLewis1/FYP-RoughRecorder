const register = document.getElementById("register");
const signIn = document.getElementById("sign-in");
const regBtn = document.getElementById("reg-btn");
const signBtn = document.getElementById("sign-btn");
const sForm = document.getElementById("sigin-form");
const rForm = document.getElementById("register-form");
const box = document.getElementById("signin-box");

const sSubmit = document.getElementById("sign-submit");
const rSubmit = document.getElementById("reg-submit");

const regClick = () => {
  register.style.backgroundImage = "url(../assets/red-shape.svg";
  regBtn.style.color = "#FFFFFF";
  signIn.style.backgroundImage = "url(../assets/white-shape.svg";
  signBtn.style.color = "#d81e5b";
  register.style.zIndex = "3";
  signIn.style.zIndex = "0";

  sForm.style.display = "none";
  rForm.style.display = "block";

  box.style.width = "500px";
  box.style.marginLeft = "-50px";
  box.style.height = "320px";
};

const signClick = () => {
  signIn.style.backgroundImage = "url(../assets/red-shape.svg";
  signBtn.style.color = "#FFFFFF";
  register.style.backgroundImage = "url(../assets/white-shape.svg";
  regBtn.style.color = "#d81e5b";
  signIn.style.zIndex = "3";
  register.style.zIndex = "0";

  rForm.style.display = "none";
  sForm.style.display = "block";

  box.style.width = "400px";
  box.style.marginLeft = "0px";
  box.style.height = "280px";
};
