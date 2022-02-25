import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor() {}

  ngOnInit(): void {}
}
