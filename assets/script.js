//nav bar on mobile view
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

//make images bigger
const anOver1 = document.getElementById("anOver1");
const anOver2 = document.getElementById("anOver2");
const anOver3 = document.getElementById("anOver3");
const anOver4 = document.getElementById("anOver4");
const anOver5 = document.getElementById("anOver5");
const anOver6 = document.getElementById("anOver6");
const anOver7 = document.getElementById("anOver7");
const anOver8 = document.getElementById("anOver8");
const menu0 = document.getElementById("menu0");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const menu5 = document.getElementById("menu5");
const menu6 = document.getElementById("menu6");
const menu7 = document.getElementById("menu7");
const closeBtn = document.getElementById("closeBtn");
const heroImg = document.getElementById("hero-img");

anOver1.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu0.classList.contains("active")) {
        menu0.classList.remove("active");
    } else {
        menu0.classList.add('active');
    }
}
anOver2.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu1.classList.contains("active")) {
        menu1.classList.remove("active");
    } else {
        menu1.classList.add('active');
    }
}
anOver3.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu2.classList.contains("active")) {
        menu2.classList.remove("active");
    } else {
        menu2.classList.add('active');
    }
}
anOver4.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu3.classList.contains("active")) {
        menu3.classList.remove("active");
    } else {
        menu3.classList.add('active');
    }
}
anOver5.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu4.classList.contains("active")) {
        menu4.classList.remove("active");
    } else {
        menu4.classList.add('active');
    }
}
anOver6.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu5.classList.contains("active")) {
        menu5.classList.remove("active");
    } else {
        menu5.classList.add('active');
    }
}
anOver7.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu6.classList.contains("active")) {
        menu6.classList.remove("active");
    } else {
        menu6.classList.add('active');
    }
}
anOver8.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu7.classList.contains("active")) {
        menu7.classList.remove("active");
    } else {
        menu7.classList.add('active');
    }
}
closeBtn.onclick = function () {
    if (heroImg.classList.contains("active")) {
        heroImg.classList.remove("active");
    } else {
        heroImg.classList.add('active');
    }
    if (menu0.classList.contains("active")) {
        menu0.classList.remove("active");
    }
    if (menu1.classList.contains("active")) {
        menu1.classList.remove("active");
    }
    if (menu2.classList.contains("active")) {
        menu2.classList.remove("active");
    }
    if (menu3.classList.contains("active")) {
        menu3.classList.remove("active");
    }
    if (menu4.classList.contains("active")) {
        menu4.classList.remove("active");
    }
    if (menu5.classList.contains("active")) {
        menu5.classList.remove("active");
    }
    if (menu6.classList.contains("active")) {
        menu6.classList.remove("active");
    }
    if (menu7.classList.contains("active")) {
        menu7.classList.remove("active");
    }
}