import { ApiService } from './../_apis/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public _apis: ApiService, public _ActivatedRoute: ActivatedRoute, public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getCalientById(this.clientId)
  }
  isloading: boolean = true;
  clientId: string = this._ActivatedRoute.snapshot.params.id;
  client: any = {};

  getCalientById(id: string) {
    this._apis.getClientById(id).subscribe((data) => { this.client = data; this.isloading = false })
  }

  ngOnInit(): void {

  }

}
