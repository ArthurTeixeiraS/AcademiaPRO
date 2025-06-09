import {FormContainer, Title, Field, Label, Input, OptionBox} from './style';
import type {GenericFormProps} from './style';
import { ButtonGroup, ButtonLabel} from '../utils/styleButton'


export function GenericForm({ title, fields, options, onSubmit }: GenericFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {fields.map((field) => (
          <Field key={field.name}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              name={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              required
            />
          </Field>
        ))}

        {options && (
          <Field>
            <Label>Plano</Label>
            {options.map((option) => (
              <OptionBox key={option.value}>
                <strong>{option.title}</strong>
                <p>{option.description}</p>
              </OptionBox>
            ))}
          </Field>
        )}
              <ButtonGroup>
  <ButtonLabel type="submit">Cadastrar Aluno</ButtonLabel>
  <ButtonLabel type="button" onClick={() => window.history.back()}>Cancelar</ButtonLabel>
  </ButtonGroup>
      </form>
    </FormContainer>
  );
}