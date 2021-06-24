import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Champion } from '../../core/model/Champion';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-champions-gallery',
  templateUrl: './champions-gallery.component.html',
  styleUrls: ['./champions-gallery.component.scss']
})
export class ChampionsGalleryComponent implements OnInit {
  // @ts-ignore
  champions: Champion[];
  isLoading = false;
  term: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService
      .getChampions()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((champions) => {
        const resultArray = Object.keys(champions.data).map(index => {
          let champion = champions.data[index];
          return champion;
        })
        console.log(resultArray);
        this.champions = resultArray;
      })
  }
}
