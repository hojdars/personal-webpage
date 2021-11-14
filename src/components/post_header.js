import React from "react"
import styled from 'styled-components/macro'

import LinkInfo from "./article_info_header"

const PostHeaderContainer = styled.div`
margin-bottom: 40px;
`

const PostHeader = props => {
    return (
        <PostHeaderContainer>
            <h1>{props.title}</h1>
            <LinkInfo
                travelTag={props.travelTag}
                technologyTag={props.technologyTag}
                photographyTag={props.photographyTag}
                date={props.date}
            />
        </PostHeaderContainer>
    )
}

export default PostHeader