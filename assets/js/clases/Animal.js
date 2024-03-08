const NA = 'NO ASIGNADO';

export default class Animal{
    constructor(nombre = NA, edad = NA, srcDeLaImagen = NA, comentarios = NA, sonido = new Audio()){
        this.nombre = nombre;
        this.edad = edad;
        this.srcDeLaImagen = srcDeLaImagen;
        this.comentarios = comentarios;
        this.sonido = sonido;
        this.getSonido().setAttribute('controls', 'controls');
    }

    getNombre(){ return this.nombre;}
    getEdad(){ return this.edad;}
    getSrcDeLaImagen(){ return this.srcDeLaImagen;}
    getComentarios(){ return this.comentarios;}
    getSonido(){ return this.sonido;}

    setNombre(nuevoNombre){ this.nombre = nuevoNombre;}
    setEdad(nuevaEdad){ this.edad = nuevaEdad;}
    setSrcDeLaImagen(nuevoSrcDeLaImagen){ this.srcDeLaImagen = nuevoSrcDeLaImagen;}
    setComentarios(nuevosComentarios){ this.comentarios = nuevosComentarios;}
    setSonido(nuevoSonido){ this.sonido = nuevoSonido;}
}