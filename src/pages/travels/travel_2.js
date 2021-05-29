import React from "react"
import Layout from "../../components/layout"
import PostHeader from "../../components/post_header"

import { ImageContainer } from "../../components/photo_capsule"

export default function BlogPost({ data }) {
  return (
    <Layout>
      <PostHeader
        title="Západy slunce Brno, březen"
        date="2021-03-19"
      />

      <p>
        Jaro nás na jižní Moravě obrařilo několika malebnými západy slunce. Sice se nemůžeme dostat mimo Brno, ale to nevadí :-)
      </p>

      <h4>
        Brno - západ slunce 10. 03. 2021
      </h4>

      <p>
        Pohled na Žabovřesky a Komín.
      </p>

      <p>
        <ImageContainer>
          <a href="https://i.imgur.com/pQ04BwE.jpg">
            <img src="https://i.imgur.com/pQ04BwE.jpg" alt="sunset 1" />
          </a>
        </ImageContainer>
      </p>

      <p>
        <ImageContainer>
          <a href="https://i.imgur.com/Msp8fq0.jpg">
            <img src="https://i.imgur.com/Msp8fq0.jpg" alt="sunset 1" />
          </a>
        </ImageContainer>
      </p>

      <h4>
        Brno - západ slunce 17. 03. 2021
      </h4>

      <p>
        Okolí Palackého vrchu.
      </p>

      <p>
        <ImageContainer>
          <a href="https://i.imgur.com/oXdz255.jpg">
            <img src="https://i.imgur.com/oXdz255.jpg" alt="sunset 1" />
          </a>
        </ImageContainer>
      </p>

      <p>
        <ImageContainer>
          <a href="https://i.imgur.com/XiFwOWd.jpg">
            <img src="https://i.imgur.com/XiFwOWd.jpg" alt="sunset 1" />
          </a>
        </ImageContainer>
      </p>

    </Layout>
  )
}