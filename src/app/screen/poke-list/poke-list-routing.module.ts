import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokeListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonListRoutingModule {}
