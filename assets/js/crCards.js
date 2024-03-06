import Card from './Card.js';
import { añadirEventoClickAlBotonCerrar } from './crModals.js';

const modalBody = document.querySelector('.modal-body');
const imagen = document.createElement('img');
const pEdad = document.createElement('p');
const h5Comentarios = document.createElement('h5');
const pComentarios = document.createElement('p');
const botonCerrar = document.createElement('button');
let cards = [];
let contadorDeCards = 0;

function cargarInformacionAlModal(idCard){ 
    imagen.src = cards[idCard].getAnimal().getSrcDeLaImagen();
    pEdad.textContent = cards[idCard].getAnimal().getEdad();
    h5Comentarios.textContent = 'Comentarios';
    pComentarios.textContent = cards[idCard].getAnimal().getComentarios();
    botonCerrar.textContent = 'CERRAR';
    botonCerrar.classList.add('botonCerrar');    
    botonCerrar.addEventListener('click', ()=> ocultarModal());
    modalBody.append(imagen, pEdad, h5Comentarios, pComentarios, botonCerrar);
}

export function insertarCard(animal){    
    const card = new Card(animal);
    card.setAnimal(animal);
    card.getContenedor().classList.add('card');
    card.getContenedor().setAttribute('id', contadorDeCards);
    card.getImagen().src = animal.getSrcDeLaImagen();
    card.getContenedor().addEventListener('click', function(){mostrarModal(this)});
    contadorDeCards++;
    cards.push(card);
    document.querySelector('#Animales').appendChild(card.getContenedor());
}

function mostrarModal(card){
    limpiarModalBody();
    cargarInformacionAlModal(card.id);     
    document.querySelector('.modal').classList.add('showModal');
    document.querySelector('.modal').classList.remove('ocultarModal');
}

function ocultarModal(){   
    document.querySelector('.modal').classList.add('ocultarModal');
    document.querySelector('.modal').classList.remove('showModal');
}

function limpiarModalBody(){
    imagen.remove();
    pEdad.remove();
    h5Comentarios.remove();
    pComentarios.remove();
    botonCerrar.remove();    
}