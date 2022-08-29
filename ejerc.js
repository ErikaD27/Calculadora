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
let Nbombas = 10;
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
let Cord1 = 3;
let Cord2 = 2;
return { Cord1,Cord2};
}

let juego = jugar();



function adyascentes(){
  let ContA = 0;
  if(matriz[juego.Cord1][juego.Cord2]!="*"){
    if(matriz[(juego.Cord1)-1][juego.Cord2]=="*"){
      ContA+=1;
    }
    if(matriz[(juego.Cord1)][(juego.Cord2)+1]=="*"){
      ContA+=1;
    }
    if(matriz[(juego.Cord1)+1][(juego.Cord2)]=="*"){
      ContA+=1;
    }
    if(matriz[(juego.Cord1)][(juego.Cord2)-1]=="*"){
      ContA+=1;
    }
    else{
      ContA+=0;
    }
  }
  else{
    ContA = 0;
    console.log("Es una bomba por esa razón no se cuentan los adyascentes");
  }
    
  
 
  return ContA;
}
adyascentes();
console.log(`La cantidad de bombas adyascentes es ${adyascentes()}`);