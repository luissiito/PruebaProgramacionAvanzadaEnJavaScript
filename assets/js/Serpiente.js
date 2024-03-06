import Animal from "./Animal.js";

export default class Serpiente extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    sisear(){
        super.getSonido().play();
    }
}