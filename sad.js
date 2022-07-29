const Stock = [
 
     {marca: "adidas", modelo:"ozweego", precio: 34999},
     {marca: "adidas", modelo:"torsion", precio:30999},
     {marca: "adidas", modelo:"climacool", precio:24999},
     {marca: "nike", modelo:"Am90", precio:26999},
     {marca: "nike", modelo:"Aforce", precio:20999},
     {marca: "puma", modelo:"Xray", precio:22999},
     {marca:" puma", modelo:"RSX", precio:25999},
     
];



let info = prompt("e")
while(info ==="e"){


     let aniadir = parseInt( prompt ("Que desea hacer?  1. ver stock  2. añadir modelo "));

    
switch (aniadir) {
     case 1:
          console.log(storage)
          break;
     case 2:
          let cant = parseInt( prompt("Cuantos Sneakers desea añadir?"));
     for(let i=0; i< cant; i++){

          let mark = prompt("Ingrese la marca que desee añadir");
          let mod = prompt("Ingrese el modelo que desee añadir");
          let prec= prompt("Ingrese el precio que desee añadir");


   Stock.push(new Sneaker(mark,mod,prec)); 

     }
     let see = prompt("desea ver el stock? si/no")

     if(see==="si"){
          console.log(Stock);
            
     }

          break;}
        };