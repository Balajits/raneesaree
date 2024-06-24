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
