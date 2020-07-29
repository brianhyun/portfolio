// Show Navbar on Hamburger Menu Click
const navShow = () => {
    const burger = document.querySelector(".main-header__burger");
    const nav = document.querySelector(".main-header__nav");

    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("main-header__nav--active");
    });
};

// Form Validation - For IEv9 and previous. 
const validateForm = () => {
    // Check if all input has been submitted. And, if so, send form. 
    const input = document.querySelectorAll(".about__form-input");

    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.value === "") {
            counter++;
        }
    }

    if (counter === 3) {
        return false
    } else {
        return true;
    }
}

const checkIfFilled = () => {
    const input = document.querySelectorAll(".about__form-input");
    const email = document.getElementById("email");
    const button = document.querySelector(".about__form-button");

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", () => {
            if (input[i].value === "") {
                input[i].style.borderColor = "#DCDCDC";
            } else {
                input[i].style.borderColor = "black";
            }

            // When the user finishes entering the message, check all the other inputs to see if they have been filled. 
            // If so, then change submit button style. 
            if (input[0].value != "" && input[1].value != "" && input[2].value != "") {
                button.style.borderColor = "black";
                button.style.backgroundColor = "black";
                button.style.color = "white";
            } else {
                button.style.borderColor = "#DCDCDC";
                button.style.backgroundColor = "white";
                button.style.color = "#DCDCDC";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    navShow();
    checkIfFilled();
});