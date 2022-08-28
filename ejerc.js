let matriz = [["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"]];
console.log(matriz);

function generateMine(){
let Nbombas = 15
for(contador = 0;contador <= Nbombas;contador++ ){
let a1 = Math.floor(Math.random() * (7));
let a2 = Math.floor(Math.random() * (7));
/*EL while evalúa que la posición de la nueva bomba no se repita*/
while (matriz[a1][a2] != "*" && contador<=Nbombas){
matriz[a1][a2] = "*" ;
}

}    
}


generateMine();
console.log(matriz)


function jugar(){
var mensaje;
let Cord1 = 2;
let Cord2 = 5;
return { Cord1,Cord2};
}

let juego = jugar();



function adyascentes(){
  let ContA = 0;
  while(matriz[juego.Cord1][juego.Cord2]!="*"){
    if(matriz[(juego.Cord1)-1][juego.Cord2]=="*"){
      ContA=+1;
    }

  }
  return ContA;
}
adyascentes();
console.log(`La cantidad de bombas adyascentes es ${adyascentes()}`);