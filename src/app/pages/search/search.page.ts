import { Component, OnInit } from '@angular/core';
import { APIService, SearchableEntrySortableFields, SearchableSortDirection } from 'src/app/services/API.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  results = [];

  constructor(
    private apiService: APIService,
  ) { }

  ngOnInit() {}

  search(keyword) {
    
    const sort = {
      field: SearchableEntrySortableFields.phrase,
      direction: SearchableSortDirection.desc
    }
    this.apiService.SearchEntrys({
      or: [
        {
          phrase: {
            match: `${keyword}`
          }
        },
        {
          definition: {
            match: `${keyword}.*`
          }
        },
        {
          example: {
            match: `${keyword}.*`
          }
        },
      ]
    }, sort).then(results => {
      this.results = results.items;
    });
  }

}
