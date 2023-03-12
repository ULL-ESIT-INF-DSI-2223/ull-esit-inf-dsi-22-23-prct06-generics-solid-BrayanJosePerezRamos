import { MediaInterface } from './mediaInterface';

/**
 * Clase Serie para representar una serie de televisión
 * Implementa la interfaz MediaInterface
 */
export class Serie implements MediaInterface {
  /**
   * Constructor de la clase Serie
   * @param name nombre de la serie
   * @param genres géneros de la serie
   * @param year año de la serie
   * @param rating puntuación de la serie
   * @param seasons temporadas de la serie
   * @param episodes episodios de la serie
   */
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public seasons: number,
    public episodes: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.seasons = seasons;
    this.episodes = episodes;
  }
}