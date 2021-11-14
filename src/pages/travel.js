import React from "react"

import Layout from "../components/layout"
import { ArticleLink } from "../components/article_link"

// import { ArticleLink, ImageLink } from "../components/article_link"
// import maidera_banner from "../../public/banners/madeira-banner.jpg"
// import triglav_banner from "../../public/banners/triglav-banner.jpg"
// import attersee_banner from "../../public/banners/attersee-banner.jpg"

export default function Home({ data }) {
  return (
    <Layout headerText="travels.">
      <ArticleLink
        to="../travels/travel_1"
        title="Zig is great"
        date="2021-02-27"
        technologyTag
        excerpt="https://ziglang.org/"
      />

      <ArticleLink
        to="../travels/travel_2"
        title="Západy slunce Brno, březen"
        date="2021-03-19"
        photographyTag
        excerpt="Jaro nás na jižní Moravě obrařilo několika malebnými západy slunce. Sice se nemůžeme dostat mimo Brno, ale to nevadí :-)"
      />

      <ArticleLink
        to="../travels/travel_1"
        title="Traveling light is great, here's what we take"
        date="2021-03-17"
        travelTag
        excerpt="Traveling is cool. Traveling light is more cool."
      />

      {/* Attersee 2019 */}
      {/* <ImageLink
        to="../travels/travel_4"
        image={<img src={attersee_banner} css={css`width:100%;`} alt="attersee_banner" />}
      /> */}

      {/* Madeira 2018 */}
      {/* <ImageLink
        to="../travels/travel_3"
        image={<img src={maidera_banner} css={css`width:100%;`} alt="madeira_Banner" />}
      /> */}

      {/* Triglav 2017 */}
      {/* <ImageLink
        to="../travels/travel_4"
        image={<img src={triglav_banner} css={css`width:100%;`} alt="triglav_banner" />}
      /> */}

    </Layout>
  )
}