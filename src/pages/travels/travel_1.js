import React from "react"
import Layout from "../../components/layout"
import PostHeader from "../../components/post_header"

export default function BlogPost() {
  return (
    <Layout>
      <PostHeader
        title="Traveling light is great, here's what we take"
        date="2021-02-27"
      />

      <p>
        Traveling is cool.
        Traveling light is more cool.
        The less you carry the larger distance you can cover.
        And by covering a larger distance, you see more exciting stuff!
        What's not to like.
      </p>

      <p>Here's what we have with us:</p>

      <p>
        <ul>
          <li>Tarp</li>
          <li>Sleeping bag</li>
          <li>Food</li>
        </ul>
      </p>

      <p>That's all for today folks!</p>
    </Layout>
  )
}