/**
 * Interfaz para elementos media como películas, series, etc.
 * @property name Nombre de la película, serie, etc.
 * @property genres Géneros de la película, serie, etc.
 * @property year Año de la película, serie, etc.
 * @property rating Puntuación de la película, serie, etc.
 * @property duration Duración de la película, serie, etc.
 * @property episodes Número de episodios de la serie.
 * @property seasons Número de temporadas de la serie.
 */
export interface MediaInterface {
  name: string;
  genres: string[];
  year: number;
  rating: number;
  duration?: number;
  episodes?: number;
  seasons?: number;
}