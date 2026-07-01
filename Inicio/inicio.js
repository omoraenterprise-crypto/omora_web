document.addEventListener("DOMContentLoaded", () => {

    // Carrusel automático
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 5000);
    }

    // Animaciones de revelación al hacer scroll
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(r => observer.observe(r));

});