async function getGuests(){    
        let response = await fetch('/api/guests',
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
            let text = await response.text();
            let data = JSON.parse(text);
            var toleto;
            for(var i=0; i<data.length; i++){
                toleto = toleto + "<tr><td>"+ data[i].first_name + "</td><td>" + data[i].invite + "</td></tr>";
            }
            document.getElementById("tab").innerHTML = toleto;
            
        }
}

window.onload = getGuests;