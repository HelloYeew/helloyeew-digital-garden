import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello,I'm <b>Volk</b> (or HelloYeew). I'm a software engineer. I currently study Software and Knowledge Engineering at KU.
        I am an otaku developer who love to design something new. I love anime (osu! too).
        </p>
        <p>This is my digital garden. You can see an idea of digital garden <a href="https://joelhooks.com/digital-garden">here.</a> If you want to see my blog instead you can see it <a href="https://blog.helloyeew.dev/">here.</a></p>
        <p>You can take a glance at my current running project and other repositories in my <a href="https://github.com/HelloYeew">GitHub</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Digital Garden</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}