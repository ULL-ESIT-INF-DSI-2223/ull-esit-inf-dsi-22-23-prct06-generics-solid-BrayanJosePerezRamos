import 'mocha'; 
import { expect } from 'chai';
import { NumericPrintableCollection } from '../src/ejercicio-lab/numericPrintableCollection';

// test para comprobar que es una instancia de NumericPrintableCollection
describe('NumericPrintableCollection_constructor', () => {
  it('should create a NumericPrintableCollection', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericPrintableCollection).to.be.instanceOf(NumericPrintableCollection);
  });
})

describe('NumericPrintableCollection_print', () => {
  it('should return the representation in string of the numbers of the collection separated by commas', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericPrintableCollection.print()).to.be.equal('1, 2, 3');
  });
})

// additem
describe('NumericPrintableCollection_additem', () => {
  it('should add an item to the collection', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    numericPrintableCollection.addItem(4);
    expect(numericPrintableCollection.print()).to.be.equal('1, 2, 3, 4');
  });
})

// getitem
describe('NumericPrintableCollection_getitem', () => {
  it('should get an item from the collection', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericPrintableCollection.getitem(1)).to.be.equal(2);
  });
})

// getitem error
describe('NumericPrintableCollection_getitem', () => {
  it('should throw an error when trying to get an item from the collection with an index out of bounds', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(() => numericPrintableCollection.getitem(4)).to.throw('Index out of bounds');
  });
})

// removeitem
describe('NumericPrintableCollection_removeitem', () => {
  it('should remove an item from the collection', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    numericPrintableCollection.removeItem(1);
    expect(numericPrintableCollection.print()).to.be.equal('1, 3');
  });
})

// removeitem error
describe('NumericPrintableCollection_removeitem', () => {
  it('should throw an error when trying to remove an item from the collection with an index out of bounds', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(() => numericPrintableCollection.removeItem(4)).to.throw('Index out of bounds');
  });
})

// getnumberofitems
describe('NumericPrintableCollection_getnumberofitems', () => {
  it('should get the number of items from the collection', () => {
    const numericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
    expect(numericPrintableCollection.getNumberOfItems()).to.be.equal(3);
  });
})

// constructor
describe('NumericPrintableCollection_constructor', () => {
  it('should create an empty collection', () => {
    const numericPrintableCollection = new NumericPrintableCollection();
    expect(numericPrintableCollection.print()).to.be.equal('');
  });
})

