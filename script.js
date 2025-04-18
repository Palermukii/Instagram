let followerss = []; 
let followingg = [];

let div_followers = document.getElementById('followers');
let div_follows = document.getElementById('follows');

// Función para manejar la carga del archivo de seguidores
function loadFollowersFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const data = JSON.parse(e.target.result);
        for(let i = 0; i < data.length; i++) {
            followerss.push(data[i].string_list_data[0].value);
            div_followers.innerHTML += `<div>${followerss[i]}</div>`;
        }
        localStorage.setItem('followerss', JSON.stringify(followerss));
    };
    
    reader.readAsText(file);
}

// Función para manejar la carga del archivo de seguidos
function loadFollowingFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const data2 = JSON.parse(e.target.result);
        for(let i = 0; i < data2.relationships_following.length; i++) {
            div_follows.innerHTML += `<div>${data2.relationships_following[i].string_list_data[0].value}</div>`;
            followingg.push(data2.relationships_following[i].string_list_data[0].value);
        }
        localStorage.setItem('followingg', JSON.stringify(followingg));
    };
    
    reader.readAsText(file);
}

// Asignar eventos a los inputs de archivo
document.getElementById('followersFile').addEventListener('change', loadFollowersFile);
document.getElementById('followingFile').addEventListener('change', loadFollowingFile);
