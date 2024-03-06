
import ModuloApi from './ModuloApi.js';
import ModuloCards from './ModuloCards.js';
import ModuloModals from './ModuloModals.js';
import Animal from './Animal.js';
import Aguila from './Aguila.js';
import Leon from './Leon.js';
import Lobo from './Lobo.js';
import Oso from './Oso.js';
import Serpiente from './Serpiente.js';
import Caballo from './Caballo.js';
import Cerdo from './Cerdo.js';
import Delfin from './Delfin.js';

const animales = await ModuloApi.getAnimalsFromApi();
const botonAgregar = document.querySelector('#btnRegistrar');
const selectAnimal = document.querySelector('#animal');
const selectEdadEstimada = document.querySelector('#edad');
const comentarios = document.querySelector('#comentarios');

let animal = new Animal();
let imagenAnimal = document.createElement('img');
let opcionElegida = 'Seleccione un animal';
let relativePath = window.location.protocol + "//" + window.location.host;

function añadirEventoClickAlBotonAgregar(){
    botonAgregar.addEventListener('click', function (){
        crearAnimal();  
        if(getOpcionElegida() != 'Seleccione un animal'){
            opcionElegida = selectEdadEstimada.options[selectEdadEstimada.selectedIndex].text;
            if(getOpcionElegida() != 'Seleccione un rango de años'){ 
                if(comentarios.value != ''){ 
                    ModuloCards.insertarCard(animal);  
                    limpiarFormulario();
                    setOpcionElegida('Seleccione un animal');  
                } 
                else{ ModuloModals.mostrarModalDeErrorDeComentario()}                           
            }
            else{ ModuloModals.mostrarModalDeErrorDeEdad();}
        }else{ ModuloModals.mostrarModalDeErrorDeNombre();}      
    });
}

function añadirEventoClickAlSelectAnimal(){
    selectAnimal.addEventListener('click', function (){
        setOpcionElegida(selectAnimal.options[selectAnimal.selectedIndex].value);
        if(getOpcionElegida() != 'Seleccione un animal'){
            mostrarImagenAnimalEnElPreview(getOpcionElegida());
        }
    });
}

function crearAnimal(){
    let opcionElegida = selectAnimal.options[selectAnimal.selectedIndex].text;
    const nombre = `${opcionElegida == 'Seleccione un animal' ? 'NO ASIGNADO' : opcionElegida} `;
    switch (opcionElegida) {
        case 'Águila': animal = new Aguila();break;
        case 'León': animal = new Leon(); break;
        case 'Lobo': animal = new Lobo(); break;
        case 'Oso': animal = new Oso(); break;
        case 'Serpiente': animal = new Serpiente(); break;
        case 'Delfín': animal = new Delfin(); break;
        case 'Cerdo': animal = new Cerdo(); break;
        case 'Caballo': animal = new Caballo(); break;
    }
    animal.setNombre(nombre);
    animal.setEdad(selectEdadEstimada.options[selectEdadEstimada.selectedIndex].value);
    animal.setComentarios(document.querySelector('#comentarios').value);
    animal.setSrcDeLaImagen(imagenAnimal.src);
    setSrcSonidoSegunAnimal(animal);
}

export function iniciarEventosClick(){
    añadirEventoClickAlBotonAgregar();
    añadirEventoClickAlSelectAnimal();  
}

function getOpcionElegida(){
    return opcionElegida;
}

function limpiarFormulario(){
    selectAnimal.value = selectAnimal.options[0].text;
    selectEdadEstimada.value = selectEdadEstimada.options[0].text;
    document.querySelector('textarea').value = '';
    imagenAnimal.remove();
}

function mostrarImagenAnimalEnElPreview(opcionElegida){  
    switch(opcionElegida){
        case 'Aguila' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[0].imagen}`; break;
        case 'Leon' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[1].imagen}`; break;
        case 'Lobo' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[2].imagen}`; break;
        case 'Oso' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[3].imagen}`; break;
        case 'Serpiente' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[4].imagen}`; break;
        case 'Delfin' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[5].imagen}`; break;
        case 'Cerdo' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[6].imagen}`; break;
        case 'Caballo' : imagenAnimal.src = `${relativePath}/assets/imgs/${animales[7].imagen}`; break;
    }    
    document.querySelector('#preview').appendChild(imagenAnimal);
}

function setOpcionElegida(nuevaOpcionElegida){
    opcionElegida = nuevaOpcionElegida;
}

function setSrcSonidoSegunAnimal(animal){       
    switch (animal.getNombre().trim()) {
        case 'Águila': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[0].sonido}`; break;
        case 'León': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[1].sonido}`; break;
        case 'Lobo': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[2].sonido}`; break;
        case 'Oso': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[3].sonido}`; break;
        case 'Serpiente': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[4].sonido}`; break;
        case 'Delfín': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[5].sonido}`; break;
        case 'Cerdo': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[6].sonido}`; break;
        case 'Caballo': animal.getSonido().src = `${relativePath}/assets/sounds/${animales[7].sonido}`; break;
    }
}