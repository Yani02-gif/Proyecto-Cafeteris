console.log("------Mi proyecto Kinesiologia-------");

//Importamos todas las clases hijas
const AparatoMagneto= require("./AparatoMagneto");
const AparatoBicicleta= require("./AparatoBicicleta");
const AparatoMiniTramp= require("./AparatoMiniTramp");
const CentroMedico= require("./CentroMedico");

//Creamos nuestros pacientes

const p1= new AparatoMagneto("Leonardo",10,20,40);
const p2= new AparatoBicicleta("Leonardo",10,20,40);
const p3= new AparatoMiniTramp("Leonardo",10,20,40);
const p4= new AparatoMiniTramp("Milena",30,50,3);
const p5= new AparatoMagneto("Milena",30,50,3);
const p6= new AparatoBicicleta("Milena",30,50,3);
//Creo el centro medico con los pacientes

const CentroMedico1= new CentroMedico();

//Agrego mis pacientes al centro medico
CentroMedico1.agregarPaciente(p1);
CentroMedico1.agregarPaciente(p2);
CentroMedico1.agregarPaciente(p3);
CentroMedico1.agregarPaciente(p4);
CentroMedico1.agregarPaciente(p5);
CentroMedico1.agregarPaciente(p6);



//Muestro los requerimientos

console.log("-------Requerimientos-----");
const resul= {
    "Pacientes solicitando aparatos": CentroMedico1.pacientes,
    "Aparatos que pueden usar": CentroMedico1.puedeUsarono(),
    "Pacientes despues de utilizar el aparato": CentroMedico1.usandoAparatos(),
    

};
console.log(resul);