import { StreamableInterface } from './streamableInterface';

/**
 * Clase abstracta BasicStreamableCollection que implementa la interfaz StreamableInterface
 * y define los atributos y métodos que deben tener las clases que hereden de ella. Que serán
 * clases que funcionen como una colección de objetos streamables.
 */
export abstract class BasicStreamableCollection<T> implements StreamableInterface<T> {
  /**
   * Constructor de la clase BasicStreamableCollection
   * @param name nombre de la colección
   * @param genres géneros de la colección
   * @param numberOfElements número de elementos de la colección
   * @param streamableList lista de elementos de la colección
   */
  constructor(
    public name: string, 
    public genres: string[], 
    public numberOfElements: number,
    public streamableList: T[]
  ) {
    this.name = name;
    this.genres = genres;
    this.numberOfElements = numberOfElements;
    this.streamableList = streamableList;
  }

  /**
   * Método que devuelve el nombre de la colección
   */
  get getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve los géneros de la colección
   */
  get getGenres(): string[] {
    return this.genres;
  }

  /**
   * Método que devuelve el número de elementos de la colección
   */
  get getNumberOfElements(): number {
    return this.numberOfElements;
  }

  /**
   * Método que devuelve la lista de elementos de la colección
   */
  get getStreamableList(): T[] {
    return this.streamableList;
  }

  /**
   * Método abstracto que devuelve la lista de elementos de la colección
   * @param name nombre de la colección a buscar
   * @returns lista de elementos de la colección encontrados
   */
  abstract searchByName(name: string): T[];
  /**
   * Método abstracto que devuelve la lista de elementos de la colección
   * @param genre género de la colección a buscar
   * @returns lista de elementos de la colección encontrados
   */
  abstract searchByGenre(genre: string): T[];
  /**
   * Método abstracto que devuelve la lista de elementos de la colección
   * @param year año de la colección a buscar
   * @returns lista de elementos de la colección encontrados
   */
  abstract searchByYear(year: number): T[];
  /**
   * Método abstracto que devuelve la lista de elementos de la colección
   * @param rating rating de la colección a buscar
   * @returns lista de elementos de la colección encontrados
   */
  abstract searchByRating(rating: number): T[];
}