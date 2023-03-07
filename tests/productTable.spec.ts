import 'mocha'; 
import { expect } from 'chai';
import { productTable } from '../src/productTable';

// productTable(2) should return [[1, 2], [2, 4]]
describe('productTable(2)', () => {
  it('should return [[1, 2], [2, 4]] if given 2', () => {
    expect(productTable(2)).to.be.eql([[1, 2], [2, 4]]);
  });
})

// productTable(3) should return [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
describe('productTable(3)', () => {
  it('should return [[1, 2, 3], [2, 4, 6], [3, 6, 9]] if given 3', () => {
    expect(productTable(3)).to.be.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
})

// productTable(4) should return [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
describe('productTable(4)', () => {
  it('should return [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]] if given 4', () => {
    expect(productTable(4)).to.be.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
})

// productTable(1) should return [[1]]
describe('productTable(1)', () => {
  it('should return [[1]] if given 1', () => {
    expect(productTable(1)).to.be.eql([[1]]);
  });
})

// productTable(-1) should return undefined
describe('productTable(-1)', () => {
  it('should return undefined if given -1', () => {
    expect(productTable(-1)).to.be.undefined;
  });
})

// productTable(0) should return undefined
describe('productTable(0)', () => {
  it('should return undefined if given 0', () => {
    expect(productTable(0)).to.be.undefined;
  });
})

// productTable(1.5) should return undefined
describe('productTable(1.5)', () => {
  it('should return undefined if given 1.5', () => {
    expect(productTable(1.5)).to.be.undefined;
  });
})
