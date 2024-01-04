class Actor {
  public name: string;
  public movies: Movie[];

  constructor(name: string) {
    this.name = name;
    this.movies = [];
  }

  starInMovie(movie: Movie): void {
    this.movies.push(movie);
  }
}

class Movie {
  public title: string;
  public actors: Actor[] = [];

  constructor(title: string) {
    this.title = title;
  }

  public addActor(actor: Actor): void {
    this.actors.push(actor);
  }
}

const gameOfThrones = new Movie("Game of Thrones");
const aquaman = new Movie("Aquaman");

const kit = new Actor("Kit Harington");
const jason = new Actor("Jason Momoa");
const peter = new Actor("Peter Dinklage");

gameOfThrones.addActor(kit);
gameOfThrones.addActor(jason);
gameOfThrones.addActor(peter);

aquaman.addActor(jason);
