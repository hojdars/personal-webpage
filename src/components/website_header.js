import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
 }
`

const Menu = () => {
    return (
        <MenuDiv>
            <ListLink to="/contacts/"><b>contacts</b></ListLink>
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
    const data = useStaticQuery(
        graphql`
            query {
                site {
                  siteMetadata {
                    title
                  }
                }
            }
        `
    )
    return (
        <TitleDiv>
            <Link to="/">
                <h2>{data.site.siteMetadata.title}</h2>
            </Link>
        </TitleDiv>
    )
}

const HeaderContainer = styled.div`
display: flex;
margin-top: 3vh;
padding-left: 3vw;
padding-right: 3vw;
`

export default function Header(props) {
    return (
        <HeaderContainer>
            <Title headerText={props.headerText} />
            <Menu />
        </HeaderContainer>
    )
}