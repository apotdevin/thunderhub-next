import React from 'react';
import styled, { css } from 'styled-components';
import { textColor, linkHighlight } from '../../../styles/Themes';
import { ThemeSet } from 'styled-theming';
import RouterLink from 'next/link';

interface StyledProps {
    fontColor?: string | ThemeSet;
    underline?: string | ThemeSet;
    inheritColor?: boolean;
    fullWidth?: boolean;
}

const StyledALink = styled.a`
    color: ${({ fontColor, inheritColor }: StyledProps) =>
        inheritColor ? 'inherit' : fontColor ?? textColor};
    text-decoration: none;
    ${({ fullWidth }: StyledProps) =>
        fullWidth &&
        css`
            width: 100%;
        `};

    :hover {
        background: linear-gradient(
            to bottom,
            ${({ underline }: StyledProps) => underline ?? linkHighlight} 0%,
            ${({ underline }: StyledProps) => underline ?? linkHighlight} 100%
        );
        background-position: 0 100%;
        background-size: 2px 2px;
        background-repeat: repeat-x;
    }
`;

interface LinkProps {
    children: any;
    href?: string;
    color?: string | ThemeSet;
    underline?: string | ThemeSet;
    inheritColor?: boolean;
    fullWidth?: boolean;
}

export const Link = ({ children, href, color, underline, inheritColor, fullWidth }: LinkProps) => {
    const props = { fontColor: color, underline, inheritColor, fullWidth };

    if (!href) return null;

    return (
        <RouterLink href={href}>
            <StyledALink {...props}>{children}</StyledALink>
        </RouterLink>
    );
    // }
};
