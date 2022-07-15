/***********************
 * IPHONE BUTTON
 **********************/

// VERSION 1
/*
const btn = document.querySelector('#lock-btn');

btn.addEventListener("click", function() {
    const iphoneLocked = document.querySelector('#iphone-locked');

    if(iphoneLocked.style.opacity == 0) {
        iphoneLocked.style.opacity = 1;
    }
    else {
        iphoneLocked.style.opacity = 0; 
    }
}, false);
*/

// VERSION 2
const btn = document.querySelector('#lock-btn');

btn.addEventListener("click", function() {
    const iphoneLocked = document.querySelector('#iphone-locked');
    const iphoneUnlocked = document.querySelector('#iphone-unlocked');

    if(iphoneLocked.style.display == 'none') {
        iphoneLocked.style.display = 'inline-block';
        iphoneUnlocked.style.display = 'none';
    }
    else {
        iphoneLocked.style.display = 'none'; 
        iphoneUnlocked.style.display = 'inline-block';
    }
}, false);

/***********************
 * COUNTER
 **********************/

$(document).ready(function () {
    $('.timer').viewportChecker({
        callbackFunction: function (elem, action) {
        elem.countTo({
            speed: 3000
        });
        }
    });
});

/***********************
 * OWL CAROUSEL
 **********************/

$('#team-members-carousel').owlCarousel({
    items: 4,
    margin: 0,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
        1280: {
            items: 4,
        },
        768: {
            items: 3,
        },
        520: {
            items: 2,
        },
        0: {
            items: 1,
        },
    }
})

$("#price-slider").owlCarousel({
    items: 3,
    autoplay: false,
    loop: false,
    margin: 30,
    padding: 0,
    dots: false,
    nav: false,
    responsive: {
        1280: {
            items: 3,
        },
        980: {
            items: 3,
        },
        600: {
            items: 2,
        },
        0: {
            items: 1,
        },
    }
});

$("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    mouseDrag: true,
    loop: true,
    margin: 30,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    dots: false,
    nav: false,
    responsive: {
        980: {
            items: 1,
        },
        600: {
            items: 1,
        },
        320: {
            items: 1,
        },
    }
});

$("#partners-slider").owlCarousel({
    items: 5,
    autoplay: 1500,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    slideBy: 1,
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    responsive: {
        1400: {
            items: 6,
        },
        1200: {
            items: 5
        },
        991: {
            items: 4,
        },
        767: {
            items: 3,
        },
        480: {
            items: 2,
        },
        0: {
            items: 1,
        },
    }
});

/***********************
 * JUSTIFIED GALLERY
 **********************/

$('#portfolio-gallery').justifiedGallery({
    rowHeight : 220,
    captions: false, 
    margins : 5,
    maxRowsCount: 4
});

// Lightbox configuration
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Image %1 from %2",
    'disableScrolling': true
});