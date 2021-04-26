// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var stickyOffset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyOffset) {
    navbar.classList.add("sticky")
    console.log("OLAAAAAAAAAAAAA");
  } else {
    navbar.classList.remove("sticky");
  }
}