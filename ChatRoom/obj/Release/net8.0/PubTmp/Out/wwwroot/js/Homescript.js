// Almacenar preferencia del usuario en Local Storage
const modeToggleButton = document.getElementById("toggleMode");
const bodyElement = document.body;
const heroSection = document.querySelector('.hero-section');
const featuresSection = document.querySelector('.features');
const featuresItemSection = document.querySelectorAll('.feature-item')
const chatRoomsSection = document.querySelector('.chat-rooms-section');
const footerSection = document.querySelector('.footer');

// Cargar el modo preferido al iniciar la página
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        bodyElement.classList.add("dark-mode");
        bodyElement.classList.remove("light-mode");
        heroSection.classList.add("dark-mode");
        heroSection.classList.remove("light-mode");
        featuresSection.classList.add("dark-mode");
        featuresSection.classList.remove("light-mode");
        chatRoomsSection.classList.add("dark-mode");
        chatRoomsSection.classList.remove("light-mode");
        footerSection.classList.add("dark-mode");
        footerSection.classList.remove("light-mode");
        featuresItemSection.forEach(item => {
            item.classList.add("dark-mode");
            item.classList.remove("light-mode");
        });
    } else {
        bodyElement.classList.add("light-mode");
        bodyElement.classList.remove("dark-mode");
        heroSection.classList.add("light-mode");
        heroSection.classList.remove("dark-mode");
        featuresSection.classList.add("light-mode");
        featuresSection.classList.remove("dark-mode");
        chatRoomsSection.classList.add("light-mode");
        chatRoomsSection.classList.remove("dark-mode");
        footerSection.classList.add("light-mode");
        footerSection.classList.remove("dark-mode");
        featuresItemSection.forEach(item => {
            item.classList.add("light-mode");
            item.classList.remove("dark-mode");
        });
    }
};

// Cambiar entre modo noche y modo día
modeToggleButton.addEventListener("click", () => {
    if (bodyElement.classList.contains("light-mode")) {
        bodyElement.classList.add("dark-mode");
        bodyElement.classList.remove("light-mode");
        heroSection.classList.add("dark-mode");
        heroSection.classList.remove("light-mode");
        featuresSection.classList.add("dark-mode");
        featuresSection.classList.remove("light-mode");
        featuresItemSection.forEach(item => {
            item.classList.add("dark-mode");
            item.classList.remove("light-mode");
        });
        chatRoomsSection.classList.add("dark-mode");
        chatRoomsSection.classList.remove("light-mode");
        footerSection.classList.add("dark-mode");
        footerSection.classList.remove("light-mode");
        localStorage.setItem("theme", "dark"); // Guardar preferencia
        modeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';  // Icono de sol
    } else {
        bodyElement.classList.add("light-mode");
        bodyElement.classList.remove("dark-mode");
        heroSection.classList.add("light-mode");
        heroSection.classList.remove("dark-mode");
        featuresSection.classList.add("light-mode");
        featuresSection.classList.remove("dark-mode");
        chatRoomsSection.classList.add("light-mode");
        chatRoomsSection.classList.remove("dark-mode");
        footerSection.classList.add("light-mode");
        footerSection.classList.remove("dark-mode");
        featuresItemSection.forEach(item => {
            item.classList.add("light-mode");
            item.classList.remove("dark-mode");
        });
        localStorage.setItem("theme", "light"); // Guardar preferencia
        modeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  // Icono de luna
    }
});