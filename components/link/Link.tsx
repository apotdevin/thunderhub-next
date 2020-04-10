import React from 'react';
import styled, { css } from 'styled-components';
import { textColor, linkHighlight } from '../../styles/Themes';
import { ThemeSet } from 'styled-theming';
// import { Link as RouterLink } from 'react-router-dom';
import RouterLink from 'next/link';

interface StyledProps {
  fontColor?: string | ThemeSet;
  underline?: string | ThemeSet;
  inheritColor?: boolean;
  fullWidth?: boolean;
}

const styledCss = css`
  color: ${({ fontColor, inheritColor }: StyledProps) => (inheritColor ? 'inherit' : fontColor ?? textColor)};
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

// const StyledLink = styled<StyledProps>(({ inheritColor, fontColor, underline, fullWidth, ...rest }) => (
//   <RouterLink {...(rest as any)} />
//   // <RouterLink {...rest} />
// ))(() => styledCss);

const StyledALink = styled.a`
  ${styledCss}
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

  // if (to) {
  //   return (
  //     //   <StyledLink to={to} {...props}>
  //     <StyledLink href={to} {...props}>
  //       {children}
  //     </StyledLink>
  //   );
  // } else {
  return (
    <RouterLink href={href}>
      <StyledALink href={href} {...props}>
        {children}
      </StyledALink>
    </RouterLink>
  );
  // }
};
