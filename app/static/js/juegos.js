// ================================================== CREAR JUEGO DE MESA ================================================== //
function createGame() {

    const minPlayers = parseInt(document.getElementById('minPlayers').value, 10) || 0;
    const maxPlayers = parseInt(document.getElementById('maxPlayers').value, 10) || 0;
    const minAge = parseInt(document.getElementById('minAge').value, 10) || 0;
    const maxAge = parseInt(document.getElementById('maxAge').value, 10) || 0;


// Validaciones
if (maxPlayers < minPlayers) {
    alert("El número máximo de jugadores no puede ser menor que el mínimo.");
    return;
}
if (maxAge < minAge) {
    alert("La edad máxima no puede ser menor que la edad mínima.");
    return;
}

// Datos del juego
const gameData = {
    gameId: document.getElementById('id').value,
    name: document.getElementById('name').value,
    originCountry: document.getElementById('pais').value,
    players: { min: minPlayers, max: maxPlayers },
    ageLimits: { min: minAge, max: maxAge },
    cost: parseFloat(document.getElementById('cost').value) || 0
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
        alert("ID REPITIDO");
        console.error('Error al crear el juego:', error);
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

    // Validaciones
    if (maxPlayers < minPlayers) {
        alert("El número máximo de jugadores no puede ser menor que el mínimo.");
        return;
    }
    if (maxAge < minAge) {
        alert("La edad máxima no puede ser menor que la edad mínima.");
        return;
    }


    const data = {
        gameId,
        name,
        players: { min: minPlayers, max: maxPlayers },
        ageLimits: { min: minAge, max: maxAge },
        originCountry,
        cost
    };

    try {
        const response = await fetch(`/games/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            closeDialogEdit();
            location.reload();
        } else {
            const error = await response.json();
        }
    } catch (err) {
        console.error('Error en la solicitud:', err);
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
