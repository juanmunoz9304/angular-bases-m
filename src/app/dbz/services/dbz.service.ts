import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters : ICharacter[] = [
        {
            name : 'Krilin',
            power : 1000
        },
        {
            name : 'Goku',
            power : 9500
        },
        {
            name : 'Vegeta',
            power : 7000
        }
    ];

    public onNewCharacter (character : ICharacter) : void {
        console.log(character);
        this.characters.push(character);
    }

    public onDeleteCharacter(index : number) : void {
        this.characters.splice(index,1);
    }

    // constructor() { }
    
}