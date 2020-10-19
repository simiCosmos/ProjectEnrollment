import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  basePath = 'enrollees';

  constructor(private apiBase: ApiBaseService) {}

  getEnrollees(): Observable<any> {
    return this.apiBase.get(this.basePath);
  }

  updateEnrollee(enrolleeDetails: any): Observable<any> {
    const body = {
      name: enrolleeDetails.name,
      active: enrolleeDetails.active === '1',
      dateOfBirth: enrolleeDetails.dateOfBirth,
    };

    return this.apiBase.put(`${this.basePath}/${enrolleeDetails.id}`, body);
  }

  getEnrolleeById(id: string): Observable<any> {
    return this.apiBase.get(`${this.basePath}/${id}`);
  }
}
