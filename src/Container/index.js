import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.background};
    max-width: ${({ theme }) => theme.breakpoints.notebookMax};
    min-width: ${({ theme }) => theme.breakpoints.mobileMin};
    margin: 0 auto;
    padding: 32px;
`;