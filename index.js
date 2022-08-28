let Stock = [];
fetch("./stockp.json")
     .then((res) => res.json())
     .then((data) => {
          let carritobd = [];
          let containerCarrito = document.getElementById("carritoConteiner");
          let total = document.getElementById("preciototal");


          let terminar = document.getElementById("terminar-compra");

          data.forEach((sneaker) => {
               let conteinerzapa = document.getElementById("contain");
               let divzapas = document.createElement("div");
               divzapas.innerHTML = `<div class="conteinerzapa">
               <p class="modeloCard">${sneaker.modelo}</p>
        <img class="imgCard" src="${sneaker.img}" alt="zapa1" />
          <div class="footerCard">
               <p class="precioCard"> $${sneaker.precio} </p>
                <button class="buttonzapa" id = "boton${sneaker.modelo}" > Comprar</button>
          </div>
      </div > `;
               conteinerzapa.append(divzapas);
          });

          data.forEach((prod) => {
               let botonzapas = document.getElementById(`boton${prod.modelo}`);

               botonzapas.addEventListener("click", () => {
                    Swal.fire({
                         title: "Seguro desea comprar el sneaker?",
                         showDenyButton: true,
                         showCancelButton: false,
                         confirmButtonText: "Agregar",
                         denyButtonText: `No agregar`,
                    }).then((result) => {
                         /* Read more about isConfirmed, isDenied below */
                         if (result.isConfirmed) {

                              Swal.fire(`Se agrego al carrito '${prod.modelo}'`, "", "success");
                              addCarrito(prod.modelo);
                         } else if (result.isDenied) {
                              Swal.fire("No se agrego al carrito", "", "error");

                         }
                    });


               });
          });

          terminar.addEventListener("click", () => {
               Swal.fire(
                    'GRACIAS POR SU COMPRA',
                    'En poco tiempo llegara su pedido!',

               )
               carritobd.length = 0;
               localStorage.removeItem("carrito");

               actualizarCarrito();
          });

          const addCarrito = (modelSneaker) => {
               let modelotipo = data.find((sneaker) => sneaker.modelo == modelSneaker);

               for (let i = 0; i < carritobd.length; i++) {
                    if (carritobd[i].modelo == modelSneaker) {
                         carritobd[i].cantidad++;
                         // console.log(carritobd[i].cantidad);

                         let totalsuma = carritobd[i].precio * carritobd[i].cantidad;
                         actualizarCarrito();

                         return;


                    }
               }
               carritobd.push(modelotipo);
               actualizarCarrito();
               console.log(carritobd);
          };

          // -------------------arreglar-------------------
          const eliminarCarrito = (modelSneaker) => {

               let tillas = carritobd.find((sneaker) => sneaker.modelo == modelSneaker);
               let indice = carritobd.indexOf(tillas);
               carritobd.splice(indice, 1);
               actualizarCarrito();
          };

          const actualizarCarrito = () => {
               containerCarrito.innerHTML = "";

               carritobd.forEach((sneaker) => {
                    let divC = document.createElement("div");
                    divC.innerHTML = `
                    <div  class="conteinerzapa conteinerzapadd" >
                         <img class="imgcarritoadd" src="${sneaker.img}" alt="zapa1" />
                         <p>Precio:$${sneaker.precio} 
                         Modelo:${sneaker.modelo}</p> 
                         <input type="number" min="1" id="cantidadS" value="${sneaker.cantidad}"> 
                         <button id="del${sneaker.modelo}"> eliminar </button>
                         </div>`;
                    containerCarrito.appendChild(divC);

                    localStorage.setItem("carrito", JSON.stringify(carritobd));
               });
               totalprecio();


               carritobd.forEach((sneaker) => {
                    let botoneliminar = document.getElementById(`del${sneaker.modelo}`);

                    botoneliminar.addEventListener("click", () => {
                         eliminarCarrito();
                    });
               });
          };
          const totalprecio = () => {
               let totalfinal = 0
               carritobd.forEach(sneaker => {
                    let precios = sneaker.precio
                    let cantidadT = sneaker.cantidad

                    totalfinal = totalfinal + precios * cantidadT;

               })
               total.innerHTML = `Precio Total: $ ${totalfinal} `

          };


          if (localStorage.getItem("carrito")) {
               carritobd = JSON.parse(localStorage.getItem("carrito"));

               actualizarCarrito();
          }

          // data.forEach(sneaker => {

          //      let botonzapas = document.getElementById(`boton${sneaker.modelo}`)
          //      botonzapas.addEventListener("click", () => {

          //           Swal.fire({
          //                title: 'Seguro desea comprar el sneaker?',
          //                showDenyButton: true,
          //                showCancelButton: false,
          //                confirmButtonText: 'Agregar',
          //                denyButtonText: `No agregar`,
          //           }).then((result) => {
          //                /* Read more about isConfirmed, isDenied below */
          //                if (result.isConfirmed) {
          //                     Swal.fire('Se agrego al carrito ', '', 'success')
          //                     carrito(sneaker.modelo)
          //                } else if (result.isDenied) {
          //                     Swal.fire('No se agrego al carrito', '', 'error')
          //                }
          //           })
          //      })

          // })

          // const carrito = (modelotype) => {

          //      let modelotipo = data.find(sneaker => sneaker.modelo == modelotype)

          //      carritobd.push(modelotipo)
          //      console.log(carritobd);
          //      localStorage.setItem("Carrito", JSON.stringify(carritobd))
          //      // console.log(JSON.parse(localStorage.getItem("Carrito")));

          //      addcarrito()

          // }

          // function addcarrito() {

          //      carritobd.forEach(sneaker => {
          //           let carritoagregar = document.getElementById("carritoadd")
          //           let carritozapa = document.createElement("div")
          //           carritozapa.innerHTML = `
          //           <div  class="conteinerzapa conteinerzapadd" >
          //                <img class="imgcarritoadd" src="${sneaker.img}" alt="zapa1" />
          //                <p>Precio:$${sneaker.precio}
          //                      Modelo:${sneaker.modelo}</p>
          //               <button id="sumarCant"> mas </button>    <p>${sneaker.cantidad}</p> <button id="restarCant"> menos </button>
          //           </div>`

          //           carritoagregar.append(carritozapa)

          //      })

          // }
     });

// let base = JSON.parse(localStorage.getItem("stock"))

let separar = (key, value) => {
     localStorage.setItem(key, value);
};

for (let reco of Stock) {
     separar(reco.modelo, JSON.stringify(reco));
}

// let ozweego = JSON.parse(localStorage.getItem("ozweego"));
// let torsion = JSON.parse(localStorage.getItem("torsion"));
// let climacool = JSON.parse(localStorage.getItem("climacool"));
// let Am90 = JSON.parse(localStorage.getItem("Am90"));
// let Aforce = JSON.parse(localStorage.getItem("Aforce"));
// let Xray = JSON.parse(localStorage.getItem("Xray"));
// let RSX = JSON.parse(localStorage.getItem("RSX"));

// let stocknew = {...base};

// let { marca: marcaO, modelo: modeloO, precio: precioO } = ozweego;
// let { marca: marcaT, modelo: modeloT, precio: precioT } = torsion;
// let { marca: marcaC, modelo: modeloC, precio: precioC } = climacool;

// let mark, mod, prec;

// function carritoa() {
//      alert(`El Sneaker se agrego al carrito`)
// }

// const descuento = (a, b) => a - (a * b)

// let precioFinalO = descuento(ozweego.precio, membre)
// let precioFinalT = descuento(torsion.precio, membre)
// let precioFinalC = descuento(climacool.precio, membre)

// let form = document.getElementById("form")
// form.addEventListener("submit", empC);

// function empC(event) {
//      event.preventDefault();

//      let info = event.target.children[1].value;

//      if (info === "empleado") {
//           Toastify({
//                text: "Se ingreso correctamente",
//                style: {
//                     background: "linear-gradient(to right, #00b09b, #96c93d)",

//                },

//                offset: {

//                     x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//                     y: 720
//                     // vertical axis - can be a number or a string indicating unity. eg: '2em'
//                },

//           }).showToast();

//           let divE = document.createElement("div")

//           divE.innerHTML = "MODO EMPLEADO"

//           form.append(divE);

//           while (info === "empleado") {

//                let aniadir = parseInt(prompt("Que desea hacer?  1. ver stock  2. añadir modelo  3. eliminar  4. aumentar precio"));

//                switch (aniadir) {
//                     case 1:
//                          console.log(base || "No hay stock disponible")

//                          break;
//                     case 2:
//                          let cant = parseInt(prompt("Cuantos Sneakers desea añadir?"));
//                          for (let i = 0; i < cant; i++) {

//                               mark = prompt("Ingrese la marca que desee añadir");
//                               mod = prompt("Ingrese el modelo que desee añadir");
//                               prec = parseInt(prompt("Ingrese el precio que desee añadir"));

//                               let prod = {
//                                    marca: mark,
//                                    modelo: mod,
//                                    precio: prec

//                               }

//                               base.push(prod);
//                               localStorage.setItem(mark, JSON.stringify(base));

//                          }
//                          let see = prompt("desea ver el stock? si/no").toLocaleLowerCase();

//                          if (see === "si") {
//                               console.log(JSON.parse(localStorage.getItem(mark)));

//                               break;
//                          }
//                     case 3:

//                          let aux = prompt("ingrese el modelo que desea sacar del stock").toLocaleLowerCase();

//                          base = base.filter(zapa => zapa.modelo !== aux);
//                          console.log(base);

//                          break;
//                     case 4:

//                          let actuaprecio = parseInt(prompt("Cuanto desea aumentar? (ingrese cantidad)"));

//                          const aumento = base.map(ele => {
//                               return {
//                                    marca: ele.marca,
//                                    modelo: ele.modelo,
//                                    precio: ele.precio + actuaprecio

//                               }
//                          })
//                          console.log(aumento);

//                          break;

//                     default:
//                          alert("Selecione una opcion.")
//                          break;

//                }

//                let emp = prompt("desea seguir en modo empleado? si/no").toLocaleLowerCase();

//                if (emp == "no") {
//                     const Toast = Swal.mixin({
//                          toast: true,
//                          position: 'top-end',
//                          showConfirmButton: false,
//                          timer: 3000,
//                          timerProgressBar: true,
//                          didOpen: (toast) => {
//                               toast.addEventListener('mouseenter', Swal.stopTimer)
//                               toast.addEventListener('mouseleave', Swal.resumeTimer)
//                          }
//                     })

//                     Toast.fire({
//                          icon: 'success',
//                          title: 'Salio del modo empleado correctamente'
//                     })
//                     break;
//                }

//           }
//      }
// }

// var input = document.getElementById("busqueda");

// input.addEventListener("keypress", function (event) {

//      if (event.key === "Enter") {

//           event.preventDefault();
//           let div = document.createElement("div")

//           div.innerHTML = "Proximamente se agregara ese modelo"
//           div.className = "red"
//           input.append(div);

//      }
// });

var forma = document.getElementById("form");
forma.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
     event.preventDefault();
     const data = new FormData(this);
     const response = await fetch(`https://formspree.io/f/xdojoore`, {
          method: `POST`,
          body: data,
          headers: {
               Accept: "application/json",
          },
     });
}

// } else if (info == "cliente") {
//      let divC = document.createElement("div")

//      divC.innerHTML = "Modo Cliente"
//      divC.className = "oscuro"

//      form.append(divC);

//      while (info === "cliente") {

//           let marca = prompt("Ingrese la marca de sneaker que desea. Opciones: Adidas, Nike, Puma").toLowerCase();
//           switch (marca) {
//                case "adidas":
//                     alert("Usted eligio Adidas")

//                     // let contenedor = document.getElementById("contain")

//                     // let diA = document.createElement ("div")

//                     //      diA.innerHTML = `<div class="muestra-stock">
//                     //                          <h1>Adidas</h1>
//                     //                          <div> Modelo: ${ozweego.modelo}
//                     //                                Precio $ ${ozweego.precio}</div>
//                     //                          <div> Modelo: ${torsion.modelo}
//                     //                                Precio $ ${torsion.precio}</div>
//                     //                          <div> Modelo: ${climacool.modelo}
//                     //                                Precio $ ${climacool.precio}</div>

//                     //                </div>`
//                     // contenedor.append(diA)

//                     let adidas = prompt("Tenemos 3 modelos. Opciones: ozweego, torsion, climacool(ingrese el modelo que desee)").toLowerCase();
//                     if (adidas == "ozweego") {

//                          alert(`El precio de el modelo: ${adidas} =$ ${precioO} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {
//                               let contenedor = document.getElementById("carritoadd")

//                               let diA = document.createElement("div")

//                               diA.innerHTML = `<div class="muestra-stock">
//                     <h1>Adidas</h1>
//                     <div> Modelo: ${modeloO}
//                           Precio $ ${precioO}</div>
//                                </div>`
//                               contenedor.append(diA)
//                               let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();

//                               membresia == "si" ? alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalO}`) : carritoa();

//                          }

//                     } else if (adidas == "torsion") {

//                          alert(`El precio de el modelo: ${adidas} =$ ${precioT} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {

//                               let contenedor = document.getElementById("carritoadd")

//                               let diA = document.createElement("div")

//                               diA.innerHTML = `<div class="muestra-stock">
//                     <h1>Adidas</h1>
//                     <div> Modelo: ${modeloT}
//                           Precio $ ${precioT}</div>
//                                     </div>`
//                               contenedor.append(diA)
//                               let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();
//                               membresia == "si" ? alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalT}`) : carritoa();
//                          }
//                     } else if (adidas == "climacool") {
//                          alert(`El precio de el modelo: ${adidas} =$ ${precioC} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {

//                               let contenedor = document.getElementById("carritoadd")

//                               let diA = document.createElement("div")

//                               diA.innerHTML = `<div class="muestra-stock">
//                     <h1>Adidas</h1>
//                     <div> Modelo: ${modeloC}
//                           Precio $ ${precioC}</div>

//           </div>`
//                               contenedor.append(diA)
//                               let membresia = prompt("Tiene membresia Adidas? si/no").toLowerCase();
//                               membresia == "si" ? alert(`Se le aplicara un descuento por tener membresia, el precio final sera:$${precioFinalC}`) : carritoa();
//                          }
//                     }
//                     break;
//                case "nike":
//                     alert("usted eligio Nike,")

//                     // let contenedorN = document.getElementById("contain")

//                     // let diN = document.createElement ("div")

//                     //      diN.innerHTML = `<div class="muestra-stock">
//                     //                          <h1>Nike</h1>
//                     //                          <div> Modelo: ${Am90.modelo}
//                     //                                Precio $ ${Am90.precio}</div>
//                     //                          <div> Modelo: ${Aforce.modelo}
//                     //                                Precio $ ${Aforce.precio}</div>

//                     //                </div>`
//                     // contenedorN.append(diN)

//                     let nike = prompt("Tenemos 2 modelos. Opciones: Am90, Aforce (ingrese el modelo que desee)").toLowerCase();

//                     if (nike == "am90") {
//                          alert(`El precio de el modelo: ${nike} =$ ${Am90.precio} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {
//                               let contenedorN = document.getElementById("carritoadd")

//                               let diN = document.createElement("div")

//                               diN.innerHTML = `<div class="muestra-stock">
//                     <h1>Nike</h1>
//                     <div> Modelo: ${Am90.modelo}
//                           Precio $ ${Am90.precio}</div>
//           </div>`
//                               contenedorN.append(diN)
//                               carritoa();

//                          }

//                     } else if (nike == "aforce") {
//                          alert(`El precio de el modelo: ${nike} =$ ${Aforce.precio} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {

//                               let contenedorN = document.getElementById("carritoadd")

//                               let diN = document.createElement("div")

//                               diN.innerHTML = `<div class="muestra-stock">
//                     <h1>Nike</h1>
//                     <div> Modelo: ${Aforce.modelo}
//                           Precio $ ${Aforce.precio}</div>
//                </div>`
//                               contenedorN.append(diN)
//                               carritoa();
//                          }
//                     }

//                     break;

//                case "puma":
//                     alert("usted eligio Puma")

//                     // let contenedorP = document.getElementById("contain")

//                     // let diP = document.createElement ("div")

//                     //      diP.innerHTML = `<div class="muestra-stock">
//                     //                          <h1>Puma</h1>
//                     //                          <div> Modelo: ${RSX.modelo}
//                     //                                Precio $ ${RSX.precio}</div>
//                     //                          <div> Modelo: ${Xray.modelo}
//                     //                                Precio $ ${Xray.precio}</div>
//                     //                               </div> `

//                     // contenedorP.append(diP)

//                     let puma = prompt("Tenemos 2 modelos. Opciones: Rsx, Xray (ingrese el modelo que desee)").toLowerCase();
//                     if (puma == "rsx") {

//                          let contenedorP = document.getElementById("carritoadd")

//                          let diP = document.createElement("div")

//                          diP.innerHTML = `<div class="muestra-stock">
//                     <h1>Puma</h1>
//                     <div> Modelo: ${RSX.modelo}
//                           Precio $ ${RSX.precio}</div>
//                          </div> `
//                          contenedorP.append(diP)
//                          alert(`El precio de el modelo: ${puma} =$ ${RSX.precio} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {
//                               carritoa();

//                          }

//                     } else if (puma == "xray") {

//                          let contenedorP = document.getElementById("carritoadd")

//                          let diP = document.createElement("div")

//                          diP.innerHTML = `<div class="muestra-stock">
//                     <h1>Puma</h1>
//                     <div> Modelo: ${Xray.modelo}
//                           Precio $ ${Xray.precio}</div>
//                          </div> `

//                          contenedorP.append(diP)
//                          alert(`El precio de el modelo: ${puma} =$ ${Xray.precio} `)
//                          let compra = prompt("Desea comprarla? si/no").toLowerCase();
//                          if (compra == "si") {
//                               carritoa();
//                          }
//                     }

//                     break;
//                default:
//                     alert("No tenemos stock de esa marca")

//                     break;
//           }

//           let accept = prompt("desea seguir viendo modelos? si/no");

//           if (accept == "no") {

//                const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                          toast.addEventListener('mouseenter', Swal.stopTimer)
//                          toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                })

//                Toast.fire({
//                     icon: 'success',
//                     title: 'Salio del modo cliente correctamente'
//                })
//                break;
//           }

//      }

// }
