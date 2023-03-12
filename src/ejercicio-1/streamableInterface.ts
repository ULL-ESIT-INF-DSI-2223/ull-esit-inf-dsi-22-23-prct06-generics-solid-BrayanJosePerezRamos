/**
 * Interfaz StreamableInterface que define los métodos y atributos que debe tener una
 * clase que implemente esta interfaz
 * 
 * @property name Nombre de la colección
 * @property genres Géneros de la colección
 * @property numberOfElements Número de elementos de la colección
 * @property streamableList Lista de elementos de la colección
 * 
 * @method searchByName Buscar por nombre
 * @method searchByGenre Buscar por género
 * @method searchByYear Buscar por año
 * @method searchByRating Buscar por puntuación
 */
export interface StreamableInterface<T> {
  // atributos
  name: string;
  genres: string[];
  numberOfElements: number;
  streamableList: T[];

  // metodos
  searchByName(name: string): T[];
  searchByGenre(genre: string): T[];
  searchByYear(year: number): T[];
  searchByRating(rating: number): T[];
}