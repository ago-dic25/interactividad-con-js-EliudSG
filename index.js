// Obtener elementos del DOM
var seeAllPostsBtn = document.getElementById("see-all-posts");
var postsContainer = document.getElementById("posts-container");

// Evento para mostrar/ocultar los posts al hacer clic en "See all posts →"
seeAllPostsBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el evento se propague al documento
    
    if(postsContainer.classList.contains("ocultar")) {
        postsContainer.classList.remove("ocultar");
        postsContainer.classList.add("mostrar");
    } else {
        postsContainer.classList.remove("mostrar");
        postsContainer.classList.add("ocultar");
    }
});

// Cerrar el menú de posts al hacer clic en cualquier parte de la página
document.addEventListener("click", function() {
    if(postsContainer.classList.contains("mostrar")) {
        postsContainer.classList.remove("mostrar");
        postsContainer.classList.add("ocultar");
    }
});

// Evitar que el menú se cierre al hacer clic dentro deel
postsContainer.addEventListener("click", function(event) {
    event.stopPropagation();
});

//Evento para la sección "mas" (opcional)
var mas = document.getElementById("mas");
mas.addEventListener("click", function() {
    console.log("Hiciste click en la sección Best Of The Week");
});