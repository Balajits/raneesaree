window.onscroll = function () {
    scrollFunction();
};


var mybutton = document.getElementById("btn-back-to-top");
var navbar = document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navbar.classList.add("shadow-lg");
        navbar.classList.remove('bg-trans');
        navbar.classList.add('bg-light');
        mybutton.style.display = "block";
    } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.add('bg-trans');
        navbar.classList.remove('bg-light');
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

