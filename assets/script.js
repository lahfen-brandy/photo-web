const menuBtn = document.getElementById("menuBtn");
const SideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");
const side_nav_list_onclick = document.getElementsByClassName("side_nav_list");
const onclik = document.getElementsByClassName("side_nav_list a");

menuBtn.onclick = function () {
    if (SideNav.classList.contains("active")) {
        SideNav.classList.remove("active");
        menu.src = "assets/images/menu.png";
    } else {
        SideNav.classList.add('active');
        // menu.src = "assets/images/close.png";
    }
}
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled')
    }
})
side_nav_list_onclick.onclick = function () {
    if (onclik.classList.contains("active")) {
        SideNav.classList.remove("active");
    }
    else {
        SideNav.classList.add('active');
    }
}

const SideNav = document.getElementById("sideNav");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const side_nav_list_onclick = document.getElementsByClassName("side_nav_list");
const onclik = document.getElementsByClassName("side_nav_list a");
menu.onclick = function () {
    SideNav.style.zIndex = "10";
    menuBtn.style.zIndex = "-1";
    mobileOverlay.style.zIndex = "-100";
    if (SideNav.classList.contains("active")) {
        SideNav.classList.remove("active");
        menu.src = "assets/images/menu.png";
    } else {
        SideNav.classList.add('active');
        menu.src = "assets/images/close.png";
    }
    if (mobileOverlay.classList.contains("active")) {
        mobileOverlay.classList.remove("active");
    } else {
        mobileOverlay.classList.add('active');
    }
}

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled')
    }
})
side_nav_list_onclick.onclick = function () {
    if (onclik.classList.contains("active")) {
        SideNav.classList.remove("active");
    }
    else {
        SideNav.classList.add('active');
    }
} 