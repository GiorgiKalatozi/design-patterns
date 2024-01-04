class Movie {
  public title: string;
  public actors: Actor[] = [];

  constructor(title: string) {
    this.title = title;
  }

  public addActor(actor: Actor) {
    this.actors.push(actor);
    actor.movies.push(this); // Add movie to actor's list
  }
}

class Actor {
  public name: string;
  public movies: Movie[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

const matrix = new Movie("The Matrix");
const keanu = new Actor("Keanu Reeves");
matrix.addActor(keanu);

console.log(`Keanu has starred in ${keanu.movies.length} movies`);
