
const sliderContainer = document.querySelector('.slider-container')
const imgsSlider = document.querySelectorAll('.slider_item')
const sliderLine = document.querySelector('.slider__items')
const arrow = document.querySelector('.slider_arrow')

let width
function init() {
    width =  sliderContainer.offsetWidth;
    sliderLine.style.width = width * imgsSlider.length + 'px';
    imgsSlider.forEach(Element => {
        Element.style.width = width  + 'px';
        Element.style.height = 'auto';
    })

}
init()

window.addEventListener('resize', function () {
    init()
    sliderMoveRight()
})

let count1 = 0
arrow.addEventListener('click', function() {
    if (count1 < imgsSlider.length - 1)
            count1++
        else if (count1 >= imgsSlider.length - 1)
            count1 = 0

        else
            count1 = 1;
    sliderMoveRight()
}
)

function sliderMoveRight () {
sliderLine.style.transform = 'translate(-' + width * count1 + 'px)';
}

window.addEventListener('resize', function () {
    init()  
})