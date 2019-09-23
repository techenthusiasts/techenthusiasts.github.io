$(document).ready(function () {
    $('.u-email').on('click', function (event) {
        event.preventDefault();
        $(this).off("click");
        var img = document.createElement("img");
        img.src = "/assets/images/posts_images/btn-email.png";
        img.setAttribute('class', 'email-btn');
        var src = document.getElementById("invi-img");
        src.appendChild(img);
        var email = $(this).attr("data-email").replace(/AT/, '@').replace(/DOT/, '.');
        $(this).removeClass("u-email");
        $(this).addClass("email-link");
        $(this).html(email);
        $(this).attr("href", "mailto:" + email);
    });
});
