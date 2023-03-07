import 'mocha'; 
import { expect } from 'chai';
import { BibliotecaMusical, Cancion, Album, Artista } from '../src/ejercicio1';

// constructor clase Cancion comprobar que se crea correctamente
let cancion1 = new Cancion('Canción 1', 200, ['Rock'], true, 100);
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
    expect(() => new Cancion('Cancion', -1, ['Rock'], true, 1)).to.throw('La duración de la canción no puede ser negativa');
  });
})

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

const artista1 = new Artista('Artista 1', 1000, [album1]);
describe('Artista constructor', () => {
  it('should return an instance of Artista', () => {
    expect(artista1).to.be.instanceOf(Artista);
  });
});

describe('Artista constructor', () => {
  it('should return the correct atributtes', () => {
    expect(artista1.getNombre()).to.be.equal('Artista 1');
    expect(artista1.getOyentesMensuales()).to.be.equal(1000);
    expect(artista1.getDiscografia()).to.be.eql([album1]);
  });
});

// constructor de clase Artista falla si oyentesMensuales es negativo
describe('Artista constructor', () => {
  it('should throw an error if the oyentesMensuales is negative', () => {
    expect(() => new Artista('Artista', -1, [album1])).to.throw('El número de oyentes mensuales debe ser un número entero positivo');
  });
})

// Constructor clase BibliotecaMusical
describe('Constructor BibliotecaMusical', () => {
  it('should return an instance of BibliotecaMusical', () => {
    expect(new BibliotecaMusical([])).to.be.instanceOf(BibliotecaMusical);
  });
});

// crear objeto BibliotecaMusical y comprobar que se crea correctamente
const biblioteca1 = new BibliotecaMusical([artista1]);

describe('BibliotecaMusical constructor', () => {
  it('should return the correct atributtes', () => {
    expect(biblioteca1.getArtistas()).to.be.eql([artista1]);
  });
});

// // buscarArtista 
// describe('BibliotecaMusical buscarArtista', () => {
//   it('should return the correct artist', () => {
//     expect(biblioteca1.buscarArtista('Artista 1')).to.be.eql(artista1);
//   });
// })

// // buscarAlbum
// let arrayAlbumes = [album1];
// describe('BibliotecaMusical buscarAlbum', () => {
//   it('should return the correct album', () => {
//     expect(biblioteca1.buscarAlbum('Album 1')).to.be.eql(arrayAlbumes);
//   });
// })

// // buscarCancion
// let arrayCanciones = [cancion1];
// describe('BibliotecaMusical buscarCancion', () => {
//   it('should return the correct song', () => {
//     expect(biblioteca1.buscarCancion('Canción 1')).to.be.eql(arrayCanciones);
//   });
// })

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
    expect(biblioteca1.reproduccionesTotalAlbum('Album 1')).to.be.equal(100);
  });
})

// reproduccionesTotalAlbum error
describe('BibliotecaMusical reproduccionesTotalAlbum', () => {
  it('should return No se encontró el álbum', () => {
    expect(biblioteca1.reproduccionesTotalAlbum('Arbum')).to.be.equal('No se encontró el álbum');
  });
})