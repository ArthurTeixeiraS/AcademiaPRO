// Componente de alerta estilo "toast" que desaparece sozinho depois de alguns segundos


import React, { useEffect } from "react";
import styled from "styled-components";

interface AlertToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast = styled.div<{ type: string }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${({ type }) => (type === "error" ? "#DC3545" : "#198754")};
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Componente principal do Toast


export const AlertToast: React.FC<AlertToastProps> = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <Toast type={type}>{message}</Toast>;
};
