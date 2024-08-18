const addButtonsHome = document.querySelectorAll('[data-addhome]');
const addButtonsGuest = document.querySelectorAll('[data-addguest]');
const homeScoreElement = document.querySelector('.score-display.home p');
const guestScoreElement = document.querySelector('.score-display.guest p');



function addHome(){

    let currentScore = parseInt(homeScoreElement.textContent)

    homeScoreElement.textContent = currentScore + parseInt(this.dataset.addhome)
}


function addGuest(){

    let currentScore = parseInt(guestScoreElement.textContent)

    guestScoreElement.textContent = currentScore + parseInt(this.dataset.addguest)
}


addButtonsHome.forEach(addButton => addButton.addEventListener("click", addHome));
addButtonsGuest.forEach(addButton => addButton.addEventListener("click", addGuest));
