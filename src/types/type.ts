export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  street: string;
  city: string;
  country: string;
  education: string;
  skills: string;
  experience: string;
  languages: string;
};

export type FormProps = {
  updateFields: (fields: Partial<FormData>) => void;
};
