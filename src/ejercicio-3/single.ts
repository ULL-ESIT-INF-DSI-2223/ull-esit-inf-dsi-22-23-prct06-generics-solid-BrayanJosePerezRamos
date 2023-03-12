import { Cancion } from './cancion';

export class Single{
  private nombre: string;
  private year: number;
  private cancion: Cancion[];

  /**
   * Constructor de la clase Single
   * @param nombre nombre del Single
   * @param year año de publicación del Single
   * @param cancion canción que contiene el Single
   */
  constructor(nombre: string, year: number, cancion: Cancion[]) {
    // si el año es negativo o no es un entero lanza un error
    if (year <= 0 || year % 1 !== 0) {
      throw new Error('El año del disco debe ser un número entero positivo');
    }

    // comprobar que las canciones del array contienen el nombre de la primera
    let nombreCancion = cancion[0].getNombre();
    cancion.forEach(cancion => {
      if (!cancion.getNombre().includes(nombreCancion) || cancion.getNombre() === nombreCancion) {
        throw new Error('El nombre de las canciones del Single debe contener el nombre del Single y no puede ser igual');
      }
    });
    this.nombre = nombre;
    this.year = year;
    this.cancion = cancion;
  }

  /**
   * Devuelve el nombre del Single
   * @returns nombre del Single
   */
  getNombre(): string { return this.nombre; }

  /**
   * Devuelve el año de publicación del Single
   * @returns año de publicación del Single
   */
  getYear(): number { return this.year; }

  /**
   * Devuelve la canción que contiene el Single
   * @returns canción que contiene el Single
   */
  getCanciones(): Cancion[] { return this.cancion; }

  /**
   * Devuelve la duración total del Single
   * @returns Duración total del Single
   */
  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.cancion.forEach(cancion => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  /**
   * Devuelve las reproducciones totales del Single
   * @returns Reproducciones totales del Single
   */
  getReproduccionesTotal(): number {
    let reproduccionesTotal = 0;
    this.cancion.forEach(cancion => {
      reproduccionesTotal += cancion.getReproducciones();
    });
    return reproduccionesTotal;
  }
}