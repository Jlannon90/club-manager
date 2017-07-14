import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() {
    return HEROES;
  }

  getHeroById(heroId: number){
    for (var i = 0; i <= HEROES.length - 1; i++) {
      if (HEROES[i].id === heroId) {
        return HEROES[i];
      }
    }
  }

}
