import React from "react";
import styled, {css} from "styled-components/macro";

export const Button = ({color, text, size, children, onClick}) => {
    return (
        <StyledButton color={color} size={size} onClick={onClick}>
            {children}
            <span>{text}</span>
        </StyledButton>
    )
}

const StyledButton = styled.button`
  background: none;
  display: inline-block;
  align-items: center;
  padding: 5px 10px;
  margin: 2px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
  
  span {
    margin-left: 10px;
  }
  
  ${props => {
      if (props.color === 'orange') {
          return css`
            border-color: #f38021;
            color: #f38021;
            
            &:hover {
              background: #f38021;
              color: #fff;
            }
          `
      }
      if (props.color === 'blue') {
          return css`
            border-color: #2196F3;
            color: #2196F3;
            
            &:hover {
              background: #0d8bf2;
              color: #fff;
            }
          `
      }
      if (props.size === 'large') {
          return css`
            font-size: large;
            padding: 10px 15px;
            border-radius: 0;
          `
      }
  }}
`
