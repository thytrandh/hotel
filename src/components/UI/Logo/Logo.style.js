import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LogoArea = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 22px;
  }

  h3 {
    color: ${themeGet('primary.0', '#f0a71d')};
    text-transform: capitalize;
    font-size: 23px;
    font-weight: 700;
    margin: 0 0 0 10px;
  }
`;

export default LogoArea;
