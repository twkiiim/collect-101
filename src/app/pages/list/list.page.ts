import { Component, OnInit } from '@angular/core';
import { APIService, GetEntryQuery, ListEntrysQuery, SearchableEntrySortableFields, SearchableSortDirection } from 'src/app/services/API.service';
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

  ionViewWillEnter() {
    if( this.showMineToggle ) this.fetchMine();
    else this.fetchAll();
  }

  onToggleStatusChange() {
    if( this.showMineToggle ) this.fetchMine();
    else this.fetchAll();
  }

  fetchAll() {
    const sort = {
      field: SearchableEntrySortableFields.createdAt,
      direction: SearchableSortDirection.desc
    }
    this.apiService.SearchEntrys(null, sort).then(entries => {
      this.entries = entries.items;
    })
  }

  fetchMine() {
    const sort = {
      field: SearchableEntrySortableFields.createdAt,
      direction: SearchableSortDirection.desc
    }
    this.apiService.SearchEntrys({
      userID: {
        eq: this.authService.getUserID(),
      }
    }, sort).then(entries => {
      this.entries = entries.items;
    })
  }

}
