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

