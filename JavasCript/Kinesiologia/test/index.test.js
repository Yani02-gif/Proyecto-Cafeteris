const AparatoMagneto= require("../AparatoMagneto");
const AparatoBicicleta= require("../AparatoBicicleta");
const AparatoMiniTramp= require("../AparatoMinitramp");
const CentroMedico= require("../CentroMedico");

describe("Test general de mi Centro Medico",()=>{
    test("Verificamos que 1. Leonardo puede usar los tres aparatos creados, mientras que Milena puede usar sólo el magneto.",()=>{
        const p1= new AparatoMagneto("Leonardo",10,20,40);
        const p2= new AparatoBicicleta("Leonardo",10,20,40);
        const p3= new AparatoMiniTramp("Leonardo",10,20,40);
        const p4= new AparatoMiniTramp("Milena",30,50,3);
        const p5= new AparatoMagneto("Milena",30,50,3);
        const p6= new AparatoBicicleta("Milena",30,50,3);

        expect(p1.puedeUsar()).toBe(true);
        expect(p2.puedeUsar()).toBe(true);
        expect(p3.puedeUsar()).toBe(true);
        expect(p4.puedeUsar()).toBe(false);
        expect(p5.puedeUsar()).toBe(true);
        expect(p6.puedeUsar()).toBe(false);

    });

    test("2. Verificamos que después de usar el magneto una vez, el nivel de dolor de Leonardo baja a 9",() => {

        const p1= new AparatoMagneto("Leonardo",10,20,40);

        expect(p1.usandoAparato().dolor).toBe(9);
    });

    test("3.Verificamos que después de usar el magneto una vez, el nivel de dolor de Milena baja a 27.",() => {
        const p1= new AparatoMagneto("Milena",30,50,3);

        expect(p1.usandoAparato().dolor).toBe(27);

    });

    test("4.Verificamos que después de usar la bicicleta una vez, el nivel de dolor de Leonardo baja a 6, y la fortaleza sube a 23",() => {
        const p1= new AparatoBicicleta("Leonardo",10,20,40);
        
        expect(p1.usandoAparato().Fortaleza).toBe(23);
        expect(p1.usandoAparato().dolor).toBe(6);

    });

    test("5.Verificamos que después de usar el minitramp una vez, la fortaleza des Leonardo sube a 24.",()=>{
        const p1= new AparatoMiniTramp("Leonardo",10,20,40);

        expect(p1.usandoAparato().Fortaleza).toBe(24);
    });





});