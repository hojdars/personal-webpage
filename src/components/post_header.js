import React from "react"
import styled from 'styled-components/macro'

const Date = styled.div`
color:#888;
line-height: calc(1ex / 0.32);
margin: 0.25ex 0;
`

const PostHeader = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Date>
                {props.date}
            </Date>
        </div>
    )
}

export default PostHeader