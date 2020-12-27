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
              $displayWork.classList.remove('active');
              $displayEducation.classList.add('active');
              $education.classList.remove('d-none');
      })

      $displayWork.addEventListener('click', function(){
        $education.className = 'd-none';
        $displayEducation.classList.remove('active');
        $displayWork.classList.add('active');
        $work.classList.remove('d-none');
      })
      
    let mainNavLinks = document.querySelectorAll(".top-nav-link");

    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
      // console.log("From Top: " + fromTop);
      mainNavLinks.forEach(link => {
        if(link.hash){
          let section = document.querySelector(link.hash);
          let pos = section.getBoundingClientRect().top;
          // console.log(section.getBoundingClientRect().top);
          // console.log("section.offsetHeight: " + section.offsetHeight);
        if ( 
            -pos > -20 && -pos <= section.offsetHeight || 
            isInViewport(section)
          ) {
            let existing = document.querySelector(".current");
            if(existing)existing.classList.remove("current");
            link.classList.add("current");
          } else {
            link.classList.remove("current");
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
      
})