import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { css } from "react"

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
`

const Menu = () => {
    return (
        <MenuDiv>
            <ListLink to="/"><b>Home</b></ListLink>
            <ListLink to="/about/"><b>About</b></ListLink>
            <ListLink to="/travel/"><b>Travels</b></ListLink>
        </MenuDiv>
    )
}

const TitleDiv = styled.div`
flex-grow: 1;

h2 {
    font-size: 1.75em;
    margin: 0;
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: black;
}

a:visited {
    color: black;
}
`

const Title = () => {
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
margin-top: 2vh;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Title />
            <Menu />
        </HeaderContainer>
    )
}

const LayoutDiv = styled.div`
display: flex;
flex-direction: column;
max-width: 70vw;
margin: auto auto;

@media (max-width: 1080px) {
    max-width: 90vw;
}
`

const BodyDiv = styled.div`
h1 {
    font-size: 2.5em;
    line-height: calc(1ex / 0.42);
    margin-bottom: 0;
}

h2 {
    font-size: 2em;
    line-height: calc(1ex / 0.42);
    margin-bottom: 0;
}

h3 {
    font-size: 1.75em;
    line-height: calc(1ex / 0.38);
    margin-bottom: 0;
}

h4 {
    font-size: 1.5em;
    line-height: calc(1ex / 0.37);
    margin-bottom: 0;
}

p {
    font-size: 1.025em;
    line-height: calc(1ex / 0.32);
    margin: calc(1ex / 0.42) 0;
    text-align: justify;
}
`

export function Body(props) {
    return (
        <LayoutDiv
            css={css`
            width: ${props.width}ch;
        `}>
            <BodyDiv>
                {props.children}
            </BodyDiv>
        </LayoutDiv>
    )
}

export default function Layout(props) {
    return (
        <Body width={"80"}>
            <Header />
            {props.children}
        </Body>
    )
}

