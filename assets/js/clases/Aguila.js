
import Animal from "./Animal.js";

export default class Aguila extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    chillar(){
        super.getSonido().play();
    }
}