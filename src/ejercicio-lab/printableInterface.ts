/**
 * Interfaz gnérica para objetos que se puedan imprimir
 */
export interface PrintableInterface<T> {
  print(): string;
}