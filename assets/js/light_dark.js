const btn = document.querySelector(".btn-light-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const themeFromLS = localStorage.getItem("theme")
const themeFromHugo = document.body.classList.contains("dark-theme") ? "dark" : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    moon.style.display = 'none';
    sun.style.display = 'block';
} else {
    document.body.classList.remove("dark-theme");
    moon.style.display = 'block';
    sun.style.display = 'none';
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    let hasRemarkComments = document.getElementById("remark42");
    let hasGiscusComments = document.querySelector(".giscus");
    let theme = "light";

    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        moon.style.display = 'none';
        sun.style.display = 'block';
        if (hasRemarkComments) {
            window.REMARK42.changeTheme("dark");
        }
        if (hasGiscusComments) {
            setGiscusTheme(theme);
        }
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
        if (hasRemarkComments) {
            window.REMARK42.changeTheme("light");
        }
        if (hasGiscusComments) {
            setGiscusTheme(theme);
        }
    }
    localStorage.setItem("theme", theme);
});

function setGiscusTheme(theme) {
    var iframe = document.querySelector('.giscus-frame');

    if (iframe) {
        var url = new URL(iframe.src);
        url.searchParams.set('theme', theme);
        iframe.src = url.toString();
    }
}