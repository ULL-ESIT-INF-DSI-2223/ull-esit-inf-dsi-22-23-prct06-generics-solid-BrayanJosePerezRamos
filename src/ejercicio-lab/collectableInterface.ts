/**
 * Interfaz que define las operaciones de un objeto coleccionable
 */
export interface CollectableInterface<T> {
  addItem(item: T): void;
  getitem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}