
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://pixelserver-001-site5.itempurl.com"
  lang = "en";
  searchKeyword = '';

  constructor(public _http: HttpClient) {

  }

  getClients() {
    return this._http.get(`${this.url}/${this.lang}/Clients/GetAllClients`)
  }
  search(search: string) {
    return this._http.get(`${this.url}/${this.lang}/Clients/search?CompanyName=${search}`)
  }
  getClientById(id: string) {
    return this._http.get(`http://pixelserver-001-site5.itempurl.com/en/Clients/GetClientDetails?clientId=${id}&include=Branches,Addresses`)
  }
  getGoverns() {
    return this._http.get(`${this.url}/${this.lang}/Governate/GetAllGovernateByCountryId?countryId=d519b63e-0058-453f-576a-08d8d7084aea`)
  }
  getCities(governId: string) {
    return this._http.get(`${this.url}/${this.lang}/City/GetAllCityByGovernateId?governateId=${governId}`)
  }
  getCategories() {
    return this._http.get(`${this.url}/${this.lang}/Category/GetAllCategories`)

  }
  filter(categoryId: string, cityId: string) {
    return this._http.get(`${this.url}/${this.lang}/Clients/GetAllClientsByCityIdAndCategoryId?cityId=${cityId}&categoryId=${categoryId}`)
  }
  sendEmail(userName: string, email: string, phoneNumber: string) {
    return this._http.get(`${this.url}/${this.lang}/AppUser/SendEmailWhenAddUser?UserName=${userName}&Email=${email}&PhoneNumber=${phoneNumber}`)
  }



}
