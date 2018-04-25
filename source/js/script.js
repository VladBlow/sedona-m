var menuBtn = document.querySelector("#menu-btn");
var mainMenu = document.querySelector(".main-menu");
var mainMenuClass = "main-menu--open";

mainMenu.classList.remove(mainMenuClass);

menuBtn.addEventListener("click", function(event) {
  console.log(event);
  var isOpen = mainMenu.classList.contains(mainMenuClass);

  if (isOpen) {
    mainMenu.classList.remove(mainMenuClass);
  } else {
    mainMenu.classList.add(mainMenuClass);
  }
});

var form = document.querySelector("#main-form");
var firstName = form.querySelector("input[name='first-name']");
var lastName = form.querySelector("input[name='last-name']");
var phone = form.querySelector("input[name='phone']");
var email = form.querySelector("input[name='email']");
var firstNameLabel = document.querySelector(".form-block__item--name");
var lastNameLabel = document.querySelector(".form-block__item--last-name");
var phoneLabel = document.querySelector(".form-block__item--phone");
var emailLabel = document.querySelector(".form-block__item--email");


form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!email.value) {
    email.focus();
    emailLabel.classList.add("has-error");
  } else {
    emailLabel.classList.remove("has-error");
  }

  if (!phone.value) {
    phone.focus();
    phoneLabel.classList.add("has-error");
  } else {
    phoneLabel.classList.remove("has-error");
  }

  if (!lastName.value) {
    lastName.focus();
    lastNameLabel.classList.add("has-error");
  } else {
    lastNameLabel.classList.remove("has-error");
  }

  if (!firstName.value) {
    firstName.focus();
    firstNameLabel.classList.add("has-error");
  } else {
    firstNameLabel.classList.remove("has-error");
  }

  if (firstName.value && lastName.value && phone.value && email.value) {
    form.submit();
  }
})

