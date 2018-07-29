async function log(){
    
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
        getInf();
        document.getElementById("poem").setAttribute("class", "col");
        document.getElementById("bar").setAttribute("class", "menu-toggle rounded");
        document.getElementById("obr").setAttribute("class", "masthead d-flex");
        document.getElementById("invite").setAttribute("class", "msthead d-flex");
        document.getElementById("plan").setAttribute("class", "msthead d-flex");
        document.getElementById("gal").setAttribute("class", "msthead d-flex");
        document.getElementById("contact").setAttribute("class", "map d-flex");
        document.getElementById("footer").setAttribute("class", "footer text-center d-flex");
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
                alert("Авторизацияны қайтадан жасаңыз");
            } else {
                let text = await response.text();
                let data = JSON.parse(text);
                $('#lbut').fadeOut(500);
                $('#myform').fadeOut(500);
                document.getElementById("wel").innerHTML = "Қош келдіңіз " + data[0].first_name;
                document.getElementById("uname").innerHTML = data[0].first_name;
                document.getElementById("dear").innerHTML = "Қадірлі " + data[0].first_name;
                if(data[0].invite){
                    document.getElementById("inbut").innerHTML = "Мен келемің!";
                }
             
            }
}

async function getInv(){    
        let response = await fetch('/api/invite',
                {method: 'GET',
                 headers: {
                "Content-Type": "Application/JSON",
                "Authorization": "JWT " + localStorage.getItem("token"), 
                },
            }  
        );
        if (response.status !== 200) {
            alert("Авторизацияны қайтадан жасаңыз");
        } else {
            document.getElementById("inbut").innerHTML = "Мен келемің!";
            console.log("accepted");
        }
}

function logout(){
    localStorage.setItem("token", "no data");
    document.getElementById("poem").setAttribute("class", "d-none");
    document.getElementById("bar").setAttribute("class", "d-none");
    document.getElementById("obr").setAttribute("class", "d-none");
    document.getElementById("invite").setAttribute("class", "d-none");
    document.getElementById("plan").setAttribute("class", "d-none");
    document.getElementById("gal").setAttribute("class", "d-none");
    document.getElementById("contact").setAttribute("class", "d-none");
    document.getElementById("footer").setAttribute("class", "d-none");
    $('#lbut').fadeIn(500);
    $('#myform').fadeIn(500);
    document.getElementById("wel").innerHTML = "Аккаунтына кіріңіз";
    
}