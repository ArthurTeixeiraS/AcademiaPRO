// Componente de alerta de confirmação com sobreposição e botões "Sim" e "Não"

import React from 'react';
import styled from 'styled-components';

interface AlertConfirmProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Dialog = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['primary-hover']};;
  }
`;


// Componente principal
export const AlertConfirm: React.FC<AlertConfirmProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <Dialog>
        <p>{message}</p>
        <Buttons>
          <Button onClick={onCancel}>Não</Button>
          <Button onClick={onConfirm}>Sim</Button>
        </Buttons>
      </Dialog>
    </Overlay>
  );
};
