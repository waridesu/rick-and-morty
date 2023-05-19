import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CharacterService } from '../../../services/api/character.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  characterId: string = '';
  character = null as any;
  episodes: any[] = [];
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
        // this.getEpisodes();
      },
      error: () => {},
    });
  }

//   getEpisodes() {
//     for (let url of this.character.episode) {
//       this.httpCharacter.getByUrl(url).subscribe({
//         next: (res: any) => {
//           console.log(res);
//           this.episodes.push(res);
//         },
//         error: (error: any) => {},
//       });
//     }
//   }
}
