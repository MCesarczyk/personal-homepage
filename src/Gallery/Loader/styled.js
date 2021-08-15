import styled from "styled-components";

export const LoaderCaption = styled.p`
    font-size: 20px;
    margin-top: 88px;
`;

export const LoaderCircle = styled.img`
    margin: 48px;
    margin-bottom: 140px;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: Element-spin infinite 2s linear;
    }

    @keyframes Element-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;