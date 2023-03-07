import 'mocha'; 
import { expect } from 'chai';
import { Ficha, Rejilla, Jugador, Conecta4 } from '../src/ejercicio2';

// constructor clase Ficha comprobar que se crea correctamente
let ficha1 = new Ficha('R');
describe('Ficha constructor', () => {
  it('should return an instance of Ficha', () => {
    expect(ficha1).to.be.instanceOf(Ficha);
  });
})

describe('Ficha constructor', () => {
  it('should return the correct atributtes', () => {
    expect(ficha1.getColor()).to.be.equal('R');
  });
}) 

// constructor clase Rejilla comprobar que se crea correctamente
let rejilla1 = new Rejilla();
describe('Rejilla constructor', () => {
  it('should return an instance of Rejilla', () => {
    expect(rejilla1).to.be.instanceOf(Rejilla);
  });
})

// constructor clase Jugador comprobar que se crea correctamente
let jugador1 = new Jugador('Jugador 1', 'R');
describe('Jugador constructor', () => {
  it('should return an instance of Jugador', () => {
    expect(jugador1).to.be.instanceOf(Jugador);
  });
})

describe('Jugador constructor', () => {
  it('should return the correct atributtes', () => {
    expect(jugador1.getNombre()).to.be.equal('Jugador 1');
    expect(jugador1.getColor()).to.be.equal('R');
  });
})

// constructor Jugador falla si color no es R o Y
describe('Jugador constructor', () => {
  it('should throw an error if the color is not R or Y', () => {
    expect(() => new Jugador('Jugador 1', 'A')).to.throw('Color inválido, debe ser R o Y');
  });
})

// constructor clase Conecta4 comprobar que se crea correctamente
let jugador2 = new Jugador('Jugador 2', 'Y');
let conecta41 = new Conecta4(jugador1, jugador2);
describe('Conecta4 constructor', () => {
  it('should return an instance of Conecta4', () => {
    expect(conecta41).to.be.instanceOf(Conecta4);
  });
})

describe('Conecta4 constructor', () => {
  it('should return the correct atributtes', () => {
    expect(conecta41.getJugadores()).to.be.eql([jugador1, jugador2]);
    expect(conecta41.getRejilla()).to.be.instanceOf(Rejilla);
  });
})