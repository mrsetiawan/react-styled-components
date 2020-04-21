import React from 'react';
import styled from 'styled-components';
import configStyled from './style/config-style';

function Frame(props) {

  const RootFrame = styled.div`
    max-width: 100%;
    margin: 50px 25%;
    width: ${configStyled.imageWidth}

  `
  return (
    <RootFrame>
      {props.children}
    </RootFrame>
  )
}

export default Frame;
