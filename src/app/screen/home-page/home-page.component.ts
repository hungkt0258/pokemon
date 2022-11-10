// import { LoadingService } from './../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DetailPokemonDialogComponent } from './detail-pokemon-dialog/detail-pokemon-dialog.component';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  arrVideo = [
    {
      video: 'https://youtu.be/D0zYJ1RQ-fs', // Youtube url
    },
    {
      video: 'https://youtu.be/1roy4o4tqQM', // Youtube url
    },
    {
      video: 'https://youtu.be/bILE5BEyhdo', // Youtube url
    },
    {
      video: 'https://youtu.be/uBYORdr_TY8', // Youtube url
    },
  ];
  arrPoke: any = [];
  arrItems: any = [];
  loadingPoke: boolean = true;
  loadingItems: boolean = true;
  constructor(private api: ApiServices, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPokemon();
    this.getItemsPoke();
  }
  ngAfterViewInit() {}

  openDialogPokemonDetail(dataPoke: any) {
    const dialog = this.dialog.open(DetailPokemonDialogComponent, {
      panelClass: 'detail-pokemon',
      data: dataPoke,
    });
  }

  async getPokemon() {
    await this.api.getPokemon(10, 10).subscribe((response: any) => {
      response.results.map((each: any) => {
        this.api.getDetailPokemon(each.name).subscribe((eachPoke) => {
          this.arrPoke.push(eachPoke);
        });
      });
    });
  }

  async getItemsPoke() {
    await this.api.getItemsPokemon(10, 10).subscribe((response: any) => {
      response.results.map((each: any) => {
        this.api.getDetailItems(each.name).subscribe((eachPoke: any) => {
          this.arrItems.push(eachPoke);
        });
      });
    });
  }
}
