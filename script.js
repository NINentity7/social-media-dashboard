/* select variables */

const mode = document.querySelectorAll('.mode');
const toggleBtn = document.querySelector('.switch');
const darkMode = document.querySelectorAll('.light');

darkMode.forEach(function (element) {
    toggleBtn.addEventListener('click', function () {
        element.classList.toggle('dark');
    });
});

mode.forEach(function (element) {
    toggleBtn.addEventListener('click', function () {
        element.classList.toggle('hidden');
    });
});