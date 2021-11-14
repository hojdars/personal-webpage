import React from "react"

import styled from 'styled-components/macro'

const LinkInfoContainer = styled.div`
padding-top: 0.47em;
display: flex;
font-family: "Cooper Hewitt";
flex-direction: row;
margin-bottom: 20px;
`

const Date = styled.div`
color:#999;
line-height: calc(1ex / 0.32);
margin-right: 10px;
`

const Tag = styled.div`
color:#999;
line-height: calc(1ex / 0.32);
margin-left: auto;
margin-right: 10px;
border-radius: 7px;
padding-left: 7px;
padding-right: 7px;
`

const TravelColor = '#00a800';
const TechColor = '#d96900';
const PhotographyColor = '#5e97f2';

const TravelTag = styled(Tag)`
border-right: 3px solid ${TravelColor};
border-left: 3px solid ${TravelColor};
`

const TechTag = styled(Tag)`
border-right: 3px solid ${TechColor};
border-left: 3px solid ${TechColor};
`

const PhotographyTag = styled(Tag)`
border-right: 3px solid ${PhotographyColor};
border-left: 3px solid ${PhotographyColor};
`

export default function LinkInfo(props) {
    const isTravelTagged = props.travelTag;
    const isTechnologyTagged = props.technologyTag;
    const isPhotographyTagged = props.photographyTag;

    return (
        <LinkInfoContainer>
            <Date>
                {props.date}
            </Date>
            {isTravelTagged && <TravelTag>travellling</TravelTag>}
            {isTechnologyTagged && <TechTag>technology</TechTag>}
            {isPhotographyTagged && <PhotographyTag>photography</PhotographyTag>}
        </LinkInfoContainer>
    )
}
