
function onDocumentLoad() {
    const btn = document.querySelector(".nav-button")
    const nav = document.querySelector(".site-navigation")
    btn.addEventListener( "click" , function() {
        if( nav.classList.contains("open") ) {
            nav.classList.remove("open")
        }
        else {
            nav.classList.add("open")
        }
    })
    //carousel 
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true
    });
}


window.addEventListener("load", onDocumentLoad )