import React, { useEffect } from 'react';
import styled from 'styled-components';

interface AlertToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

const Toast = styled.div<{ type: string }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${({ type }) => (type === 'error' ? '#dc3545' : '#28a745')};
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const AlertToast: React.FC<AlertToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <Toast type={type}>{message}</Toast>;
};

export default AlertToast;
