var connection = new signalR.HubConnectionBuilder().withUrl("/chat").build();

// Establecer la conexión
connection.start().then(() => {
    console.log("Conexión SignalR establecida.");
    // Una vez que la conexión esté establecida, unir al grupo (sala)
    connection.invoke("AddToGroup", "@Model")
        .catch((err) => console.error("Error al unirse al grupo: " + err.toString()));
}).catch((err) => {
    console.error("Error de conexión SignalR: " + err.toString());
});

// Enviar un mensaje
document.getElementById("btnSend").addEventListener("click", (event) => {
    let room = "@Model";
    let user = document.getElementById("user").value;
    let message = document.getElementById("message").value;

    // Invocar el método 'SendMessage' en SignalR
    connection.invoke("SendMessage", room, user, message)
        .catch((err) => console.error("Error al enviar mensaje: " + err.toString()));

    // Limpiar el campo de mensaje después de enviarlo
    document.getElementById("message").value = "";
    document.getElementById("message").focus();
    event.preventDefault();
});

// Recibir un mensaje en tiempo real
connection.on("ReceiveMessage", (user, message) => {
    var messageHTML = "<div><b>" + user + " dijo:</b> " + message + "</div>";
    document.getElementById("messages").innerHTML = messageHTML + document.getElementById("messages").innerHTML;
});

// Recibir notificaciones de usuarios
connection.on("ShowWho", (message) => {
    var messageHTML = "<div><b>" + message + "</b></div>";
    document.getElementById("notifications").innerHTML = messageHTML + document.getElementById("notifications").innerHTML;
});
const modeToggleButton = document.getElementById("toggleMode");
const bodyElement = document.body;
const heroSection = document.querySelector('.hero-section');
const chatRoomsSection = document.querySelector('.chat-rooms-section');
const footerSection = document.querySelector('.footer');

// Cargar el modo preferido al iniciar la página
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        bodyElement.classList.add("dark-mode");
        bodyElement.classList.remove("light-mode");
        heroSection.classList.add("dark-mode");
        heroSection.classList.remove("light-mode");
        chatRoomsSection.classList.add("dark-mode");
        chatRoomsSection.classList.remove("light-mode");
        footerSection.classList.add("dark-mode");
        footerSection.classList.remove("light-mode");
        modeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';  // Icono de sol para modo oscuro
    } else {
        bodyElement.classList.add("light-mode");
        bodyElement.classList.remove("dark-mode");
        heroSection.classList.add("light-mode");
        heroSection.classList.remove("dark-mode");
        chatRoomsSection.classList.add("light-mode");
        chatRoomsSection.classList.remove("dark-mode");
        footerSection.classList.add("light-mode");
        footerSection.classList.remove("dark-mode");
        modeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  // Icono de luna para modo claro
    }
};

// Cambiar entre modo noche y modo día
modeToggleButton.addEventListener("click", () => {
    if (bodyElement.classList.contains("light-mode")) {
        bodyElement.classList.add("dark-mode");
        bodyElement.classList.remove("light-mode");
        heroSection.classList.add("dark-mode");
        heroSection.classList.remove("light-mode");
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
        chatRoomsSection.classList.add("light-mode");
        chatRoomsSection.classList.remove("dark-mode");
        footerSection.classList.add("light-mode");
        footerSection.classList.remove("dark-mode");
        localStorage.setItem("theme", "light"); // Guardar preferencia
        modeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  // Icono de luna
    }
});