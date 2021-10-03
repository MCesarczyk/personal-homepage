import styled from "styled-components";

export const SwitcherCaption = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        display: none;
    }
`;

export const SwitcherButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    font-size: 12px;
    width: 100%;
    height: 24px;
    padding: 0px;
    border: none;
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
`;

export const SwitcherButtonImage = styled.img`
    width: 60px;
    margin-bottom: -8px;
    fill: crimson;
`;