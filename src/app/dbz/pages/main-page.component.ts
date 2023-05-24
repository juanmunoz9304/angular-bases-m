import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    constructor(private dbzService : DbzService){ }

    getCharacters() : ICharacter[] {
        return [...this.dbzService.characters];
    } 

    deleteCharacter(id: string) : void {
        this.dbzService.onDeleteCharacterByUID(id);
    }

    createCharacter(character : ICharacter) : void {
        this.dbzService.onNewCharacter(character);
    }
}