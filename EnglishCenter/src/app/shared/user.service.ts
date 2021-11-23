import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/HocVien`;
  formData: User = new User();
  list: User[] = [];
  formData1: User = new User();
  getUser(): Observable<User>{
    return this.http.get<User>(this.baseURL);
  }
  postUser(): Observable<Object> {
    return this.http.post( this.baseURL ,this.formData);
  }
  putUser() {
    return this.http.put(`${ this.baseURL }/${ this.formData.Id }`, this.formData);
  }
  deleteUser(id: string) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as User[]);
  }
}
