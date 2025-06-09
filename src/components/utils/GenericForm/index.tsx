import { Form } from '../generic';
import type { GenericFormProps } from '../../../@types/form';
import { ButtonGroup, ButtonLabel} from '../styleButton';
import { useState } from 'react';


export function GenericForm({ title, fields, options, onSubmit }: GenericFormProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    
    if (selectedOption) {
      data.selectedOption = selectedOption;
    }

    onSubmit(data);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(selectedOption === value ? null : value);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}

        {options && (
          <div>
            <label>Plano</label>
            {options.map((option) => (
              <div 
                className={`optionBox ${selectedOption === option.value ? 'active' : ''}`} 
                onClick={() => handleOptionClick(option.value)}
                key={option.value}>
                    <strong>{option.title}</strong>
                    <p>{option.description}</p>
              </div>
            ))}
          </div>
        )}
          <ButtonGroup className='multipleButtons'>
              <ButtonLabel type="submit">Cadastrar Aluno</ButtonLabel>
              <ButtonLabel type="button" onClick={() => window.history.back()}>Cancelar</ButtonLabel>
          </ButtonGroup>
    </Form>
  );
}