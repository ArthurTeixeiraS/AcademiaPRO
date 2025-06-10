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

  .iconWrapper{
    display: flex;
    gap: 1.5rem;
  }

  .searchWrapper{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
  }
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