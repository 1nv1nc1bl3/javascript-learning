'use strict';

const modals = {
    modalOne: {
        title: "I'm modal window One",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    modalTwo: {
        title: "I'm modal window Two",
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    modalThree: {
        title: "I'm modal window Three",
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
};

// Assign selectors to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let i;

// Functions
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Opening the modal
for (i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Closing the modal by clicking the 'X' button
btnCloseModal.addEventListener('click', closeModal);

// Closing the modal by clicking on overlay
overlay.addEventListener('click', closeModal);

// Closing the modal by pressing the ESC button
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
