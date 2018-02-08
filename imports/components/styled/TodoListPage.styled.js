import styled from 'styled-components';

export const TodoListsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 948px; // fits 3 lists
  margin: 0 auto;
  padding: 32px;
`

export const TodoList = styled.div`
  padding: 16px 0 0 0;
  margin: 16px 8px;
  width: 300px; 
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
  transition: all 300ms;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08),
                0 3px 14px 0 rgba(0,0,0,0.05), 
                0 1px 7px 4px rgba(0,0,0,0.08);
  }
`

export const ListName = styled.input`
  margin-bottom: 8px;
  padding: 0 16px;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-size: 17px;
`

export const Todo = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-family: Roboto, sans-serif; // google uses Roboto Slab 
  line-height: 19px;
  font-size: 14px;
  padding: 0 16px;
  &:hover .fa {
    display: inline-block;
  }
`

export const CheckBox = styled.input.attrs({
  type: 'checkbox'
}) `
  margin-right: 8px;
`

export const TodoName = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  opacity: ${props => props.done ? '0.7' : '1'};
`

export const TodoListFooter = styled.div`
  border-top: 1px solid #747474;
  border-bottom: 1px solid #747474;
  margin-top: 8px;
  padding: 0 16px 0 20px;
`

export const DeleteIcon = styled.div`
  display: none;
  opacity: 0.5;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px; 
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: 1;
  }
`

export const TrashIcon = styled.i`
  opacity: 0.5;
  float: right;
  padding: 12px;
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: 1;
  }
`