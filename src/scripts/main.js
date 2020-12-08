const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE ===

addName.addEventListener('click', (e) => {
  nameList.insertAdjacentHTML('beforeend', '<li>Maggie</li>');
});
