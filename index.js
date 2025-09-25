document.addEventListener('DOMContentLoaded', function() {
    var seeAllPostsBtn = document.getElementById("see-all-posts");
    var postsContainer = document.getElementById("posts-container");
    var themeToggleBtn = document.getElementById("themeToggle");
    var themeIcon = document.querySelector('.theme-icon');   
    let sumClick = 0;
    const increment = document.querySelector(".greenimgplus-button");
    const plusplus = document.getElementById("plusplus");

    increment.addEventListener('click', () => {
        sumClick++;

        const sum = `
            <div class="item">
                ${sumClick}
            </div>
        `;

        plusplus.innerHTML = sum;
    });


    // Función para cambiar entre modo oscuro y claro
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = '🌙'; 
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
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