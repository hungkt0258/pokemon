import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private httpClient: HttpClient) {}

  getListPokemon(limit: any, offset: any): Observable<object> {
    let params;
    if (limit || offset) {
      params = `?limit=${limit}&offset=${offset}`;
    } else {
      params = '';
    }
    return this.httpClient.get(`/api/v2/ability/${params}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getGeneration(): Observable<object> {
    return this.httpClient.get(`/api/v2/generation`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getPokemon(limit: any, offset: any): Observable<object> {
    let params;
    if (limit || offset) {
      params = `?limit=${limit}&offset=${offset}`;
    } else {
      params = '';
    }
    return this.httpClient.get(`/api/v2/pokemon/${params}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getDetailPokemon(namePoke: any): Observable<object> {
    return this.httpClient.get(`/api/v2/pokemon/${namePoke}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getDetailItems(item: any): Observable<object> {
    return this.httpClient.get(`/api/v2/item/${item}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getItemsPokemon(limit: any, offset: any): Observable<object> {
    let params;
    if (limit || offset) {
      params = `?limit=${limit}&offset=${offset}`;
    } else {
      params = '';
    }
    return this.httpClient.get(`/api/v2/item/${params}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
