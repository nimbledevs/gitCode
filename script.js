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




