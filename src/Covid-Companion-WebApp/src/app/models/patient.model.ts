import { CovidSymptoms } from './covid-symptoms';
import { Location } from './location';

export interface Patient  {
   patientId: number;
   patientName: string;
   patientImage: File;
   age: number;
   contactNumber: string;
   admittedDate: Date;
   dischargeDate: Date;
   hospital: string;
   severity: string;
   homeAddress: Location;
   currentLocation: Location;
   symptoms: CovidSymptoms;
   comborbid: boolean;
   diseases: Array<string>;
   frequencyCheckins: number;
}
