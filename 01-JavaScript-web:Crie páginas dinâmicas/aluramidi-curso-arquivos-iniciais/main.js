let listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  console.log(elemento.localName);
  console.log(elemento);

  if (elemento === null) {
    alert("Elemento não encontrado");
  } else if (elemento.localName === "audio") {
    console.log(elemento);
    elemento.play();
  }
}

for (let tecla of listaDeTeclas) {
  let nomeTecla = tecla.classList[1];

  tecla.addEventListener("click", function () {
    let seletorAudio = `#som_${nomeTecla}`;
    tocaSom(seletorAudio);
  });

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
      console.log(evento.code);
    }
  };

  tecla.onkeyup = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.remove("ativa");
      console.log(evento.code);
    }
  };
}
