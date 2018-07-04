function lo(){
    $("#welcome").fadeIn(1000);
    $("#login").fadeIn(1500);
}

function login(){
    document.getElementById("site").style.overflowY = "scroll";
    $("#welcome").animate({marginTop: "15%"}, 1500);
    $("#login").fadeOut(500);
    $("#h_header").fadeIn(1500);
}

window.onload = lo;