import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors = new Array<Doctor>();
  constructor() { }
  public registerDoctor(doctor: Doctor): void {
      this.doctors.push(doctor);
  }
  public deleteDoctor(id: string): void {
    this.doctors.find((doctor: Doctor, index: number) => {
      if (doctor.doctorId === id) {
        this.doctors.splice(index, 1);
      }
    });
  }
  public findDoctor(id: string): Observable<Doctor> {
    let found: Doctor;
    this.doctors.find((doctor: Doctor, index: number) => {
      if(doctor.doctorId === id) {
        found = this.doctors[index];
      }
    });
    return of(found);
  }
  public getDoctors(): Observable<Doctor[]> {
    return of(this.doctors);
  }
}
