LADO_TABLERO = 2


CENTRO = {
   X : LADO_TABLERO/2,
   Y : LADO_TABLERO/2
}


const getRandom = (max)=>{
   return (Math.random() * max);
 }


const lanzarDardo = (LADO_TABLERO, CENTRO)=>{
   const dardo = {
       X : getRandom(LADO_TABLERO),
       Y : getRandom(LADO_TABLERO)
   }
   dardo.distanciaCentro = Math.sqrt((((dardo.X - CENTRO.X)**2)+((dardo.Y - CENTRO.Y)**2)))
   if (dardo.distanciaCentro > 1){
    return true
   } else {
    return false
   }
}


const lanzarNDardos =(LADO_TABLERO, CENTRO, N)=>{
    let cuentaAdentro = 0;
    let cuentaFuera = 0;
   for (let index = N; index > 0; index--) {
       if (lanzarDardo(LADO_TABLERO, CENTRO)){
        cuentaFuera++
       } else {
        cuentaAdentro++
       }
   };
   console.log("Dardos Fuera")
   console.log(cuentaFuera)
   console.log("Dardos Dentro")
   console.log(cuentaAdentro)
   console.log("Aproximacion de Pi")
   console.log((4*cuentaAdentro)/N);
}


const botonPi = document.getElementById("Pi");

const inputD = document.getElementById("inputD");



botonPi.addEventListener("click", ()=>lanzarNDardos (LADO_TABLERO, CENTRO, inputD.value));