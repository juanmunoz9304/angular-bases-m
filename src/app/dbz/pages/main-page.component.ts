import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    constructor(public dbzService : DbzService){

    }
}