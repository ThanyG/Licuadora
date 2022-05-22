let licuadoraEncendida = false
let sonidoLicuadora = document.getElementById('blender-sound')
let buttonLicuadora = document.getElementById('blender-button-sound')
let licuadora = document.getElementById('blender')

function controlarLicuadora() {
    hacerSonar()
    /** 
     * @description toggle añade o quita una clase dependiendo de si existe o no existe :) 
     * @ref https://www.w3schools.com/howto/howto_js_toggle_class.asp  
    */
    licuadora.classList.toggle('active')
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
