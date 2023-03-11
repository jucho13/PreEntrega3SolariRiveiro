class producto
{
    constructor(nombre,precio,stock)
    {
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    sumaIva()
    {
        return this.precio * 1.21;
    }
    restaStock(){
        this.stock = this.stock - 1;
        console.log(`el stock de ${this.nombre} ha sido actualizado`);
    }
}
const fideos = new producto("Fideos", 209,20);
const leche = new producto("Leche", 240,16);
const yogurt = new producto("Yogurt", 340,16);
const tapaDeTarta = new producto("Tarta", 190,10);
const cocaCola = new producto("Coca", 210,29);
const papasFritas = new producto("Papas Fritas", 170,10);


let productos=[fideos,leche,yogurt,tapaDeTarta,cocaCola,papasFritas];
let carrito=[];

class ObjCarrito{
    constructor(producto, cant){
        this.producto = producto; 
        this.cantidad = cant;
    }
    sumaStock(){
        this.cantidad = this.cantidad + 1 
    }
}

let btnOn1=document.getElementById("btnClick1");
let btnOn2=document.getElementById("btnClick2");
let btnOn3=document.getElementById("btnClick3");
let btnOn4=document.getElementById("btnClick4");
let btnOn5=document.getElementById("btnClick5");
let btnOn6=document.getElementById("btnClick6");
let btnCarrito=document.getElementById("btnClickCarrito");
const cards = document.querySelectorAll(".item");
const cardsInfo = document.querySelectorAll(".info-product");

btnOn1.onclick = () => 
{
    agregaCarrito(productos[0]);
    productos[0].restaStock();
    console.log(carrito);
};
btnOn2.onclick = () => 
{
    agregaCarrito(productos[1]);
    productos[1].restaStock();
    console.log(carrito);
};
btnOn3.onclick = () => 
{
    agregaCarrito(productos[2]);
    productos[2].restaStock();
    console.log(carrito);
};
btnOn4.onclick = () => 
{
    agregaCarrito(productos[3]);
    productos[3].restaStock();
    console.log(carrito);
};
btnOn5.onclick = () => 
{
    agregaCarrito(productos[4]);
    productos[4].restaStock();
    console.log(carrito);
};
btnOn6.onclick = () => 
{
    agregaCarrito(productos[5]);
    productos[5].restaStock();
    console.log(carrito);
};
//---------------------------------------------------------------------
function agregaCarrito(prod){
    let existeEnCarrito = carrito.find(e => e.producto == prod) // 
 //Si el find devuelve un valor, el producto ya estaba en carrito --> Hay que sumar stock
 //si el find devuelve undefined, es que no lo encontró --> hay que instanciarlo
 if (existeEnCarrito != undefined){
     //Si entra acá, es porque encontró el objeto en cuestión en el carrito
     let posicion = carrito.findIndex(elem => elem.producto == existeEnCarrito.producto);
     carrito[posicion].sumaStock();
     
 }else{
     //Si entra acá, es porque el método find devolvió undefined por no haber encontrado coincidencia.
     const alCarrito = new ObjCarrito(prod, 1)
     carrito.push(alCarrito);
     console.table(carrito);
 }
}
const bodyContainer=document.getElementById("container-items");
console.log(bodyContainer);
function totalFuncion(total,bodyContainer){
    const parrafo = document.createElement("div");
    parrafo.innerText = `El total de su compra con IVA es ${total}`;
    parrafo.className = "total";
    bodyContainer.appendChild(parrafo);
}

btnCarrito.onclick = () => 
{
    let nombreProdCarrito;
    let posicionProd;
    let subTotal;
    let total=0;
    let subTotalProducto=[];
    for(i=0;i<carrito.length;i++)
    {
        subTotal=0;
        nombreProdCarrito=carrito[i].producto;
        console.log(nombreProdCarrito);
        posicionProd=productos.indexOf(nombreProdCarrito);
        console.log(posicionProd);
        console.log(carrito[i].cantidad);
        for(j=0;j<carrito[i].cantidad;j++)
        {
            total=total + productos[posicionProd].sumaIva();
            console.log(productos[posicionProd].sumaIva());
        }
        subTotalProducto.push(subTotal);
        
    };
bodyContainer.innerHTML=(``);
// carrito.forEach(producto=>
//     {
//         const div = document.createElement("div");
//         div.innerHTML=`<p> Nombre: ${producto.nombre}</p>
//                         <p> Cantidad ${carrito.cantidad}
//                         <p> Precio: ${producto.precio}</p>`;
//         div.appendChild(bodyContainer);
        
//     });
totalFuncion(total,bodyContainer);
}


