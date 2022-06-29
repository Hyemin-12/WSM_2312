// show/hide menu: toggle menu
const toggleMenu = (toggleId, navListId) => {
    // html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        // toggle click        
        toggle.addEventListener('click', () => {
            // show/hide menu: .show-menu
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");
        });
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

const addNow = (mainCardId) => {
    // html -> js
    const mainCard = document.getElementById(mainCardId);
    // 지금 몇 시? 다음 식사 -> 몇 번째 카드인지
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(`${hour}시 ${minute}분`);
    let minutes = hour * 60 + minute; //분으로 단위 통일
    // 지금 시각 -> index
    // 조식 끝 : 7:30 -> 1
    // 중식 끝 : 13:10 -> 2
    // 석식 끝 : 18:10 -> 0         

    // if((hour < 7) || (hour == 7 && minute < 30)) index = 0;
    // else if((hour < 13) || (hour == 13 && minute < 10)) index = 1;
    // else if((hour < 18) || (hour == 18 && minute < 10)) index = 2;
    // else index = 0;

    let index = 0;
    if (18 * 60 + 10 <= minutes) index = 0;
    else if (13 * 60 + 10 <= minutes) index = 2;
    else if (7 * 60 + 30 <= minutes) index = 1;

    let selectedCard = mainCard.getElementsByClassName('card')[index];
    // .now 클래스 추가
    selectedCard.classList.add('now');
}

addNow('main-card');