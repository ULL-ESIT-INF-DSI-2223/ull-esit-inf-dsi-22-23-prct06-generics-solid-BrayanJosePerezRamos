import { BasicStreamableCollection } from './basicStreamableCollection';
import { Documental } from './documental';

/**
 * Clase DocumentalCollection que hereda de BasicStreamableCollection y representa una
 * colección de documentales.
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  /**
   * Constructor de la clase DocumentalCollection
   * @param name nombre de la colección
   * @param genres géneros de la colección
   * @param numberOfElements número de elementos de la colección
   * @param streamableList lista de documentales de la colección
   */
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Documental[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  /**
   * Busca un documental por su nombre
   * @param name nombre del documental a buscar
   * @returns lista de documentales que coinciden con el nombre
   */
  public searchByName(name: string): Documental[] {
    return this.streamableList.filter((documental) => documental.name.includes(name));
  }

  /**
   * Busca un documental por su género
   * @param genre genero del documental a buscar
   * @returns lista de documentales que coinciden con el género
   */
  public searchByGenre(genre: string): Documental[] {
    return this.streamableList.filter((documental) => documental.genres.includes(genre));
  }

  /**
   * Busca un documental por su año
   * @param year año del documental a buscar
   * @returns lista de documentales que coinciden con el año
   */
  public searchByYear(year: number): Documental[] {
    // devolver una lista de documentales que tengan +/- 1 año
    return this.streamableList.filter((documental) => documental.year >= year - 1 && documental.year <= year + 1);
  }

  /**
   * Busca un documental por su puntuación
   * @param rating puntuación del documental a buscar
   * @returns lista de documentales que coinciden con la puntuación
   */
  public searchByRating(rating: number): Documental[] {
    // devolver una lista de documentales que tengan una puntuación cercana al indicado en +/- 1
    return this.streamableList.filter((documental) => documental.rating >= rating - 1 && documental.rating <= rating + 1);
  }

  /**
   * Busca un documental por su duración
   * @param duration duración del documental a buscar
   * @returns lista de documentales que coinciden con la duración
   */
  public searchByDuration(duration: number): Documental[] {
    // devolver una lista de documentales que tengan una duración cercana al indicado en +/- 10
    return this.streamableList.filter((documental) => documental.duration >= duration - 10 && documental.duration <= duration + 10);
  }

  /**
   * Busca un documental por su número de episodios
   * @param episodes episodios del documental a buscar
   * @returns lista de documentales que coinciden con el número de episodios
   */
  public searchByEpisodes(episodes: number): Documental[] {
    // devolver una lista de documentales que tengan un número de episodios cercano al indicado en +/- 1
    return this.streamableList.filter((documental) => documental.episodes >= episodes - 1 && documental.episodes <= episodes + 1);
  }
}