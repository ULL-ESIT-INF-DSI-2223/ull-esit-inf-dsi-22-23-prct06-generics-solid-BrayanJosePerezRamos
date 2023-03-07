/**
 * Funcion que calcula el maximo comun divisor de dos numeros
 * @param a primer numero entero positivo
 * @param b segundo numero entero positivo
 * @returns el maximo comun divisor de los dos numeros
 */
function mcd(a: number, b: number): number {
  if (a < b) {
    return mcd(b, a);
  } else if (b === 0) {
    return a;
  }
  return mcd(b, a % b);
}

/**
 * Clase que representa un numero racional
 */
export class RacionalNums {
  private numerator: number;
  private denominator: number;

  /**
   * Constructor de la clase RacionalNums
   * @param numerator numerador del numero racional
   * @param denominator denominador del numero racional
   * @throws si el numerador o el denominador no son enteros o si el denominador es 0 es un error
   */
  constructor(numerator: number, denominator: number) {
    // si ambos no son enteros lanza un error
    if (numerator % 1 !== 0 || denominator % 1 !== 0) {
      throw new Error('El numerador y el denominador deben ser números enteros');
    }
    // si el denominador es 0, lanza un error
    if (denominator === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }

  /**
   * getter del numerador
   * @returns el numerador del numero racional
   */
  getNumerator(): number {
    return this.numerator;
  }

  /**
   * getter del denominador
   * @returns el denominador del numero racional
   */
  getDenominator(): number {
    return this.denominator;
  }

  /**
   * setter del numerador
   * @param numerator nuevo numerador del numero racional
   */
  setNumerator(numerator: number): void {
    this.numerator = numerator;
  }

  /**
   * setter del denominador
   * @param denominator nuevo denominador del numero racional
   */
  setDenominator(denominator: number): void {
    this.denominator = denominator;
  }

  /**
   * Funcion que simplifica el numero racional
   * @returns void
   */
  simplify(): void {
    const mcdValue = mcd(this.numerator, this.denominator);
    this.numerator /= mcdValue;
    this.denominator /= mcdValue;
  }

  /**
   * Funcion que invierte el numero racional
   * @returns void
   */
  invert(): void {
    const aux = this.numerator;
    this.setNumerator(this.denominator);
    this.setDenominator(aux);
  }

  /**
   * Funcion que suma dos numeros racionales
   * @param racionalNum numero racional a sumar con el invocante
   * @returns un nuevo numero racional con el resultado de la suma
   */
  add(racionalNum: RacionalNums): RacionalNums {
    if (this.denominator === racionalNum.getDenominator()) {
      return new RacionalNums(this.numerator + racionalNum.getNumerator(), this.denominator);
    }
    const numerator = this.numerator * racionalNum.getDenominator() + racionalNum.getNumerator() * this.denominator;
    const denominator = this.denominator * racionalNum.getDenominator();
    return new RacionalNums(numerator, denominator);
  }

  /**
   * Funcion que resta dos numeros racionales
   * @param racionalNum numero racional a restar con el invocante
   * @returns un nuevo numero racional con el resultado de la resta
   */
  substract(racionalNum: RacionalNums): RacionalNums {
    if (this.denominator === racionalNum.getDenominator()) {
      return new RacionalNums(this.numerator - racionalNum.getNumerator(), this.denominator);
    }
    const numerator = this.numerator * racionalNum.getDenominator() - racionalNum.getNumerator() * this.denominator;
    const denominator = this.denominator * racionalNum.getDenominator();
    return new RacionalNums(numerator, denominator);
  }

  /**
   * Funcion que multiplica dos numeros racionales
   * @param racionalNum numero racional a multiplicar con el invocante
   * @returns un nuevo numero racional con el resultado de la multiplicacion
   */
  multiply(racionalNum: RacionalNums): RacionalNums {
    return new RacionalNums(this.numerator * racionalNum.getNumerator(), this.denominator * racionalNum.getDenominator());
  }

  /**
   * Funcion que divide dos numeros racionales
   * @param racionalNum numero racional a dividir con el invocante
   * @returns un nuevo numero racional con el resultado de la division
   */
  divide(racionalNum: RacionalNums): RacionalNums {
    return new RacionalNums(this.numerator * racionalNum.getDenominator(), this.denominator * racionalNum.getNumerator());
  }
} 