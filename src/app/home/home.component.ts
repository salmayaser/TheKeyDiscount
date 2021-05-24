import { Client } from '../_interfaces/client';
import { ApiService } from '../_apis/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allClients: Client[] = [];
  isloading: boolean = true;
  searchKeyword: any = this.route.snapshot.queryParams.search
  cityId: any = this.route.snapshot.queryParams.area
  categoryId: any = this.route.snapshot.queryParams.category

  constructor(public _apis: ApiService, public route: ActivatedRoute) {
    console.log(this.searchKeyword)
    this.getAllClients()
  }

  getAllClients() {
    if (this.searchKeyword) {
      this._apis.search(this.searchKeyword).subscribe((data: any) => {
        this.allClients = data;
        this.isloading = false
      })

    } else if (this.cityId || this.categoryId) {
      this._apis.filter(this.categoryId, this.cityId).subscribe((data: any) => { this.allClients = data; this.isloading = false })
    }
    else {
      this._apis.getClients().subscribe((data: any) => { this.allClients = data; this.isloading = false })
    }

  }



  ngOnInit(): void {



  }
}
