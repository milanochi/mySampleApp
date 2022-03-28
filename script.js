const avatar = document.querySelector('.avatar_style');
const hideSection = document.getElementById('style');

avatar.addEventListener('click', showHideUsers);


function showHideUsers() {
    hideSection.classList.toggle('hide');

}