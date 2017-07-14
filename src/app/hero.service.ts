import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HeroService {
  heroes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.heroes = database.list('heroes');

  }

  getHeroes() {
    return this.heroes;
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero);
  }

  getHeroById(heroId: string){
    return this.database.object('heroes/' + heroId);
  }

}
