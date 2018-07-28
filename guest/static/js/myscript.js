function screens(){
    var width = window.screen.availWidth + "px";
    var height = window.screen.availHeight + "px";
    console.log(height);
    $('#header').css("height", height);
    $('#obr').css("height", height);
    $('#invite').css("height", height);
    $('#plan').css("height", height);
    $('#contacts').css("height", height);
    $('#gal').css("height", height);
    
    $('#car1').css("height", height);
    $('#car2').css("height", height);
    $('#car3').css("height", height);
    $('#car4').css("height", height);
    if(window.screen.availWidth>window.screen.availHeight){
        $('#car5').css("height", height);
        $('#car6').css("height", height);
        $('#car7').css("height", height);
    } else {
        $('#car5').css("width", width);
        $('#car6').css("width", width);
        $('#car7').css("width", width);
    }
    
    $("#obr").css("display", "none!important");
    $("#invite").hide();
    $("#plan").hide();
    $("#gal").hide();
    $("#contacts").hide();
}

window.onload = screens;