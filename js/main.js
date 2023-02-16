
const sliderContainer = document.querySelector('.slider-container')
const imgsSlider = document.querySelectorAll('.slider_item')
const sliderLine = document.querySelector('.slider__items')
console.log(imgsSlider.length)
const arrow = document.querySelector('.slider_arrow')
console.log (sliderContainer.offsetWidth)

let width = sliderContainer.offsetWidth;

function init() {
    
    sliderContainer.style.width = width * imgsSlider.length + 'px';
    imgsSlider.forEach(Element => {
        Element.style.width = width  + 'px';
        Element.style.height = 'auto';
    })
 
}
init()

window.addEventListener('resize', function () {
    init()
    // this.location.reload()
    
})

let count1 = 0
arrow.addEventListener('click', function() {
    if (count1 < imgsSlider.length - 1)
            count1++
        else if (count1 >= imgsSlider.length - 1)
            count1 = 0
        // else if (count1 == sliderImages.length)
        //     count1 = 0;

        else
            count1 = 1;
    sliderMoveRight()
}
)


function sliderMoveRight () {
    console.log('sdfsd')
sliderLine.style.transform = 'translate(-' + width * count1 + 'px)';
}

window.addEventListener('resize', function () {
    init()
    
})