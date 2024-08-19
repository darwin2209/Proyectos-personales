document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const personajesContenido = document.getElementById("personajes");

    function fetchPersonajes() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayPersonajes(data.results);
            })
            .catch(error => console.error(error));
    }

    function displayPersonajes(personajes) {
        personajes.forEach(personaje => {
            const personajesCard = document.createElement("div");
            personajesCard.classList.add("personajes-card");

            personajesCard.innerHTML = `
                <img src="${personaje.image}" alt="${personaje.name}">
                <h3>${personaje.name}</h3>
                <p>Status: ${personaje.status}</p>
                <p>Species: ${personaje.species}</p>
            `;

            personajesContenido.appendChild(personajesCard);
        });
    }

    fetchPersonajes();
});
