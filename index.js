let membre = 0.15;



class Sneaker  {
     constructor(marca,modelo,precio){
          this.marca = marca;
          this.modelo = modelo;
          this.precio=precio;
 

  }

 
}




const Stock = [
 
     {marca: "adidas", modelo:"ozweego", precio: 34999},
     {marca: "adidas", modelo:"torsion", precio:30999},
     {marca: "adidas", modelo:"climacool", precio:24999},
     {marca: "nike", modelo:"Am90", precio:26999},
     {marca: "nike", modelo:"Aforce", precio:20999},
     {marca: "puma", modelo:"Xray", precio:22999},
     {marca:" puma", modelo:"RSX", precio:25999},
     
];

let ozweego = JSON.parse(localStorage.getItem("ozweego") );
let torsion =JSON.parse(localStorage.getItem("torsion") );
let climacool = JSON.parse(localStorage.getItem("climacool") );
let Am90 = JSON.parse(localStorage.getItem("Am90") );
let Aforce = JSON.parse(localStorage.getItem("Aforce") );
let Xray = JSON.parse(localStorage.getItem("Xray") );
let RSX = JSON.parse(localStorage.getItem("RSX") );




localStorage.setItem("stock", JSON.stringify(Stock))

let base= JSON.parse(localStorage.getItem("stock")) 

let stocknew = base;
let mark,mod,prec;
    
let separar = (key,value) => {localStorage.setItem(key, value)}

for(let reco of Stock){
     localStorage.setItem(reco.modelo, JSON.stringify(reco)  )
}

function carritoa(){
      alert(`El Sneaker se agrego al carrito`)
}

const descuento = (a,b) => a-(a*b)

let precioFinalO = descuento(ozweego.precio,membre)
let precioFinalT = descuento(torsion.precio,membre)
let precioFinalC = descuento(climacool.precio,membre)





let form = document.getElementById("form")
form.addEventListener("submit", empC);



function empC(event){
  event.preventDefault();
 
let info =event.target.children[1].value;


if(info==="empleado"){
let divE = document.createElement("div")

divE.innerHTML="Modo Empleado"
divE.className="oscuro"
form.append(divE);
 


while(info ==="empleado"){


     let aniadir = parseInt( prompt ("Que desea hacer?  1. ver stock  2. añadir modelo  3. eliminar  4. aumentar precio"));

    
switch (aniadir) {
     case 1:
           console.log(stocknew)
          break;
     case 2:
                 let cant = parseInt( prompt("Cuantos Sneakers desea añadir?"));
     for(let i=0; i< cant; i++){

          mark = prompt("Ingrese la marca que desee añadir");
           mod = prompt("Ingrese el modelo que desee añadir");
           prec= prompt("Ingrese el precio que desee añadir");

       let prod = {
     marca:mark,
     modelo:mod,
     precio:prec

}


   stocknew.push(prod); 
   localStorage.setItem(mark,JSON.stringify(stocknew));
  


     }
     let see = prompt("desea ver el stock? si/no").toLocaleLowerCase();

     if(see==="si"){
          console.log(JSON.parse(localStorage.getItem(mark)));
       
break;
     }
     case 3:

          let aux= prompt("ingrese el modelo que desea sacar del stock").toLocaleLowerCase();

          let filtrado = Stock.filter(zapa=>zapa.modelo!==aux);
               console.log(filtrado);

          break;
     case 4:
        

          let actuaprecio = parseInt( prompt("Cuanto desea aumentar? (ingrese cantidad)"));

          const aumento = Stock.map(ele=>{
          return{
               marca:  ele.marca,
               modelo: ele.modelo,
               precio: ele.precio + actuaprecio

     }
     })
          console.log(aumento);


          break;

     default:
          alert("Selecione una opcion.")
          break;
    
}
         
         let emp= prompt("desea seguir en modo empleado? si/no").toLocaleLowerCase();

     if(emp == "no"){

    break;
     }


}

}else if(info=="cliente"){
let divC = document.createElement("div")


divC.innerHTML="Modo Cliente"
divC.className="oscuro"

form.append(divC);




while(info ==="cliente"){
      let marca = prompt("Ingrese la marca de sneaker que desea. Opciones: Adidas, Nike, Puma").toLowerCase();
     switch (marca) {
          case "adidas":
               alert("Usted eligio Adidas")


               

let contenedor = document.getElementById("contain")

let diA = document.createElement ("div")

     diA.innerHTML = `<div class="muestra-stock"> 
                         <h1>Adidas</h1>
                         <div> Modelo: ${ozweego.modelo} 
                               Precio $ ${ozweego.precio}</div>
                         <div> Modelo: ${torsion.modelo} 
                               Precio $ ${torsion.precio}</div>
                         <div> Modelo: ${climacool.modelo} 
                               Precio $ ${climacool.precio}</div>

               </div>`
contenedor.append(diA)



               let adidas = prompt("Tenemos 3 modelos. Opciones: ozweego, torsion, climacool(ingrese el modelo que desee)").toLowerCase();
               if(adidas == "ozweego"){
                    alert(`El precio de el modelo: ${adidas} =$ ${ozweego.precio} `)
                    let compra = prompt("Desea comprarla? si/no").toLowerCase();
                      if(compra=="si"){
                         let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();
                              if(membresia=="si"){
                                   alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalO}`)
                                   
                              }
                         
                         carritoa();
                        
                        
                    }
                
               }else if(adidas == "torsion"){
                    alert(`El precio de el modelo: ${adidas} =$ ${torsion.precio} `)
                       let compra = prompt("Desea comprarla? si/no").toLowerCase();
                           if(compra=="si"){
                              let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();
                              if(membresia=="si"){
                                   alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalT}`)
                                   
                              }
                           carritoa();
                    }
               }else{
                      
                    alert(`El precio de el modelo: ${adidas} =$ ${climacool.precio} `)
                       let compra = prompt("Desea comprarla? si/no").toLowerCase();
                           if(compra=="si"){
                              let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();
                              if(membresia=="si"){
                                   alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalC}`)
                                   
                              }
                           carritoa();
                    }
               }      
               break;
          case "nike":
               alert("usted eligio Nike,")

let contenedorN = document.getElementById("contain")

let diN = document.createElement ("div")

     diN.innerHTML = `<div class="muestra-stock"> 
                         <h1>Nike</h1>
                         <div> Modelo: ${Am90.modelo} 
                               Precio $ ${Am90.precio}</div>
                         <div> Modelo: ${Aforce.modelo} 
                               Precio $ ${Aforce.precio}</div>
                     

               </div>`
contenedorN.append(diN)




                let nike = prompt("Tenemos 2 modelos. Opciones: Am90, Aforce (ingrese el modelo que desee)").toLowerCase();

                if(nike == "am90"){
                    alert(`El precio de el modelo: ${nike} =$ ${Am90.precio} `)
                    let compra = prompt("Desea comprarla? si/no").toLowerCase();
                      if(compra=="si"){
                             carritoa();
                    
                      }

                }else if(nike == "aforce"){
                    alert(`El precio de el modelo: ${nike} =$ ${Aforce.precio} `)
                    let compra = prompt("Desea comprarla? si/no").toLowerCase();
                      if(compra=="si"){
                             carritoa();
                      }
                }
               
               break;

               case "puma": 
               alert("usted eligio Puma")


let contenedorP = document.getElementById("contain")

let diP = document.createElement ("div")

     diP.innerHTML = `<div class="muestra-stock">
                         <h1>Puma</h1>
                         <div> Modelo: ${RSX.modelo} 
                               Precio $ ${RSX.precio}</div>
                         <div> Modelo: ${Xray.modelo} 
                               Precio $ ${Xray.precio}</div>
                              </div> `

contenedorP.append(diP)


                   let puma = prompt("Tenemos 2 modelos. Opciones: Rsx, Xray (ingrese el modelo que desee)").toLowerCase();
                 if(puma == "rsx"){
                    alert(`El precio de el modelo: ${puma} =$ ${RSX.precio} `)
                    let compra = prompt("Desea comprarla? si/no").toLowerCase();
                      if(compra=="si"){
                             carritoa();
                    
                      }

                }else if(puma == "xray"){
                    alert(`El precio de el modelo: ${puma} =$ ${Xray.precio} `)
                    let compra = prompt("Desea comprarla? si/no").toLowerCase();
                      if(compra=="si"){
                            carritoa();
                      }
                }

                break;
          default:
               alert("No tenemos stock de esa marca")
            
               break;
     }

    let accept = prompt("desea seguir viendo modelos? si/no");

     if(accept == "no"){

     alert("gracias por visitarnos, vuelva pronto");
     break;
     }

}

}

}






var input = document.getElementById("busqueda");


input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();
let div = document.createElement("div")

div.innerHTML="Proximamente se agregara ese modelo"
div.className="red"
input.append(div);


  }
});



















