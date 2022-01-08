import styled, { css } from "styled-components";

export const SwitcherButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SwitcherButton = styled.button`
    z-index: 1;
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

export const SwitcherCaption = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        display: none;
    }
`;

export const SwitcherIconWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    border: 2px solid currentColor;
    border-radius: 16px;
    width: 48px;
    height: 24px;
`;

export const SwitcherIcon = styled.div`
    width: 50%;
    transition: 0.3s;

    ${({ shifted }) => shifted && css`
        transform: translateX(24px);
    `}
`;