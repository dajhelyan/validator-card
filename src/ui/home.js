import { changeView } from '../lib/routes.js'

export const homePage = () => {
  const sectionElem = document.createElement('section');
  sectionElem.innerHTML = `
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="#">
      <img class='logo-nav' src="./assets/icons/logo-nav.png" width="50" height="50" alt="">
    </a>
  </nav>
  <div class="container-fluid p-0 d-lg-flex ">
    <div class="container-fluid background-primary-color">
      <div class="row">
        <div class="col text-center pt-2 mt-2 pb-2">
          <h2>Validador de tarjetas</h2>
        </div>
      </div>  
      <div class="row">
        <div class="col text-center">
          <img src="./assets/icons/img-card-main.png" class="img-card" alt=""> 
        </div>
      </div>  
      <div class="row">
        <div class="col text-center">
          <button type="button" id="goValidator" class="btn btn-primary mb-4">Ir a validar</button>
        </div>
      </div>
    </div>
    <div class="container-fluid d-lg justify-content-lg-center">
      <div class="row">
        <div class="col text-center text-uppercase mt-3 mb-3">
          <h3>Conoce màs</h3>
        </div>
      </div>  
      <div class="row flex-lg-column align-items-lg-center"> 
        <div class="col-md-6 mb-4">
          <div class="card text-center">
            <div class="div-icon mx-auto mt-2" style="width: 60px; height: 60px;">
              <img class="mt-1" src="./assets/icons/settings-icon.png"  width="50" height="50" alt="">
            </div>  
            <div class="card-body">
              <h5 class="card-title">Herramienta</h5>
              <p class="card-text">Para verificar la valides de la tarjeta antes de hacer una compra</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card text-center">
            <div class="div-icon mx-auto mt-2" style="width: 60px; height: 60px;">
              <img class="mt-1" src="./assets/icons/focus-icon.png"  width="50" height="50" alt="">
            </div>  
            <div class="card-body">
              <h5 class="card-title">Desarrollo</h5>
              <p class="card-text">Aplicacion web implementada con el Algoritmo de Luhn en JavaScript y para vista y estilos; bootstrap y css.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  `

  const goValidator = sectionElem.querySelector('#goValidator')
  goValidator.addEventListener('click', () => {
    changeView('#/validator');
  })

  return sectionElem;
}

