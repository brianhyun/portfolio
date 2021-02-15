// Show Navbar on Hamburger Menu Click
const navShow = () => {
    const burger = document.querySelector('.main-header__burger');
    const nav = document.querySelector('.main-header__nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('main-header__nav--active');
    });
};

// Styles for send button when all input fields are filled with text.
const checkIfFilled = () => {
    const input = document.querySelectorAll('.contact__form-input');
    const button = document.querySelector('.contact__form-button');

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('keyup', () => {
            if (input[i].value === '') {
                input[i].style.borderColor = '#DCDCDC';
            } else {
                input[i].style.borderColor = '#222';
            }

            if (
                input[0].value != '' &&
                input[1].value != '' &&
                input[2].value != '' &&
                input[3].value != ''
            ) {
                button.style.borderColor = '#222';
                button.style.backgroundColor = '#222';
                button.style.color = 'white';
            } else {
                button.style.borderColor = '#DCDCDC';
                button.style.backgroundColor = 'white';
                button.style.color = '#DCDCDC';
            }
        });
    }
};

// Disable link if active.
const headerHoverStyles = () => {
    const headerLinks = document.querySelectorAll('.main-header__link');

    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('mouseover', () => {
            if (
                headerLinks[i].classList.contains('main-header__link--active')
            ) {
                headerLinks[i].style.pointerEvents = 'none';
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    navShow();
    checkIfFilled();
    headerHoverStyles();
});
