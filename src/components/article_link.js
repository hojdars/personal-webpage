import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components/macro'

import LinkInfo from "./article_info_header"

const Excerpt = styled.div`
font-size: 1em;
line-height: calc(1ex / 0.32);
margin: 0.65ex 0;
`

const LinkCapsule = styled.div`
padding-bottom: 1rem;
border-bottom: 1px solid #555;
`

const ArticleLink = props => {
    return (
        <LinkCapsule>
            <Link to={props.to}>
                <h3>{props.title}</h3>
            </Link>
            <LinkInfo
                travelTag={props.travelTag}
                technologyTag={props.technologyTag}
                photographyTag={props.photographyTag}
                date={props.date}
            />
            <Excerpt>
                {props.excerpt}
            </Excerpt>
        </LinkCapsule >
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