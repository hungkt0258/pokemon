import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApiServices } from 'src/app/services/api-services.service';
import { DetailPokemonDialogComponent } from '../home-page/detail-pokemon-dialog/detail-pokemon-dialog.component';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pageItemsLength: number = 0;
  pageSize: number = 20;
  arrPoke: any = [];
  pageList: any = [];
  page: number = 0;
  filterTextChanged = new Subject<string>();

  // pageEvent: PageEvent;

  constructor(private dialog: MatDialog, private api: ApiServices) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  async getPokemon() {
    await this.api.getPokemon(200, 10).subscribe((response: any) => {
      response.results.map((each: any) => {
        this.api.getDetailPokemon(each.name).subscribe((eachPoke: any) => {
          this.arrPoke.push(eachPoke);
        });
      });
      if (this.arrPoke.length > 0) {
        this.pageItemsLength = this.arrPoke.length;
        this.pageList = this.arrPoke.slice(0, 20);
      } else {
        setTimeout(() => {
          this.pageItemsLength = this.arrPoke.length;
          this.pageList = this.arrPoke.slice(0, 20);
        }, 200);
      }
    });
  }

  OnPageChange(event: any) {
    this.page = event.pageIndex;
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pageItemsLength) {
      endIndex = this.pageItemsLength;
    }
    this.pageList = this.arrPoke.slice(startIndex, endIndex);
  }

  openDialogPokemonDetail(dataPoke: any) {
    const dialog = this.dialog.open(DetailPokemonDialogComponent, {
      panelClass: 'detail-pokemon',
      data: dataPoke,
    });
  }

  searchPoke(event: any) {
    console.log(event.target.value);

    let eachPoke = [];
    if (event.target.value) {
      if (this.filterTextChanged.observers.length === 0) {
        this.filterTextChanged
          .pipe(debounceTime(300), distinctUntilChanged())
          .subscribe((filterQuery) => {
            eachPoke = this.arrPoke.filter((res: any) => {
              return res.name
                .trim()
                .toLowerCase()
                .match(filterQuery.toLowerCase());
            });
            this.pageList = eachPoke;
          });
      }
      this.filterTextChanged.next(event.target.value);
    } else {
      this.pageList = this.arrPoke.slice(0, 20);
    }
  }

  pagination(obj: any) {
    return obj.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
