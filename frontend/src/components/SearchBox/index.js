import React from "react";
import styled from "styled-components/macro";

export const SearchBox = ({onChangeSearchText}) => {
    const handleChangeValue = (e) => {
        onChangeSearchText(e.target.value)
    }
    return (
        <Wrapper>
            <StyledInput onChange={handleChangeValue}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
`

const StyledInput = styled.input`
  border-radius: 15px;
  width: 35%;
`
