// const selectElement = (element) => document.querySelector(element);
// selectElement('.menu-icons').addEventListener('click', () =>{
//   selectElement('nav').classList.toggle('active');
// });


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function humFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//toggle side menu
function navFunction() {
  document.getElementById("dropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-list')) {
     var dropdowns = document.getElementsByClassName("sub-menu");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
    }
 }
}




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//humbuger button toggle
$(document).ready(function (){
  //toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.container .nav-list ').toggleClass("hidden");
    $('.menu-btn i').toggleClass("hidden");
 });
})
$(document).ready(function(){
  //toggle menu/navbar script
//   $('.nav-list').click(function() {
//     $('nav-list .sub-menu').toggleClass("dropdown1");
    
//  });
 $("#design").click(function(){
  $("#design-revealed").toggle();
  $(".hide-design-image").toggle();
})
})
// remove the hover





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



