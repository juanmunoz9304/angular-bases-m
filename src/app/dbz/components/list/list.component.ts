import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<number> = new EventEmitter();

  @Input()
  public characerList : ICharacter[] = [
    {
      name : 'Trunks',
      power : 10
    }
  ]



  public onDeleteCharacter (index : number) : void {
    this.onDeleteId.emit(index);
  }
}
