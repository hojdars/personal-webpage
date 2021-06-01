import React from "react"
import styled from "styled-components"

import Header, { HeaderNoTitle } from "./website_header"

const ScrollBarDiv = styled.div`
margin-left: calc(100vw - 100%);
margin-right: 0px;
`

const LayoutDiv = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
padding-top: 3em;
max-width: 85ch;
margin: auto auto;

@media (max-width: 1080px) {
    max-width: 90vw;
}
`

const BodyDiv = styled.div`
h1 {
    font-size: 3.0em;
    line-height: calc(1ex / 0.42);
    margin-bottom: 0;
}

h2 {
    font-size: 2.5em;
    line-height: calc(1ex / 0.42);
    margin-bottom: 0;
}

h3 {
    font-size: 2.0em;
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
        <LayoutDiv>
            <BodyDiv>
                {props.children}
            </BodyDiv>
        </LayoutDiv>
    )
}

export default function Layout(props) {
    if (props.headerText) {
        return (
            <div>
                <Header headerText={props.headerText} />
                <ScrollBarDiv>
                    <Body>
                        {props.children}
                    </Body>
                </ScrollBarDiv>
            </div>
        )
    } else {
        return (
            <div>
                <HeaderNoTitle />
                <ScrollBarDiv>
                    <Body>
                        {props.children}
                    </Body>
                </ScrollBarDiv>
            </div>
        )
    }
}

