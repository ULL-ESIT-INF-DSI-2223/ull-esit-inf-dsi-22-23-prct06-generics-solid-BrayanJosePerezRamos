import {expect} from 'chai';
import 'mocha';
import {ElementsList} from '../src/ejercicio-2/elementsList';

// ----------------------- TESTS CON NUMBERS -----------------------
describe('ElementsList constructor', () => {
  it('should create poperly the list', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.getList()).to.be.eql([ 1, 2, 3, 4, 5 ]);
  });
})

describe('ElementsList listLenght()', () => {
  it('should calculate the length of the list', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.listLenght()).to.be.equal(5);
  });
})


describe('ElementsList append', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.append([ 6, 7, 8, 9, 10 ])).to.be.eql([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  });
})

describe('ElementsList concatenate', () => {
  it('should return the list with the new elements', () => {
    const list2 = new ElementsList<number>([]);
    expect(list2.concatenate([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]))
                               .to.be.eql([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]);
  });
})

describe('ElementsList filter', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.filter((element) => element > 3)).to.be.eql([ 4, 5 ]);
  });
})

describe('ElementsList map', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.map((element) => element * 2)).to.be.eql([ 2, 4, 6, 8, 10 ]);
  });
})

describe('ElementsList reduce', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    expect(list.reduce((acumulator, element) => acumulator + element, 0)).to.be.equal(15);
  });
})

describe('ElementsList reverse', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList<number>([ 1, 2, 3, 4, 5 ]);
    expect(list.reverse()).to.be.eql([ 5, 4, 3, 2, 1 ]);
  });
})

describe('ElementsList forEach', () => {
  it('should return the list with the new elements', () => {
    let result = 0;
    const list = new ElementsList([ 1, 2, 3, 4, 5 ]);
    list.forEach((element) => result += element);
    expect(result).to.be.equal(15);
  });
})

// ----------------------- TESTS CON STRINGS -----------------------
describe('ElementsList constructor', () => {
  it('should create poperly the list', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.getList()).to.be.eql([ 'a', 'b', 'c', 'd', 'e' ]);
  });
})

describe('ElementsList listLenght()', () => {
  it('should calculate the length of the list', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.listLenght()).to.be.equal(5);
  });
})

describe('ElementsList append', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.append([ 'f', 'g', 'h', 'i', 'j' ])).to.be.eql([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]);
  });
})

describe('ElementsList concatenate', () => {
  it('should return the list with the new elements', () => {
    const list2 = new ElementsList<string>([]);
    expect(list2.concatenate([ [ 'a', 'b', 'c', 'd', 'e' ], [ 'f', 'g', 'h', 'i', 'j' ], [ 'k', 'l', 'm', 'n', 'o' ] ]))
                               .to.be.eql([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' ]);
  });
})

describe('ElementsList filter', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.filter((element) => element > 'c')).to.be.eql([ 'd', 'e' ]);
  });
})

describe('ElementsList map', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.map((element) => element + element)).to.be.eql([ 'aa', 'bb', 'cc', 'dd', 'ee' ]);
  });
})

describe('ElementsList reduce', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.reduce((acumulator, element) => acumulator + element, '')).to.be.equal('abcde');
  });
})

describe('ElementsList reverse', () => {
  it('should return the list with the new elements', () => {
    const list = new ElementsList<string>([ 'a', 'b', 'c', 'd', 'e' ]);
    expect(list.reverse()).to.be.eql([ 'e', 'd', 'c', 'b', 'a' ]);
  });
})

describe('ElementsList forEach', () => {
  it('should return the list with the new elements', () => {
    let result = '';
    const list = new ElementsList([ 'a', 'b', 'c', 'd', 'e' ]);
    list.forEach((element) => result += element);
    expect(result).to.be.equal('abcde');
  });
})