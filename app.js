// // Button clicks 
// var btns = document.querySelectorAll(".drum");
// for( var i=0; i<btns.length; i++){
//     btns[i].addEventListener("click",function(){
//         var pressedKey = this.innerHTML;
//         makeSound(pressedKey);
//         animation(pressedKey);
//     })
// }

// // key presses 
// document.addEventListener("keydown",function(event){
//     makeSound(event.key);
//     animation(event.key);
// })

// function makeSound(key){
//     switch(key){
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;    
//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break; 
//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break; 
//         case "j":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;
//         case "k":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;         
//         case "l":
//             var kickBass = new Audio("sounds/kick-bass.mp3");
//             kickBass.play();
//             break;
//         default:
//             console.log();         
//     }
// }

// function animation(key){
//     var activeBtn = document.querySelector("."+key);
//     activeBtn.classList.add("pressed");

//     setTimeout(function(){
//         activeBtn.classList.remove("pressed");
//     },100)
// }


/* USING JQUERY*/

// Button clicks 
$(".drum").on("click",function(){
    var pressedKey = this.innerHTML;
    makeSound(pressedKey);
    animation(pressedKey);
})


// key presses 
$(document).on("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;         
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log();         
    }
}

function animation(key){
    var activeBtn = $("."+key);
    activeBtn.addClass("pressed");

    setTimeout(function(){
        activeBtn.removeClass("pressed");
    },100)
}