const Aparato = require("./Aparato");
class AparatoMiniTramp extends Aparato{
    constructor(nombre,dolor,fortaleza,edad,){
        super();
        this.dolor= dolor;
        this.fortaleza= fortaleza;
        this.edad= edad;
        this.nombre= nombre

    }

    nivelDeDolor(){
        return this.dolor
    }
    nivelDeFortaleza(){
        const porcent10= (this.edad * 10) / 100
        return this.fortaleza + porcent10
    }

    puedeUsar(){
        return this.dolor < 20
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


module.exports= AparatoMiniTramp;