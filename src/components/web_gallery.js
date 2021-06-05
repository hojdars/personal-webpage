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

const ModalDiv = styled.div`
display: block; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
/* overflow: hidden; */
`

const SpanClose = styled.span`
position: absolute;
cursor: pointer;
top: 15px;
right: 35px;
color: #f1f1f1;
font-size: 40px;
font-weight: bold;
transition: 0.3s;
`

const ModalCaption = styled.div`
margin: auto;
display: block;
width: 100vw;
max-width: 700px;
text-align: center;
color: #ccc;
padding: 0.8% 0;
max-height: 5%;
`

const ImageInModal = styled.div`
width: 90vw;
height: 89%;
padding-top: 2%;
margin-left: 5vw;

img {
    object-fit: contain;
}
`

const Modal = (props) => {
    console.log(props.altText);
    return (
        <ModalDiv>
            <SpanClose onClick={props.onClick}>&times;</SpanClose>
            <ImageInModal>
                <img
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="button"
                    src={props.imageUrl}
                    onClick={props.onClick}
                    onKeyDown={props.onClick}
                    alt={props.altText}
                />
            </ImageInModal>
            <ModalCaption>{props.altText}</ModalCaption>
        </ModalDiv>
    )
}

const HoverImage = styled.img`
border-radius: 5px;
cursor: pointer;
transition: 0.3s;

&:hover {
    opacity: 0.7
}
`

export function ImageTile(props) {
    if (props.isOpen) {
        return (
            <li>
                <HoverImage src={props.imageUrl} alt={props.altText} onClick={props.onClick} loading="lazy" />
                <Modal imageUrl={props.imageUrl} onClick={props.onClick} altText={props.altText} />
                {/* <dialog className="dialog" style={{ position: "absolute", top: "2%", left: "0%" }} open onClick={props.onClick} >
                    <img src={props.imageUrl} onClick={props.onClick} alt={props.altText} />
                </dialog> */}
            </li>
        )
    } else {
        return (
            <li>
                <HoverImage src={props.imageUrl} alt={props.altText} onClick={props.onClick} loading="lazy" />
            </li>
        )
    }
}

export class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    static getDerivedStateFromProps(props, state) {
        return { imageUrl: props.imageUrl, altText: props.altText };
    }

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <ImageTile imageUrl={this.state.imageUrl} onClick={this.handleShowDialog} altText={this.state.altText} isOpen={this.state.isOpen} />
        );
    }
}