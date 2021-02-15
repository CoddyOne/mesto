let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit-button')
let closeButton = document.querySelector('.popup__close-button')
let inputName = popup.querySelector('.popup__form-input_name')
let inputJob = document.querySelector('.popup__form-input_job')
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
	popupClose()
}

editButton.addEventListener('click', popupOpen)
closeButton.addEventListener('click', popupClose)
formElement.addEventListener('submit', formSubmitHandler)

// 5 sprint

//ДОБАВЛЕНИЕ КАРТОЧЕК//
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
let sectionGrid = document.querySelector(".elements"); //cекция для карточек//
const cardTemplate = document.querySelector(".elements__element-template").content; //переменная темплейта//

//функция для вставки новой карточки//
function addCard(add) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__title").textContent = add.name;
  cardElement.querySelector(".elements__image").src = add.link;

  //удаление карточки//
  let urnButton = cardElement.querySelector(".elements__urn-btn");
  urnButton.addEventListener("click", function (evt) {
    let deletUrnButton = evt.target.closest(".elements__element");
    deletUrnButton.remove();
  });
  //лайки//
  let heartButton = cardElement.querySelector(".elements__button-like");
  heartButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__button-like_black");
  });
  //открытие попапа с фото//
  // let imageButton = cardElement.querySelector(".elements__image");
  // let imageLink = document.querySelector(".foto-open__image");
  // let nameCard = document.querySelector(".foto-open__name");
  // imageButton.addEventListener("click", function () {
  //   fotoCard.classList.add("popup_opened");
  //   nameCard.textContent = add.name;
  //   imageLink.src = add.link;
  // });

  function newAddCard(add) {
    sectionGrid.prepend(add);
  }
  newAddCard(cardElement);
}

function inatialCard() {
  const cardElementNew = cardTemplate.cloneNode(true);
  cardElementNew.querySelector(".foto-grid__name-title").textContent =
    inputName.value;
  cardElementNew.querySelector(".foto-grid__item").src = inputExplorer.value;
  sectionGrid.prepend(cardElementNew);
  return cardElementNew;
}

//цикл вставки массива карточек//

initialCards.forEach((item) => {
  addCard(item);
});

//функция очистки формы//
function clearForm() {
  inputName.value = "";
  inputExplorer.value = "";
}

//функция для отправки формы//
function cardFormSubmit(evt) {
  evt.preventDefault();
  closePopup();
  inatialCard();
}
//слушатель для отправки формы//

formElement.addEventListener("submit", cardFormSubmit);

