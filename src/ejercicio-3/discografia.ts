/**
 * clase generica Discografía que en algun punto podrá ser una coleccion de Albumes o de Singles o de ambos
 */
export class Discografia<T> {
  private discografia: T[];
  /**
   * Constructor de la clase Discografia
   * @param discografia array de Albumes o Singles
   */
  constructor(discografia: T[]) { this.discografia = discografia; }
  /**
   * Getter del atributo discografia
   * @returns array de Albumes o Singles
   */
  getDiscografia(): T[] { return this.discografia; }

  /**
   * Setter del atributo discografia
   * @param discografia array de Albumes o Singles
   */
  setDiscografia(discografia: T[]): void { this.discografia = discografia; }

  /**
   * Añade un album o single a la discografia
   * @param album album o single a añadir
   */
  addAlbum(album: T): void { this.discografia.push(album); }
}