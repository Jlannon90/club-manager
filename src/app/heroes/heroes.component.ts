import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private heroService: HeroService){}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  goToDetailPage(clickedHero) {
    this.router.navigate(['heroes', clickedHero.$key]);
  };
}
