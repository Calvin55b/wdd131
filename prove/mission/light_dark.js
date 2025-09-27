
let dark = document.getElementById('light');

let blackLogo = document.getElementById('logo');
let selectElem = document.getElementById('darkModeToggle')


selectElem.addEventListener("click", () => {
if (dark.id ==='light'){
    dark.setAttribute('id', 'darkMode');
    blackLogo.setAttribute('src', 'byui_logo_dark.png');


} else{
    dark.setAttribute('id', 'light');
    logo.setAttribute('src', 'brigham-young-university-idaho-seeklogo-3.png');
}
})