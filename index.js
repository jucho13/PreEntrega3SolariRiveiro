class producto
{
    constructor(nombre,precio)
    {
        this.nombre=nombre;
        this.precio=precio;
    }
    sumaIva()
    {
        return this.precio * 1.21;
    }
}
const fideos = new producto("Fideos", 209);
const leche = new producto("Leche", 240);
const yogurt = new producto("Yogurt", 340);
const tapaDeTarta = new producto("Tarta", 190);
const cocaCola = new producto("Coca", 210);
const papasFritas = new producto("Papas Fritas", 170);


let productos=[fideos,leche,yogurt,tapaDeTarta,cocaCola,papasFritas,mani,pan];