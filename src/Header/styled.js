import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 64px;
`;

export const HeaderTitle = styled.h1`
    display: block;
    font-size: 38px;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 36px;
`;

export const HeaderCaption = styled.p`
    font-size: 12px;
`;

export const HeaderParagraph = styled.p`
    margin-bottom: 32px;
`;

export const HeaderButton = styled.button`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({theme})=>theme.color.elementColor};
    background-color: ${({theme})=>theme.color.elementBackground};
    border: 1px solid ${({theme})=>theme.color.elementBorder};
`;