/**
 * Funcion que dado un número N crea un array de arrays con las primeras N 
 * tablas de multiplicar cada una con sus primeros N productos
 * @param numN Numero entero positivo
 * @returns un Array de arrays con las primeras N tablas de multiplicar 
 * cada una con sus primeros N productos
 * 
 * @example productTable(3) => [[1,2,3],[2,4,6],[3,6,9]]
 * @example productTable(4) => [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
 * @example productTable(-1) => undefined
 */
export function productTable(numN: number): number[][] | undefined {
  // si el numero es menor o igual a 0 o no es entero, retorna undefined
  if (numN <= 0 || numN % 1 !== 0) {
    return undefined;
  }
  let productTables: number[][] = [];
  // bucle para rellenar el array de arrays
  for (let i = 1; i <= numN; i++) {
    let table: number[] = [];
    // bucle para rellenar cada arry 
    for (let j = 1; j <= numN; j++) {
      table.push(i * j);
    }
    productTables.push(table);
  }
  return productTables;
}