/**
 * Clase ElemenList, que permite crear una lista de elementos de tipo T.
 * Y permite realizar operaciones sobre dicha lista sin hacer uso de las funcionalidades de Array.prototype
 */
export class ElementsList<T> {
  private list: T[];
  private length: number;

  /**
   * Constructor de la clase ElemenList
   * @param list lista de elementos de tipo T
   */
  constructor(list: T[]) {
    this.list = list;
    this.length = 0;
    for (let i = 0; i < list.length; i++) {
      this.length++;
    }
  }

  /**
   * Método getList, que devuelve la lista de elementos
   * @returns la lista de elementos
   */
  getList(): T[] { return this.list; }

  /**
   * Método append, que dada una lista de elementos de tipo T, añade dichos elementos a la lista invocante
   * y devuelve la lista resultante.
   * @param list list to append
   * @returns la lista de elementos resultante de añadir la lista de elementos pasada como parámetro
   */
  append(list: T[]): T[] {
    for (let i = 0; i < list.length; i++) {
      this.list[this.length] = list[i];
      this.length++;
    }
    return this.list;
  }

  /**
   * Método concatenate, que dado un número indeterminado de listas de elementos de tipo T 
   * las concatena y devuelve la lista resultante.
   * @param list lista de listas de elementos de tipo T
   * @returns la lista de elementos resultante de concatenar las listas de elementos pasadas como parámetro
   */
  concatenate(list: T[][]): T[] {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        this.list[this.length] = list[i][j];
        this.length++;
      }
    }
    return this.list;
  }

  /**
   * Método filter, que dada una lista y un predicado lógico retorna una lista con todos los 
   * elementos de la lista inicial para los cuales el predicado lógico es verdadero.
   * @param predicate predicado lógico a aplicar a cada elemento de la lista
   * @returns la lista de elementos resultante de aplicar la función a cada elemento de la lista
   */
  filter(predicate: (element: T) => boolean): T[] {
    let list: T[] = [];
    let length = 0;
    for (let i = 0; i < this.length; i++) {
      if (predicate(this.list[i])) {
        list[length] = this.list[i];
        length++;
      }
    }
    return list;
  }

  /**
   * Método lengthList, que devuelve la longitud de la lista de elementos
   * @returns la longitud de la lista de elementos
   */
  listLenght(): number {
    return this.length;
  }

  /**
   * Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
   * @param func funcion a aplicar a cada elemento de la lista
   * @returns la lista de elementos resultante de aplicar la función a cada elemento de la lista
   */
  map(func: (element: T) => T): T[] {
    let list: T[] = [];
    for (let i = 0; i < this.length; i++) {
      list[i] = func(this.list[i]);
    }
    return list;
  }

  /**
   * Método reduce, que dada una lista, una función y un acumulador inicial,
   *  reduce cada elemento al acumulador utilizando la función.
   * @param func funcion a aplicar a cada elemento de la lista
   * @param acumulator acumulador inicial
   * @returns el acumulador resultante de aplicar la función a cada elemento de la lista
   */
  reduce(func: (acumulator: T, element: T) => T, acumulator: T): T {
    for (let i = 0; i < this.length; i++) {
      acumulator = func(acumulator, this.list[i]);
    }
    return acumulator;
  }

  /**
   * Método reverse, que dada una lista, retorna una nueva lista con los mismos elementos pero en orden inverso.
   * @returns la lista de elementos de forma inversa
   */
  reverse(): T[] {
    let list: T[] = [];
    for (let i = 0; i < this.length; i++) {
      list[i] = this.list[this.length - i - 1];
    }
    return list;
  }

  /**
   * Método forEach, que dada una lista y una función, permite iterar en los elementos 
   * de la lista e invocar la función con cada uno de ellos
   * @param func funcion a aplicar a cada elemento de la lista
   */
  forEach(func: (element: T) => void): void {
    for (let i = 0; i < this.length; i++) {
      func(this.list[i]);
    }
  }
}



