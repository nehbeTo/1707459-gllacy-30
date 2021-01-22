let page = document.querySelector('.page');
let greenThemeButton = document.querySelector('.green-theme-button');
let blueThemeButton = document.querySelector('.blue-theme-button');
let redThemeButton = document.querySelector('.red-theme-button');

redThemeButton.onclick = function() {
    page.classList.remove('blue-theme', 'green-theme');
    page.classList.add('red-theme');
} 

blueThemeButton.onclick = function() {
    page.classList.remove('green-theme', 'red-theme');
    page.classList.add('blue-theme');
} 

greenThemeButton.onclick = function() {
    page.classList.remove('red-theme', 'blue-theme');
    page.classList.add('green-theme');
} 