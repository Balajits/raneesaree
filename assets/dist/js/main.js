window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

        var ele = document.getElementById("navbar");
        ele.classList.add("shadow-lg");
        ele.classList.remove('bg-trans');
        ele.classList.add('bg-light');

    } else {

        var ele = document.getElementById("navbar");
        ele.classList.remove("shadow-lg");
        ele.classList.add('bg-trans');
        ele.classList.remove('bg-light');
    }
}


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollToTop();
};

function scrollToTop() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


