
const burger = document.querySelector('.header__burger1')
const headerBurger_menu = document.querySelector('.header__burger1_menu_items')
const headerBurger = {
    burger744: function burger744() {

        console.log(burger)
        console.log(headerBurger)
        burger.addEventListener('click', () => {
            headerBurger_menu.classList.toggle('header__burger1_menu_items_active')
            burger.classList.toggle('header__burger1_active')
            document.querySelector('body').classList.toggle('lock');
        })

    }
}

export const burgerMobile = headerBurger.burger744