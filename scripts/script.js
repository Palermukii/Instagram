let followerss = []; 
let followingg = [];

let div_followers = document.getElementById('followers');
let div_follows = document.getElementById('follows');

// Función para manejar la carga del archivo de seguidores
function loadFollowersFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            div_followers.innerHTML = ''; // Limpiar div previo

            for(let i = 0; i < data.length; i++) {
                // EN FOLLOWERS (según tu JSON) el usuario está en string_list_data[0].value
                let user = data[i].string_list_data[0].value;
                
                followerss.push(user);
                div_followers.innerHTML += `<div>${user}</div>`;
            }
            localStorage.setItem('followerss', JSON.stringify(followerss));
            console.log("Followers cargados: " + followerss.length);
        } catch (error) {
            console.error("Error al leer followers:", error);
            alert("El archivo de Followers no tiene el formato correcto.");
        }
    };
    
    reader.readAsText(file);
}

// Función para manejar la carga del archivo de seguidos
function loadFollowingFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data2 = JSON.parse(e.target.result);
            div_follows.innerHTML = ''; 

            const list = data2.relationships_following;

            for(let i = 0; i < list.length; i++) {
                let user = list[i].title;

               
                if (!user && list[i].string_list_data[0].value) {
                     user = list[i].string_list_data[0].value;
                }

                followingg.push(user);
                div_follows.innerHTML += `<div>${user}</div>`;
            }
            localStorage.setItem('followingg', JSON.stringify(followingg));
            console.log("Following cargados: " + followingg.length);
        } catch (error) {
            console.error("Error al leer following:", error);
            alert("El archivo de Following no tiene el formato correcto.");
        }
    };
    
    reader.readAsText(file);
}

// Asignar eventos a los inputs de archivo
document.getElementById('followersFile').addEventListener('change', loadFollowersFile);
document.getElementById('followingFile').addEventListener('change', loadFollowingFile);
