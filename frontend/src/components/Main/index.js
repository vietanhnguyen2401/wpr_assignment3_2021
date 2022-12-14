import React from "react";
import styled from "styled-components/macro";

export const Main = ({title, children}) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                {children}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  margin-left: 250px;
  padding-bottom: 95px;
`

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 15px;
`

const Title = styled.h1`
  font-size: 42px;
  margin: 18px 0;
  text-align: center;
`
