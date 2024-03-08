import ModuloCards from './ModuloCards.js';
import ModuloFormulario from './ModuloFormulario.js';

export default (function ModuloModals(){
    const modalBody = document.querySelector('.modal-body');
    const h5Mensaje = document.createElement('h5');
    const imagen = document.createElement('img');
    const pEdad = document.createElement('p');
    const h5Comentarios = document.createElement('h5');
    const pComentarios = document.createElement('p');
    const botonDelModal = document.createElement('button');

    function cargarInformacionAlModal(idCard){ 
        imagen.src = ModuloCards.getCards()[idCard].getAnimal().getSrcDeLaImagen();
        pEdad.textContent = ModuloCards.getCards()[idCard].getAnimal().getEdad();
        h5Comentarios.textContent = 'Comentarios';
        pComentarios.textContent = ModuloCards.getCards()[idCard].getAnimal().getComentarios();
        crearBotonCerrar();
        modalBody.append(imagen, pEdad, h5Comentarios, pComentarios, botonDelModal);
    }

    function crearBotonCerrar(){
        botonDelModal.textContent = 'CERRAR';
        botonDelModal.className += 'boton botonCerrar';  
        botonDelModal.addEventListener('click', ()=> ocultarModal());
    }

    function crearBotonEntendido(){
        botonDelModal.textContent = 'ENTENDIDO';
        botonDelModal.className += 'boton botonEntendido';  
        botonDelModal.addEventListener('click', ()=> ocultarModal());
    }

    function limpiarModalBody(){
        while (modalBody.firstChild) {
            modalBody.removeChild(modalBody.firstChild);
        }
    }    
    
    function mostrarModal(card){
        limpiarModalBody();
        cargarInformacionAlModal(card.id);   
        showModal();
    }

    function mostrarModalDeInformacion(){
        h5Mensaje.textContent = 'ANIMAL AGREGADO A LISTA DE ANIMALES EN INVESTIGACIÓN';
        limpiarModalBody();
        crearBotonEntendido();
        modalBody.append(h5Mensaje, botonDelModal);
        showModal();
    }
    function mostrarModalDeErrorDeNombre(){
        h5Mensaje.textContent = 'DEBES SELECCIONAR UN ANIMAL DE LA LISTA';
        prepararModal();
        showModal();
    }

    function mostrarModalDeErrorDeEdad(){
        h5Mensaje.textContent = 'DEBES SELECCIONAR UN RANGO DE EDAD DE LA LISTA';
        prepararModal();
        showModal();
    }

    function mostrarModalDeErrorDeComentario(){
        h5Mensaje.textContent = 'DEBES AGREGAR UN COMENTARIO';
        prepararModal();
        showModal();
    }
    
    function prepararModal(){
        limpiarModalBody();
        crearBotonCerrar();
        modalBody.append(h5Mensaje, botonDelModal);
    }
       
    function ocultarModal(){   
        document.querySelector('.modal').classList.add('ocultarModal');
        document.querySelector('.modal').classList.remove('showModal');
    }

    function showModal(){  
        document.querySelector('.modal').classList.add('showModal');
        document.querySelector('.modal').classList.remove('ocultarModal');
    }

    return { cargarInformacionAlModal, mostrarModalDeErrorDeNombre, mostrarModalDeErrorDeEdad,
         mostrarModalDeErrorDeComentario, mostrarModalDeInformacion, limpiarModalBody, mostrarModal};
})();