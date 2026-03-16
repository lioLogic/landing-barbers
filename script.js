const cards = document.querySelectorAll('.card1');
const visor = document.getElementById("visor");
const visorimg = document.getElementById("visor-img");

cards.forEach((card) => {
    card.addEventListener('click', function () {
        const camino = card.dataset.target;
        const destino = document.getElementById(camino);

        if (!destino) return;
    
        const imgDestino = destino.querySelector("img");

        if (imgDestino) {
            visorimg.src = imgDestino.src;
            visorimg.alt = imgDestino.alt;
            visor.classList.add("abierto");

            visorimg.classList.remove("pop-in");
            void visorimg.offsetWidth;
            visorimg.classList.add("pop-in");
        }
    });   
});

visor.addEventListener("click", function () {
    visor.classList.remove("abierto");
});

// Aquí va el formulario de turnos //

const serviciosForm = document.getElementById("form-turnos");

if (serviciosForm) {
    serviciosForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // lectura de values //
    const nombre = serviciosForm.nombre.value.trim();
    const apellido = serviciosForm.apellido.value.trim();
    const telefono = serviciosForm.telefono.value.trim();
    const fecha = serviciosForm.fecha.value;
    const horario = serviciosForm.horario.value;
    // lectura del selector y sus values //
    const selectTrabajos = serviciosForm.servicios;
    const servicioValue = selectTrabajos.value;
    // validamos con return //
    if (servicioValue ==="") {
        return;
    }

    if (nombre ==="") {
        return;
    }

    if (apellido ==="") {
        return;
    }

    if (telefono ==="") {
        return;
    }

    if (fecha ==="") {
        return;
    }

    if (horario ==="") {
        return;
    }

    serviciosForm.submit();
  });
}