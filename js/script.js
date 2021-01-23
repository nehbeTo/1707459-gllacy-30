let page = document.querySelector('.page');
let greenBackground = document.querySelector('.green-promo-background');
let blueBackground = document.querySelector('.blue-promo-background');
let redBackground = document.querySelector('.red-promo-background');
let greenThemeButton = document.querySelector('.green-theme-button');
let blueThemeButton = document.querySelector('.blue-theme-button');
let redThemeButton = document.querySelector('.red-theme-button');

redThemeButton.onclick = function() {
    page.classList.remove('blue-theme', 'green-theme');
    page.classList.add('red-theme');
    greenBackground.classList.add('hidden');
    blueBackground.classList.add('hidden');
    redBackground.classList.remove('hidden');
} 

blueThemeButton.onclick = function() {
    page.classList.remove('green-theme', 'red-theme');
    page.classList.add('blue-theme');
    greenBackground.classList.add('hidden');
    redBackground.classList.add('hidden');
    blueBackground.classList.remove('hidden');
} 

greenThemeButton.onclick = function() {
    page.classList.remove('red-theme', 'blue-theme');
    page.classList.add('green-theme');
    blueBackground.classList.add('hidden');
    redBackground.classList.add('hidden');
    greenBackground.classList.remove('hidden');
} 