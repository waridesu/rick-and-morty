import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [CharacterService],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character: any[] = [];
  params = {} as any;

  constructor(private httpCharacter: CharacterService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    this.params.page += 1;

    this.httpCharacter.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.character.push(...res.results);
        // console.log(res.results);
        console.log(this.character);
      },
      error: (error: any) => {},
    });
  }
}
