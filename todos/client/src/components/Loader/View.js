import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  background-color: ${props => props.theme.color[props.color]};
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
`;

export default function Loader({ isLoading, ...rest }) {
  return isLoading ? <StyledLoader {...rest} /> : null;
}

Loader.defaultProps = {
  color: 'primary'
};
