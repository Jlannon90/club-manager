import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [HeroService]
})
export class AdminComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, description: string, photo: string) {
    var newHero: Hero = new Hero(name, role, description, photo);
    this.heroService.addHero(newHero);
  }

}
