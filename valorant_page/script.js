document.addEventListener("DOMContentLoaded", function () {
  const mapasJSON = {
    mapas: [
      {
        nome: "Bind",
        tipo: "Ataque/Defesa",
        descrição:
          "Bind é um mapa tático com duas bombas para plantar e desarmar.",
      },
      {
        nome: "Haven",
        tipo: "Ataque/Defesa",
        descrição:
          "Haven é um mapa de três bombas, oferecendo mais opções estratégicas.",
      },
      {
        nome: "Split",
        tipo: "Ataque/Defesa",
        descrição:
          "Split é um mapa vertical com duas bombas para plantar e desarmar.",
      },
      {
        nome: "Ascent",
        tipo: "Ataque/Defesa",
        descrição: "Ascent é um mapa com uma bomba para plantar e desarmar.",
      },
      {
        nome: "Icebox",
        tipo: "Ataque/Defesa",
        descrição:
          "Icebox é um mapa com uma bomba para plantar e desarmar, com áreas congeladas.",
      },
      {
        nome: "Breeze",
        tipo: "Ataque/Defesa",
        descrição:
          "Breeze é um mapa com uma bomba para plantar e desarmar, com uma temática tropical.",
      },
    ],
  };

  const listaMapas = document.getElementById("lista-mapas");

  mapasJSON.mapas.forEach((mapa) => {
    const itemLista = document.createElement("li");
    const nomeMapa = document.createElement("h3");
    const tipoMapa = document.createElement("p");
    const descricaoMapa = document.createElement("p");

    nomeMapa.textContent = mapa.nome;
    tipoMapa.textContent = "Tipo: " + mapa.tipo;
    descricaoMapa.textContent = mapa.descrição;

    itemLista.appendChild(nomeMapa);
    itemLista.appendChild(tipoMapa);
    itemLista.appendChild(descricaoMapa);

    listaMapas.appendChild(itemLista);
  });
});
