let estadoLicuadora = 'apagada'
let sonidoLicuadora = document.getElementById('blender-sound')
let buttonLicuadora = document.getElementById('blender-button-sound')
let licuadora = document.getElementById('blender')

function controlarLicuadora() {
  if (estadoLicuadora == 'apagada') {
    estadoLicuadora = 'encendido'
    hacerSonar()
    licuadora.classList.add('active')
  } else {
    estadoLicuadora = 'apagada'
    hacerSonar()
    licuadora.classList.remove('active')
  }
}
function hacerSonar() {
  if (sonidoLicuadora.paused) {
    buttonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    buttonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}
