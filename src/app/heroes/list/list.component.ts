import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroesList : string[] = [
    'Spidy',
    'Iron Man',
    'Hulk',
    'Thor'
  ]

  public deletedHero? : string = '';

  deleteLastHero() : void {
    this.deletedHero = this.heroesList.pop();
  }
}
