function lo(){
    $("#site").scrollTop(0);
    $("#welcome").fadeIn(1000);
    $("#login").fadeIn(1500);
    console.log(document.documentElement.clientWidth);
}

function logout() {
    localStorage.setItem("token","sddsds");
}

async function login(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    let response = await fetch('http://localhost:8000/api-token-auth/',
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
        $("#login").fadeOut(1500);
        document.getElementById("site").style.overflowY = "scroll";
        $("#h_header").fadeIn(1500);
        $("#welcome").animate({marginTop: "15%"}, 1500);
        getInf();
        
        
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
                if(data[0].gender){
                    document.getElementById("dear").innerHTML = "Уважаемая " + data[0].first_name;
                } else {
                    document.getElementById("dear").innerHTML = "Уважаемый " + data[0].first_name;
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

window.onload = lo;