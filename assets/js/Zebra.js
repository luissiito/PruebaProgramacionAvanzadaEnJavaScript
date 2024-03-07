import Animal from "./Animal.js";

export default class Zebra extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    relinchar(){
        super.getSonido().play();
    }
}