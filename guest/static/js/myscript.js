function screens(){
    var width = window.screen.availWidth + "px";
    var height = window.screen.availHeight*0.9 + "px";
    var pic_height = window.screen.availHeight*0.8 + "px";
    var invHeight = window.screen.availHeight + "px";
    var invHeightPhone = window.screen.availHeight*1.2 + "px";
    console.log(height);
    $('#header').css("height", height);
    $('#obr').css("height", height);
    $('#plan').css("height", height);
    $('#contacts').css("height", height);
    $('#gal').css("height", height);
    
    $('#car1').css("height", pic_height);
    $('#car2').css("height", pic_height);
    $('#car3').css("height", pic_height);
    $('#car4').css("height", pic_height);
    if(window.screen.availWidth>window.screen.availHeight){
        $('#invite').css("height", invHeight);
        $('#car5').css("height", pic_height);
        $('#car6').css("height", pic_height);
        $('#car7').css("height", pic_height);
    } else {
        $('#invite').css("height", invHeightPhone);
        $('#car5').css("width", width);
        $('#car6').css("width", width);
        $('#car7').css("width", width);
    }
    
}

window.onload = screens;