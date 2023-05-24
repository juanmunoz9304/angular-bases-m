import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters : ICharacter[] = [
        {
            id: v4(),
            name : 'Krilin',
            power : 1000
        },
        {
            id: v4(),
            name : 'Goku',
            power : 9500
        },
        {
            id: v4(),
            name : 'Vegeta',
            power : 7000
        }
    ];

    public onNewCharacter (character : ICharacter) : void {
        const newCharacter = {
            ...character,
            id: v4()
        }
        this.characters.push(newCharacter);
    }

    // public onDeleteCharacter(index : number) : void {
    //     this.characters.splice(index,1);
    // }
    public onDeleteCharacterByUID(id : string) : void {
        this.characters = this.characters.filter(character => character.id !== id);
    }

    // constructor() { }
    
}