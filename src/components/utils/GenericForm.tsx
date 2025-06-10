import { Form } from './generic';
import type { GenericFormProps } from '../../@types/form';
import { ButtonGroup, ButtonLabel} from './styleButton';
import { useState } from 'react';


export function GenericForm({ title, fields, options, onSubmit, onChange }: GenericFormProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    // Simula um evento de change pro plano
    onChange({
      target: {
        name: 'plano',
        value: value
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

    const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const newErrors: Record<string, string> = {};

  
    fields.forEach(field => {
      if (!formData.get(field.name)) {
        newErrors[field.name] = `O campo ${field.label} é obrigatório`;
      }
    });

    if (options && !selectedOption) {
      newErrors['plano'] = 'Selecione um plano';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    form.reset();
    onSubmit(e);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h1>{title}</h1>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            defaultValue={field.value || ''}
            onChange={onChange}
            required
          />
          {errors[field.name] && <span className="error">{errors[field.name]}</span>}
        </div>
      ))}

      {options && (
        <div>
          <label>Plano</label>
          {errors['plano'] && <span className="error">{errors['plano']}</span>}
          {options.map((option) => (
            <div 
              className={`optionBox ${selectedOption === option.value ? 'active' : ''}`} 
              onClick={() => handleOptionChange(option.value)}
              key={option.value}
            >
              <input 
                type="radio" 
                name="plano" 
                checked={selectedOption === option.value}
                value={option.value}
                onChange={() => {}}
                hidden
              />
              <strong>{option.title}</strong>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      )}

      <ButtonGroup className='multipleButtons'>
        <ButtonLabel type="submit">Salvar Alterações</ButtonLabel>
        <ButtonLabel type="button" onClick={() => window.history.back()}>Cancelar</ButtonLabel>
      </ButtonGroup>
    </Form>
  );
}
