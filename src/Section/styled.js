import styled from "styled-components";

export const SectionHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 18px;
    }
`;

export const SectionContainer = styled.div`
    box-shadow: 2px;
    padding: 32px;
    margin: 32px auto;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.secondaryBackground};
    box-shadow: ${({ theme }) => theme.shadow};

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        padding-left: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        padding-left: 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${({ theme }) => theme.color.secondary};
    padding-left: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    margin-bottom: 8px;
`;

export const ListItemImage = styled.img`
    width: 9px;
    margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        width: 8px;
        margin-right: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        width: 7px;
        margin-right: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 6px;
        margin-right: 8px;
    }
`;