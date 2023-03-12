import { MediaInterface } from './mediaInterface';

/**
 * Clase Documental para representar un documental
 * Implementa la interfaz MediaInterface
 */
export class Documental implements MediaInterface {
  /**
   * Constructor de la clase Documental
   * @param name nombre del documental
   * @param genres generos del documental
   * @param year año de publicación del documental
   * @param rating puntuación del documental
   * @param duration duración del documental
   * @param episodes número de episodios del documental
   */
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public duration: number,
    public episodes: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.duration = duration;
    this.episodes = episodes;
  }
}