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
                console.log("data", data);
                $('#lbut').fadeOut(500);
                $('#myform').fadeOut(500);
                document.getElementById("wel").innerHTML = "Қош келдіңіз " + data[0].first_name;
                document.getElementById("uname").innerHTML = data[0].first_name;
                document.getElementById("dear").innerHTML = "Қадірлі " + data[0].first_name;
             
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