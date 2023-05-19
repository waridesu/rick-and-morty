import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterService } from '../../services/api/character.service';
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { Character } from "../../interface/character";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [CharacterService],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  randomCharacter$: Observable<Character> = this.httpCharacter.getRandomCharacter();

  character: any[] = [];
  params = {} as any;

  constructor(private httpCharacter: CharacterService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters() {
    this.params.page += 1;

    this.httpCharacter.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.character.push(...res.results);
        // console.log(res.results);
        console.log(this.character);
      },
      error: () => {},
    });
  }
}
