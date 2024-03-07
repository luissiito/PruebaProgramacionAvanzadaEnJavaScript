import ModuloModals from './ModuloModals.js'
import Card from './Card.js';

export default (function ModuloCards(){
    let cards = [];
    let contadorDeCards = 0;

    function getCards(){
        return cards;
    }

    function insertarCard(animal){    
        const card = new Card(animal);
        card.getContenedor().classList.add('card');
        card.getContenedor().setAttribute('id', contadorDeCards);
        card.getImagen().src = animal.getSrcDeLaImagen();
        card.getContenedor().addEventListener('click', function(){ModuloModals.mostrarModal(this)});
        contadorDeCards++;
        cards.push(card);
        document.querySelector('#Animales').appendChild(card.getContenedor());
    }
    return { getCards, insertarCard }
})();

