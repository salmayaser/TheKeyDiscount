
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_apis/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword = 'name';
  data: any = [];
  selectedItem = ''
  search = ''

  //filter properties
  governates: any
  cities: any
  categories: any
  governateId: string = ' '
  cityId: string = ' '
  categoryId: string = ' '


  constructor(public _apis: ApiService, public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.getSearchOptions()
    this.getGovernates()
    this.getCategories()


  }


  selectEvent(item: any) {
    this.selectedItem = item.id
    this.router.navigate([`/item/${this.selectedItem}`])
  }


  onChangeSearch(val: string) {
    this.search = val
  }

  onFocused(e: any) {
    // do something when input is focused
  }
  onSearch() {
    if (this.selectedItem != '') {
      this.router.navigate([`/item/${this.selectedItem}`])
    } else {
      this.router.navigate(['/home'], { queryParams: { search: this.search } })
    }


  }

  getSearchOptions() {
    this._apis.getClients().subscribe((data: any) => {
      for (let d of data) {
        this.data.push({ id: d.id, name: d.companyName })

      }
    }
    )
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getGovernates() {
    this._apis.getGoverns().subscribe((governs) => {
      this.governates = governs
      console.log(this.governates)
    })
  }
  getCities() {
    this._apis.getCities(this.governateId).subscribe((governs) => {
      this.cities = governs
      console.log(this.cities)
    })
  }
  getCategories() {
    this._apis.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories)
    })
  }
  onFilter() {
    this.router.navigate(['/home'], { queryParams: { area: this.cityId, category: this.categoryId } })
  }

  ngOnInit(): void {
  }

}
