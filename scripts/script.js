let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit-button')
let closeButton = document.querySelector('.popup__close-button')
let inputName = popup.querySelector('.popup__form-name')
let inputJob = popup.querySelector('.popup__form-job')
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let formElement = document.querySelector('.popup__form')

let popupOpen = function(){
	popup.classList.add('popup_opened')
	inputName.value = profileName.textContent
	inputJob.value = profileJob.textContent	
}

let popupClose = function(){
	popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt){
	evt.preventDefault();
	profileName.textContent = inputName.value
	profileJob.textContent = inputJob.value
	popupOpen()
	popupClose()
}

editButton.addEventListener('click', popupOpen)
closeButton.addEventListener('click', popupClose)
formElement.addEventListener('submit', formSubmitHandler)
