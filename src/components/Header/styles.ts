import styled from "styled-components";

export const HeaderContainer = styled.header`
    display:flex;
    padding: 0.7rem 0 0 3rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    z-index: 10;
    background-color: ${(props) => props.theme.colors.white};

    .logo{
        width: 31.3%;
    }

    .logoName {
        display:flex;
        align-items: center;
        img{
            margin-right: 1rem;
        }
    }
`