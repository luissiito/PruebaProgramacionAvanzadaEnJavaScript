import Animal from "./Animal.js";

export default class Leon extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    rugir(){
        super.getSonido().play();
    }
}