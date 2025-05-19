import styled from "styled-components";

export const MenuContainer = styled.aside`
  width: 280px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  padding: 3.5rem;
  box-shadow: 2px 0 8px rgba(0,0,0,0.1);
  position: fixed;
  left: 0;
  top: 0;
`;

export const MenuHeader = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
  }
`;

export const MenuSection = styled.section`
  margin: 3rem 0;
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
`;

export const MenuItem = styled.div`
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1.1rem;
    border-radius: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.background};
    transition: all 0.3s ease;
    font-size: 1.1rem;

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const MetricPill = styled.span<{ $variant: 'increase' | 'decrease' }>`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background: ${({ theme, $variant }) => 
    $variant === 'increase' ? theme.colors.success : theme.colors.error};
  color: white;
`;

export const MetricValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;