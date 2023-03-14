
const allSliders = {
    firstSliderStart: function firstSliderStart() {
        const sliderContainer = document.querySelector('.slider__container')
        const imgsSlider = document.querySelectorAll('.slider_item')
        const sliderLine = document.querySelector('.slider__items')
        const arrow = document.querySelector('.slider_arrow')

        

        let width
        function init(container, img, slider, qtyOfElem, gap) {
            width = container.offsetWidth;
            slider.style.width = width * img.length + 'px';
            img.forEach(Element => {
                Element.style.width = width / qtyOfElem - gap + 'px';
                Element.style.height = 'auto';
            })

        }
        init(sliderContainer, imgsSlider, sliderLine, 1, 0)
        window.addEventListener('resize', function () {
            init(sliderContainer, imgsSlider, sliderLine, 1, 0)
            sliderMoveRight()
        })
        window.addEventListener('mouseover', function () {
            init(sliderContainer, imgsSlider, sliderLine, 1, 0)
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
            init(sliderContainer, imgsSlider, sliderLine, 1, 0)
        })
 
    }
    ,
    secondSliderStart: function secondSliderStart() {
        const secondSliderContainer = document.querySelector('.secondSliderLine')
        const secondImgsSlider = document.querySelectorAll('.secondSlider_item')
        const secondSliderLine = document.querySelector('.secondSlider__items')
        const secondArrowSlider = document.querySelectorAll('.secondSlider_arrow')
       
        

        let width1
        function init(container, img, slider, qtyOfElem, gap) {
            width1 = container.offsetWidth;
            slider.style.width = width1 * img.length + 'px';
            img.forEach(Element => {
                Element.style.width = width1 / qtyOfElem - gap + 'px';
                Element.style.height = 'auto';
            })

        }
        init(secondSliderContainer, secondImgsSlider, secondSliderLine, 2, 29)

        window.addEventListener('resize',  function () {
            init(secondSliderContainer, secondImgsSlider, secondSliderLine, 2, 29)

            sliderMoveRight1()
        })
        window.addEventListener('mouseover',  function () {
            init(secondSliderContainer, secondImgsSlider, secondSliderLine, 2, 29)

            sliderMoveRight1()
        })

        let count2 = 0
        secondArrowSlider[1].addEventListener('click', function () {
            if (count2 < secondImgsSlider.length - 2)
                count2++
            else if (count2 >= secondImgsSlider.length - 2)
                count2 = 0

            else
                count2 = 1;
            sliderMoveRight1()
        })

        let count3 = secondImgsSlider.length
        secondArrowSlider[0].addEventListener('click', function () {
            if (count3 <= 0 || count3 == secondImgsSlider.length) {
                count3 = secondImgsSlider.length - 2;
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
            init(secondSliderContainer, secondImgsSlider, secondSliderLine, 2, 29)
            sliderMoveRight1()
        })
        window.onload = init(secondSliderContainer, secondImgsSlider, secondSliderLine, 2, 29)
    },
    thirdSliderStart: function thirdSliderStart() {
        const thirdSliderContainer = document.querySelector('.thirdSlider-sliderLine')
        const thirdImgsSlider = document.querySelectorAll('.thirdSlider_item')
        const thirdSliderLine = document.querySelector('.thirdSlider__items')
        const thirdArrowSlider = document.querySelectorAll('.thirdSlider_arrow')
        
        let width3
        function init(container, img, slider, qtyOfElem, gap) {
            width3 = container.offsetWidth;
            slider.style.width = width3 * img.length + 'px';
            img.forEach(Element => {
                Element.style.width = width3 / qtyOfElem - gap + 'px';
                Element.style.height = 'auto';
            })

        }
        init(thirdSliderContainer, thirdImgsSlider, thirdSliderLine, 4, 31)
        // console.log(width1)

        window.addEventListener('resize', function () {
            init(thirdSliderContainer, thirdImgsSlider, thirdSliderLine, 4, 31)

            sliderMoveRight3()
        })
        window.addEventListener('mouseover', function () {
            init(thirdSliderContainer, thirdImgsSlider, thirdSliderLine, 4, 31)
            sliderMoveRight3()
        })

        let count4 = 0
        thirdArrowSlider[1].addEventListener('click', function () {

            if (count4 < thirdImgsSlider.length - 4) {
                count4++
                console.log(count4)
                sliderMoveRight3()
            }
            else if (count4 >= thirdImgsSlider.length - 4) {
                count4 = 0
                sliderMoveRight3()
            }

            else {
                count4 = 1;
                sliderMoveRight3()
            }
        })

        let count5 = thirdImgsSlider.length
        thirdArrowSlider[0].addEventListener('click', function () {
            if (count5 <= 0 || count5 == thirdImgsSlider.length) {
                count5 = thirdImgsSlider.length - 4;
                console.log(count5)
                sliderMoveLeft3();
            }
            else
                count5--;
            console.log(count5)
            sliderMoveLeft3();
        })

        function sliderMoveRight3() {
            thirdSliderLine.style.transform = 'translate(-' + width3 / 4 * count4 + 'px)';
        }
        function sliderMoveLeft3() {
            thirdSliderLine.style.transform = 'translate(-' + width3 / 4 * count5 + 'px)';
        }

        window.addEventListener('resize', function () {
            init(thirdSliderContainer, thirdImgsSlider, thirdSliderLine, 4, 30)
            sliderMoveRight3()
        })
        
        window.onload = init(thirdSliderContainer, thirdImgsSlider, thirdSliderLine, 4, 30)
    }
}

export const firstSliderStart = allSliders.firstSliderStart
export const secondSliderStart = allSliders.secondSliderStart
export const thirdSliderStart = allSliders.thirdSliderStart