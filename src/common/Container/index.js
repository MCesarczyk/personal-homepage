import styled from "styled-components";

export const Container = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.notebookMax};
    min-width: ${({ theme }) => theme.breakpoints.mobileMin};
    margin: 0 auto;
    padding: 32px;
    transition: color 1s, background-color 1s;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        padding: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 16px;
    }
`;