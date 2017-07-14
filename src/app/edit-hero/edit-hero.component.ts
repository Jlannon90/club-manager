import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss'],
  providers: [HeroService]
})
export class EditHeroComponent implements OnInit {
  @Input() selectedHero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  beginUpdatingHero(heroToUpdate){
    this.heroService.updateHero(heroToUpdate);
  }
}
