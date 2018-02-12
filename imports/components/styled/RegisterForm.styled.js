import styled from 'styled-components';

export const RegisterButton = styled.button`
   border: none;
   outline: none;
   width: 80px;
   padding: 8px;
   font-family: "Roboto Slab", sans-serif;
   font-size: 14px;
   background-color: #5092FB;
   color: #fff;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
`

export const AvatarWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   max-width: 240px;
   margin: 16px 0;
   
   @media all and (max-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      max-width: 200px;
   }
`

export const Message = styled.div`
  padding-top: 16px;
  font-family: "Roboto Slab", sans-serif;
  color: green;
`

export const ErrorMessage = styled.div`
  font-family: "Roboto Slab", sans-serif;
  font-size: 12px;
  margin-top: 16px;
  color: red;
`