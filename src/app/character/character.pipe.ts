import {Pipe, PipeTransform} from '@angular/core';
import { Character } from '../character-list/character';

@Pipe({
    name: 'character'
})
export class CharacterPipe implements PipeTransform {
    transform(characters: any, args?: any): any {
        return characters.filter((character: Character) =>
            character.name.toLowerCase().includes(args.toLowerCase())
        )
    }
}