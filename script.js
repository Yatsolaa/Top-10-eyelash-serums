window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation_active');
        })
    })
})

$(document).ready(function(){
  $('#to-top').on("click", function (event){
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top - 60;
      console.log($(this));
    $('body,html').animate({scrollTop: top}, 1000);
  })

  $(".navigation-block").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 60;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log('qq');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "inline-block";
  } else {
    mybutton.style.display = "none";
  }
}






