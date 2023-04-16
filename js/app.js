// 6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.

class Tiempo {
  constructor() {
    this.hora;
    this.minutos;
    this.segundos;
  }

  setTime(hora, minutos, segundos) {
    this.hora = hora;
    this.minutos = minutos;
    this.segundos = segundos;
  }

  restas() {
    this.segundos--;
    if (this.segundos < 1) {
      this.minutos--;
      this.segundos = 59;
    } else if (this.minutos < 1) {
      this.horas--;
      this.minutos = 59;
    }

    if (this.segundos < 10) {
      this.segundos = `0${this.segundos}`;
    }

    if (this.minutos < 10) {
      this.minutos = `0${this.minutos}`;
    }

    if (this.horas < 10) {
      this.horas = `0${this.horas}`;
    }
  }
}

let btnPlay = document.getElementById("btnPlay"),
  btnPausa = document.getElementById("btnPausa"),
  btnReiniciar = document.getElementById("btnReiniciar");
let contenedor = document.getElementById("contenedor");

btnPlay.addEventListener("click", darPlay);
// btnPausa.addEventListener("click", Pausa);
 btnReiniciar.addEventListener("click", Reiniciar);

const TiempoRestar = new Tiempo();

function darPlay() {
  let horas = parseInt(document.getElementById("horas").value),
    minutos = parseInt(document.getElementById("minutos").value),
    segundos = parseInt(document.getElementById("segundos").value);
  console.log(minutos, segundos, horas);

  btnPlay.disabled = true;
  btnPausa.disabled = false;
  btnReiniciar.disabled = false;

  TiempoRestar.setTime(horas, minutos, segundos);
  setInterval(IntervaloRestar, 1000);
}
function IntervaloRestar ( ) {
  
  TiempoRestar.restas();
  contenedor.innerHTML = `${TiempoRestar.hora}:${TiempoRestar.minutos}:${TiempoRestar.segundos}`;

}

function Reiniciar() {
  clearInterval(IntervaloRestar);
}2