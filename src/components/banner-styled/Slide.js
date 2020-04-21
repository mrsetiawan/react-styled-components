import React from 'react';
import styled from 'styled-components';
import css from './style/config-style';

function Slide(props) {

  const Root = styled.article`
    position: absolute; 
    top: 0;
    oveflow: hidden;
    width: 960px;
    height:${css.imageHeight};
    transition: all 6.s;
  `

  const Footer = styled.footer`
    position: absolute;
    top: 510px;
    left: 0;
    padding: 15px;
    width: 100%;
    height: 130px;
    color: #fff;
    line-height: 1.4em;
    box-sizing: border-box;
    background: rgba(0,0,0,0.3);
    text-shadow: 1px 1px 0 rgba(0,0,0,0.6);
  `

  const Title = styled.h2`
    margin: 12px 0 10px 0;
    &:hover {
      color: red;
      transition:all 0.6s ease-in-out;
      cursor: pointer;
    }
  `
  return (
    <Root>
      <img src={props.image} alt={props.title} />
      <Footer>
        <Title>{props.title}</Title>
        <div>{props.children}</div>
      </Footer>
    </Root>
  )
}

export default Slide;
