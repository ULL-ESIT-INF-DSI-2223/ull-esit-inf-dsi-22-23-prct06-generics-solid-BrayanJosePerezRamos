import { Table } from 'console-table-printer';

/**
 * Clase que representa una canción
 */
export class Cancion {
  private readonly nombre: string;
  private readonly duracion: number;
  private readonly generos: string[];
  private readonly single: boolean;
  private reproducciones: number;

  /**
   * Constructor de la clase Cancion que recibe el nombre, la duración, los géneros y el número de reproducciones
   * @param nombre nombre de la canción
   * @param duracion duración de la canción en segundos
   * @param generos géneros de la canción
   * @param reproducciones número de reproducciones de la canción
   */
  constructor(nombre: string, duracion: number, generos: string[], single: boolean, reproducciones: number) {
    if (duracion < 0) {
      throw new Error('La duración de la canción no puede ser negativa');
    }
    if (reproducciones < 0) {
      throw new Error('El número de reproducciones de la canción no puede ser negativo');
    }
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
    this.single = single;
    this.reproducciones = reproducciones;
  }

  getNombre(): string { return this.nombre; }

  getDuracion(): number { return this.duracion; }

  getGeneros(): string[] { return this.generos; }

  getSingle(): boolean { return this.single; }

  getReproducciones(): number { return this.reproducciones; }

  setReproducciones(reproducciones: number): void { this.reproducciones = reproducciones; }
}

/**
 * Clase que representa un álbum de música
 */
export class Album {
  private readonly nombre: string;
  private readonly year: number;
  private canciones: Cancion[];

  /**
   * 
   * @param nombre nombre del álbum de música
   * @param year 
   * @param canciones 
   */
  constructor(nombre: string, year: number, canciones: Cancion[]) {
    // si el año es negativo o no es un entero lanza un error
    if (year <= 0 || year % 1 !== 0) {
      throw new Error('El año del disco debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.year = year;
    this.canciones = canciones;
  }

  /**
   * getter del nombre del álbum de música
   * @returns el nombre del álbum de música
   */
  getNombre(): string { return this.nombre; }

  /**
   * getter del año del álbum de música
   * @returns año del álbum de música
   */
  getYear(): number { return this.year; }

  /**
   * getter de las canciones del álbum de música
   * @returns canciones del álbum de música
   */
  getCanciones(): Cancion[] { return this.canciones; }

  /**
   * setter de las canciones del álbum de música para modificarlas
   * @param canciones canciones del álbum de música
   */
  setCanciones(canciones: Cancion[]): void { this.canciones = canciones; }

  /**
   * getter de la cantidad de canciones del álbum de música
   * @returns cantidad de canciones del álbum de música
   */
  getCantidadCanciones(): number { return this.canciones.length; }

  /**
   * getter de la duración total del álbum de música
   * @returns duración total del álbum de música en segundos
   */
  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.canciones.forEach(cancion => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  /**
   * getter de los géneros del álbum de música
   * @returns Numero total de reproducciones del album
   */
  getReproduccionesTotal(): number {
    let reproduccionesTotal = 0;
    this.canciones.forEach(cancion => {
      reproduccionesTotal += cancion.getReproducciones();
    });
    return reproduccionesTotal;
  }
}

/**
 * Clase que representa un artista
 */
export class Artista {
  private  nombre: string;
  private oyentesMensuales: number;
  private discografia: Album[];

  /**
   * Constructor de la clase Artista que recibe el nombre, el número de oyentes mensuales y la discografía
   * @param nombre nombre del artista
   * @param oyentesMensuales número de oyentes mensuales del artista
   * @param discografia discografía del artista
   */
  constructor(nombre: string, oyentesMensuales: number, discografia: Album[]) {
    if (oyentesMensuales <= 0 || oyentesMensuales % 1 !== 0) {
      throw new Error('El número de oyentes mensuales debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }

  /**
   * getter del nombre del artista
   * @returns el nombre del artista
   */
  getNombre(): string { return this.nombre; }

  /**
   * getter del número de oyentes mensuales del artista
   * @returns el número de oyentes mensuales del artista
   */
  getOyentesMensuales(): number { return this.oyentesMensuales; }

  /**
   * getter de la discografía del artista
   * @returns albumes del artista
   */
  getDiscografia(): Album[] { return this.discografia; }

  /**
   * setter de la discografía del artista para modificarla
   * @param discografia nueva discografía del artista
   */
  setDiscografia(discografia: Album[]): void { this.discografia = discografia; }

  /**
   * setter del número de oyentes mensuales del artista para modificarlo
   * @param oyentesMensuales Nuevo número de oyentes mensuales del artista
   */
  setOyentesMensuales(oyentesMensuales: number): void { this.oyentesMensuales = oyentesMensuales; }

  /**
   * setter del nombre del artista para modificarlo
   * @param nombre Nuevo nombre del artista
   */
  setNombre(nombre: string): void { this.nombre = nombre; }

  /**
   * Añade un álbum a la discografía del artista
   * @param album Album a añadir a la discografía del artista
   */
  addAlbum(album: Album): void {
    this.discografia.push(album);
  }
}

/**
 * Clase que representa una biblioteca musical
 */
export class BibliotecaMusical {
  private artistas: Artista[];

  /**
   * Constructor de la clase BibliotecaMusical que recibe los artistas de la biblioteca musical
   * @param artistas artistas de la biblioteca musical
   */
  constructor(artistas: Artista[]) { this.artistas = artistas; }

  /**
   * getter de los artistas de la biblioteca musical
   * @returns los artistas de la biblioteca musical
   */
  getArtistas(): Artista[] { return this.artistas; }

  /**
   * setter de los artistas de la biblioteca musical para modificarlos
   * @param artistas Array de artistas a asignar a la biblioteca musical
   */
  setArtistas(artistas: Artista[]): void { this.artistas = artistas; }

  /**
   * setter de los artistas de la biblioteca musical para modificarlos
   * @param artista artista a añadir a la biblioteca musical
   */
  addArtista(artista: Artista): void { this.artistas.push(artista); }

  /**
   * Muestra la biblioteca musical en una tabla
   */
  mostrarBiblioteca(): void {
    const table = new Table({
      columns: [
        { name: 'Nombre del artista', alignment: 'center' },
        { name: 'Oyentes mensuales', alignment: 'center' },
        { name: 'Discografía', alignment: 'center' },
      ]
    });
    this.artistas.forEach(artista => {
        let row = {
          'Nombre del artista': artista.getNombre(),
          'Oyentes mensuales': artista.getOyentesMensuales(),
          'Discografía': artista.getDiscografia().map(album => album.getNombre()).join(', '),     
        };

        table.addRow(row);
    });
    table.printTable();
  }
  
  /**
   * Busca un artista por su nombre
   * @param nombre nombre del artista a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con los artistas encontrados
   */
  buscarArtista(nombre: string): void | string {
    const artistasEncontrados: Artista[] = [];
    this.artistas.forEach(artista => {
      if (artista.getNombre().toLowerCase().includes(nombre.toLowerCase())) {
        artistasEncontrados.push(artista);
      }
    });
    if (artistasEncontrados.length === 0) {
      return 'No se encontraron artistas'
    }
    console.table(artistasEncontrados)
  }
  
  /**
   * Busca un album por su nombre
   * @param nombre nombre del album a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con los albumes encontrados
   */
  buscarAlbum(nombre: string): void | string {
    const albumsEncontrados: Album[] = [];
    this.artistas.forEach(artista => {
      artista.getDiscografia().forEach(album => {
        if (album.getNombre().includes(nombre)) {
          albumsEncontrados.push(album);
        }
      });
    });
    if (albumsEncontrados.length === 0) {
      return 'No se encontraron álbumes'
    }
    console.table(albumsEncontrados, ['nombre', 'year', 'canciones']);
  }
  
  /**
   * Busca una cancion por su nombre
   * @param nombre nombre de la cancion a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con las canciones encontradas
   */
  buscarCancion(nombre: string): void | string {
    const cancionesEncontradas: Cancion[] = [];
    this.artistas.forEach(artista => {
      artista.getDiscografia().forEach(album => {
        album.getCanciones().forEach(cancion => {
          if (cancion.getNombre().includes(nombre)) {
            cancionesEncontradas.push(cancion);
          }
        });
      });
    });
    if (cancionesEncontradas.length === 0) {
      return 'No se encontraron canciones'
    }
    console.table(cancionesEncontradas, ['nombre', 'duracion', 'generos', 'reproducciones']);
  }  

  /**
   * Busca un artista por su nombre y muestra el numero de oyentes mensuales
   * @param nombreAlbum nombre del album a calcular el número de canciones
   * @returns el número de canciones del album o un string con el mensaje de error
   */
  numeroCancionesAlbum(nombreAlbum: string): number | string {
    let numeroCanciones = 0;
    this.artistas.forEach(artista => {
      artista.getDiscografia().forEach(album => {
        if (album.getNombre() === nombreAlbum) {
          numeroCanciones = album.getCantidadCanciones();
        }
      });
    });
    if (numeroCanciones === 0) {
      return 'No se encontró el álbum'
    }
    return numeroCanciones;
  }

  /**
   * Calcula la duración total de un album concreto en segundos dado su nombre
   * @param nombreAlbum a buscar la duración total del album
   * @returns la duración total del album o un string con el mensaje de error
   */
  duracionTotalAlbum(nombreAlbum: string): number | string {
    let duracionTotal = -1;
    this.artistas.forEach(artista => {
      artista.getDiscografia().forEach(album => {
        if (album.getNombre() === nombreAlbum) {
          duracionTotal = album.getDuracionTotal();
        }
      });
    });
    if (duracionTotal === -1) {
      return 'No se encontró el álbum'
    }
    return duracionTotal;
  }

  /**
   * Calcula el número de reproducciones totales de un album concreto dado su nombre
   * @param nombreAlbum nombre del album a calcular el número de reproducciones totales
   * @returns el número de reproducciones totales del album o un string con el mensaje de error
   */
  reproduccionesTotalAlbum(nombreAlbum: string): number | string {
    let reproduccionesTotal = -1;
    this.artistas.forEach(artista => {
      artista.getDiscografia().forEach(album => {
        if (album.getNombre() === nombreAlbum) {
          reproduccionesTotal = album.getReproduccionesTotal();
        }
      });
    });
    if (reproduccionesTotal === -1) {
      return 'No se encontró el álbum'
    }
    return reproduccionesTotal;
  }
}

// const cancion1 = new Cancion('Canción 1', 200, ['Rock'], 100);
// const cancion2 = new Cancion('Canción 2', 300, ['Rock'], 200);

// const album1 = new Album('Album yanfri', 2020, [cancion1, cancion2]);
// const album2 = new Album('AdayGuapo', 2020, [cancion1, cancion2]);

// const artista1 = new Artista('Artista 1', 1000, [album1]);
// const artista2 = new Artista('Artista 2', 2000, [album2]);

// const biblioteca = new BibliotecaMusical([artista1, artista2]);

// biblioteca.mostrarBiblioteca();

// biblioteca.buscarArtista('Artista 1');

// biblioteca.buscarAlbum('Album yanfri');

// biblioteca.buscarCancion('Canción 1');

// console.log(biblioteca.numeroCancionesAlbum('Album yanfri'));