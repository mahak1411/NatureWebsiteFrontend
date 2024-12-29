let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll',function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});


// function startCounter(element, target, incrementTime) {
//     let i = 0;
//     const intervalId = setInterval(function() {
//         element.innerHTML = i + "+";
//         i++;
//         if (i > target) {
//             clearInterval(intervalId);
//         }
//     }, 1);  // Adjust the interval time as needed
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const counters = document.querySelectorAll('.numbers');

//     // Start counters simultaneously
//     startCounter(counters[0], 1000, 1);  // For Volunteers
//     startCounter(counters[1], 1500, 1);  // For Trees Planted
//     startCounter(counters[2], 800, 1);   // For Animals Saved
//     startCounter(counters[3], 2500, 1);  // For Donators
// });

