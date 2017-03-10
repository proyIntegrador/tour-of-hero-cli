import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service'


@Component({
  moduleId: module.id,
  selector: 'material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css']
})
export class MaterialDesignComponent implements OnInit {
  //heroes: Hero[] = [];
  hero: Hero;
  selectedOption: number;
  selected: boolean = false;
  disabled: boolean = false;
  answer: string;
  ages = [11, 22, 31];

  constructor(
    private router: Router,
    private heroService: HeroService
    ) { }  

  ngOnInit(): void {
    this.randomHero();
  }
  randomHero(): void {    
    let rndId: number = Math.floor(Math.random() * 10 + 11);
    this.heroService.getHero(rndId).then(hero => this.hero = hero);
    this.disabled = false;  
  }
  checkTrivia():void {
    if (this.selectedOption == this.hero.age) {
      this.answer = "okay";
    } else {
      this.answer = "wrong";
    }  
    this.selected = true;
    this.disabled = true;
  }

  

}
