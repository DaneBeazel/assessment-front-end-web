let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

function favColor() {
    alert('My favorite color is gray')
}

function favPlace() {
    alert("My favorite place is yo momma's house")
}

function favRitual() {
    alert('My favorite ritual is sleeping')
}

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)