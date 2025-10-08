// const header = document.querySelector('header');
// const headerChanger = document.addEventListener ('scroll',()=>{
// if (window.scrollY > 50){

// header.style.background = 'red';
// }
// else
// header.style.background = 'transparent';

   
// })

//     document.addEventListener('DOMContentLoaded', () => {
//         const header = document.querySelector('header');

//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 10) {
//                 header.classList.add('scrolled');
//                 console.log("Working ")
//             } else {
//                 header.classList.remove('scrolled');
//             }
//         });
//     });


// marquee



// const marquees = document.querySelectorAll('.marquee');
// let position = window.innerWidth;

// window.onload = function () {
//   setInterval(function () {
//     position--; // move left

//     marquees.forEach(function (marquee) {
//       marquee.style.left = position + 'px';

//       if (position < -marquee.offsetWidth) {
//         position = window.innerWidth;
//       }
//     });

//   }, 10); 
// };


window.onload = function () {
  const marquees = document.querySelectorAll(".marquee");
  const speeds = {
    fast: 25, 
    normal: 2
  };
  
  marquees.forEach((marquee, index) => {
    let direction = index === 0 ? 1 : -1; // 1 for right, -1 for left
    let speed = speeds.fast;              // Start with fast
    let position = direction === 1 ? -marquee.offsetWidth : window.innerWidth;

    marquee.style.left = position + "px";

    // Slow down after 2 seconds
    setTimeout(() => {
      speed = speeds.normal;
    }, 1500);

    setInterval(() => {
      position += direction * speed;
      marquee.style.left = position + "px";

      const resetPoint = direction === 1 ? window.innerWidth : -marquee.offsetWidth;
      if ((direction === 1 && position > window.innerWidth) ||
          (direction === -1 && position < -marquee.offsetWidth)) {
        position = direction === 1 ? -marquee.offsetWidth : window.innerWidth;
      }
    }, 16); // ~60 FPS
  });
};


    
// image carousel 

const swiper = new Swiper('.our-image-slide', {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay:2000,
      disableOnInteraction: false,

  },
  breakpoints: {
      576: {
          slidePerView: 3,
      },
      768: {
          slidePerView: 4,
      },
      992: {
          slidePerView: 5,
      },
      1200: {
          slidePerView: 6,
      }
  }
})