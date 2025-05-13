import styled from "styled-components";

export const HeaderContainer = styled.header`
    display:flex;
    padding: 0.7rem 0 0.4rem 3rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    z-index: 10;
    border-bottom: 1px solid ${(props) => props.theme['container-colors']};

    .logo{
        width: 31.3%;
    }

    .logoName {
        text-decoration: none;
        color: ${(props) => props.theme['blue-primary']};

        span {
            color: ${(props) => props.theme['yellow-secondary']};
        }
    }


`