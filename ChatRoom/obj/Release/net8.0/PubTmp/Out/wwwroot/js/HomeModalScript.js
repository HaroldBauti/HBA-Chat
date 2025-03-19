const modal = document.getElementById("nameModal");
const closeModal = document.getElementById("closeModal");
const submitName = document.getElementById("submitName");
const usernameInput = document.getElementById("username");

// Función para mostrar el modal
function showNameModal(roomKey) {
    modal.style.display = "block";

    // Función para manejar el clic en el botón de "Unirse"
    submitName.onclick = function () {
        const username = usernameInput.value;
        if (username) {
            // Guardamos el nombre del usuario en la URL y redirigimos
            window.location.href = `Chat/Room?room=${roomKey}&username=${encodeURIComponent(username)}`;
        } else {
            alert("Por favor ingresa tu nombre.");
        }
    };
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del área del modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};