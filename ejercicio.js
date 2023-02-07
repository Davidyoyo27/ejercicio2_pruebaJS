// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista
// con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden,
// las mayúsculas o espacios.

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

// resolucion del problema
// utilizamos .filter() para extraer de la lista original los datos que necesitemos, en este caso
// las ovejas de color "rojo" y el nombre de las ovejas que contengan la letra correspondiente
//  variable   array  func   item
const color = ovejas.filter((oveja) => {
  //extraemos el nombre de la lista y que su valor sea convertido a minusculas
  let name = oveja.name.toLowerCase();
  //preguntamos si es de color rojo y ademas incluye dentro de su nombre las letras 'a' y 'n'
  if (oveja.color === "rojo" && name.includes("a") && name.includes("n"))
    //en caso de ser asi, retornamos los valores que coincidan
    return true;
});

console.log(color);
// fin resolucion del problema


// como lo pedia la pagina
export default function contarOvejas(ovejas) {
  // aquí tu magia
  const color = ovejas.filter((oveja) => {
    let name = oveja.name.toLowerCase();
    if (oveja.color === "rojo" && name.includes("a") && name.includes("n")) {
      return true;
    }
  });
  return color;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
// fin como lo pedia la pagina

// primera forma de llegar a la conclusion
// const nom = ovejas.map((oveja) => {
//     return oveja.name;
// });

// for (let index = 0; index < nom.length; index++) {
//     let filtro = nom[index].toLowerCase();
//     let letraN = filtro.includes('n');
//     let letraA = filtro.includes('a');
//     if(letraA && letraN){
//         console.log(nom[index]);
//     }
// }
