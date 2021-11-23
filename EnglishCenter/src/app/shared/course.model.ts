export class Course {
  Id: string;
  Ten: string;
  Khaigiang: string;
  Ketthuc: string;
  Dotuoi: number;
  Review: string;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  localISOTime = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1)

  constructor() {
    this.Id = "";
    this.Ten = "";
    this.Khaigiang = this.localISOTime;
    this.Ketthuc = this.localISOTime;
    this.Dotuoi = 0;
    this.Review = "";
  }
}
