import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.background};
    max-width: ${({ theme }) => theme.breakpoints.notebookMax};
    min-width: ${({ theme }) => theme.breakpoints.mobileMin};
    margin: 0 auto;
    padding: 32px;
    transition: color 1s, background-color 1s;
`;