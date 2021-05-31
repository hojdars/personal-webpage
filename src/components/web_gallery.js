import React from "react"
import styled from "styled-components"

import Header from "./website_header"

const Body = styled.div`
padding-top: 3.3em;
padding-bottom: 3.3em;
max-width: 95vw;
margin: auto auto;

h1 {
    font-size: 3.0em;
    line-height: calc(1ex / 0.42);
    margin-bottom: 0;
}

p {
    font-size: 1.025em;
    line-height: calc(1ex / 0.32);
    margin: calc(1ex / 0.42) 0;
    text-align: justify;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    height: 50vh;
    flex-grow: 1;
    padding: 0.33em;
}

img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
}

@media (max-aspect-ratio: 1/1) {
    li {
        height: 40vh;
    }
}

@media (max-height: 480px) {
    li {
        height: 40vh;
    }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul {
        flex-direction: row;
    }

    li {
        height: auto;
        width: 100%;
    }
    img {
        width: 100%;
        max-height: 75vh;
        min-width: 0;
    }
}
`

export default function Layout(props) {
    return (
        <div>
            <Header headerText={props.headerText} />
            <Body>
                {props.children}
            </Body>
        </div>
    )
}

