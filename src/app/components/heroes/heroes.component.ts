import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from 'src/app/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
