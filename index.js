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
})