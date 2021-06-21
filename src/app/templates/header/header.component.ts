import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from './../../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  champions: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService
      .getChampions()
      .pipe(finalize(() => {
      }))
      .subscribe((champions) => {
        console.log(champions);
        this.champions = champions;
      })
  };
}
