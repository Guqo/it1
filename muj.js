$(function () {
    $("path").on("mouseenter", function () {
        console.log($(this).data("url"));
        $("path").css("fill", "white");
        $(this).css("fill", "#007bff");
        document.getElementById("myDIV").style.transition = "all 2s";
        //$("#usmap h3").text($(this).data("name"));
        //$("#usmap a").text($(this).data("url")).attr("href", $(this).data("url"));
    })
    $("path").on("click", function () {
        console.log($(this).data("url"));
        location.href = $(this).data("url");
        //window.open($(this).data("url"));
    })
})

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)
    })
})
