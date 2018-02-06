import styled from 'styled-components';

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 16px;
  padding: 6px;
  border-radius: 50%;
  background-color: #fff;
  border: ${props => props.selected && '2px solid gray'};
`