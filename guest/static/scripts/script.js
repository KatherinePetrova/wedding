function lo(){
    $('body,html').animate({scrollTop: $("#1").offset().top}, 500);
    console.log(window.screen.height);
    if(window.screen.width<1000){
        doIt();
    }
    doIt();
}

function doIt(){
    document.getElementById("1").style.height = document.documentElement.clientHeight; + "px";
    document.getElementById("2").style.height = document.documentElement.clientHeight; + "px";
    document.getElementById("3").style.height = document.documentElement.clientHeight; + "px";
    document.getElementById("4").style.height = document.documentElement.clientHeight; + "px";
    document.getElementById("5").style.height = document.documentElement.clientHeight; + "px";
}

function logout() {
    localStorage.setItem("token","sddsds");
}

function scrollButt(a){
    $('body,html').animate({scrollTop: $(a).offset().top}, 500);
    close();
}



function sl(){
    var x = document.getElementById('karts').scrollLeft;
    $('#karts').animate({scrollLeft: x - 600}, 300);
}

function sr(){
    var x = document.getElementById('karts').scrollLeft;
    $('#karts').animate({scrollLeft: x + 600}, 300);
}

var menuToggle = true;
var links = document.getElementsByClassName("link");
function menu(){
    if(menuToggle){
        $("#fh").animate({width: "100%"}, 500);
        for(var i=0; i<links.length; i++){
            links[i].style = "display: block";
        }
        menuToggle = false;
    } else {
        close();
    }
}

function close(){
    $("#fh").animate({width: "0%"}, 500);
    for(var i=0; i<links.length; i++){
            links[i].style = "display: none";
        }
    menuToggle = true;
}

async function login(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    let response = await fetch('/api-token-auth/',
         {     method: 'POST',
               headers: {
                   "Content-Type": "Application/JSON",
               },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
         }
         );
    console.log("Response", response.status);
    if (response.status !== 200) {
        alert("Incorrect username or password");
    } else {
        let text = await response.text();
        let data = JSON.parse(text);
        console.log("Login ok!");
        localStorage.setItem("token", data.token);
        $("#login").fadeOut(500);
        document.getElementById("site").style.overflowY = "scroll";
        $("#main_icon").fadeIn(500);
        getInf();
        document.getElementById('2').style.display = 'block';
        document.getElementById('4').style.display = 'block';
        document.getElementById('5').style.display = 'block';
    }
}

async function getInf(){    
            let response = await fetch('/api/inf',
                    {method: 'GET',
                     headers: {
                        "Content-Type": "Application/JSON",
                        "Authorization": "JWT " + localStorage.getItem("token"), 
                        },
                    }  
            );
            console.log("Response", response.status);
            if (response.status !== 200) {
                alert("Sorry, bo beer today");
            } else {
                let text = await response.text();
                let data = JSON.parse(text);
                console.log("data", data);
                document.getElementById("w1").innerHTML = "Қош келдіңіз " + data[0].first_name;
                $("#welcome").fadeIn(500);
                if(data[0].gender){
                    document.getElementById("dear").innerHTML = "Құрметті " + data[0].first_name;
                } else {
                    document.getElementById("dear").innerHTML = "Құрметті " + data[0].first_name;
                }
            }
}

function ido(){
    console.log("ido");
    var a = document.getElementById("ido");
    a.setAttribute("onclick", "");
    a.style.backgroundColor = "white";
    a.style.color = "black";
}