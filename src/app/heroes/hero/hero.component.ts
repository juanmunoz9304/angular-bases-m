import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name : string = 'iron Man';
  public age : number = 45;
  public flagAge : boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeNameHero():void{
    this.name = 'Spidy'
  }
  changeAgeHero():void{
    this.flagAge = false;
    this.age = 32;
  }
}
