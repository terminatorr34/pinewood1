
const burger = document.querySelector('.header__burger1')
const headerBurger_menu = document.querySelector('.header__burger1_menu_items')

const sliderButton = document.querySelector('.slider_arrow_first')
const imgButton = document.querySelector('.arrow-item')
const sliderHeight = document.querySelector('.slider__items')
const sliderWidth = document.querySelector('.container__header')

// console.log (sliderButtonHeight)
let arrowHeightPosition
let arrowWidthPosition
let buttonDiameter

const headerBurger = {
    burger744: function burger744() {
        burger.addEventListener('click', () => {
            headerBurger_menu.classList.toggle('header__burger1_menu_items_active')
            burger.classList.toggle('header__burger1_active')
            document.querySelector('body').classList.toggle('lock');
        })

    },
    arrowPosition: function arrowPosition1() {

        buttonDiameter = imgButton.naturalHeight
        console.log(buttonDiameter)
        arrowHeightPosition = sliderHeight.offsetHeight
        arrowWidthPosition = sliderWidth.offsetWidth
        sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameter / 2) + 'px';
        sliderButton.style.left = (arrowWidthPosition * 0.9 - buttonDiameter / 3) + 'px';
    },
    arrowPositionResize: function arrowPositionResize() {
        window.addEventListener('resize', arrowPosition)
    },
    arrowPositionResizeMedia1401: function arrowPositionResizeMedia1401() {
        window.addEventListener('resize', () => {
            const matchMedia = window.matchMedia('(max-width:1400px)')
            if (matchMedia.matches) {
                buttonDiameter = imgButton.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameter / 2) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.9 - buttonDiameter) + 'px';
            }

        })

    }
}

export const burgerMobile = headerBurger.burger744
export const arrowPosition = headerBurger.arrowPosition
export const arrowPositionResize = headerBurger.arrowPositionResize
export const arrowPositionResizeMedia1401 = headerBurger.arrowPositionResizeMedia1401

