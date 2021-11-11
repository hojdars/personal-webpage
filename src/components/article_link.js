import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components/macro'

const Date = styled.span`
color:#888;
line-height: calc(1ex / 0.32);
margin-right: 10px;
border: 2px solid #444;
border-radius: 7px;
background-color: #444;
padding: 2px;
`

const TravelTag = styled.span`
color:#888;
line-height: calc(1ex / 0.32);
margin-right: 10px;
border: 2px solid #004500;
border-radius: 7px;
background-color: #004500;
padding: 2px;
`

const TechTag = styled.span`
color:#888;
line-height: calc(1ex / 0.32);
margin-right: 10px;
border: 2px solid #853500;
border-radius: 7px;
background-color: #853500;
padding: 2px;
`

const Excerpt = styled.div`
font-size: 1em;
line-height: calc(1ex / 0.32);
margin: 0.65ex 0;
`

const LinkCapsule = styled.div`
padding-bottom: 1rem;
border-bottom: 1px solid #AAA;
`

const ArticleLink = props => {
    return (
        <LinkCapsule>
            <Link to={props.to}>
                <h3>{props.title}</h3>
            </Link>
            <Date>
                {props.date}
            </Date>
            <TravelTag>
                travel
            </TravelTag>
            <TechTag>
                tech
            </TechTag>
            <Excerpt>
                {props.excerpt}
            </Excerpt>
        </LinkCapsule>
    )
}

const ImageLinkCapsule = styled.div`
padding-bottom: 1rem;
margin-top: 1rem;
border-bottom: 1px solid #AAA;
`

const ImageLink = props => {
    return (
        <ImageLinkCapsule>
            <Link to={props.to}>
                {props.image}
            </Link>
        </ImageLinkCapsule>
    )
}

export { ArticleLink, ImageLink }