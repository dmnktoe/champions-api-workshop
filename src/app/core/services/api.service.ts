import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://thingproxy.freeboard.io/fetch/https://dmnktoe.de/champions.json'

  constructor(private httpClient: HttpClient) {}

  getChampions() {
    return this.httpClient
      .get(this.apiUrl)
      .pipe(
        map((body: any) => body),
        catchError((err) =>
          of('Champions konnten nicht geladen werden.')
        )
      );
  }
}
