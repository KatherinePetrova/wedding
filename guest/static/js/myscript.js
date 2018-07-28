function screens(){
    var height = window.screen.availHeight + "px";
    console.log(height);
    $('#header').css("height", height);
    $('#obr').css("height", height);
    $('#invite').css("height", height);
    $('#plan').css("height", height);
    $('#contacts').css("height", height);
    $('#gal').css("height", height);
}

window.onload = screens;