
export default class Card{
    constructor(animal){
        this.setContenedor(document.createElement('div'));
        this.setImagen(document.createElement('img'));
        this.setAnimal(animal);
        this.setAudio(animal.getSonido());
        this.armarCard();
    }

    getContenedor(){
        return this.contenedor;
    }
    getImagen(){
        return this.imagen;
    }
    getAnimal(){
        return this.animal;
    }
    getAudio(){
        return this.audio;
    }

    setContenedor(nuevoContenedor){
        this.contenedor = nuevoContenedor;
    }
    setImagen(nuevaImagen){
        this.imagen = nuevaImagen;
    }
    setAnimal(nuevoAnimal){
        this.animal = nuevoAnimal;
    }
    setAudio(nuevoAudio){
        this.audio = nuevoAudio;
    }

    armarCard(){
        this.getContenedor().append(this.getImagen(), this.getAnimal().getSonido());
    }
}