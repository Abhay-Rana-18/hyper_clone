
const rotateDown = () => {
    let element = $('.Myslide');
    element.css('transform', `translateX(-100vw)`);
};

const rotateUp = () => {
    let element = $('.Myslide');
    element.css('transform', `translateX(0)`);
};


$('.Myslide').on('mousewheel', function(event) {
    console.log(event.originalEvent.deltaY);
    // Detect the direction of the mouse scroll
    if (event.originalEvent.deltaY < 0) {
        // Scrolling up (towards the top)
        rotateUp();
    } else {
        // Scrolling down (towards the bottom)
        rotateDown();
    }
  });

