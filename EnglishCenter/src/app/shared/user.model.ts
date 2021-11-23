export class User {
  Id: string;
  Ho: string;
  Tenlot: string;
  Ten: string;
  Diachi: string;
  Gioitinh: number;
  Ngaysinh: string;
  Email: string;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  localISOTime = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1)

    constructor() {
      this.Id = "";
      this.Ho = "";
      this.Tenlot = "";
      this.Ten = "";
      this.Diachi = "";
      this.Ngaysinh = this.localISOTime;
      this.Email = "";
  }
}
