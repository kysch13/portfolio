//var lbSwipe = document.getElementById('lightbox');
var lbSwipe = document.getElementById('lb-swipezone');
var swipeNext = document.getElementById('swipe-next');
var swipePrev = document.getElementById('swipe-prev');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(lbSwipe);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    if (ev.type == "panleft"){
        swipeNext.click();
        return;
    } else if (ev.type == "panright") {
        //swipePrev.click();
        //alert("PREV!");
        return;
    }
    //lbSwipe.textContent = ev.type +" gesture detected.";
});

