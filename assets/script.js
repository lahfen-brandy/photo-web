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