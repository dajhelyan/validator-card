import { changeView } from './lib/routes.js';

const initRouter = () => {
    /* funcion que recibe una ruta */
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })
}

/* cada vez qu escucha una recarga ejecuta la funcion init */
window.addEventListener('load', initRouter)