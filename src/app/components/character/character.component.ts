import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/api/character.service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map, Observable } from "rxjs";
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
  randomCharacter$: Observable<Character> = this.route.data.pipe(map(data => data['character']))

  character: any[] = [];
  params = {} as any;
  loading = false;
  page = 1;

  constructor(private route: ActivatedRoute, private httpCharacter: CharacterService) {}

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

  getCharacters() {
    this.params.page += 1;

    this.httpCharacter.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.character.push(...res.results);
      },
      error: () => {},
    });
  }

  generateCharacter(): void{
    this.randomCharacter$ = this.httpCharacter.getRandomCharacter();
  }
}
