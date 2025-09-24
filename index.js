document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado - JavaScript funcionando");
    var seeAllPostsBtn = document.getElementById("see-all-posts");
    var postsContainer = document.getElementById("posts-container");
    var themeToggleBtn = document.getElementById("themeToggle");
    var themeIcon = document.querySelector('.theme-icon');    
    console.log("Elementos del DOM encontrados correctamente");
    
    // Función para cambiar entre modo oscuro y claro
    function toggleDarkMode() {
        console.log("Botón de tema clickeado");
        // Alternar la clase dark-mode en el body
        document.body.classList.toggle('dark-mode');
        // Cambiar el icono según el modo
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = '🌙'; 
            localStorage.setItem('theme', 'dark');
            console.log("Modo oscuro activado");
        } else {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
            console.log("Modo claro activado");
        }
    }
    themeToggleBtn.addEventListener('click', toggleDarkMode);
    if (seeAllPostsBtn && postsContainer) {
        seeAllPostsBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            
            if(postsContainer.classList.contains("ocultar")) {
                postsContainer.classList.remove("ocultar");
                postsContainer.classList.add("mostrar");
            } else {
                postsContainer.classList.remove("mostrar");
                postsContainer.classList.add("ocultar");
            }
        });
        
    }
});