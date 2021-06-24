import { Component, OnInit } from '@angular/core';
import { Champion } from "../../core/model/Champion";
import { ApiService } from "../../core/services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { finalize } from "rxjs/operators";
// @ts-ignore
import flat from 'flat';

@Component({
  selector: 'app-champions-detail',
  templateUrl: './champions-detail.component.html',
  styleUrls: ['./champions-detail.component.scss']
})
export class ChampionsDetailComponent implements OnInit {
  // @ts-ignore
  champion: Champion;
  title: any;
  isLoading = false;
  id: any;

  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle('League of Legends • ' + title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.id = params.id;
      if (this.id) {
        this.apiService
          .getChampionsDetail(this.id)
          .pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe((champion) => {
            console.log(champion.data)
            const test = flat(champion.data);
            console.log(test);
            this.champion = champion.data;
            this.setTitle({ title: this.champion.name });
          });
      }
    });
  }
}
