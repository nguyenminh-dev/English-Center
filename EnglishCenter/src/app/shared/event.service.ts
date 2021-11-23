import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/HocVien`;
  formData: Event = new Event();
  list: Event[] = [];

  refreshList() {
    this.http.get(`${environment.baseUrl}/api/HocVien/getsukien`)
      .toPromise()
      .then(res => this.list = res as Event[]);
  }
}
