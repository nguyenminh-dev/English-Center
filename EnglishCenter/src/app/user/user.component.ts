import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.service.getUser()
    .subscribe((data: User) => this.service.formData1 = {
      Id: data.Id,
      Ho: data.Ho,
      Tenlot: data.Tenlot,
      Ten: data.Ten,
      Diachi: data.Diachi,
      Gioitinh: data.Gioitinh,
      Ngaysinh: data.Ngaysinh,
      Email: data.Email,
      tzoffset: data.tzoffset,
      localISOTime: data.localISOTime
  });
  }

  updateRecord(form: NgForm) {
    console.log(this.service.formData)
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã cập nhật thông tin')
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['../../user'], {relativeTo: this.route})
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new User();
  }
  cancel()
  {
    // this.router.navigate(['../../user'], {relativeTo: this.route})
  }
}
