import Animal from "./Animal.js";

export default class Oso extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    gruñir(){
        super.getSonido().play();
    }
}