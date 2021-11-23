export class Event {
  Id: string;
  Ten: string;
  Thoigian: string;
  Diachi: string;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  localISOTime = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1)

  constructor() {
    this.Id = "";
    this.Ten = "";
    this.Thoigian = this.localISOTime;
    this.Diachi = "";
  }
}
