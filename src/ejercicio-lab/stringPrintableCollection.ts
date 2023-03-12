import { PrintableCollection } from './printableCollection';
/**
 * Clase que representa una colección de elementos imprimibles de tipo string en la que el metodo
 * print() devolverá una única cadena con la concatenación de todas las cadenas de la colección separadas por comas
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructor de la clase StringPrintableCollection
   * @param items elementos que forman la colección
   */
  constructor(items: string[] = []) { super(items); }

  /**
   * Metodo que imprime la colección
   * @returns una única cadena con la concatenación de todas las cadenas de la colección separadas por comas
   */
  print(): string {
    return this.items.join(', ');
  }
}