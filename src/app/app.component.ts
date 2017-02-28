import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;  
  selectedHero: Hero;
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }  
}
export class Hero {
  id: number;
  name: string;
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
