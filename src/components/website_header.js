import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ListLinkItem = styled.div`
flex-grow: 1;
margin-right: 2rem;
`

const ListLink = props => {
    return (
        <ListLinkItem>
            <Link to={props.to}>{props.children}</Link>
        </ListLinkItem>
    )
}

const MenuDiv = styled.div`
list-style: none;
display: flex;
flex-direction: row;
align-self: center;

a {
    font-size: 1.3em;
    font-family: "Cooper Hewitt";
    padding-bottom: 3px;
 }
`

const Menu = () => {
    return (
        <MenuDiv>
            <ListLink to="/projects/"><b>projects</b></ListLink>
            <ListLink to="/travel/"><b>travels</b></ListLink>
            <ListLink to="/photography"><b>photography</b></ListLink>
        </MenuDiv>
    )
}

const TitleDiv = styled.div`
flex-grow: 1;

h2 {
    font-size: 2.25em;
    margin: 0;
    font-weight: 100;
    font-family: "Cooper Hewitt";
}

a {
    text-decoration: none;
}

a:hover {
    color: #ddd;
}

a:visited {
    color: #ddd;
}
`

const Title = (props) => {
    return (
        <TitleDiv>
            <Link to="/">
                <h2>{props.headerText}</h2>
            </Link>
        </TitleDiv>
    )
}

const HeaderContainer = styled.div`
display: flex;
margin-top: 3vh;
padding-left: 3vw;
margin-right: calc(3em - (100vw - 100%));
min-height:45px;
`

export function HeaderNoTitle() {
    return (
        <HeaderContainer>
            <TitleDiv>
            </TitleDiv>
            <Menu />
        </HeaderContainer>
    )
}

export default function Header(props) {
    return (
        <HeaderContainer>
            <Title headerText={props.headerText} />
            <Menu />
        </HeaderContainer>
    )
}