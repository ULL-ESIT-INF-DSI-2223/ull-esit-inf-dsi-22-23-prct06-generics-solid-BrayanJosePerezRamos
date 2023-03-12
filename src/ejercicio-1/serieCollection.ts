import { BasicStreamableCollection } from './basicStreamableCollection';
import { Serie } from './serie';

/**
 * Clase SerieCollection que extiende de BasicStreamableCollection 
 * y que representa una colección de series.
 */
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * Constructor de la clase SerieCollection
   * @param name nombre de la colección
   * @param genres géneros de la colección
   * @param numberOfElements número de elementos de la colección
   * @param streamableList lista de series de la colección
   */
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Serie[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  /**
   * Método que busca series por nombre
   * @param name nombre de la serie a buscar
   * @returns lista de series que contengan el nombre indicado
   */
  searchByName(name: string): Serie[] {
    return this.streamableList.filter((serie) => serie.name.includes(name));
  }

  /**
   * Método que busca series por género
   * @param genre genero de la serie a buscar
   * @returns lista de series que contengan el genero indicado
   */
  searchByGenre(genre: string): Serie[] {
    return this.streamableList.filter((serie) => serie.genres.includes(genre));
  }

  /**
   * Método que busca series por año
   * @param year año de la serie a buscar
   * @returns lista de series que tengan +/- 1 año
   */
  searchByYear(year: number): Serie[] {
    // devolver una lista de series que tengan un año cercano al indicado en +/- 1 año
    return this.streamableList.filter((serie) => serie.year >= year - 1 && serie.year <= year + 1);
  }

  /**
   * Método que busca series por temporadas
   * @param seasons numero de temporadas de la serie a buscar
   * @returns lista de series que tengan +/- 1 temporada que la buscada
   */
  searchBySeasons(seasons: number): Serie[] {
    // devolver una lista de series que tengan un número de temporadas cercano al indicado en +/- 1
    return this.streamableList.filter((serie) => serie.seasons >= seasons - 1 && serie.seasons <= seasons + 1);
  }

  /**
   * Método que busca series por episodios
   * @param episodes numero de episodios de la serie a buscar
   * @returns lista de series que tengan +/- 10 episodios que los buscados
   */
  searchByEpisodes(episodes: number): Serie[] {
    // devolver una lista de series que tengan un número de episodios cercano al indicado en +/- 10
    return this.streamableList.filter((serie) => serie.episodes >= episodes - 10 && serie.episodes <= episodes + 10);
  }

  /**
   * Método que busca series por su rating
   * @param rating puntuación de la serie a buscar
   * @returns lista de series que tengan +/- 1 puntuación de la buscada
   */
  searchByRating(rating: number): Serie[] {
    // devolver una lista de series que tengan una puntuación cercana al indicado en +/- 1
    return this.streamableList.filter((serie) => serie.rating >= rating - 1 && serie.rating <= rating + 1);
  }
}