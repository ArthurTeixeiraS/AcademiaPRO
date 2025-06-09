export type FormField = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
};

export type Option = {
  title: string;
  description: string;
  value: string;
};

export type GenericFormProps = {
  title: string;
  fields: FormField[];
  options?: Option[];
  onSubmit: (data: Record<string, string>) => void;
};