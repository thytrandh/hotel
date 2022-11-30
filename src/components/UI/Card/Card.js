import React from 'react';
import { Wrapper, Header, Content, Footer } from './Card.style';
export default function Card({
  title,
  className,
  header,
  content,
  children,
  footer,
}) {
  return (
    <Wrapper style={{margin: "0 0 10px 0"}} className={className}>
      <Header>{header ? header : <h2>{title}</h2>}</Header>
      <Content>{content ? content : children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
}
