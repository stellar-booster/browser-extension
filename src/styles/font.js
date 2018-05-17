import styled, {css} from 'styled-components';

export const title = css`
  font-size: 1.5rem;
`;

export const H1 = styled.h1`
  ${title}
`;

export const textCenter = css`
  text-align: center;
`;

export const P = styled.p`
  color: ${props => props.error ? 'red' : 'black'};
  font-size: ${props => props.large ? 'large' : 'medium'};
`;
