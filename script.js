// const icon = document.querySelector('.search-icon');
// const box = document.querySelector('.search-bar-open');

// icon.addEventListener ('click',() => {
//   const shown = box.classList.toggle('show');
//    box.classList.toggle('hidden');

// if (shown){
//    document.body.style.overflow = 'hidden';
//    console.log("hidden");
// }
// else{
//    document.body.style.overflow = 'visible';
//    console.log("visible");
// }
// });
// const crossbutton = document.querySelector('.cross-btn-image');
// const ourSearchBar = document.querySelector('.search-bar-open');
// crossbutton.addEventListener('click',()=>{
// ourSearchBar.style.visibility = 'hidden';
// console.log("Done");
// });


const menucheckbox = document.getElementById('checkbox');
const box = document.querySelector('.search-bar-open');
menucheckbox.addEventListener('change', (item) => {
    if (menucheckbox.checked) {
        box.classList.toggle('show');
        box.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
    }
    else {
        box.classList.toggle('show');
        box.classList.toggle('hidden');
        document.body.style.overflow = 'visible';
    }
});

// ------------

const counters = document.querySelectorAll('.counter p span');
const counterSec = document.getElementById('counter-section');

// check the section is in viewpoint or not 

function inViewSession(element) {
    const checkview = element.getBoundingClientRect();
    return (
        checkview.top <= window.innerHeight && checkview.bottom >= 0
    );
}
let started = false;
// counter run
function startCounter() {
    counters.forEach((counter) => {
       
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const setTime = target/200;
    const start = setInterval(() => {
      count+=setTime;
     if(count >= target){
        counter.innerText = target ;
        clearInterval(start);
     }
     else{
        counter.innerText = Math.ceil(count);
     }
    }, 10);
    });
}
window.addEventListener('scroll', () => {
if (!started && inViewSession(counterSec)) {
    startCounter();
    started = true;
  }
});




// ----------


// Works on all screen sizes, even when all items fit inside the screen

const slider = document.querySelector('.latest-project-sliding-row');

let isDragging = false;
let startX, currentTranslate = 0, prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  slider.classList.add('active');
  startX = e.clientX;
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  slider.classList.remove('active');
  prevTranslate = currentTranslate;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  currentTranslate = prevTranslate + deltaX;
  slider.style.transform = `translateX(${currentTranslate}px)`;
});



// marquee


 // script.js
function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  let marqueeInterval;

  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  function startMarquee() {
    marqueeInterval = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  startMarquee();
}

window.addEventListener('load', () => Marquee('.marquee-cont', 0.4));


// progress bar 


  document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar-fill");

    const observer = new IntersectionObserver(
      (entries) =>{
        entries.forEach(entry => {
          const el = entry.target;
          const targetWidth = el.getAttribute("data-target");

          if (entry.isIntersecting) {
            el.style.width = targetWidth;
          } else {
            el.style.width = "0%"; // Reset when not visible
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  });



// faq 
