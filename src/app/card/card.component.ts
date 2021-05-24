import { ApiService } from './../_apis/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './../_interfaces/user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private Http: HttpClient, private route: ActivatedRoute, private _apis: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.params = params.sales
    });
  }

  params: any
  sucessful: boolean = false;
  failed: boolean = false;
  isloading: boolean = false

  userModel = new User("", "", "", "", "", false);
  fileSelect(event: any) {
    const file = event.target.files[0];
    this.userModel.Image = file
    console.log(file)
  }
  ResetForm() {
    this.userModel.UserName = ' ';
    this.userModel.Email = ' ';
    this.userModel.DateOfBirth = ' ';
    this.userModel.Image = ' ';
    this.userModel.phone = ' ';
    this.userModel.terms = ' ';
  }
  onSubmit() {
    if (this.userModel.UserName == '' || this.userModel.Email == '' || this.userModel.DateOfBirth == '' || this.userModel.phone == '' || this.userModel.terms == false) {
      alert("Please fill all the Date and Try again and make sure to agree on our terms and conditions")
    }
    else {
      const formData = new FormData();
      // formData.append('profile', this.uploadForm?.get('profile')?.value);
      formData.append('UserName', this.userModel.UserName);
      formData.append('Email', this.userModel.Email);
      formData.append('DateOfBirth', this.userModel.DateOfBirth);
      formData.append('Image', this.userModel.Image);
      formData.append('phoneNumber', this.userModel.phone);
      formData.append('TermsAndCondition', this.userModel.terms)
      this.isloading = true;

      this.Http.post<any>(`http://pixelserver-001-site5.itempurl.com/en/AppUser/AddNewUser/${this.params}`, formData).subscribe((res) => {
        this.isloading = false
        this._apis.sendEmail(this.userModel.UserName).subscribe((Response) => console.log(Response))

        alert('تم ارسال طلبك')
        window.location.reload()

      })
      console.log(formData)

    }
  }


  ngOnInit(): void {
  }

}

