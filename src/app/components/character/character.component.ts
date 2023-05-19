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
  loading = false;
  page = 1;

  constructor(private httpCharacter: CharacterService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
    this.loadMoreData();
  }

  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight && !this.loading) {
      this.loadMoreData();
    }
  }

  loadMoreData() {
    this.loading = true;

    this.httpCharacter.getCharacters(this.page).subscribe((res: any) => {
      this.character = this.character.concat(...res.results); 
      this.page++; 
      this.loading = false; 
    });
  }

  getCharacters(event?: any) {
    this.params.page += 1;

    this.httpCharacter.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.character.push(...res.results);
      },
      error: (error: any) => {},
    });
  }
}
