import { Component } from '@angular/core';

import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes by Andrew';
  heroes = HEROES;  
  selectedHero: Hero;  

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }  
}

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'JackJack'},
  {id: 13, name: 'Mr. Bombastic'},
  {id: 14, name: 'Magneta'},
  {id: 15, name: 'DeadPool'},
  {id: 16, name: 'Dynamo'},
  {id: 17, name: 'Gambito'},
  {id: 18, name: 'Buzz'},
  {id: 19, name: 'Batman'},
  {id: 20, name: 'Woody'}
];
