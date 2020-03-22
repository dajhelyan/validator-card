
export const homePage = () => {
  const sectionElem = document.createElement('section');
  sectionElem.innerHTML = `
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="#">
      <img class='logo-nav' src="./assets/icons/logo-nav.png" width="50" height="50" alt="">
    </a>
  </nav>
  <main id="main">
    <div class="container-fluid background-main-color">
      <div class="row">
        <div class="col text-center pt-2 pb-2">
        <h2>Validador de tarjetas</h2>
        <img src='./assets/icons/img-card-main.png' alt=''> 
      </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <button type="button" class="btn btn-primary mb-4">Ir a validar</button>
        </div>
      </div>
    </div>
  </main>
  <section id="section-about" class="background-sec-cards">
    <div class="container">
      <div class="row">
        <div class="col text-center text-uppercase mt-3">
          <h3>Conoce màs</h3>
        </div>
      </div>  
      <div class="row"> 
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
  </section>
  `
  return sectionElem;
}

