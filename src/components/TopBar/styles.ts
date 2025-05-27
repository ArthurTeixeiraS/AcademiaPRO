import styled from 'styled-components';

export const TopBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  height: 7rem;
  position: fixed;
  top: 0;
  left: 28rem;
  right: 0;
  z-index: 100;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  width: 300px;
  color: ${({ theme }) => theme.colors.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors['font-secondary']};
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${({ theme }) => theme.colors.success};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;