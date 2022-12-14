import React from "react";
import {QuestionMarkIcon} from "../icons/QuestionMark";
import {AddIcon} from "../icons/Add";
import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";
import bgImg from './background.jpg'

export const Aside = () => {
    return (
        <Wrapper>
            <SubTitle>WPR</SubTitle>
            <Header>
                <Title>HTML Quiz</Title>
            </Header>

            <Ul>
                <li>
                    <NavLink activeClassName={'active'} to={'/'}>
                        <QuestionMarkIcon />
                        <span>All questions</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={'active'} to={'/add'}>
                        <AddIcon />
                        <span>New question</span>
                    </NavLink>
                </li>
            </Ul>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
  position: fixed;
  width: 250px;
  height: 100vh;
  overflow: auto;
  background: #042331;
  color: #fff;
  border-right: 1px solid #042331;
`

const SubTitle = styled.h3`
  font-family: 'Helvetica', sans-serif;
  color: #ee3322;
  text-align: center;
  background: #fff;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`
const Title = styled.h2`
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  padding: 10px;
`

const Header = styled.header`
  font-family: 'Pangolin', 'Trebuchet MS', cursive;
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  span {
    margin-left: 20px;
  }
  
  .active {
    background: #063146;
    padding-left: 50px;
  }
  
  a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 50px;
    color: white;
    padding-left: 30px;
    box-sizing: border-box;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px solid rgb(32, 32, 32);
    transition: 0.4s;
    text-decoration: none;
    
    &:hover {
      background: #063146;
      padding-left: 50px;
    }
  }
`
