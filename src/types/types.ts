export interface UserProps {
  id: number;
  email: string;
  access: boolean;
  lastName: string;
  birthDate: string;
  firstName: string;
}

export type onFilterCell =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'birthdate'
  | 'access';
