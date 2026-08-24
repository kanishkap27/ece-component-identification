/* =========================================
   SEARCH
========================================= */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {

        alert("Please enter a component name.");

        return;
    }

    alert(
        "Searching for: " +
        searchValue +
        "\n\nComponent search will be connected in Phase 2."
    );

});


/* =========================================
   ENTER KEY SEARCH
========================================= */

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "76px";

        navLinks.style.right = "20px";

        navLinks.style.background = "#07111f";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "12px";

    }

});


/* =========================================
   COMPONENT CARD BUTTONS
========================================= */

const detailButtons =
    document.querySelectorAll(".component-footer button");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Component details page will be added in Phase 2."
        );

    });

});