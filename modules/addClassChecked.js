// функция удаляет пробелы при брейкпойнте 1201px

export default function addClassChecked() { const radio = document.querySelectorAll('.fourthSlider3-items_material>input')
const labelRadio = document.querySelectorAll('.fourthSlider3-items_material>label')
console.log(radio)
console.log(labelRadio)
// const radioBtn = Array.from(radio)
// console.log(radioBtn)
radio.forEach((el, index) => {

    el.addEventListener('click', () => {
        if (el.checked) {
            labelRadio.forEach(el => { el.classList.remove('fourthSlider3-checked') })
            labelRadio[index].classList.add('fourthSlider3-checked')
        }
    })
})}