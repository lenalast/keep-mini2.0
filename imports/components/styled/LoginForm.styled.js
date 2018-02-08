import styled from 'styled-components';

export const LogInButton = styled.button`
   border: none;
   outline: none;
   width: 80px;
   padding: 8px;
   margin-top: 16px;
   font-family: "Roboto Slab", sans-serif;
   font-size: 14px;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
  
   @media all and (max-width: 600px) {
      margin-top: 16px;
   }           
`

export const WarningMessage = styled.div`
  padding-top: 32px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  text-shadow: rgba(0,0,0,0.7) 0 0.3px;
  color: #d7a02a;
`