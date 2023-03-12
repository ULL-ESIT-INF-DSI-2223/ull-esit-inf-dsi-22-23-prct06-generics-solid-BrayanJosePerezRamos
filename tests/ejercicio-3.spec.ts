import { expect } from 'chai';
import 'mocha';
import { BibliotecaMusical } from '../src/ejercicio-3/bibliotecaMusical';
import { Artista } from '../src/ejercicio-3/artista';
import { Album } from '../src/ejercicio-3/album';
import { Cancion } from '../src/ejercicio-3/cancion';
import { Discografia } from '../src/ejercicio-3/discografia';
//import { Table } from 'console-table-printer';

// constructor clase Cancion comprobar que se crea correctamente
let cancion1 = new Cancion('Canción 1', 200, ['Rock'], 100);
describe('Cancion constructor', () => {
  it('should return an instance of Cancion', () => {
    expect(cancion1).to.be.instanceOf(Cancion);
  });
});

describe('Cancion constructor', () => {
  it('should return the correct atributtes', () => {
    expect(cancion1.getNombre()).to.be.equal('Canción 1');
    expect(cancion1.getDuracion()).to.be.equal(200);
    expect(cancion1.getGeneros()).to.be.eql(['Rock']);
    expect(cancion1.getReproducciones()).to.be.equal(100);
  });
});

// constructor de clase Cancion falla si duracion es negativa
describe('Cancion constructor', () => {
  it('should throw an error if the duration is negative', () => {
    expect(() => new Cancion('Cancion', -1, ['Rock'], 1)).to.throw('La duración de la canción no puede ser negativa');
  });
})

// constructor de clase Cancion falla si reproducciones es negativa
describe('Cancion constructor', () => {
  it('should throw an error if the reproductions is negative', () => {
    expect(() => new Cancion('Cancion', 1, ['Rock'], -1)).to.throw('El número de reproducciones de la canción no puede ser negativo');
  });
})

// setReproducciones de clase Cancion
describe('Cancion setReproducciones', () => {
  it('should return the correct value', () => {
    cancion1.setReproducciones(200);
    expect(cancion1.getReproducciones()).to.be.equal(200);
  });
});

// constructor clase Album comprobar que se crea correctamente
let album1 = new Album('Album 1', 2000, [cancion1]);
describe('Album constructor', () => {
  it('should return an instance of Album', () => {
    expect(album1).to.be.instanceOf(Album);
  });
});

describe('Album constructor', () => {
  it('should return the correct atributtes', () => {
    expect(album1.getNombre()).to.be.equal('Album 1');
    expect(album1.getYear()).to.be.equal(2000);
    expect(album1.getCanciones()).to.be.eql([cancion1]);
  });
});

// constructor de clase Album falla si year es negativo
describe('Album constructor', () => {
  it('should throw an error if the year is negative', () => {
    expect(() => new Album('Album', -1, [cancion1])).to.throw('El año del disco debe ser un número entero positivo');
  });
})

const albumPrueba = new Album('Album 1', 2000, [cancion1]);
// setCanciones
describe('Album setCanciones', () => {
  it('should return the correct value', () => {
    albumPrueba.setCanciones([cancion1]);
    expect(albumPrueba.getCanciones()).to.be.eql([cancion1]);
  });
});

const artista1 = new Artista('Artista 1', 1000, new Discografia([album1]));
describe('Artista constructor', () => {
  it('should return an instance of Artista', () => {
    expect(artista1).to.be.instanceOf(Artista);
  });
});

describe('Artista constructor', () => {
  it('should return the correct atributtes', () => {
    expect(artista1.getNombre()).to.be.equal('Artista 1');
    expect(artista1.getOyentesMensuales()).to.be.equal(1000);
    expect(artista1.discografia.getDiscografia()).to.be.eql([album1]);
  });
});

// constructor de clase Artista falla si oyentesMensuales es negativo
describe('Artista constructor', () => {
  it('should throw an error if the oyentesMensuales is negative', () => {
    expect(() => new Artista('Artista', -1, new Discografia([album1]))).to.throw('El número de oyentes mensuales debe ser un número entero positivo');
  });
})

// discografia setter
describe('Artista discografia setter', () => {
  it('should return the correct atributtes', () => {
    artista1.discografia.setDiscografia([album1]);
    expect(artista1.discografia.getDiscografia()).to.be.eql([album1]);
  });
});

// addAlbum
const artistaprueba = new Artista('Artista prueba', 1000, new Discografia([album1]));
describe('Artista addAlbum', () => {
  it('should return the correct atributtes', () => {
    artistaprueba.discografia.addAlbum(album1);
    expect(artistaprueba.discografia.getDiscografia()).to.be.eql([album1, album1]);
  });
});

// setoyentesMensuales y setNombre
describe('Artista setNombre', () => {
  it('should return the correct atributtes', () => {
    artistaprueba.setNombre('Artista prueba 2');
    expect(artistaprueba.getNombre()).to.be.equal('Artista prueba 2');
  });
});

describe('Artista setOyentesMensuales', () => {
  it('should return the correct atributtes', () => {
    artistaprueba.setOyentesMensuales(2000);
    expect(artistaprueba.getOyentesMensuales()).to.be.equal(2000);
  });
});

// Constructor clase BibliotecaMusical
describe('Constructor BibliotecaMusical', () => {
  it('should return an instance of BibliotecaMusical', () => {
    expect(new BibliotecaMusical('Biblioteca1',[])).to.be.instanceOf(BibliotecaMusical);
  });
});

// const bibliotecavacia = new BibliotecaMusical('Biblioteca vacia', []);
// // mostrarBiblioteca
// describe('BibliotecaMusical mostrarBiblioteca', () => {
//   it('should return the correct table', () => {
//     const table = new Table();
//     table.addRow({ Nombre: 'Biblioteca vacia', Artistas: 0 });
//     expect(bibliotecavacia.mostrarBiblioteca()).to.be.equal(table);
//   });
// });

// crear objeto BibliotecaMusical y comprobar que se crea correctamente
const biblioteca1 = new BibliotecaMusical('Biblioteca 1', [artista1]);

describe('BibliotecaMusical constructor', () => {
  it('should return the correct atributtes', () => {
    expect(biblioteca1.getArtistas()).to.be.eql([artista1]);
    expect(biblioteca1.getNombre()).to.be.equal('Biblioteca 1');
  });
});

// probar los setters de BibliotecaMusical
describe('BibliotecaMusical setters', () => {
  it('should return the correct atributtes', () => {
    biblioteca1.setNombre('Biblioteca 2');
    expect(biblioteca1.getNombre()).to.be.equal('Biblioteca 2');
    biblioteca1.setArtistas([artista1]);
    expect(biblioteca1.getArtistas()).to.be.eql([artista1]);
  });
});

const artista2 = new Artista('Artista 2', 1000, new Discografia([album1]));
// addArtista
describe('BibliotecaMusical addArtista', () => {
  it('should return the correct artist', () => {
    biblioteca1.addArtista(artista2);
    expect(biblioteca1.getArtistas()).to.be.eql([artista1, artista2]);
  });
});

// buscarArtista 
describe('BibliotecaMusical buscarArtista', () => {
  it('should return the correct artist', () => {
    expect(biblioteca1.buscarArtista('Artista 1')).to.be.eql([artista1]);
  });
});

// buscarArtista error
describe('BibliotecaMusical buscarArtista', () => {
  it('should return a message if the artist is not found', () => {
    const result = biblioteca1.buscarArtista('Artista 3');
    expect(result).to.be.equal('No se encontraron artistas');
  });
});

// buscarAlbum
describe('BibliotecaMusical buscarAlbum', () => {
  it('should return the correct album', () => {
    expect(biblioteca1.buscarAlbum('Album 1')).to.be.eql([album1, album1]);
  });
})

// buscarAlbum error
describe('BibliotecaMusical buscarAlbum', () => {
  it('should return a message if the album is not found', () => {
    const result = biblioteca1.buscarAlbum('Album 3');
    expect(result).to.be.equal('No se encontraron álbumes');
  });
});

// buscarCancion
describe('BibliotecaMusical buscarCancion', () => {
  it('should return the correct song', () => {
    expect(biblioteca1.buscarCancion('Canción 1')).to.be.eql([cancion1, cancion1]);
  });
})

// buscarCancion error
describe('BibliotecaMusical buscarCancion', () => {
  it('should return a message if the song is not found', () => {
    const result = biblioteca1.buscarCancion('Canción 3');
    expect(result).to.be.equal('No se encontraron canciones');
  });
});

// numeroCancionesAlbum
describe('BibliotecaMusical numeroCancionesAlbum', () => {
  it('should return the correct number of songs', () => {
    expect(biblioteca1.numeroCancionesAlbum('Album 1')).to.be.equal(1);
  });
})

// numeroCancionesAlbum error
describe('BibliotecaMusical numeroCancionesArtista', () => {
  it('should return No se encontró el álbum', () => {
    expect(biblioteca1.numeroCancionesAlbum('Arbum')).to.be.equal('No se encontró el álbum');
  });
})

// duracionTotalAlbum
describe('BibliotecaMusical duracionTotalAlbum', () => {
  it('should return the correct duration of the album', () => {
    expect(biblioteca1.duracionTotalAlbum('Album 1')).to.be.equal(200);
  });
})

// duracionTotalAlbum error
describe('BibliotecaMusical duracionTotalAlbum', () => {
  it('should return No se encontró el álbum', () => {
    expect(biblioteca1.duracionTotalAlbum('Arbum')).to.be.equal('No se encontró el álbum');
  });
})

// reproduccionesTotalAlbum 
describe('BibliotecaMusical reproduccionesTotalAlbum', () => {
  it('should return the correct number of reproductions of the album', () => {
    expect(biblioteca1.reproduccionesTotalAlbum('Album 1')).to.be.equal(200);
  });
})

// reproduccionesTotalAlbum error
describe('BibliotecaMusical reproduccionesTotalAlbum', () => {
  it('should return No se encontró el álbum', () => {
    expect(biblioteca1.reproduccionesTotalAlbum('Arbum')).to.be.equal('No se encontró el álbum');
  });
})