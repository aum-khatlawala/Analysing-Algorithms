/*For the navigation bar*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function maketopnavresponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else if (x.className === "topnav sticky") {
        x.className = "topnav responsive sticky";
    } else if (x.className === "topnav responsive sticky") {
        x.className = "topnav sticky";
    } else {
        x.className = "topnav";
    }
}
/*STICKY*/
// When the user scrolls the page, execute this
// Add the sticky class to the myTopnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function () {
    if (myTopnav.className === "topnav responsive") {
        myTopnav.className = "topnav sticky";
    } else if (myTopnav.className === "topnav responsive sticky") {
        myTopnav.className = "topnav sticky";
    } else if (window.pageYOffset >= sticky) {
        myTopnav.classList.add("sticky")
    } else {
        myTopnav.classList.remove("sticky");
    }
}

// Get the myTopnav
var myTopnav = document.getElementById("myTopnav");

// Get the offset position of the myTopnav
var sticky = myTopnav.offsetTop;

function changecolour(x) {
    x.style.backgroundColor = "white";
}
function colourchange(x) {
    x.style.backgroundColor = "black";
}