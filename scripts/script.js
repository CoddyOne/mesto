let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit-button')
let closeButton = document.querySelector('.popup__close-button')
let inputName = popup.querySelector('.popup__form-name')
let inputJob = popup.querySelector('.popup__form-job')
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let formElement = document.querySelector('.popup__form')

let popupOpen = function(){
	popup.classList.toggle('popup_opened')
}
popupOpen()
editButton.addEventListener('click', popupOpen)
closeButton.addEventListener('click', popupOpen)

let editPopup = function(){
	inputName.value = profileName.textContent
	inputJob.value = profileJob.textContent	
}
editPopup()

function formSubmitHandler (evt){
	evt.preventDefault();
	profileName.textContent = inputName.value
	profileJob.textContent = inputJob.value
	
	let popupOpen = function(){
		popup.classList.toggle('popup_opened')
}
popupOpen()
}
formElement.addEventListener('submit', formSubmitHandler)
