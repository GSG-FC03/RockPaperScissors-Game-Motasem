// St of Define Basic Element --------------------------------------------
// Get Elements from DOM
const Login_Section = document.getElementsByClassName("Login_Section")[0];
const intro_right_hand = document.getElementsByClassName("intro_right_hand")[0];
const intro_left_hand = document.getElementsByClassName("intro_left_hand")[0];
const intro_vs = document.getElementsByClassName("intro_vs")[0];
const input_name = document.getElementsByClassName("input_name")[0];
const error_msg = document.getElementsByClassName("error_msg")[0];
const login_btn = document.getElementsByClassName("login_btn")[0];

const Select_Round_Section = document.getElementsByClassName(
  "Select_Round_Section"
)[0];
const banner = document.getElementsByClassName("banner")[0];
const player_name_p = document.getElementsByClassName("player_name_p")[0];
const round_num = document.getElementsByClassName("round_num")[0];
const right_hand = document.getElementsByClassName("right_hand")[0];
const left_hand = document.getElementsByClassName("left_hand")[0];
const Choose_Box = document.getElementsByClassName("Choose_Box")[0];
const rock_pick = document.getElementsByClassName("rock_pick")[0];
const paper_pick = document.getElementsByClassName("paper_pick")[0];
const scissors_pick = document.getElementsByClassName("scissors_pick")[0];
const win_point = document.getElementsByClassName("win_point")[0];
const lose_point = document.getElementsByClassName("lose_point")[0];
const player_score_span = document.getElementsByClassName("player_score_span")[0];
const Computer_score_span = document.getElementsByClassName("Computer_score_span")[0];

//Get All Sounds
const Intro_music = new Audio("./assets/sounds/Intro.mp3");
Intro_music.volume = 0.1; //decrease music volume
const Play_Music = new Audio("./assets/sounds/Play-Music.mp3");
Play_Music.volume = 0.1; //decrease music volume
const Collide_sound = new Audio("./assets/sounds/Collide.mp3");
const Hover_sound = new Audio("./assets/sounds/Hover.mp3");
const Click_sound = new Audio("./assets/sounds/Click.wav");
const Round_bell_sound = new Audio("./assets/sounds/Round_bell.mp3");
const MoveHand_sound = new Audio("./assets/sounds/MoveHand.wav");
const WinPoint_sound = new Audio("./assets/sounds/WinPoint.mp3");
const LosePoint_sound = new Audio("./assets/sounds/LosePoint.mp3");
const WinGame_sound = new Audio("./assets/sounds/WinGame.wav");
const LoseGame_sound = new Audio("./assets/sounds/LoseGame.mp3");

//Define Variables
let user_name = "";
const handsArray = ["rock", "paper", "scissors"];
const handslinks = [
  "./assets/rock.png",
  "./assets/paper.png",
  "./assets/scissors.png",
];
let randomPick = 0;

// -------------------------------------------------End of Define Basic Element

// ST of Login section Script -----------------------------------------------
// Login_in Animations
login_in();

//Code for login Button
login_btn.addEventListener("mouseover", () => {
  Hover_sound.play();
});

login_btn.addEventListener("click", () => {
  Click_sound.play();
  if (input_name.value == "" || input_name.value == null) {
    error_msg.style.display = "block";
  } else {
    error_msg.style.display = "none";
    user_name = input_name.value;
    login_out();
    setTimeout(() => {
      Select_Round_Section_in();
    }, 500);
  }
});

// -------------------------------------------------End of Login section Script

// ST of select round Script -----------------------------------------------
rock_pick.addEventListener("mouseover", () => {
  Hover_sound.play();
});
paper_pick.addEventListener("mouseover", () => {
  Hover_sound.play();
});
scissors_pick.addEventListener("mouseover", () => {
  Hover_sound.play();
});

rock_pick.addEventListener("click", () => {
  Click_sound.play();
  point_announce("win");
});
paper_pick.addEventListener("click", () => {
  Click_sound.play();
  point_announce("lose");
});
scissors_pick.addEventListener("click", () => {
  Click_sound.play();
});


// -------------------------------------------------End of select round script Script

// Funcitons Library -------------------------------------------------------------
// Login in Animations and sounds
function login_in() {
  Intro_music.play(); //play background intro
  Login_Section.style.display = "block";
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
  }, 1000);
}

// Select_Round_Section_in Animations and sounds
function Select_Round_Section_in() {
  Play_Music.loop = true;
  Play_Music.play();
  Select_Round_Section.style.display = "block";
  player_name_p.textContent = user_name;
  player_score_span.textContent=0;
  Computer_score_span.textContent=0;
  round_num.textContent = 1;
  setTimeout(() => {
    round_announce(rnd_num);
  }, 1000);
}
// Select_Round_Section_out Animations and sounds
function Select_Round_Section_out() {
  Play_Music.pause();
  Select_Round_Section.classList.add("Select_Round_Section_out");
  setTimeout(() => {
    Select_Round_Section.style.display = "none";
  }, 1000);
}
// Choose_Box_up Animations and sounds
function Choose_Box_up() {
  Choose_Box.classList.remove("Choose_Box_down");
  Choose_Box.classList.add("Choose_Box_up");
}
// Choose_Box_down Animations and sounds
function Choose_Box_down() {
  Choose_Box.classList.remove("Choose_Box_up");
  Choose_Box.classList.add("Choose_Box_down");
}
// rollHands Animations and sounds
function rollHands(user_hand_index, Computer_hand_index) {
  right_hand.setAttribute("src", handslinks[0]);
  left_hand.setAttribute("src", handslinks[0]);
  right_hand.classList.add("right_hand_roll");
  left_hand.classList.add("left_hand_roll");

  setTimeout(() => {
    //play sounds on 1st 2nd 3rd second
    MoveHand_sound.play();
  }, 1000);
  setTimeout(() => {
    MoveHand_sound.play();
  }, 2000);
  setTimeout(() => {
    Collide_sound.play();
  }, 3000);

  setTimeout(() => {
    //change the hand based on parameters
    right_hand.setAttribute("src", handslinks[Computer_hand_index]);
    left_hand.setAttribute("src", handslinks[user_hand_index]);
    right_hand.classList.remove("right_hand_roll");
    left_hand.classList.remove("left_hand_roll");
  }, 3000);
}
// Announce round function Animations and sounds
function round_announce(rnd_num) {
  //enter round number
  round_num.textContent = rnd_num;
  Round_bell_sound.play();
  banner.classList.add("banner_round_announce_move");
  setTimeout(() => {
    banner.classList.remove("banner_round_announce_move");
  }, 1000);
}

//Win Point function Animations and sounds
function point_announce(result) {
  if (result == "win") {
    player_score_span.textContent=parseInt(player_score_span.textContent)+1;
    WinPoint_sound.play();
    win_point.style.display = "block";
    setTimeout(() => {
      win_point.style.display = "none";
    }, 1000);
  } else if (result == "lose") {
    Computer_score_span.textContent=parseInt(Computer_score_span.textContent)+1;
    LosePoint_sound.play();
    lose_point.style.display = "block";
    setTimeout(() => {
      lose_point.style.display = "none";
    }, 1000);
  }
}
