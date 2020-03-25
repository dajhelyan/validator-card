

export const validatorPage = () => {
  const sectionElem = document.createElement('secction');
	sectionElem.innerHTML = `
	<nav class="navbar navbar-light">
		<a class="navbar-brand" href="#">
			<img class='logo-nav' src="./assets/icons/logo-nav.png" width="50" height="50" alt="">
		</a>
	</nav>
	<div class="container">
		<div class="row">
			<div class="col text-center">
				<h2>Validar tarjeta</h2>
			</div>
    </div>
    <div class="row">
			<div class="col">
				<h4>Modo de uso:</h4>
				<picture>
					<img src="./assets/icons/todo-icon.png" clasS="" alt="">
				</picture>
			</div>
			<div class="col">
				<ul class="list-instructions">
					<li>Seleccionar la tarjeta a vaidar.</li>
					<li>Ingresar los datos de la tarjeta y validar.</li>
				</ul>
			</div>
    </div>
	</div>
	`
	return sectionElem;
}