

export const validatorPage = () => {
  const sectionElem = document.createElement('secction');
	sectionElem.innerHTML = `
	<nav class="navbar navbar-light">
		<a class="navbar-brand" href="#">
			<img class='logo-nav' src="./assets/icons/logo-nav.png" width="50" height="50" alt="">
		</a>
	</nav>
	<div class="container background-secundary-color pb-4">
    <div class="row">
			<div class="col-12 pt-3">
				<h4>Modo de uso:</h4>
      </div>
      <div class="col-4">
        <picture>
          <img src="./assets/icons/todo-icon.png" class="" alt="">
        </picture>
      </div>
      <div class="col-8">
				<ul class="list-instructions">
					<li>Seleccionar la tarjeta a validar.</li>
					<li>Ingresar los datos de la tarjeta y validar.</li>
        </ul>
      </div>
    </div>
    <div class="container cont-form-validator pb-4">
      <div class="row">
        <div class="col">
          <form>
            <div class="form-row">
              <div class="col text-center pt-2">
                <h2>Validar tarjeta</h2>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <h5>Selecciona el tipo de tarjeta a validar:</h5>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group mx-auto">
                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    Visa<span><img src="./assets/icons/icon-visa.png" width="50" height="50"></span>
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Mastercard<span><img src="./assets/icons/icons-mastercard.png" width="50" height="50"></span>
                  </button>
                </div>  
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <p>Numero de tarjeta</p>
                <input type="number" class="form-control" placeholder="xxxxxxxxxxxxxxxxx">
              </div>
              <div class="form-row">
                <div class="col-6">
                  <p>Caducidad</p>
                  <div class="border-input-date">
                    <span class="expiration">
                      <input type="number"  name="month" placeholder="MM" max="2" min="0" />
                      <span>/</span>
                      <input type="number" name="year" placeholder="YY" max="2" min="0" />
                    </span>
                  </div>
                </div>
                <div class="col-4">  
                  <p>CVV</p>
                  <input type="number" class="form-control" placeholder="xxx">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
	</div>
	`
	return sectionElem;
}