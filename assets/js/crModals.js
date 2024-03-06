
const botonCerrar = document.querySelector('button.botonCerrar');

export function añadirEventoClickAlBotonCerrar(){
    botonCerrar.addEventListener('click', function(){
        document.querySelector('.modal').classList.remove('showModal');
        document.querySelector('.modal').classList.add('ocultarModal');
    });
}