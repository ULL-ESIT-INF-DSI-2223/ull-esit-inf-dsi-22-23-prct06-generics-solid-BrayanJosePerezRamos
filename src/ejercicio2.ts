import * as Prompt from 'prompt-sync';

/**
 * Interfaz para el tipo Ficha
 */
export interface IFicha {
  readonly color: string;
}

/**
 * Clase Ficha que implementa la interfaz IFicha y representa una ficha de un juego de 4 en raya
 */
export class Ficha implements IFicha {
  /**
   * Constructor de la clase Ficha que recibe el color de la ficha y lo asigna a la propiedad color
   * @param color color de la ficha
   */
  constructor(readonly color: string) {}

  /**
   * getter del color de la ficha
   * @returns el color de la ficha
   */
  getColor(): string {
    return this.color;
  }
}

/**
 * Clase Rejilla que representa una rejilla de un juego de 4 en raya y que contiene una matriz de fichas
 */
export class Rejilla {
  private readonly FILAS = 6;
  private readonly COLUMNAS = 7;
  private readonly rejilla: Ficha[][];

  /**
   * Constructor de la clase Rejilla que crea una matriz de fichas vacía
   */
  constructor() {
    this.rejilla = new Array(this.FILAS)
      .fill(undefined)
      .map(() => new Array(this.COLUMNAS).fill(undefined));
  }

  /**
   * getter del número de filas de la rejilla
   * @returns el número de filas de la rejilla
   */
  getFilas(): number {
    return this.FILAS;
  }

  /**
   * getter del número de columnas de la rejilla
   * @returns el número de columnas de la rejilla
   */
  getColumnas(): number {
    return this.COLUMNAS;
  }

  /**
   * Comprueba si la rejilla está llena
   * @returns true si la rejilla está llena, false en caso contrario
   */
  isFull(): boolean {
    for (let fila = 0; fila < this.FILAS; fila++) {
      for (let columna = 0; columna < this.COLUMNAS; columna++) {
        if (this.rejilla[fila][columna] === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * 
   * @param ficha ficha a colocar
   * @param columna columna en la que se coloca la ficha
   * @returns true si la ficha se ha colocado correctamente, false en caso que la columna esté llena o no exista
   */
  colocarFicha(ficha: Ficha, columna: number): boolean {
    if (columna < 0 || columna >= this.COLUMNAS) {
      console.log('Columna inválida');
      return false;
    }

    let fila = this.FILAS - 1;
    while (fila >= 0 && this.rejilla[fila][columna] !== undefined) {
      fila--;
    }

    if (fila < 0) {
      console.log('Columna completa');
      return false;
    }

    this.rejilla[fila][columna] = ficha;
    return true;
  }

  /**
   * Comprueba si hay 4 fichas del mismo color en una fila
   */
  imprimirRejilla() {
    // imprimir encabezado de columnas
    let encabezado = ' ';
    for (let i = 0; i < this.COLUMNAS; i++) {
      encabezado += ` ${i} `;
    }
    console.log(encabezado);
  
    // imprimir borde superior del tablero
    console.log(`+${'-'.repeat(this.COLUMNAS * 3 - 1)}+`);
  
    // imprimir rejilla en formato de tablero
    for (let fila = 0; fila < this.FILAS; fila++) {
      let filaString = '|';
      for (let columna = 0; columna < this.COLUMNAS; columna++) {
        if (this.rejilla[fila][columna] === undefined) {
          filaString += ' - ';
        } else {
          filaString += ` ${this.rejilla[fila][columna].color} `;
        }
      }
      filaString += '|';
      console.log(filaString);
    }
  
    // imprimir borde inferior del tablero
    console.log(`+${'-'.repeat(this.COLUMNAS * 3 - 1)}+`);
  }
  

  /**
   * Comprueba si hay 4 fichas del mismo color en una fila
   * @param fila fila de la ficha a obtener
   * @param columna columna de la ficha a obtener
   * @returns la ficha de la posición indicada o undefined si no hay ficha en esa posición
   */
  getFicha(fila: number, columna: number): Ficha | undefined {
    return this.rejilla[fila][columna];
  }
}

/**
 * Clase Jugador que representa un jugador de un juego de 4 en raya
 */
export class Jugador {
  /**
   * Constructor de la clase Jugador que recibe el nombre y el color de las fichas del jugador
   * @param nombre nombre del jugador
   * @param color color de las fichas del jugador
   */
  constructor(readonly nombre: string, readonly color: string) {
    if (color !== 'R' && color !== 'Y') {
      throw new Error('Color inválido, debe ser R o Y');
    }
  }

  /**
   * getter del color de las fichas del jugador
   * @returns el color de las fichas del jugador
   */
  getColor(): string {
    return this.color;
  }

  /**
   * getter del nombre del jugador
   * @returns el nombre del jugador
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * getter de una ficha del color del jugador
   * @returns una ficha del color del jugador
   */
  getFicha(): Ficha {
    return new Ficha(this.color);
  }

  /**
   * Coloca una ficha en la columna indicada
   * @param rejilla rejilla en la que se coloca la ficha
   * @param columna columna en la que se coloca la ficha
   * @returns 
   */
  colocarFicha(rejilla: Rejilla, columna: number): boolean {
    const ficha = new Ficha(this.color);
    return rejilla.colocarFicha(ficha, columna);
  }
}

/**
 * Clase Conecta4 que representa un juego de 4 en raya
 */
export class Conecta4 {
  private readonly jugadores: [Jugador, Jugador];
  private readonly rejilla: Rejilla;

  /**
   * Constructor de la clase Conecta4 que recibe los jugadores del juego
   * @param jugador1 jugador 1 del juego
   * @param jugador2 jugador 2 del juego
   */
  constructor(jugador1: Jugador, jugador2: Jugador) {
    if (jugador1.getColor() === jugador2.getColor()) {
      throw new Error('Los jugadores no pueden tener el mismo color');
    } 
    this.jugadores = [jugador1, jugador2];
    this.rejilla = new Rejilla();
  }

  /**
   * Getter de los jugadores del juego
   * @returns los jugadores del juego
   */
  getJugadores(): [Jugador, Jugador] {
    return this.jugadores;
  }

  /**
   * Getter de la rejilla del juego
   * @returns la rejilla del juego
   */
  getRejilla(): Rejilla {
    return this.rejilla;
  }

  /**
   * Comprueba si el jugador ha ganado el juego
   * @param jugador jugador a verificar si ha ganado
   * @returns true si el jugador ha ganado, false en caso contrario
   */
  private verificarGanador(jugador: Jugador): boolean {
    const ficha = jugador.getFicha();
    // Comprobar horizontalmente
    for (let fila = 0; fila < this.rejilla.getFilas(); fila++) {
      for (let col = 0; col < this.rejilla.getColumnas() - 3; col++) {
        if (this.rejilla.getFicha(fila, col) === ficha &&
            this.rejilla.getFicha(fila, col + 1) === ficha &&
            this.rejilla.getFicha(fila, col + 2) === ficha &&
            this.rejilla.getFicha(fila, col + 3) === ficha) {
          return true;
        }
      }
    }
  
    // Comprobar verticalmente
    for (let fila = 0; fila < this.rejilla.getFilas() - 3; fila++) {
      for (let col = 0; col < this.rejilla.getColumnas(); col++) {
        if ( this.rejilla.getFicha(fila, col)?.getColor() === ficha.getColor() &&
             this.rejilla.getFicha(fila + 1, col)?.getColor() === ficha.getColor() &&
             this.rejilla.getFicha(fila + 2, col)?.getColor() === ficha.getColor() &&
             this.rejilla.getFicha(fila + 3, col)?.getColor() === ficha.getColor()) {
          return true;
        }
      }
    }
  
    // Comprobar diagonalmente hacia abajo y a la derecha
    for (let fila = 0; fila < this.rejilla.getFilas() - 3; fila++) {
      for (let col = 0; col < this.rejilla.getColumnas() - 3; col++) {
        if (this.rejilla.getFicha(fila, col)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila + 1, col + 1)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila + 2, col + 2)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila + 3, col + 3)?.getColor() === ficha.getColor()) {
          return true;
        }
      }
    }
  
    // Comprobar diagonalmente hacia arriba y a la derecha
    for (let fila = 3; fila < this.rejilla.getFilas(); fila++) {
      for (let col = 0; col < this.rejilla.getColumnas() - 3; col++) {
        if (this.rejilla.getFicha(fila, col)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila - 1, col + 1)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila - 2, col + 2)?.getColor() === ficha.getColor() &&
            this.rejilla.getFicha(fila - 3, col + 3)?.getColor() === ficha.getColor()) {
          return true;
        }
      }
    }
    // Si no se encontraron cuatro fichas consecutivas, devolver falso
    return false;
  }

  /**
   * Método que inicia el juego de 4 en raya y ejecuta los turnos
   */
  jugar() {
    let turno = 0;
    let ganador = false;
  
    while (!ganador) {
      console.log(`Turno ${turno}`);
      const jugador = this.jugadores[turno % 2];
      console.log(`Turno del jugador ${jugador.nombre}`);
      let columna;
      do {
        const prompt = Prompt(); // crear instancia de prompt
        columna = prompt('Seleccione una columna (0-6): ');
      } while (!jugador.colocarFicha(this.rejilla, parseInt(columna)));
  
      this.rejilla.imprimirRejilla();
  
      // Verificar si hay ganador
      ganador = this.verificarGanador(jugador);
      if (ganador) {
        console.log(`El jugador ${jugador.nombre} ha ganado!`);
        break;
      } else {
        // comprueba si el tablero está lleno
        if (this.rejilla.isFull()) {
          console.log('No hay ganador. Empate.');
          break;
        }
      }
      turno++;
    }
    // volver a imprimir el tablero para mostrar la última jugada
    this.rejilla.imprimirRejilla();
  }
}

// const jugador1 = new Jugador('Jugador 1', 'R');
// const jugador2 = new Jugador('Jugador 2', 'Y');

// const juego = new Conecta4(jugador1, jugador2);
// juego.jugar();