const Aparato = require("./Aparato");
class AparatoBicicleta extends Aparato{
    constructor(nombre,dolor,fortaleza,edad){
        super()
        this.dolor= dolor
        this.fortaleza= fortaleza
        this.edad= edad
        this.nombre= nombre

    }

    nivelDeDolor(){
        return this.dolor - 4;
    }

    nivelDeFortaleza(){
        return this.fortaleza + 3;
    }

    puedeUsar(){
        return this.edad > 8;
    }

    usandoAparato(){
        return {
            Nombre: this.nombre,
            dolor: this.nivelDeDolor(),
            Fortaleza: this.nivelDeFortaleza(),
            Edad: this.edad,
            PuedeUsarlo: this.puedeUsar()
        }
    }

}

module.exports= AparatoBicicleta;