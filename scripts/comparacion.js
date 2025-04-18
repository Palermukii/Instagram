const div_followers = document.getElementById('followers');
const div_follows = document.getElementById('follows');
const div_not_follows = document.getElementById('dont-follow-you');

// Recuperar datos de localStorage
const followerss = JSON.parse(localStorage.getItem('followerss'));
const followingg = JSON.parse(localStorage.getItem('followingg'));
const personasNoTeSiguen = followingg.filter(usuario => !followerss.includes(usuario));


    for (let i = 0; i < personasNoTeSiguen.length; i++) {
        div_not_follows.innerHTML += `<div>${personasNoTeSiguen[i]}</div>`;
    }

const borrar1 = document.getElementById('boton-f')

// Mostrar los seguidores
// if (followerss) {
//     for (let i = 0; i < followerss.length; i++) {
//         div_followers.innerHTML += `<div>${followerss[i]}</div>`;
//     }
// }
// else {
//     console.log("NO SE ENCONTRARON SEGUIDORES")
// }

// // Mostrar los que se sigue
// if (followingg) {
//     for (let i = 0; i < followingg.length; i++) {
//         div_follows.innerHTML += `<div>${followingg[i]}</div>`;
//     }
// }
// else {
//     console.log("NO SE ENCONTRARON SEGUIDOS")
// }



console.log(personasNoTeSiguen)
borrar1.onclick = function () {
    console.log(1+1)
    localStorage.removeItem('followerss'); // Borra solo 'followerss'
    localStorage.removeItem('followingg'); // Borra solo 'followingg'
    
    // Limpiar las listas mostradas en el DOM
    div_followers.innerHTML = '';
    div_follows.innerHTML = '';
console.log(localStorage)

};



console.log(followerss)
console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
console.log(followingg)
