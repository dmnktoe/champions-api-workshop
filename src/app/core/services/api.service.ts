import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getChampions() {
    return this.httpClient
      .get('./data/champions.json')
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of('Champions konnten nicht geladen werden.')
        )
      );
  }
}
