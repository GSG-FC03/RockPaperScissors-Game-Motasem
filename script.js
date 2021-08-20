// ST of Login section Script -----------------------------------------------
// Get Elements from DOM
const intro_right_hand= document.getElementsByClassName('intro_right_hand')[0];
const intro_left_hand= document.getElementsByClassName('intro_left_hand')[0];
const intro_vs= document.getElementsByClassName('intro_vs')[0];
const input_name= document.getElementsByClassName('input_name')[0];
const error_msg= document.getElementsByClassName('error_msg')[0];
const login_btn= document.getElementsByClassName('login_btn')[0];

//Get All Sounds
const Intro_music= new Audio('./assets/sounds/Intro.mp3');
Intro_music.volume=0.11; //decrease music volume
const Collide_sound= new Audio('./assets/sounds/Collide.mp3');
const Hover_sound= new Audio('./assets/sounds/Hover.mp3');
const Click_sound= new Audio('./assets/sounds/Click.wav');


// Code for Login Animations
Intro_music.play() //play background intor
intro_right_hand.classList.add('intro_righ_hand_move') // move right hand
intro_left_hand.classList.add('intro_left_hand_move') // move left hand
intro_vs.classList.add('intro_vs_appear') // vs icon appear
setTimeout(()=>{
    Collide_sound.play() // play collide after 1.5s
    intro_vs.classList.remove('intro_vs_appear') 
    intro_vs.classList.add('intro_vs_rotate') //begin rotate after 1.5s
},1500)

//Code for login Button
login_btn.addEventListener('mouseover',()=>{ //on Hover
    Hover_sound.play();
})

login_btn.addEventListener('click',()=>{ //on click
    Click_sound.play();
    if (input_name.value==""||input_name.value==null) {error_msg.style.display="block"}
    else {

    }
})


// -------------------------------------------------End of Login section Script 