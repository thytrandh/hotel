import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  //box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: 0.1s;
  &:hover{
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  padding: 1.5rem 0;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
