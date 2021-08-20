// St of Define Basic Element --------------------------------------------
// Get Elements from DOM
const Login_Section = document.getElementsByClassName("Login_Section")[0];
const intro_right_hand = document.getElementsByClassName("intro_right_hand")[0];
const intro_left_hand = document.getElementsByClassName("intro_left_hand")[0];
const intro_vs = document.getElementsByClassName("intro_vs")[0];
const input_name = document.getElementsByClassName("input_name")[0];
const error_msg = document.getElementsByClassName("error_msg")[0];
const login_btn = document.getElementsByClassName("login_btn")[0];

//Get All Sounds
const Intro_music = new Audio("./assets/sounds/Intro.mp3");
Intro_music.volume = 0.10; //decrease music volume
const Play_Music = new Audio("./assets/sounds/Play-Music.mp3");
Play_Music.volume = 0.1;//decrease music volume
const Collide_sound = new Audio("./assets/sounds/Collide.mp3");
const Hover_sound = new Audio("./assets/sounds/Hover.mp3");
const Click_sound = new Audio("./assets/sounds/Click.wav");

//Define Variables
let user_name = "";
const handsArray = ["rock", "paper", "scissors"];
let randomPick = 0;
// -------------------------------------------------End of Define Basic Element

// ST of Login section Script -----------------------------------------------
// Login_in Animations
// login_in();

//Code for login Button
login_btn.addEventListener("mouseover", () => {
  //on Hover
  Hover_sound.play();
});

login_btn.addEventListener("click", () => {
  //on click
  Click_sound.play();
  if (input_name.value == "" || input_name.value == null) {
    error_msg.style.display = "block";
  } else {
    error_msg.style.display = "none";
    user_name = input_name.value;
    login_out();
    Select_Round_Section_in();
  }
});

// -------------------------------------------------End of Login section Script

// ST of select round Script -----------------------------------------------

// -------------------------------------------------End of select round script Script

// Funcitons Library -------------------------------------------------------------
// Login in Animations and sounds
function login_in() {
//   Intro_music.play(); //play background intro
Login_Section.style.display="block";
intro_vs.classList.add("intro_vs_appear"); // vs icon appear
  setTimeout(() => {
    Collide_sound.play(); // play collide after 1.5s
    intro_vs.classList.remove("intro_vs_appear");
    intro_vs.classList.add("intro_vs_rotate"); //begin rotate after 1.5s
  }, 1500);
}

// Login out Animations and sounds
function login_out() {
  Intro_music.pause();
  Login_Section.classList.add("Login_Section_Out");
  setTimeout(() => {
    Login_Section.style.display = "none";
  }, 500);
}

// Select_Round_Section_in Animations and sounds
function Select_Round_Section_in() {
    Play_Music.loop=true;
    // Play_Music.play();
}
