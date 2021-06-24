import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/'

  constructor(private httpClient: HttpClient) {}

  getChampions() {
    return this.httpClient
      .get(this.apiUrl + 'champion.json')
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of('Champions konnten nicht geladen werden.')
        )
      );
  }

  getChampionsDetail(championName: { championId: string }) {
    return this.httpClient
      .get(this.apiUrl + 'champion/' + championName + '.json')
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of('Champion konnte nicht geladen werden.')
        )
      );
  }
}
