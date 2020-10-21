AOS.init({
  duration: 700,
});

$(document).ready(function(){
      const $menuCheck = document.querySelector('.menu-checkbox');
      $menuCheck.addEventListener('click', function(){
        $($menuCheck).toggleClass('checked')
      })
      const $sidenavs = document.querySelectorAll('.side-nav');
      $sidenavs.forEach((link) => {
        link.addEventListener('click', function(){
          $menuCheck.classList.remove('checked')
        })
      })

      const $resume = document.querySelector('#resume');
      const $displayEducation = document.querySelector('.display-education');
      const $education = document.querySelector('#education'); 
      const $displayWork = document.querySelector('.display-work');
      const $work = document.querySelector('#work');


      $displayEducation.addEventListener('click', function(){
              $work.className = 'd-none';
              $displayWork.classList.remove('current');
              $displayEducation.classList.add('current');
              $education.classList.remove('d-none');
      })

      $displayWork.addEventListener('click', function(){
        $education.className = 'd-none';
        $displayEducation.classList.remove('current');
        $displayWork.classList.add('current');
        $work.classList.remove('d-none');
      })
})


let mainNavLinks = document.querySelectorAll(".top-nav-link");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    if(link.hash){
      let section = document.querySelector(link.hash);
    if (  
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight - 150 > fromTop || 
        isInViewport(section)
      ) {
        document.querySelector(".active").classList.remove("active");
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});


function isInViewport(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
