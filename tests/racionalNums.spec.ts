import 'mocha'; 
import { expect } from 'chai';
import { RacionalNums } from '../src/racionalNums';

// new RacionalNums(1, 2) should return { numerator: 1, denominator: 2 }
describe('RacionalNums', () => {
  it('should return { numerator: 1, denominator: 2 } if given 1, 2', () => {
    expect(new RacionalNums(1, 2)).to.be.eql({ numerator: 1, denominator: 2 });
  });
})

// new RationalNums(1, 0) should throw an error
describe('RacionalNums', () => {
  it('should throw an error if given 1, 0', () => {
    expect(() => new RacionalNums(1, 0)).to.throw('El denominador no puede ser 0');
  });
})

// new RacionalNums(1.5, 2) should throw an error
describe('RacionalNums', () => {
  it('should throw an error if given 1.5, 2', () => {
    expect(() => new RacionalNums(1.5, 2)).to.throw('El numerador y el denominador deben ser números enteros');
  });
})

// new RacionalNums(1, 2).getNumerator() should return 1
describe('RacionalNums getNumerator()', () => {
  it('should return 1 if given 1, 2', () => {
    expect(new RacionalNums(1, 2).getNumerator()).to.be.eql(1);
  });
})

// new RacionalNums(1, 2).getDenominator() should return 2
describe('RacionalNums getDenominator()', () => {
  it('should return 2 if given 1, 2', () => {
    expect(new RacionalNums(1, 2).getDenominator()).to.be.eql(2);
  });
})

let num1 = new RacionalNums(4, 8);
num1.simplify();
describe('RacionalNums simplify', () => {
  it('should be { numerator: 1, denominator: 2 } if given 4, 8', () => {
    expect(num1).to.be.eql({ numerator: 1, denominator: 2 });
  });
})

let num2 = new RacionalNums(1, 2);
num2.invert();
describe('RacionalNums invert', () => {
  it('should be { numerator: 2, denominator: 1 } if given 1, 2', () => {
    expect(num2).to.be.eql({ numerator: 2, denominator: 1 });
  });
})

// new RacionalNums(1, 2).add(new RacionalNums(1, 3)) should return { numerator: 5, denominator: 6 }
describe('RacionalNums add', () => {
  it('should return { numerator: 5, denominator: 6 } if given 1, 2 and 1, 3', () => {
    expect(new RacionalNums(1, 2).add(new RacionalNums(1, 3))).to.be.eql({ numerator: 5, denominator: 6 });
  });
})

// new RacionalNums(1, 2).substract(new RacionalNums(1, 3)) should return { numerator: 1, denominator: 6 }
describe('RacionalNums substract', () => {
  it('should return { numerator: 1, denominator: 6 } if given 1, 2 and 1, 3', () => {
    expect(new RacionalNums(1, 2).substract(new RacionalNums(1, 3))).to.be.eql({ numerator: 1, denominator: 6 });
  });
})

// new RacionalNums(1, 2).multiply(new RacionalNums(1, 3)) should return { numerator: 1, denominator: 6 }
describe('RacionalNums multiply', () => {
  it('should return { numerator: 1, denominator: 6 } if given 1, 2 and 1, 3', () => {
    expect(new RacionalNums(1, 2).multiply(new RacionalNums(1, 3))).to.be.eql({ numerator: 1, denominator: 6 });
  });
})

// new RacionalNums(1, 2).divide(new RacionalNums(1, 3)) should return { numerator: 3, denominator: 2 }
describe('RacionalNums divide', () => {
  it('should return { numerator: 3, denominator: 2 } if given 1, 2 and 1, 3', () => {
    expect(new RacionalNums(1, 2).divide(new RacionalNums(1, 3))).to.be.eql({ numerator: 3, denominator: 2 });
  });
})

