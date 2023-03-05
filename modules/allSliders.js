
const allSliders = {
    firstSliderStart: function firstSliderStart() {
        const sliderContainer = document.querySelector('.slider-container')
        const imgsSlider = document.querySelectorAll('.slider_item')
        const sliderLine = document.querySelector('.slider__items')
        const arrow = document.querySelector('.slider_arrow')

        let width
        function init() {
            width = sliderContainer.offsetWidth;
            sliderLine.style.width = width * imgsSlider.length + 'px';
            imgsSlider.forEach(Element => {
                Element.style.width = width + 'px';
                Element.style.height = 'auto';
            })

        }
        init()

        window.addEventListener('resize', function () {
            init()
            sliderMoveRight()
        })

        let count1 = 0
        arrow.addEventListener('click', function () {
            if (count1 < imgsSlider.length - 1)
                count1++
            else if (count1 >= imgsSlider.length - 1)
                count1 = 0

            else
                count1 = 1;
            sliderMoveRight()
        }
        )

        function sliderMoveRight() {
            sliderLine.style.transform = 'translate(-' + width * count1 + 'px)';
        }

        window.addEventListener('resize', function () {
            init()
        })
    }

    ,
    secondSliderStart: function secondSliderStart() {
        const secondSliderContainer = document.querySelector('.secondSliderLine')
        const secondImgsSlider = document.querySelectorAll('.secondSlider_item')
        const secondSliderLine = document.querySelector('.secondSlider__items')
        const secondArrowSlider = document.querySelectorAll('.secondSlider_arrow')
    
        let width1
        function init1() {
            width1 = secondSliderContainer.offsetWidth;
            secondSliderLine.style.width = width1 * secondImgsSlider.length + 'px';
            secondImgsSlider.forEach(Element => {
                Element.style.width = width1 / 2 - 31 + 'px';
                Element.style.height = 'auto';
            })
    
        }
        init1()
        console.log(width1)
    
        window.addEventListener('resize', function () {
            init1()
            sliderMoveRight1()
        })
    
        let count2 = 0
        secondArrowSlider[1].addEventListener('click', function () {
            if (count2 < secondImgsSlider.length - 1)
                count2++
            else if (count2 >= secondImgsSlider.length - 1)
                count2 = 0
    
            else
                count2 = 1;
            sliderMoveRight1()
        })
    
        let count3 = secondImgsSlider.length
        secondArrowSlider[0].addEventListener('click', function () {
            if (count3 <= 0 || count3 == secondImgsSlider.length) {
                count3 = secondImgsSlider.length - 1;
                sliderMoveLeft1();
            }
            else
                count3--;
            sliderMoveLeft1();
        })
    
        function sliderMoveRight1() {
            secondSliderLine.style.transform = 'translate(-' + width1 / 2 * count2 + 'px)';
        }
        function sliderMoveLeft1() {
            secondSliderLine.style.transform = 'translate(-' + width1 / 2 * count3 + 'px)';
        }
    
        window.addEventListener('resize', function () {
            init1()
            sliderMoveRight1()
            sliderMoveLeft1()
        })
    
    }
}








export const firstSliderStart = allSliders.firstSliderStart
export const secondSliderStart = allSliders.secondSliderStart