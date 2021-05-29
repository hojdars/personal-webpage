import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Body } from "./layout"
import { css } from "react"

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
        <div css={css`
            color: white;
            position: absolute;
            left: 3rem;
            top: 0;

            h2 {
                font-size: 1.75em;
            }

            a {
                color: white;
                text-decoration: none;
                text-shadow: 2px 2px #333;
            }
        `}>
            <Link to="/">
                <h2>{data.site.siteMetadata.title}</h2>
            </Link>
        </div>
    )
}

const HeroImage = (props) => {
    return (
        <div
            css={css`
            display: flex;
            justify-content: center;
            height: 100vh;
        `}>
            <div
                css={css`
                width: 100vw;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(${props.heroImage});
                color: white;
                text-shadow: 2px 2px #333;
                font-family: Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            `}>
                <Title />
                <h1 css={css`
                    font-size: 4em;
                    font-weight: 700;
                    line-height: calc(1ex / 0.42);
                    margin: 0;
                `}>
                    {props.title}
                </h1>
                <h3 css={css`
                    font-size: 1.5em;
                    font-weight: 600;
                    line-height: calc(1ex / 0.38);
                    margin-top: 1rem;
                    margin-bottom: 0;
                `}>
                    {props.subtitle}
                </h3>
                <h4 css={css`
                    font-size: 1.4em;
                    font-weight: 500;
                    line-height: calc(1ex / 0.32);
                    margin: 0;
                `}>
                    {props.reading_time}, {props.author}
                </h4>
            </div>
        </div>
    )
}

export default function TravelPostLayout(props) {
    return (
        <div>
            <HeroImage
                heroImage={props.heroImage}
                title={props.title}
                subtitle={props.subtitle}
                author={props.author}
                reading_time={props.reading_time}
            />

            <Body width="120">
                <div
                    css={css`
                    h3 {
                        color:#337ab7;
                    }
                `}>
                    {props.children}
                </div>
            </Body>
        </div>
    )
}