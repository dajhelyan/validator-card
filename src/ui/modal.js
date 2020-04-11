/* funcion que recibe un elemento al que agregara como nodo hijo el modal */
export const showModal = (sectionElem, result) => {
  /* llamando a elemento dentro sectionElem para setear el modal */
  const dialogElem = sectionElem.querySelector('#modal-ele');
  dialogElem.innerHTML= `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 id="message-result"></h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `
  const messageResult = dialogElem.querySelector('#message-result');
console.log('modal');

  result ? messageResult.innerHTML = `Su tarjeta es valida` : messageResult.innerHTML = `Su tarjeta es invalida`; 

  return sectionElem.appendChild(dialogElem);
}