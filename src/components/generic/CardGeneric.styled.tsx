import styled from 'styled-components';
import { mediaWidths, cardColor, cardBorderColor } from '../../../styles/Themes';

export const StatusDot = styled.div`
    margin: 0 2px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background-color: ${({ color }: { color: string }) => color};
`;

export const DetailLine = styled.div`
    margin: 4px 0;
    font-size: 14px;
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;

    @media (${mediaWidths.mobile}) {
        flex-wrap: wrap;
    }
`;

export interface CardProps {
    bottom?: string;
    cardPadding?: string;
}

export const Card = styled.div`
    padding: ${({ cardPadding }: CardProps) => cardPadding ?? '16px'};
    background: ${cardColor};
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid ${cardBorderColor};
    margin-bottom: ${({ bottom }: CardProps) => (bottom ? bottom : '25px')};
    width: 100%;
`;
