import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../services/character.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],

  providers: [CharacterService],
})
export class SharedModule {}
