import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/HocVien`;
  formData: Course = new Course();
  list: Course[] = [];

  refreshList() {
    this.http.get(`${environment.baseUrl}/api/HocVien/getkhoahoc`)
      .toPromise()
      .then(res => this.list = res as Course[]);
  }
}
