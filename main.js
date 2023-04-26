// $(document).ready(function () {
//     $('.toggle-btn').click(function (){
//         $(this).toggleClass('active');
//         $('.navbar-nav').toggleClass('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navbarNav = document.querySelector('.navbar-nav');
  
    toggleBtn.addEventListener('click', function() {
      toggleBtn.classList.toggle('active');
      navbarNav.classList.toggle('active');
    });
  });
  