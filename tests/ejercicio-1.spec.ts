import {expect} from 'chai';
import 'mocha';
import {MovieCollection} from '../src/ejercicio-1/movieCollection';
import {Movie} from '../src/ejercicio-1/movie';
import {SerieCollection} from '../src/ejercicio-1/serieCollection';
import {Serie} from '../src/ejercicio-1/serie';
import {DocumentalCollection} from '../src/ejercicio-1/documentalCollection';
import {Documental} from '../src/ejercicio-1/documental';

// ------------------ MOVIE COLLECTION ------------------
const movie1 = new Movie('La vida es bella', [ 'Comedia' ], 1980, 8.6, 116);
const movie2 = new Movie('El padrino', [ 'Drama' ], 1972, 9.2, 175);
const movieCollection = new MovieCollection('Movie Collection', [ 'Comedia', 'Drama' ], 2, [ movie1, movie2 ]);

describe('MovieCollection constructor', () => {
  it('should create poperly the collection', () => {
    expect(movieCollection.getName).to.be.equal('Movie Collection');
    expect(movieCollection.getGenres).to.be.eql([ 'Comedia', 'Drama' ]);
    expect(movieCollection.getNumberOfElements).to.be.equal(2);
    expect(movieCollection.getStreamableList).to.be.eql([ movie1, movie2 ]);

  });
});

describe('MovieCollection searchByName', () => {
  it('should return an array with the movie', () => {
    expect(movieCollection.searchByName('La vida es')).to.be.eql([ movie1 ]);
  });
});

describe('MovieCollection searchByYear', () => {
  it('should return an array with the movie', () => {
    expect(movieCollection.searchByYear(1971)).to.be.eql([ movie2 ]);
  });
})

describe('MovieCollection searchByRating', () => {
  it('should return an array with the movie', () => {
    expect(movieCollection.searchByRating(8.0)).to.be.eql([ movie1 ]);
  });
})

describe('MovieCollection searchByGenre', () => {
  it('should return an array with the movie', () => {
    expect(movieCollection.searchByGenre('Comedia')).to.be.eql([ movie1 ]);
  });
})

describe('MovieCollection searchByDuration', () => {
  it('should return an array with the movie', () => {
    expect(movieCollection.searchByDuration(110)).to.be.eql([ movie1 ]);
  });
})


// ------------------ SERIE COLLECTION ------------------	
const serie1 = new Serie('Breaking Bad', [ 'Drama' ], 2008, 9.5, 5, 62);
const serie2 = new Serie('The Walking Dead', [ 'Drama' ], 2010, 8.2, 10, 103);

const serieCollection = new SerieCollection('Serie Collection', [ 'Drama' ], 2, [ serie1, serie2 ]);

describe('SerieCollection constructor', () => {
  it('should create poperly the collection', () => {
    expect(serieCollection.getName).to.be.equal('Serie Collection');
    expect(serieCollection.getGenres).to.be.eql([ 'Drama' ]);
    expect(serieCollection.getNumberOfElements).to.be.equal(2);
    expect(serieCollection.getStreamableList).to.be.eql([ serie1, serie2 ]);

  });
})

describe('SerieCollection searchByName', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchByName('Breaking')).to.be.eql([ serie1 ]);
  });
})

describe('SerieCollection searchByYear', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchByYear(2009)).to.be.eql([ serie1, serie2 ]);
  });
})

describe('SerieCollection searchByRating', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchByRating(8.0)).to.be.eql([ serie2 ]);
  });
})

describe('SerieCollection searchByGenre', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchByGenre('Drama')).to.be.eql([ serie1, serie2 ]);
  });
})

describe('SerieCollection searchBySeasons', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchBySeasons(6)).to.be.eql([ serie1 ]);
  });
})

describe('SerieCollection searchByEpisodes', () => {
  it('should return an array with the serie', () => {
    expect(serieCollection.searchByEpisodes(60)).to.be.eql([ serie1 ]);
  });
})

// ------------------ DOCUMENTAL COLLECTION ------------------
const documental1 = new Documental('The Last Dance', [ 'Documental' ], 2020, 9.5, 23, 1);
const documental2 = new Documental('The Social Dilemma', [ 'Documental' ], 2018, 8.2, 102, 8);

const documentalCollection = new DocumentalCollection('Documental Collection', [ 'Documental' ], 2, [ documental1, documental2 ]);

describe('DocumentalCollection constructor', () => {
  it('should create poperly the collection', () => {
    expect(documentalCollection.getName).to.be.equal('Documental Collection');
    expect(documentalCollection.getGenres).to.be.eql([ 'Documental' ]);
    expect(documentalCollection.getNumberOfElements).to.be.equal(2);
    expect(documentalCollection.getStreamableList).to.be.eql([ documental1, documental2 ]);

  });
})

describe('DocumentalCollection searchByName', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByName('The Last')).to.be.eql([ documental1 ]);
  });
})

describe('DocumentalCollection searchByYear', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByYear(2019)).to.be.eql([ documental1, documental2 ]);
  });
})

describe('DocumentalCollection searchByRating', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByRating(8.0)).to.be.eql([ documental2 ]);
  });
})

describe('DocumentalCollection searchByGenre', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByGenre('Documental')).to.be.eql([ documental1, documental2 ]);
  });
})

describe('DocumentalCollection searchByDuration', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByDuration(20)).to.be.eql([ documental1 ]);
  });
})
describe('DocumentalCollection searchByEpisodes', () => {
  it('should return an array with the documental', () => {
    expect(documentalCollection.searchByEpisodes(1)).to.be.eql([ documental1 ]);
  });
})

