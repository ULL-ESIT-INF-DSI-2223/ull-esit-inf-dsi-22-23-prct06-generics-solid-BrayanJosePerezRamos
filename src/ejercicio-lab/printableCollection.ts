import { CollectableInterface } from './collectableInterface';
import { PrintableInterface } from './printableInterface';
/**
 * Clase abstracta que implementa la interfaz CollectableInterface y PrintableInterface
 * donde el método print() es abstracto y debe ser implementado por las clases que hereden
 * y se implemente todos los metodos de la interfaz CollectableInterface
 */
export abstract class PrintableCollection<T> implements CollectableInterface<T>, PrintableInterface<T> {
  constructor(protected items: T[] = []) { this.items = items; }

  /**
   * Añade un elemento a la coleccion
   * @param item elemtno a añadir a la coleccion
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Obtiene un elemento de la coleccion
   * @param index indice del elemento a obtener
   * @returns el elemento en la posicion index
   */
  getitem(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items[index];
  }

  /**
   * Elimina un elemento de la coleccion
   * @param index indice del elemento a eliminar
   * @returns 
   */
  removeItem(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items.splice(index, 1)[0];
  } 

  /**
   * Obtiene el numero de elementos de la coleccion
   * @returns el numero de elementos de la coleccion
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Metodo abstracto que debe ser implementado por las clases que hereden a PrintableCollection
   */
  abstract print(): string;
}