import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-page-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailPokemonDialogComponent } from './detail-pokemon-dialog/detail-pokemon-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomePageComponent } from './home-page.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [HomePageComponent, DetailPokemonDialogComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgImageSliderModule,
  ],
  exports: [MatProgressSpinnerModule],
  entryComponents: [DetailPokemonDialogComponent],
})
export class HomeModule {}
