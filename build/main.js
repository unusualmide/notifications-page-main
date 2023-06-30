'use strict';

const markAllAsRead = document.querySelector('.mark');
const messages = document.querySelector('.messages');
const blink = document.querySelectorAll('.blink');
const removal = document.querySelectorAll('.removal');

markAllAsRead.addEventListener('click', function () {
    messages.textContent = 0;
    blink.forEach((i) => {
        i.classList.add('hidden');
    });
    removal.forEach((i) => {
        i.style.backgroundColor = '#FFFFFF';
    })
})
