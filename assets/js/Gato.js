
import Animal from "./Animal.js";

export default class Gato extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    miau(){
        super.getSonido().play();
    }
}