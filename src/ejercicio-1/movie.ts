import { MediaInterface } from './mediaInterface';

/**
 * Clase Movie para representar una película
 * Implementa la interfaz MediaInterface
 */
export class Movie implements MediaInterface {
  /**
   * Constructor de la clase Movie
   * @param name name of the movie
   * @param genres genres of the movie
   * @param year year of the movie
   * @param rating rating of the movie
   * @param duration duration of the movie
   */
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public duration: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.duration = duration;
  }
}