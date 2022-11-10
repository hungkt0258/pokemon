import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screen/home-page/home-page.module').then((m) => m.HomeModule),
  },
  {
    path: 'poke-list',
    loadChildren: () =>
      import('./screen/poke-list/poke-list.module').then(
        (m) => m.PokemonListModule
      ),
  },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
