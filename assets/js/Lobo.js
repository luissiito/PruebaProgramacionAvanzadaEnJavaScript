import Animal from "./Animal.js";

export default class Lobo extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    aullar(){
        super.getSonido().play();
    }
}