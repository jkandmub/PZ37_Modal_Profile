"use strict";

const dialog = document.querySelector("#profile-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const form = document.querySelector("#profile-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

openButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog.open) {
    event.preventDefault();
    dialog.close();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = input.value.trim(); 
  if (name.length > 0) {
    profileName.textContent = name;
    dialog.close();
  } else {
    dialogError.textContent = 'Имя не может быть пустым';
  }
});


// Задание 1. На click кнопки openButton откройте dialog через showModal().

// Задание 2. На click кнопки closeButton закройте dialog через close().

// Задание 3. На submit формы отмените перезагрузку страницы.
// Если input.value.trim() не пустой, обновите profileName.textContent,
// измените status и закройте dialog. Иначе покажите подсказку в dialogError.

// Задание 4. Проверьте Escape: для <dialog> браузер уже умеет закрывать окно.
// Дополнительный обработчик Escape писать не нужно.
