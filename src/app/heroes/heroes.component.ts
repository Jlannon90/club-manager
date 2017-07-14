import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService){}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  goToDetailPage(clickedHero: Hero) {
    this.router.navigate(['heroes', clickedHero.id]);
  };
}
