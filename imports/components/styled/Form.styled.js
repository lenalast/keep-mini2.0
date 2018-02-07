import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 32px;
  padding: 32px;
  background-color: #fff;
  width: 260px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
              
  @media all and (max-width: 600px) {
  max-width: 280px;
  }
`

export const Title = styled.div`
  margin-bottom: 16px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  
`
export const Input = styled.input`
  display: block;
  padding: 8px;
  margin-right: 16px;
  font-size: 14px;
  box-sizing: border-box;
  width: 240px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
`