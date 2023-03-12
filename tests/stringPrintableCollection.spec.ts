import 'mocha'; 
import { expect } from 'chai';
import { StringPrintableCollection } from '../src/ejercicio-lab/stringPrintableCollection';

// test para comprobar que es una instancia de NumericPrintableCollection
describe('StringPrintableCollection_constructor', () => {
  it('should create a StringPrintableCollection', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(stringPrintableCollection).to.be.instanceOf(StringPrintableCollection);
  });
})

describe('StringPrintableCollection_print', () => {
  it('should return the representation in string of the strings of the collection separated by commas', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(stringPrintableCollection.print()).to.be.equal('a, b, c');
  });
})

// additem
describe('StringPrintableCollection_additem', () => {
  it('should add an item to the collection', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    stringPrintableCollection.addItem('d');
    expect(stringPrintableCollection.print()).to.be.equal('a, b, c, d');
  });
})

// getitem
describe('StringPrintableCollection_getitem', () => {
  it('should get an item from the collection', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(stringPrintableCollection.getitem(1)).to.be.equal('b');
  });
})

// getitem error
describe('StringPrintableCollection_getitem', () => {
  it('should throw an error when trying to get an item from the collection with an index out of bounds', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(() => stringPrintableCollection.getitem(4)).to.throw('Index out of bounds');
  });
})

// removeitem
describe('StringPrintableCollection_removeitem', () => {
  it('should remove an item from the collection', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    stringPrintableCollection.removeItem(1);
    expect(stringPrintableCollection.print()).to.be.equal('a, c');
  });
})

// removeitem error
describe('StringPrintableCollection_removeitem', () => {
  it('should throw an error when trying to remove an item from the collection with an index out of bounds', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(() => stringPrintableCollection.removeItem(4)).to.throw('Index out of bounds');
  });
})

// getnumberofitems
describe('StringPrintableCollection_getnumberofitems', () => {
  it('should get the number of items from the collection', () => {
    const stringPrintableCollection = new StringPrintableCollection(['a', 'b', 'c']);
    expect(stringPrintableCollection.getNumberOfItems()).to.be.equal(3);
  });
})

// constructor
describe('StringPrintableCollection_constructor', () => {
  it('should create a collection of strings', () => {
    const stringPrintableCollection = new StringPrintableCollection();
    expect(stringPrintableCollection.print()).to.be.equal('');
  });
})

