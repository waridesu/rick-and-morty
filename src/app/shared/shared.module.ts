import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../services/character.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [RouterModule],

  providers: [CharacterService],
})
export class SharedModule {}
