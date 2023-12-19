const moves = ["1.15", "34.68", "3.66", "1.39"];


const loadingBar = document.querySelector('.loading-bar');
const loadingFill = document.querySelector('.loading-bar-fill');
const btn = document.querySelector('.nxt-btn');
const move = document.querySelector('.value');
const pending = document.querySelector('.pending');
const loader = document.querySelector('.small-load');
const time = document.querySelector('.time');

// preloader before site open
const starBtns3 = document.querySelectorAll('#preloader3 .stars .star-btn');
const starBtns4 = document.querySelectorAll('#preloader3 .stars2 .star-btn');

function changeColor3(target) {
  if (target < 1) {
    starBtns3[0].style.color = "red";
  } else if (target < 2) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
  } else if (target < 3) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
  } else if (target < 4) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
    starBtns3[3].style.color = "red";
  } else {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
    starBtns3[3].style.color = "red";
    starBtns3[4].style.color = "red";
  }
}
function changeColor4(target) {
  if (target < 1) {
    starBtns4[0].style.color = "red";
  } else if (target < 2) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
  } else if (target < 3) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
  } else if (target < 4) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
    starBtns4[3].style.color = "red";
  } else {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
    starBtns4[3].style.color = "red";
    starBtns4[4].style.color = "red";
  }
}

starBtns3.forEach((starBtn3) => {
  starBtn3.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor3(target);
  })
  setTimeout(() => {
    preloader3.style.display = "none";
  }, 5000)
})

starBtns4.forEach((starBtn4) => {
  starBtn4.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor4(target);
  })
})

// preloader

// const preloder1 = document.querySelector('.preloader');

// window.addEventListener('DOMContentLoaded', () => {
//   preloder1.style.display = "flex";
// })

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloder1.style.display = "none";
//   }, 5000)
// })


function getTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;

  if (hours > 12) {
    hours = hours - 12;
    return `${hours}:${minutes} PM`;
  } else {
    return `${hours}:${minutes} AM`;
  }

}

window.addEventListener("DOMContentLoaded", () => {
  time.textContent = getTime();
  
  setInterval(() => {
    time.textContent = getTime();
  }, 1000)
})

let value = 0;

btn.addEventListener("click", () => {
  
  loader.style.display = "flex";

  value++;

  if (value > moves.length -1) {
    value = 0;
  }
  setTimeout(() => {
    loadingFill.style.transform = `translateX(${100}%)`;
    btn.textContent = "Next";
    loader.style.display = "none";
    move.textContent = `${moves[value]}x`;
  }, 4000);

  loadingFill.style.transform = `translateX(${-100}%)`;
})
