const popupProfile = document.querySelector('.popup_profile')
const editButton = document.querySelector('.profile__edit-button')
const closeButton = document.querySelector('.popup__close-button')
const inputName = document.querySelector('.popup__form-input_name')
const inputJob = document.querySelector('.popup__form-input_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const profileFormElement = document.querySelector('.popup__form_profile')
//открытие попапа
function popupOpen(popup) {
	popup.classList.add('popup_opened');
}
//закрытие попапа
function popupClose(popup) {
	popup.classList.remove('popup_opened')
}
//открытие попапа редактирования профиля с сохранеными значениями
function popupProfileOpen() {
	popupOpen(popupProfile)
	inputName.value = profileName.textContent;
	inputJob.value = profileJob.textContent
}

//изменения данных и закрытие попапа
function handlerSubmitProfileForm (evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value
	profileJob.textContent = inputJob.value
	popupClose(popupProfile)
}

editButton.addEventListener('click', popupProfileOpen);
closeButton.addEventListener('click', () => popupClose(popupProfile));
profileFormElement.addEventListener('submit', handlerSubmitProfileForm);

// 5 sprint
//Попап для добавления карточки
const popupCard = document.querySelector('.popup_card');
const addPopupCardBtn = document.querySelector('.profile__add-button');
const closePopupCardBtn = document.querySelector('.popup__close-button_card');
const popupCardTitle = document.querySelector('.popup__form-input_title');
const popupCardLink = document.querySelector('.popup__form-input_link');
const popupCardSubmitBtn = document.querySelector('.popup__form-submit_card');
//добавление новой карточки
const sectionEl = document.querySelector(".elements");
const elTemplate = document.querySelector('.elements__element-template');
//попапа с фото
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoTitle = document.querySelector('.popup__title-photo');
const popupPhotoImage = document.querySelector('.popup__image');
const imageCloseBtn = document.querySelector('.popup__close-button_photo');
const formListener = document.querySelector('.popup__form_card');

//открытие попапа
function popupCardOpen() {
	popupOpen(popupCard)
}

//закрытие попапа
function popupCardClose() {
	 popupClose(popupCard)
}

//добавление новой карточки
function newCard(evt){
	evt.preventDefault();
	const inputTitle = popupCardTitle.value;
	const inputLink = popupCardLink.value;
	const saveCard = addCard({ link: inputLink, name: inputTitle });
	sectionEl.prepend(saveCard);
	inputTitle.value = "";
	inputLink.value = "";
	popupCardClose(evt);
}

function addCard(add) {
  const cardElement = elTemplate.content.cloneNode(true);
  const elName = cardElement.querySelector(".elements__title");
	elName.textContent = add.name;

  const elImage = cardElement.querySelector(".elements__image");
	elImage.src = add.link;
	elImage.alt = add.name;

  const urnButton = cardElement.querySelector(".elements__urn-btn");
  urnButton.addEventListener("click", handleRemove); 

  const heartButton = cardElement.querySelector(".elements__button-like");
  heartButton.addEventListener("click", handleLike);


	const photoShowBtn = elImage;
	photoShowBtn.addEventListener('click', () => {
		showPhoto(add)
	});
	return cardElement;
}

//удаление карточки
function handleRemove(evt){
	const targetEl = evt.target;
	const targetItem = targetEl.closest('.elements__element');
	targetItem.remove();
}	

//лайк
function handleLike(evt){
	const targetEl = evt.target;
	const targetItem = targetEl.closest('.elements__button-like');
	targetItem.classList.toggle('elements__button-like_black');
}

//открытие попапа с фото
function showPhoto(item) {
	popupOpen(popupPhoto)
	popupPhotoTitle.textContent = item.name;
	popupPhotoImage.src = item.link;
}
//закрытие попапа с фото
function closePhoto(){
	popupClose(popupPhoto)
}
function render() {
	const card = initialCards.map(addCard);
	sectionEl.append(...card);
}

initialCards.forEach((item) => {
  addCard(item);
});

render();

addPopupCardBtn.addEventListener('click', popupCardOpen);
closePopupCardBtn.addEventListener('click', popupCardClose);
popupCardSubmitBtn.addEventListener('submit', newCard);
formListener.addEventListener('submit', newCard);
imageCloseBtn.addEventListener('click', closePhoto);








	




