import styled from 'styled-components';

export default styled.p`
  font-size: ${props => (props.big ? '3rem' : '2rem')};

  color: white;
`;
