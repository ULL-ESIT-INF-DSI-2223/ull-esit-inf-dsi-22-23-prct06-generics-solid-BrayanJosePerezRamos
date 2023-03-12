import { PrintableCollection } from './printableCollection';
/**
 * Clase que representa una colección de elementos imprimibles de tipo numerico en la que el metodo
 * print() devolverá la representación en cadena de los números de la colección separados por comas.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructor de la clase NumericPrintableCollection
   * @param items elementos que forman la colección
   */
  constructor(items: number[] = []) { super(items); }
  
  /**
   * Metodo que imprime la colección
   * @returns una única cadena la representación en cadena de los números de la colección separados por comas.
   */
  print(): string {
    return this.items.join(', ');
  }
}
    