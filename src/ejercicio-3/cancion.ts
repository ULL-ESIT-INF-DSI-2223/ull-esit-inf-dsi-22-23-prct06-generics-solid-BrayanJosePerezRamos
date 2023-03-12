/**
 * Clase que representa una canción
 */
export class Cancion {
  private readonly nombre: string;
  private readonly duracion: number;
  private readonly generos: string[];
  private reproducciones: number;

  /**
   * Constructor de la clase Cancion que recibe el nombre, la duración, los géneros y el número de reproducciones
   * @param nombre nombre de la canción
   * @param duracion duración de la canción en segundos
   * @param generos géneros de la canción
   * @param reproducciones número de reproducciones de la canción
   */
  constructor(nombre: string, duracion: number, generos: string[], reproducciones: number) {
    if (duracion < 0) {
      throw new Error('La duración de la canción no puede ser negativa');
    }
    if (reproducciones < 0) {
      throw new Error('El número de reproducciones de la canción no puede ser negativo');
    }
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
    this.reproducciones = reproducciones;
  }

  /**
   * Método que devuelve el nombre de la canción
   * @returns nombre de la canción
   */
  getNombre(): string { return this.nombre; }

  /**
   * Método que devuelve la duración de la canción
   * @returns duración de la canción en segundos
   */
  getDuracion(): number { return this.duracion; }

  /**
   * Método que devuelve los géneros de la canción
   * @returns generos de la canción
   */
  getGeneros(): string[] { return this.generos; }

  /**
   * Método que devuelve el número de reproducciones de la canción
   * @returns número de reproducciones de la canción
   */
  getReproducciones(): number { return this.reproducciones; }

  /**
   * Método que modifica el número de reproducciones de la canción
   * @param reproducciones número de reproducciones de la canción
   */
  setReproducciones(reproducciones: number): void { this.reproducciones = reproducciones; }
}

