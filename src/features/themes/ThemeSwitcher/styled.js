import styled from "styled-components";

export const SwitcherButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SwitcherButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    font-size: 12px;
    height: 24px;
    padding: 0px;
    border: none;
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
`;

export const SwitcherCaption = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        display: none;
    }
`;

export const SwitcherButtonImage = styled.img`
    width: 60px;
    margin-bottom: -8px;
`;