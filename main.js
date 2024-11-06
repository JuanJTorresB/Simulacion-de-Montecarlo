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
   console.log(dardo)
}


const lanzarNDardos =(LADO_TABLERO, CENTRO, N)=>{
   for (let index = N; index > 0; index--) {
       lanzarDardo(LADO_TABLERO, CENTRO)
   }
   console.log("a")
}


const botonPi = document.getElementById("Pi")


botonPi.addEventListener("click", lanzarNDardos (LADO_TABLERO, CENTRO, 100))