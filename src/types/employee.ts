export interface Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    zipcode: string;
  };
  profilePicture?: string;
} 