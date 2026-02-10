
export interface AppointmentData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
