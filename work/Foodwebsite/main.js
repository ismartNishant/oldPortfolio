let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.toggle('active')
// }

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

$(document).ready(function () {
  $('.controls .buttons').click(function () {

    $(this).addClass('button-active').siblings().removeClass('button-active');

    let filter = $(this).attr('data-filter');
    if (filter == 'all') {
      $('.dishes .box').show(400);
    } else {
      $('.dishes .box').not('.' + filter).hide(200);
      $('.dishes .box').filter('.' + filter).show(400);
    }

  });

  $('.navbar a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

});

//preloadr
$(window).on('load',function(){
  setTimeout(function(){
    $(".preloader").fadeOut('slow');
  },3000)
})

//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});