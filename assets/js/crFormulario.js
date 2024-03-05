
import Animal from './Animal.js';
import data from '../../animales.json' assert { type: 'json' };
import { iniciarCard } from './crCards.js';

const animales = data.animales;
const botonAgregar = document.querySelector('#btnRegistrar');
const selectAnimal = document.querySelector('#animal');
const selectEdadEstimada = document.querySelector('#edad');

export let animal = new Animal();
let imagenAnimal = document.createElement('img');
let opcionElegida = 'Seleccione un animal';
let relativePath = window.location.protocol + "//" + window.location.host;


function añadirEventoClickAlBotonAgregar(){
    botonAgregar.addEventListener('click', function (){
        animal = crearAnimal();        
        insertarCard(animal);  
    });
}

function añadirEventoClickAlSelectAnimal(){
    selectAnimal.addEventListener('click', function (){
        setOpcionElegida(selectAnimal.options[selectAnimal.selectedIndex].value);
        mostrarImagenAnimalEnElPreview(opcionElegida);
    });
}

function crearAnimal(){
    let opcionElegida = selectAnimal.options[selectAnimal.selectedIndex].text;
    const animal = new Animal();
    const nombre = `${opcionElegida == 'Seleccione un animal'? 'NO ASIGNADO' : opcionElegida} `;
    animal.setNombre(nombre);
    animal.setEdad(selectEdadEstimada.options[selectEdadEstimada.selectedIndex].value);
    animal.setComentarios(document.querySelector('#comentarios').value);
    animal.setSrcDeLaImagen(imagenAnimal.src);
    setSrcSonidoSegunAnimal(animal);

    return animal;
}

function insertarCard(animal){    
    const card = document.createElement('div');
    const imagen = document.createElement('img');
    card.classList.add('card');
    imagen.src = animal.getSrcDeLaImagen();
    card.append(imagen, animal.getSonido());
    document.querySelector('#Animales').appendChild(card);
}

export function iniciarEventosClick(){
    añadirEventoClickAlBotonAgregar();
    añadirEventoClickAlSelectAnimal();   
    iniciarCard();
}

function mostrarImagenAnimalEnElPreview(opcionElegida){  
    switch(opcionElegida){
        case 'Aguila' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[0].imagen}`;
                        document.querySelector('#preview').appendChild(imagenAnimal);
                        break;
        case 'Leon' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[1].imagen}`;
                        document.querySelector('#preview').appendChild(imagenAnimal);
                        break;
        case 'Lobo' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[2].imagen}`;
                        document.querySelector('#preview').appendChild(imagenAnimal);
                        break;
        case 'Oso' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[3].imagen}`;
                        document.querySelector('#preview').appendChild(imagenAnimal);
                        break;
        case 'Serpiente' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[4].imagen}`;
                        document.querySelector('#preview').appendChild(imagenAnimal);
                        break;
    }
}

function setOpcionElegida(nuevaOpcionElegida){
    opcionElegida = nuevaOpcionElegida;
}

function setSrcSonidoSegunAnimal(animal){       
    switch (animal.getNombre().trim()) {
        case 'Águila': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[0].sonido}`;
            break;
        case 'León': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[1].sonido}`;
            break;
        case 'Lobo': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[2].sonido}`;
            break;
        case 'Oso': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[3].sonido}`;
            break;
        case 'Serpiente': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[4].sonido}`;
            break;
        default: console.log('el audio no ha recibido el src'); break;
    }
}