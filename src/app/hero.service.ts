import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
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

  getHeroById(heroId: number){
    for (var i = 0; i <= HEROES.length - 1; i++) {
      if (HEROES[i].id === heroId) {
        return HEROES[i];
      }
    }
  }

}
