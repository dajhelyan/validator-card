import { validateField, validatorCard, maskify } from '../lib/validator.js'
import { showModal } from './modal.js';
 
export const validatorPage = () => {
  const sectionElem = document.createElement('section');
	sectionElem.innerHTML = `
	<nav class="navbar navbar-light">
		<a class="navbar-brand" href="#">
			<img class="logo-nav" src="./assets/icons/logo-nav.png" width="30" height="30" alt="">
		</a>
	</nav>
	<div class="container-fluid background-secundary-color pb-4">
    <div class="row">
			<div class="col-12 col-md-6 offset-md-3 pt-3">
				<h4>Modo de uso:</h4>
      </div>
      <div class="col-4 col-md-3 offset-md-3 text-center">
        <picture>
          <img src="./assets/icons/todo-icon.png" class="" alt="">
        </picture>
      </div>
      <div class="col-8 col-md-4">
				<ul class="list-instructions">
					<li>Seleccionar la tarjeta a validar.</li>
					<li>Ingresar los datos de la tarjeta y validar.</li>
        </ul>
      </div>
    </div>
    <div class="container cont-form-validator pb-3">
      <div class="row">
        <div class="col">
          <form>
            <div class="form-row">
              <div class="col text-center pt-2">
                <h2>Validar tarjeta</h2>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group mx-auto">
                <h5>Selecciona el tipo de tarjeta a validar:</h5>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group mx-auto">
                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    Visa<span><img src="./assets/icons/icon-visa.png" width="40" height="40"></span>
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Mastercard<span><img src="./assets/icons/icons-mastercard.png" width="40" height="40"></span>
                  </button>
                </div>  
              </div>
            </div>
            <div class="form-row">
              <div class="form-group mx-auto">
                <h5>Numero de tarjeta</h5>
                <input id="input-card-number" class="form-control col-12" placeholder="xxxxxxxxxxxxxxxxx">
                <span class="col-12" id="error-mesagge"></span>
                <button id="btn-validate-card" type="button" class="btn btn-primary col-12 mt-2" data-toggle="modal" data-target="#exampleModal">Validar ahora</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <section id="modal-ele"></section>
  </div>
  `

  const errorMesagge = sectionElem.querySelector('#error-mesagge');
  console.log(errorMesagge);
  
  const captureValueInput = sectionElem.querySelector('#btn-validate-card');
  captureValueInput.addEventListener('click', () => {
    
    const inputCardValue = sectionElem.querySelector("#input-card-number");
    const cardNumber = inputCardValue.value;
  
    inputCardValue.value = maskify(cardNumber)
        
    if (validateField(cardNumber, errorMesagge) === true) {
      const result = validatorCard(cardNumber);
      showModal(sectionElem, result); 
    } else {
      const modalElem = sectionElem.querySelector('#modal-ele');
      modalElem.innerHTML = '';
    }
  })

	return sectionElem;
}

