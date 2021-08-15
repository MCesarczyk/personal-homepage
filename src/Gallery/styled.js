import styled from "styled-components";

export const GalleryWrapper = styled.div`
    text-align: center;
    margin-bottom: 64px;
`;

export const GalleryHeader = styled.h2`
    font-size: 30px;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 18px;
    }
`;

export const GallerySubtitle = styled.p`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 17px;
    }
`;

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-template-columns: 1fr;
    }
`;

