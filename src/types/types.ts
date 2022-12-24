export interface UserProps {
  id: number;
  email: string;
  access: boolean;
  lastName: string;
  birthDate: string;
  firstName: string;
}

export interface UsersHeadProps {
  title: string;
  type: onFilterCell;
  filterValue: string | boolean;
  isOpen: boolean;
  setIsOpen: any;
}

export type onFilterCell =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'birthdate'
  | 'access';
