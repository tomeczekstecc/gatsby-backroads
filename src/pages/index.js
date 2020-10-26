import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
export default function Home() {
  return <Layout><Link to="/blog/">Hello world!</Link></Layout>
}
