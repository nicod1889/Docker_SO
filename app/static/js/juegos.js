// ================================================== CREAR JUEGO DE MESA ================================================== //
function createGame() {

    const gameId = document.getElementById("gameId").value;
    const name = document.getElementById("name").value;
    const originCountry = document.getElementById("pais").value;
    const minPlayers = parseInt(document.getElementById("minPlayers").value, 10);
    const maxPlayers = parseInt(document.getElementById("maxPlayers").value, 10);
    const minAge = parseInt(document.getElementById("minAge").value, 10);
    const maxAge = parseInt(document.getElementById("maxAge").value, 10);
    const cost = parseFloat(document.getElementById("cost").value);

    if (!gameId || !name || !originCountry || !minPlayers || !maxPlayers || !minAge || !maxAge || !cost) {
        showToast('Verifique que todos los campos estén completos.', "error");
        return;
    }
    if (maxPlayers < minPlayers) {
        showToast("El número máximo de jugadores no puede ser menor que el mínimo.", "error");
        return;
    }
    if (maxAge < minAge) {
        showToast("La edad máxima no puede ser menor que la edad mínima.", "error");
        return;
    }

    const gameData = {
        gameId,
        name,
        players: { min: minPlayers, max: maxPlayers },
        ageLimits: { min: minAge, max: maxAge },
        originCountry,
        cost
    };

    fetch('/games', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(gameData)})
    .then(response => {
        if (!response.ok) return response.json().then(err => { throw err; });
        return response.json();
    })
    .then(data => {
        closeDialogCreate();
        location.reload();
    })
    .catch(error => {
        if (error.error === 'errorgameId') {
            showToast("El ID del juego ya está ocupado. Por favor, elija otro.", "error");
        } else {
            console.error('Error al crear el juego:', error);
            showToast("Ocurrió un error al crear el juego. Inténtalo nuevamente.", "error");
        }
    });
}


// ================================================== EDITAR JUEGO DE MESA ================================================== //
async function editGame() {
    const _id = document.getElementById("edit-id").value;
    const gameId = document.getElementById("edit-gameId").value;
    const name = document.getElementById("edit-name").value;
    const originCountry = document.getElementById("edit-pais").value;
    const minPlayers = parseInt(document.getElementById("edit-minPlayers").value, 10);
    const maxPlayers = parseInt(document.getElementById("edit-maxPlayers").value, 10);
    const minAge = parseInt(document.getElementById("edit-minAge").value, 10);
    const maxAge = parseInt(document.getElementById("edit-maxAge").value, 10);
    const cost = parseFloat(document.getElementById("edit-cost").value);

    if (!gameId || !name || !originCountry || !minPlayers || !maxPlayers || !minAge || !maxAge || !cost) {
        showToast('Verifique que todos los campos estén completos.', 'error');
        return;
    }
    if (maxPlayers < minPlayers) {
        showToast("El número máximo de jugadores no puede ser menor que el mínimo.", 'error');
        return;
    }
    if (maxAge < minAge) {
        showToast("La edad máxima no puede ser menor que la edad mínima.", 'error');
        return;
    }

    const gameData = {
        gameId,
        name,
        players: { min: minPlayers, max: maxPlayers },
        ageLimits: { min: minAge, max: maxAge },
        originCountry,
        cost
    };

    try {
        const response = await fetch(`/games/${_id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'},body: JSON.stringify(gameData)});

        if (response.ok) {
            const result = await response.json();
            closeDialogEdit();
            location.reload();
        } else {
            const error = await response.json();
            showToast("El ID del juego ya está ocupado. Por favor, elija otro.", "error");
        }
    } catch (err) {
        console.error('Error al crear el juego:', error);
        showToast("Ocurrió un error al crear el juego. Inténtalo nuevamente.", "error");
    }
}


// ================================================== ELIMINAR JUEGO DE MESA ================================================== //
function deleteGame() {
    const id = document.getElementById('delete-id').value;

    if (!id) {
        alert('Error: No se pudo determinar el juego a eliminar');
        return;
    }

    fetch(`/games/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                closeDialogDelete();
                location.reload();
            } else {
                alert('Error al eliminar el juego');
            }
        })
        .catch(err => console.error('Error:', err));
}


// ================================================== FILTRAR JUEGO DE MESA ================================================== //
function filterGames() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const tableBody = document.getElementById("games-table-body");
    const rows = tableBody.getElementsByTagName("tr");

    for (let row of rows) {
        const columns = row.getElementsByTagName("td");
        const name = columns[1].textContent.toLowerCase();
        const country = columns[4].textContent.toLowerCase();

        if (name.includes(input) || country.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}
