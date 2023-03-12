import { Album } from './album';
import { Single } from './single';
import { Discografia } from './discografia';
/**
 * Clase que representa un artista
 */
export class Artista {
  /**
   * Constructor de la clase Artista que recibe el nombre, el número de oyentes mensuales y la discografía
   * @param nombre nombre del artista
   * @param oyentesMensuales número de oyentes mensuales del artista
   * @param discografia discografía del artista
   */
  constructor(
    private nombre: string, 
    private oyentesMensuales: number, 
    public discografia: Discografia<Album | Single> ) {
    if (oyentesMensuales <= 0 || oyentesMensuales % 1 !== 0) {
      throw new Error('El número de oyentes mensuales debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }

  /**
   * getter del nombre del artista
   * @returns el nombre del artista
   */
  getNombre(): string { return this.nombre; }

  /**
   * getter del número de oyentes mensuales del artista
   * @returns el número de oyentes mensuales del artista
   */
  getOyentesMensuales(): number { return this.oyentesMensuales; }

  /**
   * setter del número de oyentes mensuales del artista para modificarlo
   * @param oyentesMensuales Nuevo número de oyentes mensuales del artista
   */
  setOyentesMensuales(oyentesMensuales: number): void { this.oyentesMensuales = oyentesMensuales; }

  /**
   * setter del nombre del artista para modificarlo
   * @param nombre Nuevo nombre del artista
   */
  setNombre(nombre: string): void { this.nombre = nombre; }
}
