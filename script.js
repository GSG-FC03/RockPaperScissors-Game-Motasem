// St of Define Basic Element --------------------------------------------
//Define Number of rounds
let max_rounds = 5;

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
const draw_point = document.getElementsByClassName("draw_point")[0];
const player_score_span =
  document.getElementsByClassName("player_score_span")[0];
const Computer_score_span = document.getElementsByClassName(
  "Computer_score_span"
)[0];
const Final_Result_Section = document.getElementsByClassName(
  "Final_Result_Section"
)[0];
const result_img = document.getElementsByClassName("result_img")[0];
const result_txt = document.getElementsByClassName("result_txt")[0];
const play_again_btn = document.getElementsByClassName("play_again_btn")[0];

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
const DrawPoint_sound = new Audio("./assets/sounds/Drawpoint.mp3");
const WinGame_sound = new Audio("./assets/sounds/WinGame.wav");
const LoseGame_sound = new Audio("./assets/sounds/LoseGame.mp3");
const DrawGame_sound = new Audio("./assets/sounds/DrawGame.mp3");

//Define Variables
let user_name = "";
const handsArray = ["rock", "paper", "scissors"];
const handslinks = [
  "./assets/rock.png",
  "./assets/paper.png",
  "./assets/scissors.png",
];
let computer_pick = "";
let player_pick = "";
let player_hand_index = 0;
let Computer_hand_index = 0;

// -------------------------------------------------End of Define Basic Element

// ST of Login section Script -----------------------------------------------
// Login_in Animations
login_in();

//Code for login Button
login_btn.addEventListener("mouseover", () => {
  Hover_sound.pause();
  Hover_sound.currentTime = 0;
  Hover_sound.play();
});

login_btn.addEventListener("click", () => {
  Click_sound.pause();
  Click_sound.currentTime = 0;
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

window.addEventListener("mouseover", (event) => {
  //Hover effect on pick buttons
  if (
    event.target.parentElement.getAttribute("class") == "rock_pick" ||
    event.target.parentElement.getAttribute("class") == "paper_pick" ||
    event.target.parentElement.getAttribute("class") == "scissors_pick"
  ) {
    Hover_sound.pause();
    Hover_sound.currentTime = 0;
    Hover_sound.play();
  }
});

window.addEventListener("click", (event) => {
  //click effect on pick buttons
  if (
    //narrow slections to buttons and in normal rounds
    (event.target.parentElement.getAttribute("class") == "rock_pick" ||
      event.target.parentElement.getAttribute("class") == "paper_pick" ||
      event.target.parentElement.getAttribute("class") == "scissors_pick") &&
    round_num.textContent < max_rounds
  ) {
    Click_sound.pause(); //click sound
    Click_sound.currentTime = 0;
    Click_sound.play();

    Choose_Box_down(); //box down
    switch (
      true //define player value
    ) {
      case event.target.parentElement.getAttribute("class") == "rock_pick":
        player_pick = "rock";
        player_hand_index = 0;
        break;
      case event.target.parentElement.getAttribute("class") == "paper_pick":
        player_pick = "paper";
        player_hand_index = 1;
        break;
      case event.target.parentElement.getAttribute("class") == "scissors_pick":
        player_pick = "scissors";
        player_hand_index = 2;
        break;
    }

    let result = winCalculator(player_pick); //calculate result
    console.log(result);
    rollHands(player_hand_index, Computer_hand_index); //run hands move
    setTimeout(() => {
      point_announce(result); //announce results
    }, 3500);
    setTimeout(() => {
      Choose_Box_up(); //box up
      round_announce(parseInt(round_num.textContent) + 1); //announce next round
    }, 5000);
  }

  if (
    //narrow slections to buttons and in normal rounds & if we are in final round
    (event.target.parentElement.getAttribute("class") == "rock_pick" ||
      event.target.parentElement.getAttribute("class") == "paper_pick" ||
      event.target.parentElement.getAttribute("class") == "scissors_pick") &&
    round_num.textContent == max_rounds
  ) {
    Click_sound.pause(); //click sound
    Click_sound.currentTime = 0;
    Click_sound.play();

    Choose_Box_down(); //box down
    switch (
      true //define player value
    ) {
      case event.target.parentElement.getAttribute("class") == "rock_pick":
        player_pick = "rock";
        player_hand_index = 0;
        break;
      case event.target.parentElement.getAttribute("class") == "paper_pick":
        player_pick = "paper";
        player_hand_index = 1;
        break;
      case event.target.parentElement.getAttribute("class") == "scissors_pick":
        player_pick = "scissors";
        player_hand_index = 2;
        break;
    }

    let result = winCalculator(player_pick); //calculate result
    console.log(result);
    rollHands(player_hand_index, Computer_hand_index); //run hands move
    setTimeout(() => {
      point_announce(result); //announce results
    }, 3500);
    setTimeout(() => {
      Select_Round_Section_out(); //end of 10 rounds
      Final_Result_Section_in(
        player_score_span.textContent,
        Computer_score_span.textContent
      );
    }, 5500);
  }
});

// -----------------------------------------------------End of select round Script

// ST of Final result Script -----------------------------------------------
play_again_btn.addEventListener("mouseover", () => {
  //Hover sound for play again button

  Hover_sound.pause(); //click sound
  Hover_sound.currentTime = 0;
  Hover_sound.play();
});

play_again_btn.addEventListener("click", () => {
  //Hover sound for play again button
  Click_sound.pause(); //click sound
  Click_sound.currentTime = 0;
  Click_sound.play();
  Final_Result_Section_out();
  setTimeout(() => {
    Select_Round_Section_in();
  }, 1000);
});

// -------------------------------------------------End of Final result Script

// -------------------------------------------------------------------------------
// Funcitons Library -------------------------------------------------------------
// ----------------------------------------------------------------------------------
// Login in Animations and sounds
function login_in() {
  Intro_music.pause();
  Intro_music.currentTime = 0;
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
  Play_Music.currentTime = 0;
  Play_Music.play(); //play music from st
  Choose_Box.classList.add("Choose_Box_up"); //show pick box
  right_hand.setAttribute("src", handslinks[0]);
  left_hand.setAttribute("src", handslinks[0]); //reset hands to rock
  Select_Round_Section.style.display = "block";
  player_name_p.textContent = user_name; //write player name
  player_score_span.textContent = 0;
  Computer_score_span.textContent = 0; //reset scores
  round_num.textContent = 1; //reset round counter
  setTimeout(() => {
    round_announce(round_num.textContent); //announce first round
  }, 1000);
}
// Select_Round_Section_out Animations and sounds
function Select_Round_Section_out() {
  Play_Music.pause();
  Select_Round_Section.classList.add("Select_Round_Section_out");
  setTimeout(() => {
    Select_Round_Section.classList.remove("Select_Round_Section_out");
    Choose_Box.classList.remove("Choose_Box_down");
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
function rollHands(player_hand_index, Computer_hand_index) {
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
    left_hand.setAttribute("src", handslinks[player_hand_index]);
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
    player_score_span.textContent = parseInt(player_score_span.textContent) + 1;
    WinPoint_sound.play();
    win_point.style.display = "block";
    setTimeout(() => {
      win_point.style.display = "none";
    }, 1000);
  } else if (result == "lose") {
    Computer_score_span.textContent =
      parseInt(Computer_score_span.textContent) + 1;
    LosePoint_sound.play();
    lose_point.style.display = "block";
    setTimeout(() => {
      lose_point.style.display = "none";
    }, 1000);
  } else if (result == "draw") {
    DrawPoint_sound.play();
    draw_point.style.display = "block";
    setTimeout(() => {
      draw_point.style.display = "none";
    }, 1000);
  }
}

//Win Calculator Function
function winCalculator(player_pick) {
  Computer_hand_index = Math.round(Math.random() * 2);
  computer_pick = handsArray[Computer_hand_index];

  switch (true) {
    case player_pick == computer_pick:
      return "draw";
      break;
    case player_pick == "rock" && computer_pick == "scissors":
      return "win";
      break;
    case player_pick == "scissors" && computer_pick == "paper":
      return "win";
      break;
    case player_pick == "paper" && computer_pick == "rock":
      return "win";
      break;
    case player_pick == "rock" && computer_pick == "paper":
      return "lose";
      break;
    case player_pick == "paper" && computer_pick == "scissors":
      return "lose";
      break;
    case player_pick == "scissors" && computer_pick == "rock":
      return "lose";
      break;
  }
}

//Show result section based on player and computer socre + sounds + img + text and animations
function Final_Result_Section_in(player_score, computer_score) {
  switch (true) {
    case player_score > computer_score: //wining case
      result_img.setAttribute("src", "./assets/winner.png");
      result_txt.textContent = "You Won!";
      result_txt.style.color = "#FFB332";
      setTimeout(() => {
        WinGame_sound.currentTime = 0;
        WinGame_sound.play();
      }, 1000);
      break;
    case player_score < computer_score: //losing case
      result_img.setAttribute("src", "./assets/loser.png");
      result_txt.textContent = "You Lost!";
      result_txt.style.color = "#FF3636";
      setTimeout(() => {
        LoseGame_sound.currentTime = 0;
        LoseGame_sound.play();
      }, 1000);
      break;
    case player_score == computer_score: //draw case
      result_img.setAttribute("src", "./assets/Draw.png");
      result_txt.textContent = "Draw!";
      result_txt.style.color = "#FF3636";
      setTimeout(() => {
        LoseGame_sound.currentTime = 0;
        DrawGame_sound.play();
      }, 1000);
      break;
  }

  setTimeout(() => {
    Final_Result_Section.style.display = "block"; //show the results section
  }, 1000);
}
// Select_Round_Section_out Animations and sounds
function Final_Result_Section_out() {
  WinGame_sound.pause();
  LoseGame_sound.pause();
  DrawGame_sound.pause();
  Final_Result_Section.classList.add("Final_Result_Section_out");
  setTimeout(() => {
    Final_Result_Section.style.display = "none";
    Final_Result_Section.classList.remove("Final_Result_Section_out");
  }, 1000);
}
