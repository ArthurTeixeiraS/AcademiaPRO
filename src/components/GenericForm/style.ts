import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Field = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const OptionBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    border-color: #333;
  }
`;

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