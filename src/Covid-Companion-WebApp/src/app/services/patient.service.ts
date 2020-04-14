import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients = new  Array<Patient>();
  constructor() { }
  public registerPatient(patient: Patient) {
    this.patients.push(patient);
  }
  public deletePatient(id: number) {
    this.patients.find((patient: Patient, index: number) => {
       if (patient.patientId === id) {
         this.patients.splice(index, 1);
       }
    });
  }
  public findPatient(id: number): Patient {
     let found: Patient;
     this.patients.find((patient: Patient, index: number) =>{
       if (patient.patientId === id) {
         found = this.patients[index];
       }
     });
     return found;
  }
  public getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }
}
