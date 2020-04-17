import { changeView } from '../lib/routes.js'

/* funcion que recibe un elemento al que agregara como nodo hijo el modal */
export const showModal = (sectionElem, result) => {
  /* llamando a elemento dentro sectionElem para setear el modal */
  const dialogElem = sectionElem.querySelector('#modal-ele');
  dialogElem.innerHTML= `
    <div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title message-result id="modalLabel"></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <figure>
              <img src="./assets/icons/icon-modal.png" alt="imagen-card-modal">
            </figure>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary btn-reload">Limpiar</button>
          </div>
        </div>
      </div>
    </div>
  `
  const messageResult = dialogElem.querySelector('.message-result');

  result ? messageResult.innerHTML = `Su tarjeta es valida` : messageResult.innerHTML = `Su tarjeta es invalida`; 

  const btnReload = dialogElem.querySelector('.btn-reload');
  btnReload.addEventListener('click', () => {
    changeView('#/validator');
  })

  return sectionElem.appendChild(dialogElem);
}