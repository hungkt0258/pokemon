import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonListRoutingModule } from "./poke-list-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { PokeListComponent } from "./poke-list.component";

@NgModule({
  declarations: [PokeListComponent],
  imports: [
    PokemonListRoutingModule,
    CommonModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
})
export class PokemonListModule {}
