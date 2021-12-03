window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');
    header = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
        header.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation_active');
            header.classList.toggle('header_active');
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
});

// nav

/* $(document).ready(function(){
  $(".navigation-block").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 60;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

$('.nav-item').click(function(e){
  $('.nav-item').removeClass('nav-item_active');
  $(this).addClass('nav-item_active');
  e.preventDefault();
}); */

//

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

//fade out on scroll

var heroText = document.getElementById('hero-text');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(heroText);
}

window.addEventListener('scroll', scrollHandler);

// jquery nav

$('#nav').onePageNav({
	currentClass: 'nav-item_active',  
	changeHash: true,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	easing: 'swing',
});

