export class User {
  public UserName: string;
  public Email: string;
  public phone: string;
  public DateOfBirth: string;
  public terms: any;
  public Image: any;

  constructor(name: string, email: string, date: string, image: any, phone: string, terms: any) {
    this.UserName = name;
    this.Email = email;
    this.phone = phone;
    this.DateOfBirth = date;
    this.terms = terms;
    this.Image = image;
  }
}
