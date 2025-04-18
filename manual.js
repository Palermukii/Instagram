const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const image = boton.nextElementSibling;
        image.classList.toggle('visible');
    });
});


document.querySelectorAll('.secciones a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const id = this.getAttribute('href').substring(1);
      const destino = document.getElementById(id);
  
      // Calcular posición centrada
      const offsetTop = destino.getBoundingClientRect().top + window.scrollY;
      const centro = offsetTop - (window.innerHeight / 2) + (destino.offsetHeight / 2);
  

      window.scrollTo({
        top: centro,
        behavior: 'smooth'
      });
    });
});
  