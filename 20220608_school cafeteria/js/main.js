// show/hide menu: toggle menu
const toggleMenu = (toggleId, navListId) => {
    // html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);

    const clickHandler = () => {
        // show/hide menu: .show-menu
        navList.classList.toggle('show-menu');
    }

    if(toggle && navList){
        // toggle click        
        toggle.addEventListener('click', clickHandler);
    }
}

toggleMenu("nav-toggle", "nav-list")

// const say = () => console.log("Hello world!4");

// const say = () => {
//     console.log("Hello world!3");
// };

// const say = function() {
//     console.log("Hello world!2");
// };

// function say() {
//     console.log("Hello world!");
// }

// say();