import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Štěpán Hojdar</h1>
      <p>
        Software engineer, travel and photography enthusiast
      </p>
      <p>
        Check out my work in the <Link to="/projects/">projects</Link> section or below on:
        <ul>
          <li>
            <a href="https://github.com/hojdars">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hojdars/">LinkedIn</a>
          </li>
        </ul>
      </p>
    </Layout>
  )
}
