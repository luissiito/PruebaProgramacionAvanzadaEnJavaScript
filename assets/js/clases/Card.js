
export default class Card{
    constructor(){
        this.setContenedor(document.createElement('div'));
        this.setImagen(document.createElement('img'));
        this.setAudio(document.createElement('audio'));
        this.getAudio().setAttribute('controls', 'controls');
    }

    getContenedor(){ return this.contenedor; }
    getImagen(){ return this.imagen; }
    getAnimal(){ return this.animal; }
    getAudio(){ return this.audio; }

    setContenedor(nuevoContenedor){ this.contenedor = nuevoContenedor;}
    setImagen(nuevaImagen){ this.imagen = nuevaImagen; }
    setAnimal(nuevoAnimal){ this.animal = nuevoAnimal; }
    setAudio(nuevoAudio){ this.audio = nuevoAudio; }

    armarCard(){
        this.getContenedor().append(this.getImagen(), this.getAudio());
    }
}