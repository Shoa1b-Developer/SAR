// Variable Assignment 
const quotes = ["Your safety,<br>Our Priority",
  "Let's Finally say<br>No To Rapes",
  "No To Molestations,<br>No To Bullying", "No To Ragging<br>No To Suicide!"
  ];
const line = document.querySelector(".intro-text");
const loginBtn = document.querySelector(".loginBtn");
const signupBtn = document.querySelector(".signupBtn");
const loginSec = document.querySelector(".login-section");
const signupSec = document.querySelector(".signup-section");
const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const moreLinks = document.querySelector('.moreLinks');
const loader = document.querySelector('.loader');
const body = document.querySelector('.body');


let count = 0;

// fuctions

function init() {
  setTimeout(() => {
     loader.style.opacity = '1';
     loader.style.display = 'none';
    
     body.style.opacity = '1';
  }, 2800);
}
init();

function show() {
  count++;
  if (count > 3) {
    count = 0;
  }
  line.innerHTML = quotes[count];
}

setInterval(show, 2500);

function showLoginSec() {
  loginSec.style.display = 'flex';
  signupSec.style.display = 'none';
  loginBtn.classList.add('borderBtm');
  signupBtn.classList.remove('borderBtm');
}
function showSignupSec() {
  loginSec.style.display = 'none';
  signupSec.style.display = 'flex';
  loginBtn.classList.remove('borderBtm');
  signupBtn.classList.add('borderBtm');
}

menu.addEventListener('click', function() {
  moreLinks.style.left = '0px';
});

cross.addEventListener('click', function() {
  moreLinks.style.left = '-300px';
});