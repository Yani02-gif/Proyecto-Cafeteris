const Aparato = require("./Aparato");

class CentroMedico{
    constructor(){
        this.pacientes= [];
        this.rutinas=[];
    }

    agregarPaciente(p){
        return this.pacientes.push(p);
    }

    agregarAparato(aparato){
        return this.rutinas.push(aparato)
    }

    puedeUsarono(){
        return this.pacientes.reduce((acc,paciente)=>{
            if(paciente.puedeUsar())
                acc.push(paciente);

            return acc;
        }, []);
    }

    usandoAparatos(){
        const usos= this.puedeUsarono()
            return usos.map((c) => c.usandoAparato())

    };


}
module.exports= CentroMedico;