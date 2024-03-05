import Animal from "./Animal.js";

export default class Leon extends Animal{
    constructor(nombre, edad, srcDeLaImagen, comentarios, sonido){
        super(nombre, edad, srcDeLaImagen, comentarios, sonido);        
    }

    rugir(){
        super.sonido.src = './sounds/Rugido.mp3';
        console.log('el león está rugiendo');
        super.getSonido().play();
    }
}