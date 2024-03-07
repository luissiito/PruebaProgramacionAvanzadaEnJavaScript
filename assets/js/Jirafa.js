import Animal from "./Animal.js";

export default class Jirafa extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    zumbar(){
        super.getSonido().play();
    }
}