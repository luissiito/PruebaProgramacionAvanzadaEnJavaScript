
import data from '../../../animales.json' assert {type: 'json'};
import ModuloApi from './ModuloApi.js';
import ModuloCards from './ModuloCards.js';
import ModuloModals from './ModuloModals.js';
import Animal from '../clases/Animal.js';
import Aguila from '../clases/Aguila.js';
import Leon from '../clases/Leon.js';
import Lobo from '../clases/Lobo.js';
import Oso from '../clases/Oso.js';
import Serpiente from '../clases/Serpiente.js';
import Caballo from '../clases/Caballo.js';
import Cerdo from '../clases/Cerdo.js';
import Delfin from '../clases/Delfin.js';
import Zebra from '../clases/Zebra.js';
import Jirafa from '../clases/Jirafa.js';
import Gato from '../clases/Gato.js';

/* const animales = await ModuloApi.getAnimalsFromApi(); */
const animales = data.animales;

export default (function ModuloFormulario() {
    const botonAgregar = document.querySelector('#btnRegistrar');
    const selectAnimal = document.querySelector('#animal');
    const selectEdadEstimada = document.querySelector('#edad');
    const comentarios = document.querySelector('#comentarios');

    let animal = new Animal();
    let imagenAnimal = document.createElement('img');
    let opcionElegida = 'Seleccione un animal';
    let protocolAndHostPath = window.location.protocol + "//" + window.location.host;
    
    function añadirEventoClickAlBotonAgregar() {
        botonAgregar.addEventListener('click', function () {
            crearAnimal();
            if (getOpcionElegida() != 'Seleccione un animal') {
                opcionElegida = selectEdadEstimada.options[selectEdadEstimada.selectedIndex].text;
                if (getOpcionElegida() != 'Seleccione un rango de años') {
                    if (comentarios.value != '') {
                        ModuloModals.mostrarModalDeInformacion();
                        ModuloCards.insertarCard(animal);
                        limpiarFormulario();
                        setOpcionElegida('Seleccione un animal');
                    }
                    else { ModuloModals.mostrarModalDeErrorDeComentario() }
                }
                else { ModuloModals.mostrarModalDeErrorDeEdad(); }
            } else { ModuloModals.mostrarModalDeErrorDeNombre(); }
        });
    }

    function añadirEventoClickAlSelectAnimal() {
        selectAnimal.addEventListener('click', function () {
            setOpcionElegida(selectAnimal.options[selectAnimal.selectedIndex].text);
            if (getOpcionElegida() != 'Seleccione un animal') {
                mostrarImagenAnimalEnElPreview(getOpcionElegida());
            }
        });
    }

    function crearAnimal() {
        let opcionElegida = selectAnimal.options[selectAnimal.selectedIndex].text;
        const nombre = `${opcionElegida == 'Seleccione un animal' ? 'NO ASIGNADO' : opcionElegida}`;
        switch (opcionElegida) {
            case 'Águila': animal = new Aguila(); break;
            case 'León': animal = new Leon(); break;
            case 'Lobo': animal = new Lobo(); break;
            case 'Oso': animal = new Oso(); break;
            case 'Serpiente': animal = new Serpiente(); break;
            case 'Delfín': animal = new Delfin(); break;
            case 'Cerdo': animal = new Cerdo(); break;
            case 'Caballo': animal = new Caballo(); break;
            case 'Zebra': animal = new Zebra(); break;
            case 'Jirafa': animal = new Jirafa(); break;
            case 'Gato': animal = new Gato(); break;
        }
        animal.setNombre(nombre);
        animal.setEdad(selectEdadEstimada.options[selectEdadEstimada.selectedIndex].value);
        animal.setComentarios(document.querySelector('#comentarios').value);
        animal.setSrcDeLaImagen(imagenAnimal.src);
        setSrcDelSonidoDelAnimal(animal);
    }

    function getOpcionElegida() {
        return opcionElegida;
    }

    function iniciarEventosClick() {
        añadirEventoClickAlBotonAgregar();
        añadirEventoClickAlSelectAnimal();
    }

    function limpiarFormulario() {
        selectAnimal.value = selectAnimal.options[0].text;
        selectEdadEstimada.value = selectEdadEstimada.options[0].text;
        document.querySelector('textarea').value = '';
        imagenAnimal.remove();
    }

    function mostrarImagenAnimalEnElPreview(opcionElegida) {
        for(let i = 0; i < animales.length; i++){
            if(opcionElegida === animales[i].name){
                imagenAnimal.src = (`${protocolAndHostPath}/PruebaProgramacionAvanzadaEnJavaScript/assets/imgs/${animales[i].imagen}`);
                break;
            }            
        }
        document.querySelector('#preview').appendChild(imagenAnimal);
    }

    function setOpcionElegida(nuevaOpcionElegida) {
        opcionElegida = nuevaOpcionElegida;
    }

    function setSrcDelSonidoDelAnimal(animal){
        for(let i = 0; i < animales.length; i++){
            if(animal.getNombre() === animales[i].name){
                animal.getSonido().src = `${protocolAndHostPath}/PruebaProgramacionAvanzadaEnJavaScript/assets/sounds/${animales[i].sonido}`;
                break;
            }            
        }
    }
    return { iniciarEventosClick, limpiarFormulario };
})();