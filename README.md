# Práctica 6: Clases e interfaces genéricas. Principios SOLID

En esta [práctica](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/) se pide realizar una serie de ejercicios para poner en práctica los conceptos de clases e interfaces genéricas y aplicando los principios SOLID de diseño orientado a objetos. Este informe contiene una explicación de mis soluciones a los ejercicios propuestos que son los siguientes:

1. DSIflix
2. Implementación de una lista y sus operaciones
3. Ampliando la biblioteca musical (de la práctica 5)

Además de los ejercicios realizados en la hora de prácticas de la asignatura.

## Ejercicios
### 1. DSIflix

Se pide diseñar un modelo de datos para una plataforma de video en streaming. Mediante esta se puede acceder a un catalogo de peliculas, series y documentales. Para esto se pide implementar lo siguiente:

1. Definir una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.

2. Definir una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.

3. Se tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.

4. todo esto siempre tratando de aplicar los principios SOLID. Hay que prestar especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

Dado esto, mi implementación de la interfaz Streamable del punto 1 es la siguiente:

```typescript
interface StreamableInterface<T> {
  // atributos
  name: string;
  genres: string[];
  numberOfElements: number;
  streamableList: T[];

  // metodos
  searchByName(name: string): T[];
  searchByGenre(genre: string): T[];
  searchByYear(year: number): T[];
  searchByRating(rating: number): T[];
}
```

Se aprecia que la interfaz StreamableInterface es genérica, ya que se le pasa un tipo T que será el tipo de los elementos que contendrá la lista de elementos de la colección. Además, se definen los atributos y métodos que deberán implementar las clases que implementen esta interfaz, siendo estos `nombre` que es el nombre de la colección, `generos` que es un array de strings con los generos de la colección, `numeroDeElementos` que es el número de elementos que contiene la colección y `listaStreamable` que es la lista de elementos de la colección. Además, se definen los métodos de búsqueda que permiten obtener listados en función de diferentes términos de búsqueda: por año o por nombre, por genero o por puntuación.

Luego la clase abstracta BasicStreamableCollection que implementa dicha interfaz genérica es la siguiente:

```typescript
abstract class BasicStreamableCollection<T> implements StreamableInterface<T> {
  constructor(
    public name: string, 
    public genres: string[], 
    public numberOfElements: number,
    public streamableList: T[]
  ) {
    this.name = name;
    this.genres = genres;
    this.numberOfElements = numberOfElements;
    this.streamableList = streamableList;
  }

  get getName(): string {
    return this.name;
  }

  get getGenres(): string[] {
    return this.genres;
  }

  get getNumberOfElements(): number {
    return this.numberOfElements;
  }

  get getStreamableList(): T[] {
    return this.streamableList;
  }

  abstract searchByName(name: string): T[];

  abstract searchByGenre(genre: string): T[];

  abstract searchByYear(year: number): T[];

  abstract searchByRating(rating: number): T[];
}
```

Se aprecia que la clase abstracta `BasicStreamableCollection` implementa la interfaz `StreamableInterface`, por lo que debe implementar los métodos y atributos de la interfaz. Además, se define un constructor simplificado que recibe los atributos de la clase y se inicializan en el constructor. Además, se definen los métodos get para cada uno de los atributos de la clase. Por último, se definen los métodos de busqueda abstractos que permiten obtener listados en función de diferentes términos de búsqueda: por año o por nombre, por genero o por puntuación, estos métodos serán implementados en las clases que hereden de `BasicStreamableCollection`.

Por último, se extiende la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales. Para esto, se definen las clases `SerieCollection`, `MovieCollection` y `DocumentalCollection` que heredan de `BasicStreamableCollection` y que implementan los métodos de busqueda abstractos de la clase abstracta. Pero antes de esto se definen las clases `Series`, `Movies` y `Documental` que representan a los elementos de las colecciones. Estas clases son las siguientes:

```typescript
class Serie implements MediaInterface {
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public seasons: number,
    public episodes: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.seasons = seasons;
    this.episodes = episodes;
  }
}

class Movie implements MediaInterface {
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public duration: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.duration = duration;
  }
}

class Documental implements MediaInterface {
  constructor(
    public name: string,
    public genres: string[],
    public year: number,
    public rating: number,
    public duration: number,
    public episodes: number
  ) {
    this.name = name;
    this.genres = genres;
    this.year = year;
    this.rating = rating;
    this.duration = duration;
    this.episodes = episodes;
  }
}
```

Se aprecia que las clases `Serie`, `Movie` y `Documental` implementan la interfaz `MediaInterface`, por lo que deben implementar los métodos y atributos de la interfaz. Además, se define un constructor simplificado que recibe los atributos de la clase y se inicializan en el constructor.

La interfaz MediaInterface es la siguiente:

```typescript
interface MediaInterface {
  name: string;
  genres: string[];
  year: number;
  rating: number;
  duration?: number;
  episodes?: number;
  seasons?: number;
}
```

Basicamente, la interfaz `MediaInterface` define los atributos que deben tener las clases `Serie`, `Movie` y `Documental`. Además, se define un constructor simplificado que recibe los atributos de la clase y se inicializan en el constructor.

Luego, se definen las clases `SerieCollection`, `MovieCollection` y `DocumentalCollection` que heredan de BasicStreamableCollection y que implementan los métodos de busqueda abstractos de la clase abstracta. Estas clases son las siguientes, empezando por la clase `SerieCollection`:

```typescript
class SerieCollection extends BasicStreamableCollection<Serie> {
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Serie[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  searchByName(name: string): Serie[] {
    return this.streamableList.filter((serie) => serie.name.includes(name));
  }

  searchByGenre(genre: string): Serie[] {
    return this.streamableList.filter((serie) => serie.genres.includes(genre));
  }

  searchByYear(year: number): Serie[] {
    // devolver una lista de series que tengan un año cercano al indicado en +/- 1 año
    return this.streamableList.filter((serie) => serie.year >= year - 1 && serie.year <= year + 1);
  }

  searchBySeasons(seasons: number): Serie[] {
    // devolver una lista de series que tengan un número de temporadas cercano al indicado en +/- 1
    return this.streamableList.filter((serie) => serie.seasons >= seasons - 1 && serie.seasons <= seasons + 1);
  }

  searchByEpisodes(episodes: number): Serie[] {
    // devolver una lista de series que tengan un número de episodios cercano al indicado en +/- 10
    return this.streamableList.filter((serie) => serie.episodes >= episodes - 10 && serie.episodes <= episodes + 10);
  }

  searchByRating(rating: number): Serie[] {
    // devolver una lista de series que tengan una puntuación cercana al indicado en +/- 1
    return this.streamableList.filter((serie) => serie.rating >= rating - 1 && serie.rating <= rating + 1);
  }
}
```

Esta clase extiende de `BasicStreamableCollection` y recibe como parámetro el tipo de dato que se va a almacenar en la lista de elementos de la colección. En este caso, se recibe el tipo `Serie` ya que la clase `SerieCollection` representa una colección de series. Por lo tanto, la lista de elementos de la colección es de tipo `Serie`. Además, se definen los métodos de busqueda que permiten obtener listados en función de diferentes términos de búsqueda.

El metodo `searchByName` permite obtener una lista de series que contengan el nombre indicado como parámetro. El metodo `searchByGenre` permite obtener una lista de series que contengan el género indicado como parámetro. El metodo `searchByYear` permite obtener una lista de series que estén en un año cercano al indicado en +/- 1 año. El metodo `searchBySeasons` permite obtener una lista de series que tengan un número de temporadas cercano al indicado en +/- 1. El metodo `searchByEpisodes` permite obtener una lista de series que tengan un número de episodios cercano al indicado en +/- 10. El metodo `searchByRating` permite obtener una lista de series que tengan una puntuación cercana al indicado en +/- 1.

La siguiente clase que se define es la clase `MovieCollection`:

```typescript
class MovieCollection extends BasicStreamableCollection<Movie> {
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Movie[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  searchByName(name: string): Movie[] {
    return this.streamableList.filter((movie) => movie.name.includes(name));
  }

  searchByGenre(genre: string): Movie[] {
    // devolver una lista de películas que contengan el género indicado
    return this.streamableList.filter((movie) => movie.genres.includes(genre));
  }

  searchByYear(year: number): Movie[] {
    // devolver las películas que tengan un año cercano al indicado en +/- 1 año
    return this.streamableList.filter((movie) => movie.year >= year - 1 && movie.year <= year + 1);
  }

  searchByRating(rating: number): Movie[] {
    // devolver las películas que tengan una puntuación cercana a la indicada en +/- 1
    return this.streamableList.filter((movie) => movie.rating >= rating - 1 && movie.rating <= rating + 1);
  }

  searchByDuration(duration: number): Movie[] {
    // devolver las películas que tengan una duración cercana a la indicada en +/- 10 minutos
    return this.streamableList.filter((movie) => movie.duration >= duration - 10 && movie.duration <= duration + 10);
  }
}
```

Esta clase extiende de `BasicStreamableCollection` y recibe como parámetro el tipo de dato que se va a almacenar en la lista de elementos de la colección. En este caso, se recibe el tipo `Movie` ya que la clase `MovieCollection` representa una colección de películas. Por lo tanto, la lista de elementos de la colección es de tipo `Movie`. Además, se definen los métodos de busqueda que permiten obtener listados en función de diferentes términos de búsqueda.

El metodo `searchByName` permite obtener una lista de películas que contengan el nombre indicado como parámetro. El metodo `searchByGenre` permite obtener una lista de películas que contengan el género indicado como parámetro. El metodo `searchByYear` permite obtener una lista de películas que estén en un año cercano al indicado en +/- 1 año. El metodo `searchByRating` permite obtener una lista de películas que tengan una puntuación cercana al indicado en +/- 1. El metodo `searchByDuration` permite obtener una lista de películas que tengan una duración cercana al indicado en +/- 10 minutos.

La última clase que se define es la clase `DocumentalCollection`:

```typescript
class DocumentalCollection extends BasicStreamableCollection<Documental> {
  constructor(name: string, genres: string[], numberOfElements: number, streamableList: Documental[]) {
    super(name, genres, numberOfElements, streamableList);
  }

  public searchByName(name: string): Documental[] {
    return this.streamableList.filter((documental) => documental.name.includes(name));
  }

  public searchByGenre(genre: string): Documental[] {
    return this.streamableList.filter((documental) => documental.genres.includes(genre));
  }

  public searchByYear(year: number): Documental[] {
    // devolver una lista de documentales que tengan +/- 1 año
    return this.streamableList.filter((documental) => documental.year >= year - 1 && documental.year <= year + 1);
  }

  public searchByRating(rating: number): Documental[] {
    // devolver una lista de documentales que tengan una puntuación cercana al indicado en +/- 1
    return this.streamableList.filter((documental) => documental.rating >= rating - 1 && documental.rating <= rating + 1);
  }

  public searchByDuration(duration: number): Documental[] {
    // devolver una lista de documentales que tengan una duración cercana al indicado en +/- 10
    return this.streamableList.filter((documental) => documental.duration >= duration - 10 && documental.duration <= duration + 10);
  }

  public searchByEpisodes(episodes: number): Documental[] {
    // devolver una lista de documentales que tengan un número de episodios cercano al indicado en +/- 1
    return this.streamableList.filter((documental) => documental.episodes >= episodes - 1 && documental.episodes <= episodes + 1);
  }
}
```

Esta clase extiende de `BasicStreamableCollection` y recibe como parámetro el tipo de dato que se va a almacenar en la lista de elementos de la colección. En este caso, se recibe el tipo `Documental` ya que la clase `DocumentalCollection` representa una colección de documentales. Por lo tanto, la lista de elementos de la colección es de tipo `Documental`. Además, se definen los métodos de busqueda que permiten obtener listados en función de diferentes términos de búsqueda.

El metodo `searchByName` permite obtener una lista de documentales que contengan el nombre indicado como parámetro. El metodo `searchByGenre` permite obtener una lista de documentales que contengan el género indicado como parámetro. El metodo `searchByYear` permite obtener una lista de documentales que estén en un año cercano al indicado en +/- 1 año. El metodo `searchByRating` permite obtener una lista de documentales que tengan una puntuación cercana al indicado en +/- 1. El metodo `searchByDuration` permite obtener una lista de documentales que tengan una duración cercana al indicado en +/- 10 minutos. El metodo `searchByEpisodes` permite obtener una lista de documentales que tengan un número de episodios cercano al indicado en +/- 1.

Se aprecian diferencias entre las clases que extienden de `BasicStreamableCollection` pues por ejemplo los documentales y las pelis no tienen el atributo de `Seasons` y por lo tanto no se puede buscar por temporadas. Por otro lado, las películas no tienen el atributo de `Episodes` y por lo tanto no se puede buscar por episodios.

### 2. Implementación de una lista y sus operaciones.

En este ejercicio se pide implementar una clase genérica que permita almacenar elementos de un tipo determinado. Además, se pide implementar las operaciones básicas de una lista: añadir, eliminar, buscar, etc. Todo esto sin utilizar las funciones de `Array.prototype` que ya vienen implementadas en el lenguaje, la unica excepción es el uso de `[]` para acceder a los elementos de la lista.

Las operaciones que debe implementar la clase son:

* Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
* Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
* Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
* Método length, que devuelve el número de elementos de la lista.
* Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
* Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
* Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
* Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.

Dado estos requerimientos, mi implementación de la clase `ElementsList` es la siguiente:

```typescript
class ElementsList<T> {
  private list: T[];
  private length: number;

  /**
   * Constructor de la clase ElemenList
   * @param list lista de elementos de tipo T
   */
  constructor(list: T[]) {
    this.list = list;
    this.length = 0;
    for (let i = 0; i < list.length; i++) {
      this.length++;
    }
  }

  /**
   * Método getList, que devuelve la lista de elementos
   * @returns la lista de elementos
   */
  getList(): T[] { return this.list; }
...
```
En el constructor se recibe como parámetro la lista de elementos de tipo `T` que se va a almacenar en la clase. Además, se inicializa el atributo `length` que representa el número de elementos de la lista. Para ello, se recorre la lista y se incrementa el atributo `length` en cada iteración para obtener el número de elementos de la lista sin utilizar la función `length` de `Array.prototype`.

El método `getList` devuelve la lista de elementos de tipo `T` que se almacenan en la clase.

Lo siguiente es las operaciones que debe implementar la clase, empezando por `append` que he implementado de la siguiente forma:

```typescript
  append(list: T[]): T[] {
    for (let i = 0; i < list.length; i++) {
      this.list[this.length] = list[i];
      this.length++;
    }
    return this.list;
  }
```

Basicamente lo que hice fue recorrer la lista que se recibe como parámetro y añadir cada elemento al final de la lista invocante. Para ello, se accede al elemento de la lista invocante que se encuentra en la posición `this.length` y se le asigna el elemento de la lista que se recibe como parámetro. Luego, se incrementa el atributo `length` para que apunte al siguiente elemento de la lista invocante.

El método `concatenate` se implementa de la siguiente forma:

```typescript
  concatenate(list: T[][]): T[] {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        this.list[this.length] = list[i][j];
        this.length++;
      }
    }
    return this.list;
  }
```

En este caso, se recibe como parámetro un array de listas de elementos de tipo `T`. Lo que se hace es recorrer el array de listas y para cada lista se recorre cada elemento y se añade al final de la lista invocante. Para ello, se accede al elemento de la lista invocante que se encuentra en la posición `this.length` y se le asigna el elemento de la lista que se recibe como parámetro. Luego, se incrementa el atributo `length` para que apunte al siguiente elemento de la lista invocante.

El método `filter` es el siguiente:

```typescript
  filter(predicate: (element: T) => boolean): T[] {
    let list: T[] = [];
    let length = 0;
    for (let i = 0; i < this.length; i++) {
      if (predicate(this.list[i])) {
        list[length] = this.list[i];
        length++;
      }
    }
    return list;
  }
```

En este caso, se recibe como parámetro una función que recibe un elemento de tipo `T` y retorna un valor booleano. Lo que se hace es recorrer la lista invocante y para cada elemento se invoca la función que se recibe como parámetro. Si el resultado de la función es `true` se añade el elemento a la lista que se va a retornar. Para ello, se accede al elemento de la lista que se va a retornar que se encuentra en la posición `length` y se le asigna el elemento de la lista invocante. Luego, se incrementa el atributo `length` para que apunte al siguiente elemento de la lista que se va a retornar.

El método `listLength` se ha implementado de la siguiente forma:

```typescript
  listLenght(): number {
    return this.length;
  }
```

Lo unico que hace este método es retornar el atributo `length` de la clase que almacena el número de elementos de la lista.

El método `map` lo implementé de esta forma:

```typescript
  map(func: (element: T) => T): T[] {
    let list: T[] = [];
    for (let i = 0; i < this.length; i++) {
      list[i] = func(this.list[i]);
    }
    return list;
  }
```

Basicamente lo que hago es recorrer la lista invocante y para cada elemento se invoca la función que se recibe como parámetro. El resultado de la función se asigna al elemento de la lista que se va a retornar que se encuentra en la posición `i`.

El método `reduce` se implementó de la siguiente forma:

```typescript
  reduce(func: (acumulator: T, element: T) => T, acumulator: T): T {
    for (let i = 0; i < this.length; i++) {
      acumulator = func(acumulator, this.list[i]);
    }
    return acumulator;
  }
```
Lo que hace este método es recorrer la lista invocante y para cada elemento se invoca la función que se recibe como parámetro. El resultado de la función se asigna al acumulador que se recibe como parámetro. Al finalizar el recorrido de la lista, se retorna el acumulador.

Lo siguiente es implementar el método `reverse`:

```typescript
  reverse(): T[] {
    let list: T[] = [];
    for (let i = 0; i < this.length; i++) {
      list[i] = this.list[this.length - i - 1];
    }
    return list;
  }
```

Simplemente lo que hace este método es recorrer la lista invocante y para cada elemento se asigna el elemento de la lista invocante que se encuentra en la posición `this.length - i - 1`. Esto se hace para que el elemento de la lista que se va a retornar se encuentre en la posición inversa a la posición del elemento de la lista invocante.

Por ultimo el método `forEach`:

```typescript
  forEach(func: (element: T) => void): void {
    for (let i = 0; i < this.length; i++) {
      func(this.list[i]);
    }
  }
```

Lo que hace este método es recorrer la lista invocante y para cada elemento se invoca la función que se recibe como parámetro.

Con esto ya se tiene implementada la clase `List` que permite realizar las operaciones de las listas de forma genérica. Se han realizado test con distintos tipos como `number`, `string` estos se pueden encontrar en el directorio `test` del repositorio.

### 3. Ampliando la biblioteca musical

En este ejercicio se trabajará sobre la biblioteca musical que se implementó en la práctica anterior, lo primero es tratar de cumplir los principios SOLID. Luego se introducirán algunas mejoras, que son las siguientes:

* Ahora, la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.

* Además, ahora deberá hacer que la discografía sea una clase genérica. En algún punto de su código deberá concretar esta clase genérica indicando que la discografía puede ser una colección de discos, una colección de singles o una colección de discos y singles.

Para estos cambios, lo primero es que se ha separado el codigo en distintos ficheros para cada clase y interfaz. Luego, se ha creado una clase `Discografia` que es la que contiene la colección de discos y singles. Esta clase es genérica y se le pasa como parámetro el tipo de la colección que se va a almacenar. La implementación de esta clase es la siguiente:

```typescript
class Discografia<T> {
  private discografia: T[];

  constructor(discografia: T[]) { this.discografia = discografia; }

  getDiscografia(): T[] { return this.discografia; }

  setDiscografia(discografia: T[]): void { this.discografia = discografia; }

  addAlbum(album: T): void { this.discografia.push(album); }
}
```

En esta clase se almacena la colección de discos y singles. Se ha implementado un constructor que recibe como parámetro la colección de discos y singles. También se han implementado los métodos `getDiscografia` y `setDiscografia` para obtener y modificar la colección de discos y singles. Por ultimo, se ha implementado el método `addAlbum` para añadir un disco o single a la colección.

Además se ha modificado el atributo `discografia` de la clase `Artista` para que sea acorde, quedando asi el constructor:

```typescript
    constructor(
    private nombre: string, 
    private oyentesMensuales: number, 
    public discografia: Discografia<Album | Single> ) {
    if (oyentesMensuales <= 0 || oyentesMensuales % 1 !== 0) {
      throw new Error('El número de oyentes mensuales debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }
```

Se ve que ahora el atributo `discografia` es de tipo `Discografia<Album | Single>`. Esto permite que la discografia pueda contener tanto discos como singles o ambos.

La clase `Album` ya se habia implementado en la práctica anterior, por lo que no se ha modificado y es la siguiente:

```typescript
class Album {
  private readonly nombre: string;
  private readonly year: number;
  private canciones: Cancion[];

  /**
   * 
   * @param nombre nombre del álbum de música
   * @param year 
   * @param canciones 
   */
  constructor(nombre: string, year: number, canciones: Cancion[]) {
    // si el año es negativo o no es un entero lanza un error
    if (year <= 0 || year % 1 !== 0) {
      throw new Error('El año del disco debe ser un número entero positivo');
    }
    this.nombre = nombre;
    this.year = year;
    this.canciones = canciones;
  }

  /**
   * getter del nombre del álbum de música
   * @returns el nombre del álbum de música
   */
  getNombre(): string { return this.nombre; }

  /**
   * getter del año del álbum de música
   * @returns año del álbum de música
   */
  getYear(): number { return this.year; }

  /**
   * getter de las canciones del álbum de música
   * @returns canciones del álbum de música
   */
  getCanciones(): Cancion[] { return this.canciones; }

  /**
   * setter de las canciones del álbum de música para modificarlas
   * @param canciones canciones del álbum de música
   */
  setCanciones(canciones: Cancion[]): void { this.canciones = canciones; }

  /**
   * getter de la duración total del álbum de música
   * @returns duración total del álbum de música en segundos
   */
  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.canciones.forEach(cancion => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  /**
   * getter de los géneros del álbum de música
   * @returns Numero total de reproducciones del album
   */
  getReproduccionesTotal(): number {
    let reproduccionesTotal = 0;
    this.canciones.forEach(cancion => {
      reproduccionesTotal += cancion.getReproducciones();
    });
    return reproduccionesTotal;
  }
}
```

La clase `Single` es la que se ha implementado para esta práctica y es la siguiente:

```typescript
class Single{
  private nombre: string;
  private year: number;
  private cancion: Cancion[];

  constructor(nombre: string, year: number, cancion: Cancion[]) {
    // si el año es negativo o no es un entero lanza un error
    if (year <= 0 || year % 1 !== 0) {
      throw new Error('El año del disco debe ser un número entero positivo');
    }
    // comprobar que las canciones del array contienen el nombre de la primera
    let nombreCancion = cancion[0].getNombre();
    cancion.forEach(cancion => {
      if (!cancion.getNombre().includes(nombreCancion) || cancion.getNombre() === nombreCancion) {
        throw new Error('El nombre de las canciones del Single debe contener el nombre del Single y no puede ser igual');
      }
    });
    this.nombre = nombre;
    this.year = year;
    this.cancion = cancion;
  }

  getNombre(): string { return this.nombre; }

  getYear(): number { return this.year; }

  getCanciones(): Cancion[] { return this.cancion; }

  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.cancion.forEach(cancion => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  getReproduccionesTotal(): number {
    let reproduccionesTotal = 0;
    this.cancion.forEach(cancion => {
      reproduccionesTotal += cancion.getReproducciones();
    });
    return reproduccionesTotal;
  }
}
```

En esta clase se ha implementado un constructor que recibe como parámetros el nombre, el año y la canción del single. También se han implementado los métodos `getNombre`, `getYear`, `getCanciones`, `getDuracionTotal` y `getReproduccionesTotal` para obtener los atributos de la clase.

Cabe resaltar que en el constructor el array cancion puede contener varias versiones del single, por lo que se comprueba que el nombre de cada canción contiene el nombre del single y que no es igual al nombre del single. De esta forma por ejemplo el nombre del single puede ser `Havana` y las canciones pueden ser `Havana (feat. Young Thug)`, `Havana (feat. Young Thug) [Remix]` pero no de nuevo `Havana`

Por ultimo la calse `BibliotecaMusical` solo se ha modificado para adaptarse a los cambios realizados en la clase `Artista`, en cuanto a su diseño o estructura en general no ha cambiado, esta se puede ver en el fichero correspondiente.

## Ejercicios de la clase práctica
### Printable collection
Se piden una serie de ejercicio a implementar, el primero de ellos es implementar una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.

La cual he implementado de la siguiente manera:

```typescript
export interface CollectableInterface<T> {
  addItem(item: T): void;
  getitem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}
```

Basicamente es eso, una interfaz generica que define los métodos que debe implementar cualquier clase que quiera implementarla con los metodos que se piden.

Lo siguiente es implementar una interfaz genérica 'Printable' con los siguientes métodos, los cuales deberá definir toda clase que desee implementar dicha interfaz: print.

La implementacion ha sido esta:
  
```typescript
export interface PrintableInterface<T> {
  print(): string;
}
```

Para acabar la primera mitad de los ejercicios se pide implementar una clase abstracta genérica 'PrintableCollection' que implemente las interfaces genéricas 'Collectable' y 'Printable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras que el método print de 'Printable' será abstracto, de modo que aquellas clases que extiendan a 'PrintableCollection' tengan que implementarlo obligatoriamente.

La implementacion de la clase abstracta ha sido la siguiente:

```typescript
abstract class PrintableCollection<T> implements CollectableInterface<T>, PrintableInterface<T> {
  constructor(protected items: T[] = []) { this.items = items; }

  addItem(item: T): void {
    this.items.push(item);
  }

  getitem(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items[index];
  }

  removeItem(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items.splice(index, 1)[0];
  } 

  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract print(): string;
}
```

Como se puede ver la clase `PrintableCollection` implementa las interfaces `CollectableInterface` y `PrintableInterface` y ademas es una clase abstracta, por lo que no se puede instanciar, solo se puede extender. En el constructor se recibe un array de elementos de tipo `T` que se almacenan en el atributo `items` de la clase. Los métodos `addItem`, `getitem`, `removeItem` y `getNumberOfItems` son los que se han implementado de la interfaz `CollectableInterface` y el método `print` es el que se ha implementado de la interfaz `PrintableInterface` y es el que se ha dejado como abstracto para que las clases que extiendan de `PrintableCollection` tengan que implementarlo.

Lo siguiente es extender la clase abstracta genérica 'PrintableCollection' escribiendo la subclase 'NumericPrintableCollection'. Esta clase deberá modelar una colección de elementos numéricos en la que el método print devolverá la representación en cadena de los números de la colección separados por comas.

La implementacion de la clase `NumericPrintableCollection` ha sido la siguiente:

```typescript
class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[] = []) { super(items); }

  print(): string {
    return this.items.join(', ');
  }
}
```

Simplemente se ha extendido la clase `PrintableCollection` y se ha implementado el método `print` para que devuelva los elementos de la colección separados por comas utilizando el método `join` de los arrays que recibe como parámetro la cadena que se quiere utilizar para separar los elementos.

Por ultimo, hay que implementar una clase 'StringPrintableCollection' cuyo método print devuelva una única cadena con la concatenación de todas las cadenas de la colección separadas por comas. Que es basicamente lo mismo que se ha hecho en la clase `NumericPrintableCollection` pero con el tipo `string` en vez de `number`.

```typescript
class StringPrintableCollection extends PrintableCollection<string> {
  constructor(items: string[] = []) { super(items); }

  print(): string {
    return this.items.join(', ');
  }
}
```

Es basicamente lo mismo, incluso el método `print` es el mismo que en la clase `NumericPrintableCollection`, solo que en este caso se ha cambiado el tipo de los elementos de la colección de `number` a `string`.

## Conclusiones
A lo largo de esta práctica he aprendido a utilizar las interfaces y las clases abstractas, que son dos conceptos muy importantes en la programación orientada a objetos. También he aprendido a utilizar los tipos genéricos en TypeScript, que son muy útiles para crear clases y métodos que puedan funcionar con cualquier tipo de dato. Se me ha hecho sencillo de entender el concepto, pues es similar a las plantillas de C++. También se ha intentado seguir los principios SOLID, aunque es dificil en algunas circunstancias o contraintuitivo.

Entre las dificultades encontradas está la amplitud de los ejercicios, y que debido al tiempo me ha sido imposible pulirlos del todo como me gustaría, también se hace cada vez mas dificultoso el manejo de todas las herramientas que se utilizan aunque se aprecia claramente su utilidad y a medida que se avanza en el curso se va mejorando en su manejo. Hay aspectos de las clases en TypeScript a los que aun no me acostumbro y son utiles como los constructores simplificados, que son muy útiles para inicializar los atributos de la clase. También me cuesta un poco entender el concepto y utilidad de las iterfaces, pero creo haberlo aplicado correctamente en esta práctica.

## Referencias
1. [Guión de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)
2. [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
3. [Apuntes de la asignatura objetos clases e interfaces](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-objects-classes-interfaces.html)
4. [Apuntes de la asignatura clases e interfaces genéricas](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-generics.html)
5. [Apuntes de la asignatura principios SOLID](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-solid.html)


