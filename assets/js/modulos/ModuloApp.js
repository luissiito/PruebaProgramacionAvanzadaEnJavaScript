import ModuloFormulario  from "./ModuloFormulario.js"; 

export default (function ModuloApp(){
    function iniciarApp(){
        ModuloFormulario.iniciarEventosClick();
    }
    return { iniciarApp }; 
})();