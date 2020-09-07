AOS.init({
  duration: 500,
});

// const $navLinks = document.querySelectorAll('.top-nav-link');
// $navLinks.forEach((link) => {
//   link.addEventListener('click', function(){
//       const $currentActive = document.querySelector('.top-nav-item.active');
//       if($currentActive){
//         $currentActive.classList.remove('active');
//       }
//       $(link).parent()[0].classList.add('active');
//   })
// })

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

const $viewResume = document.querySelector('#view-resume');
const $resume = document.querySelector('#resume');
const $hideResume = document.querySelector('#hide-resume');
const $displayEducation = document.querySelector('.display-education');
const $education = document.querySelector('#education'); 
const $displayWork = document.querySelector('.display-work');
const $work = document.querySelector('#work');

$viewResume.addEventListener('click', function(){
  $resume.classList.remove('d-none');
  $hideResume.classList.remove('d-none');
  $viewResume.className = 'd-none';
  
})

$hideResume.addEventListener('click', function(){
  $resume.className = 'd-none';
  $hideResume.className = 'd-none';
  $viewResume.classList.remove('d-none');
  
})

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
