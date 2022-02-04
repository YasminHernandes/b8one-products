/* COUNTER */
const minusButton = document.querySelector(".minus-button")
const plusButton = document.querySelector(".plus-button")
const counterValue = document.querySelector(".value")

counterButtonHandler = operation => {
    let currentValue = +counterValue.innerHTML

    switch(operation) {
        case "+": 
            currentValue++
            counterValue.innerHTML = currentValue
            break;
        case "-":
            currentValue--
            if(currentValue >= 1) {
                counterValue.innerHTML = currentValue
            }
            break;
        default:
            break;
    }
}

minusButton.addEventListener('click', () => counterButtonHandler("-"))
plusButton.addEventListener('click', () => counterButtonHandler("+"))


/* MODAL ADD TO CART  */
const modalAddToCart = document.querySelector(".modal.add-cart")
const buttonAddToCart = document.querySelector(".modal.add-cart.ok")
const addToCart = document.querySelector(".add-to-cart")
const bagItems = document.querySelector(".bag-items")
const header = document.querySelector('header')
const main = document.querySelector('main')
const body = document.querySelector('body')

openModal = () => {
    header.style.opacity = "0.5"
    main.style.opacity = "0.5"
    modalAddToCart.classList.add('on')
    bagItems.innerHTML = counterValue.innerHTML;
    body.style.overflow= "hidden"
}

 closeModal = () => {
    header.style.opacity = "1"
    main.style.opacity = "1"
    modalAddToCart.classList.remove('on')
    body.style.overflowY = "initial"
}

window.setInterval(closeModal, 2500)
addToCart.addEventListener('click', () => openModal())
