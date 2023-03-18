
const burger = document.querySelector('.header__burger1')
const headerBurger_menu = document.querySelector('.header__burger1_menu_items')

const sliderButton = document.querySelector('.slider_arrow_first')
const imgButton = document.querySelector('.arrow-item')
const imgButtonSmall = document.querySelector('.arrow-item')
console.log (imgButtonSmall)
const sliderHeight = document.querySelector('.slider__items')
const sliderWidth = document.querySelector('.container__header')

// console.log (sliderButtonHeight)
let arrowHeightPosition
let arrowWidthPosition
let buttonDiameter
let buttonDiameterSmall

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

    },
    arrowPositionMedia1401: function arrowPositionMedia1401 () {
        const matchMedia = window.matchMedia('(max-width:1400px)')
            if (matchMedia.matches) {
                buttonDiameter = imgButton.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameter / 2) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.9 - buttonDiameter) + 'px';
            }

    },
    arrowPositionResizeMedia1201: function arrowPositionResizeMedia1201() {
        window.addEventListener('resize', () => { 
            const matchMedia = window.matchMedia('(max-width:1201px)')
            if (matchMedia.matches) {
                buttonDiameter = imgButton.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameter / 2) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.85) + 'px';
            }

        })

    },
    arrowPositionMedia1201: function arrowPositionMedia1201 () {
        const matchMedia = window.matchMedia('(max-width:1201px)')
            if (matchMedia.matches) {
                buttonDiameter = imgButton.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameter / 2) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.85) + 'px';
            }

    },
    arrowPositionResizeMedia961: function arrowPositionResizeMedia961() {
        window.addEventListener('resize', () => { 
            const matchMedia = window.matchMedia('(max-width:961px)')
            if (matchMedia.matches) {
                buttonDiameterSmall = imgButtonSmall.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameterSmall / 3) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.85) + 'px';
            }

        })

    },
    arrowPositionMedia961: function arrowPositionMedia961 () {
        const matchMedia = window.matchMedia('(max-width:961px)')
            if (matchMedia.matches) {
                buttonDiameterSmall = imgButtonSmall.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameterSmall / 3) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.85) + 'px';
            }

    },
    arrowPositionResizeMedia744: function arrowPositionResizeMedia744() {
        window.addEventListener('resize', () => { 
            const matchMedia = window.matchMedia('(max-width:744px)')
            if (matchMedia.matches) {
                buttonDiameterSmall = imgButtonSmall.naturalHeight
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameterSmall / 4) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.9) + 'px';
            }

        })

    },
    arrowPositionMedia744: function arrowPositionMedia744 () {
        const matchMedia = window.matchMedia('(max-width:744px)')
            if (matchMedia.matches) {
                buttonDiameterSmall = imgButtonSmall.naturalHeight
                console.log(buttonDiameterSmall)
                arrowHeightPosition = sliderHeight.offsetHeight
                arrowWidthPosition = sliderWidth.offsetWidth
                sliderButton.style.top = (arrowHeightPosition / 2 - buttonDiameterSmall / 4) + 'px';
                sliderButton.style.left = (arrowWidthPosition * 0.9) + 'px';
            }

    }
}

export const burgerMobile = headerBurger.burger744
export const arrowPosition = headerBurger.arrowPosition
export const arrowPositionResize = headerBurger.arrowPositionResize
export const arrowPositionResizeMedia1401 = headerBurger.arrowPositionResizeMedia1401
export const arrowPositionMedia1401 = headerBurger.arrowPositionMedia1401
export const arrowPositionResizeMedia1201 = headerBurger.arrowPositionResizeMedia1201
export const arrowPositionMedia1201 = headerBurger.arrowPositionMedia1201
export const arrowPositionResizeMedia961 = headerBurger.arrowPositionResizeMedia961
export const arrowPositionMedia961 = headerBurger.arrowPositionMedia961
export const arrowPositionResizeMedia744 = headerBurger.arrowPositionResizeMedia744
export const arrowPositionMedia744 = headerBurger.arrowPositionMedia744

