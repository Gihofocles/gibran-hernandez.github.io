document.addEventListener('DOMContentLoaded', (event) => {

    // --- ANIMACIÓN DE SCROLL PARA LAS TARJETAS DE PROYECTO ---

    // Seleccionamos todas las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');

    // Opciones para el IntersectionObserver
    const observerOptions = {
        root: null,       // Observa en relación con el viewport
        rootMargin: '0px',
        threshold: 0.1    // Se activa cuando el 10% del elemento es visible
    };

    // Creamos el observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Añadimos un retraso escalonado para cada tarjeta
                entry.target.style.transitionDelay = `${index * 100}ms`;
                
                // Añadimos la clase 'visible' que activa la animación CSS
                entry.target.classList.add('visible');
                
                // Dejamos de observar el elemento una vez que ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Hacemos que el observador vigile cada tarjeta
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // --- OPCIONAL: MANEJO DEL HEADER FIJO ---
    // (Puedes descomentar esto si quieres que el header cambie al hacer scroll)
    
    /*
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Puedes añadir una clase que le de un fondo sólido
            // Por ejemplo: header.classList.add('scrolled');
            // Y definir en CSS: .header.scrolled { background-color: var(--color-bg-secondary); }
        } else {
            // header.classList.remove('scrolled');
        }
    });
    */
});