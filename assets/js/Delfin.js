import Animal from "./Animal.js";

export default class Delfin extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    silbido(){
        super.getSonido().play();
    }
}