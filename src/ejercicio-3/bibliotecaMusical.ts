import { Table } from 'console-table-printer';
import { Cancion } from './cancion';
import { Album } from './album';
import { Single } from './single';
import { Artista } from './artista';
//import { Discografia } from './discografia';

/**
 * Clase que representa una biblioteca musical
 */
export class BibliotecaMusical {
  private nombre: string;
  private artistas: Artista[];

  /**
   * Constructor de la clase BibliotecaMusical que recibe los artistas de la biblioteca musical
   * @param artistas artistas de la biblioteca musical
   */
  constructor(nombre: string, artistas: Artista[]) { this.nombre = nombre; this.artistas = artistas; }

  /**
   * getter del nombre de la biblioteca musical
   * @returns el nombre de la biblioteca musical
   */
  getNombre(): string { return this.nombre; }

  /**
   * setter del nombre de la biblioteca musical para modificarlo
   * @param nombre nombre de la biblioteca musical a asignar
   */
  setNombre(nombre: string): void { this.nombre = nombre; }

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
  mostrarBiblioteca(): Table {
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
          'Discografía': artista.discografia.getDiscografia().map(album => album.getNombre()).join(', '),     
        };

        table.addRow(row);
    });
    table.printTable();
    return table;
  }
  
  /**
   * Busca un artista por su nombre
   * @param nombre nombre del artista a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con los artistas encontrados
   */
  buscarArtista(nombre: string): Artista[] | string {
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
    return artistasEncontrados;
  }
  
  /**
   * Busca un album por su nombre
   * @param nombre nombre del album a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con los albumes encontrados
   */
  buscarAlbum(nombre: string): (Album | Single)[] | string {
    const albumsEncontrados: (Album | Single)[] = [];
    this.artistas.forEach(artista => {
      artista.discografia.getDiscografia().forEach(album => {
        if (album.getNombre().includes(nombre)) {
          albumsEncontrados.push(album);
        }
      });
    });
    if (albumsEncontrados.length === 0) {
      return 'No se encontraron álbumes'
    }
    console.table(albumsEncontrados, ['nombre', 'year', 'canciones']);
    return albumsEncontrados;
  }
  
  /**
   * Busca una cancion por su nombre
   * @param nombre nombre de la cancion a buscar
   * @returns un string con el mensaje de error o void y muestra en consola la tabla con las canciones encontradas
   */
  buscarCancion(nombre: string): Cancion[] | string {
    const cancionesEncontradas: Cancion[] = [];
    this.artistas.forEach(artista => {
      artista.discografia.getDiscografia().forEach(album => {
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
    return cancionesEncontradas;
  }  

  /**
   * Busca un artista por su nombre y muestra el numero de oyentes mensuales
   * @param nombreAlbum nombre del album a calcular el número de canciones
   * @returns el número de canciones del album o un string con el mensaje de error
   */
  numeroCancionesAlbum(nombreAlbum: string): number | string {
    let numeroCanciones = 0;
    this.artistas.forEach(artista => {
      artista.discografia.getDiscografia().forEach(album => {
        if (album.getNombre() === nombreAlbum) {
          numeroCanciones = album.getCanciones().length;
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
      artista.discografia.getDiscografia().forEach(album => {
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
      artista.discografia.getDiscografia().forEach(album => {
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
// const cancion3 = new Cancion('Canción 3', 400, ['Pop'], 300);

// const album1 = new Album('Albumyanfri', 2020, [cancion1, cancion2]);
// const single1 = new Single('Single1', 2020, [cancion3]);

// const artista1 = new Artista('Artista 1', 1000, new Discografia([album1]));
// const artista2 = new Artista('Artista 2', 2000, new Discografia([single1]));

// const biblioteca = new BibliotecaMusical('Biblioteca de Brayan', [artista1, artista2]);

// biblioteca.mostrarBiblioteca()
// // buscarArtista
// const artistasEncontrados = biblioteca.buscarArtista('artista 1')
// console.log(artistasEncontrados[0] === artista1)
