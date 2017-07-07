setTimeout(function() {
    document.getElementById('logo').classList.remove('intro');
    setTimeout(function() {
        document.getElementById('logo').classList.add('small');
        document.getElementById('cache').classList.remove('intro');
        setTimeout(function() {
            document.getElementById('logo').style.pointerEvents = "none";
        }, 1000);
    }, 1000);
}, 500);

var vinyl 		      = document.getElementById('vinyls'),
    toggleDescription = document.getElementById('toggleDescription');

toggleDescription.addEventListener('click', function(e) {
    e.stopPropagation();
    document.body.classList.toggle('descriptionOpened');
}, false);

vinyl.addEventListener('click', function(e) {
    document.body.classList.remove('descriptionOpened');
}, false);

var vinyls = document.getElementsByClassName('vinyl');
for(var i = 0; i < vinyls.length; i++) {
    vinyls[i].addEventListener('click', function(e) {
        e.preventDefault();
        setTimeout((function() {
            window.location = this.href;
        }).bind(this), 1000);
        document.getElementById('cache').classList.add('active');
    }, false);
}

var slideshow = new Swiper ('#vinyls', {
    speed: 500,
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 'auto',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-prev',
    nextButton: '.swiper-next',
    onTransitionStart:function(swiper) {
        if(swiper.isBeginning) {
            swiper.prevButton[0].classList.add('disabled');
        } else if(swiper.isEnd) {
            swiper.nextButton[0].classList.add('disabled');
        } else {
            swiper.prevButton[0].classList.remove('disabled');
            swiper.nextButton[0].classList.remove('disabled');
        }
    }
});
