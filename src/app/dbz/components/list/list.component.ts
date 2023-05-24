import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  @Input()
  public characerList : ICharacter[] = [
    {
      name : 'Trunks',
      power : 10
    }
  ]



  public onDeleteCharacter (id : string) : void {
    this.onDeleteId.emit(id);
  }
}
