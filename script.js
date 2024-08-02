        // NAVIGATIONS FUNCTIONALITY
        window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar');
            var heroSection = document.querySelector('.hero-section');
            var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            if (window.scrollY > heroBottom) {
                navbar.classList.remove('navbar-sticky');
            } else {
                navbar.classList.add('navbar-sticky');
            }
        });
        $('.navbar-toggler').on('click', function() {
            $('.navbar-collapse').toggleClass('show');
});

                //TESTIMONIALS FUNCTIONALITY

                document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#testimonialCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000,
        ride: 'carousel'
    });
});

                // PRE-LOADER FUNCTIONALITY

 // Function to show the pre-loader
 function showPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.classList.remove('hidden');
}

// Function to hide the pre-loader
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
}

// Show the pre-loader and hide it after a minimum duration
function handlePreloader() {
    showPreloader();

    // Promise to handle the minimum duration
    return new Promise(resolve => {
        setTimeout(() => {
            hidePreloader();
            resolve();
        }, 1000); 
    });
}

window.addEventListener('load', function () {
    
    handlePreloader();
});