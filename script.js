// Lista de equipos (elementos del algoritmo)
const equipos = [
  { nombre: "Real Madrid", puntos: 0 },
  { nombre: "FC Barcelona", puntos: 0 },
  { nombre: "Atlético de Madrid", puntos: 0 },
  { nombre: "Sevilla FC", puntos: 0 },
  { nombre: "Real Sociedad", puntos: 0 },
  { nombre: "Athletic Club", puntos: 0 },
  { nombre: "Valencia CF", puntos: 0 },
  { nombre: "Villarreal CF", puntos: 0 }
];

let equipoA;
let equipoB;

// Generar comparación A/B
function nuevaComparacion() {
  let indices = [];

  while (indices.length < 2) {
    let random = Math.floor(Math.random() * equipos.length);
    if (!indices.includes(random)) {
      indices.push(random);
    }
  }

  equipoA = equipos[indices[0]];
  equipoB = equipos[indices[1]];

  document.getElementById("equipoA").innerText = equipoA.nombre;
  document.getElementById("equipoB").innerText = equipoB.nombre;
}

// Registrar voto
function votar(ganador) {
  ganador.puntos += 1;
  actualizarRanking();
  nuevaComparacion();
}

// Actualizar ranking
function actualizarRanking() {
  const lista = document.getElementById("ranking");
  lista.innerHTML = "";

  const ordenados = [...equipos].sort((a, b) => b.puntos - a.puntos);

  ordenados.forEach((equipo, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${equipo.nombre} (${equipo.puntos})`;
    lista.appendChild(li);
  });
}
