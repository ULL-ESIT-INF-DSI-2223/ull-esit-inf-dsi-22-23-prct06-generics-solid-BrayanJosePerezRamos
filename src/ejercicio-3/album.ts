import { Cancion } from './cancion';
/**
 * Clase que representa un álbum de música
 */
export class Album {
  private readonly nombre: string;
  private readonly year: number;
  private canciones: Cancion[];

  /**
   * 
   * @param nombre nombre del álbum de música
   * @param year 
   * @param canciones 
   */
  constructor(nombre: string, year: number, canciones: Cancion[]) {
    // si el año es negativo o no es un entero lanza un error
    if (year <= 0 || year % 1 !== 0) {
      throw new Error('El año del disco debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.year = year;
    this.canciones = canciones;
  }

  /**
   * getter del nombre del álbum de música
   * @returns el nombre del álbum de música
   */
  getNombre(): string { return this.nombre; }

  /**
   * getter del año del álbum de música
   * @returns año del álbum de música
   */
  getYear(): number { return this.year; }

  /**
   * getter de las canciones del álbum de música
   * @returns canciones del álbum de música
   */
  getCanciones(): Cancion[] { return this.canciones; }

  /**
   * setter de las canciones del álbum de música para modificarlas
   * @param canciones canciones del álbum de música
   */
  setCanciones(canciones: Cancion[]): void { this.canciones = canciones; }

  /**
   * getter de la duración total del álbum de música
   * @returns duración total del álbum de música en segundos
   */
  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.canciones.forEach(cancion => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  /**
   * getter de los géneros del álbum de música
   * @returns Numero total de reproducciones del album
   */
  getReproduccionesTotal(): number {
    let reproduccionesTotal = 0;
    this.canciones.forEach(cancion => {
      reproduccionesTotal += cancion.getReproducciones();
    });
    return reproduccionesTotal;
  }
}
