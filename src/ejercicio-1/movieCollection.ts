import { BasicStreamableCollection } from './basicStreamableCollection';
import { Movie } from './movie';

/**
 * Clase MovieCollection que extiende de BasicStreamableCollection y representa 
 * una colección de películas.
 */
export class MovieCollection extends BasicStreamableCollection<Movie> {
  /**
   * Constructor de la clase MovieCollection
   * @param name nombre de la colección
   * @param genres géneros de la colección
   * @param numberOfElements número de elementos de la colección
   * @param streamableList lista de películas de la colección
   */
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Movie[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  /**
   * Método que busca películas por nombre
   * @param name nombre de la película a buscar
   * @returns lista de películas que contengan el nombre indicado
   */
  searchByName(name: string): Movie[] {
    return this.streamableList.filter((movie) => movie.name.includes(name));
  }
  
  /**
   * Método que busca películas por género
   * @param genre genero de la pelicula a buscar
   * @returns lista de peliculas que contengan el genero indicado
   */
  searchByGenre(genre: string): Movie[] {
    // devolver una lista de películas que contengan el género indicado
    return this.streamableList.filter((movie) => movie.genres.includes(genre));
  }
  
  /**
   * Método que busca películas por año
   * @param year año de la película a buscar
   * @returns lista de películas que contengan el año indicado
   */
  searchByYear(year: number): Movie[] {
    // devolver las películas que tengan un año cercano al indicado en +/- 1 año
    return this.streamableList.filter((movie) => movie.year >= year - 1 && movie.year <= year + 1);
  }
  
  /**
   * Método que busca películas por puntuación
   * @param rating puntuación de la película a buscar
   * @returns lista de películas que contengan la puntuación indicada
   */
  searchByRating(rating: number): Movie[] {
    // devolver las películas que tengan una puntuación cercana a la indicada en +/- 1
    return this.streamableList.filter((movie) => movie.rating >= rating - 1 && movie.rating <= rating + 1);
  }
  
  /**
   * Método que busca películas por duración
   * @param duration duración de la película a buscar
   * @returns lista de películas que contengan la duración indicada
   */
  searchByDuration(duration: number): Movie[] {
    // devolver las películas que tengan una duración cercana a la indicada en +/- 10 minutos
    return this.streamableList.filter((movie) => movie.duration >= duration - 10 && movie.duration <= duration + 10);
  }
}