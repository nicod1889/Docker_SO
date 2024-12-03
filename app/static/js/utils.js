// ================================================== CREAR JUEGO DE MESA ================================================== //
function openDialogCreate() {
    document.getElementById('dialog-create').style.display = 'block';
    document.getElementById('overlay-create').style.display = 'block';
}

function closeDialogCreate() {
    document.getElementById('dialog-create').style.display = 'none';
    document.getElementById('overlay-create').style.display = 'none';
}


// ================================================== EDITAR JUEGO DE MESA ================================================== //
function openDialogEdit(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);

    const gameId = row.querySelector("td:nth-child(1)").textContent;
    const name = row.querySelector("td:nth-child(2)").textContent;
    const players = row.querySelector("td:nth-child(3)").textContent.split(" - ");
    const minPlayers = players[0];
    const maxPlayers = players[1];
    const ageLimits = row.querySelector("td:nth-child(4)").textContent.split(" - ");
    const minLimit = ageLimits[0];
    const maxLimit = ageLimits[1];
    const originCountry = row.querySelector("td:nth-child(5)").textContent;
    const cost = row.querySelector("td:nth-child(6)").textContent.replace("$", "");

    document.getElementById("edit-id").value = id;
    document.getElementById("edit-gameId").value = gameId;
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-pais").value = originCountry;
    document.getElementById("edit-minPlayers").value = minPlayers;
    document.getElementById("edit-maxPlayers").value = maxPlayers;
    document.getElementById("edit-minAge").value = minLimit;
    document.getElementById("edit-maxAge").value = maxLimit;
    document.getElementById("edit-cost").value = cost;

    document.getElementById('dialog-edit').style.display = 'block';
    document.getElementById('overlay-edit').style.display = 'block';
}

function closeDialogEdit() {
    document.getElementById('dialog-edit').style.display = 'none';
    document.getElementById('overlay-edit').style.display = 'none';
}


// ================================================== ELIMINAR JUEGO DE MESA ================================================== //
function openDialogDelete(gameId) {
    document.getElementById('dialog-delete').style.display = 'block';
    document.getElementById('overlay-delete').style.display = 'block';

    document.getElementById('delete-id').value = gameId;
}

function closeDialogDelete() {
    document.getElementById('dialog-delete').style.display = 'none';
    document.getElementById('overlay-delete').style.display = 'none';
}


// ================================================== ALERT ================================================== //
function showToast(message) {
    const toast = document.getElementById('customToast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {toast.style.display = 'none';}, 3000);
}