import {animal} from './crFormulario.js'
import { añadirEventoClickAlBotonCerrar } from './crModals.js';

function añadirEventoClickALaCard(){
    document.querySelector('.card').addEventListener('click', function (){
        mostrarModal();
    });
}

function cargarInformacionAlModal(){
    const modalBody = document.querySelector('.modal-body');
    const imagen = document.createElement('img');
    const pEdad = document.createElement('p');
    const h5Comentarios = document.createElement('h5');
    const pComentarios = document.createElement('p');
    const botonCerrar = document.createElement('button');
    
    imagen.src = animal.getSrcDeLaImagen();
    pEdad.textContent = animal.getEdad();
    h5Comentarios.textContent = 'Comentarios';
    pComentarios.textContent = animal.getComentarios();
    botonCerrar.textContent = 'CERRAR';
    botonCerrar.classList.add('botonCerrar');    
    botonCerrar.addEventListener('click', ()=> ocultarModal());
    modalBody.append(imagen, pEdad, h5Comentarios, pComentarios, botonCerrar);
}

function mostrarModal(){
    limpiarModalBody();
    cargarInformacionAlModal();     
    document.querySelector('.modal').classList.add('showModal');
    document.querySelector('.modal').classList.remove('ocultarModal');
}
function ocultarModal(){   
    document.querySelector('.modal').classList.add('ocultarModal');
    document.querySelector('.modal').classList.remove('showModal');
}

export function iniciarCard(){
    añadirEventoClickALaCard();      
}

function limpiarModalBody(){
    document.querySelector('.modal .modal-body').innerHTML = '';
}