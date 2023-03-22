import { firstSliderStart, secondSliderStart, thirdSliderStart, thirdSliderStartMedia1201 } from "../modules/allSliders.js"
import { burgerMobile, arrowPosition, arrowPositionResize, arrowPositionResizeMedia1401, arrowPositionMedia1401, arrowPositionResizeMedia1201, arrowPositionMedia1201, arrowPositionMedia961, arrowPositionResizeMedia961, arrowPositionMedia744, arrowPositionResizeMedia744 } from '../modules/burger.js'
import deleteBr from "../modules/deleteBr.js"
import addClassChecked from "../modules/addClassChecked.js"

deleteBr()
firstSliderStart() // первый слайдер
secondSliderStart() // второй
thirdSliderStart() // третий
window.addEventListener('resize', thirdSliderStart) // третий при рисайзе
thirdSliderStartMedia1201() // третий media1201
window.addEventListener('resize', thirdSliderStartMedia1201) // третий медиа при рисайзе

burgerMobile() // бургер
arrowPosition() //функция позиционирует стрелку относительно слайдера
arrowPositionResize() //функция позиционирует стрелку относительно слайдера при рисайзе
arrowPositionResizeMedia1401() // функция позиционирует стрелку относительно слайдера при рисайзе при медиа 1400px
arrowPositionMedia1401()
arrowPositionResizeMedia1201() // функция позиционирует стрелку относительно слайдера при медиа 1400px
arrowPositionMedia1201() // функция позиционирует стрелку относительно слайдера при медиа 1400px
arrowPositionResizeMedia961() // функция позиционирует стрелку относительно слайдера при медиа 1400px
arrowPositionMedia961() // функция позиционирует стрелку относительно слайдера при медиа 1400px
arrowPositionResizeMedia744() // функция позиционирует стрелку относительно слайдера при медиа 1400px
arrowPositionMedia744() // функция позиционирует стрелку относительно слайдера при медиа 1400px
// import * as startSecondSlider from '../js/secondslider';
// const startSecondSlider = startSecondSlider()

addClassChecked() // добавляем класс checked для слайдерблока 3 в 4ом слайдере, чтобы радиобаттон имел нужный по макету стиль



