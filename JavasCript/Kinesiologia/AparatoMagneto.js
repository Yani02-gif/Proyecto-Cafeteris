const Aparato = require("./Aparato");
class AparatoMagneto extends Aparato {
    constructor(nombre,dolor,fortaleza,edad,){
        super()
        this.dolor= dolor
        this.fortaleza= fortaleza
        this.edad= edad
        this.nombre= nombre
    }

    nivelDeDolor(){
        const porcent10= (this.dolor * 10) / 100 
        return this.dolor - porcent10
    }

    nivelDeFortaleza(){
        return this.fortaleza
    }

    puedeUsar(){
        return this.edad > 0
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


module.exports= AparatoMagneto;