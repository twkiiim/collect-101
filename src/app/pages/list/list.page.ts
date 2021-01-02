import { Component, OnInit } from '@angular/core';
import { APIService, GetEntryQuery, ListEntrysQuery } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  entries = [];
  showMineToggle = false;

  constructor(
    private authService: AuthService,
    private apiService: APIService,
  ) { }

  ngOnInit() {
    if( this.showMineToggle ) this.fetchMine();
    else this.fetchAll();
  }

  onToggleStatusChange() {
    if( this.showMineToggle ) this.fetchMine();
    else this.fetchAll();
  }

  fetchAll() {
    this.apiService.ListEntrys().then(entries => {
      this.entries = entries.items;
    })
  }

  fetchMine() {
    this.apiService.ListEntrys({
      userID: {
        eq: this.authService.getUserID(),
      }
    }).then(entries => {
      this.entries = entries.items;
    })
  }

}
