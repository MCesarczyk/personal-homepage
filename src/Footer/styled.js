import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 30%;
`;

export const FooterHeader = styled.h2`
    font-size: 30px;
    margin: 0px;
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.color.primary};
`;