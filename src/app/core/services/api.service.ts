import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://api.jsonbin.io/b/60d0bc468a4cd025b7a271b9'

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
