import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import { FaBeer } from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <Link to="/blog/">Hello world!</Link>
      <FaBeer />
    </Layout>
  )
}
