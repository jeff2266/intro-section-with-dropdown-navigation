const hamburgerIcon = document.getElementById("hamburger-icon")
const hamburgerMenu = document.getElementById("hamburger-menu")
const filter = document.getElementById("filter")
const submenuHeaders = document.querySelectorAll(".submenu-header")

function openSubmenu(arrow, submenu) {
    arrow.src = "./images/icon-arrow-up.svg"
    submenu.classList.replace("collapse", "expand")
    submenu.classList.add("animate-dropDown")
}

function closeSubmenu(arrow, submenu) {
    arrow.src = "./images/icon-arrow-down.svg"
    submenu.classList.replace("expand", "collapse")
    submenu.classList.remove("animate-dropDown")
}

function hamburgerClickHandler() {
    if (filter.classList.contains("invisible")) {
        hamburgerIcon.src = "./images/icon-close-menu.svg"
        filter.classList.replace("invisible", "animate-fadeIn")
        hamburgerMenu.classList.remove("invisible")
    } else {
        hamburgerIcon.src = "./images/icon-menu.svg"
        filter.classList.replace("animate-fadeIn", "invisible")
        hamburgerMenu.classList.add("invisible")
    }
}

function submenuClickHandler() {
    const arrow = this.querySelector("img")
    const submenu = this.parentElement.querySelector(".submenu")
    if (submenu.classList.contains("collapse")) {
        openSubmenu(arrow, submenu)
    } else {
        closeSubmenu(arrow, submenu)
    }
}

hamburgerIcon.onclick = hamburgerClickHandler
submenuHeaders.forEach(el => el.onclick = submenuClickHandler)