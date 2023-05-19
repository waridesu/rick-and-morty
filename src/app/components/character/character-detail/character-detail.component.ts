import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  characterId: string = '';
  character = null as any;
  episodes: any[] = [];
  loading = false; // Flag to track if new data is being loaded
  page = 1;

  constructor(
    private actRoute: ActivatedRoute,
    private httpCharacter: CharacterService
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.httpCharacter.getCharactersById(this.characterId).subscribe({
      next: (res: any) => {
        this.character = res;
        this.getEpisodes();
      },
      error: (error: any) => {},
    });
  }

  getEpisodes() {
    for (let url of this.character.episode) {
      this.httpCharacter.getByUrl(url).subscribe({
        next: (res: any) => {
          console.log(res);
          this.episodes.push(res);
        },
        error: (error: any) => {},
      });
    }
  }
}
