import React, { useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Characters from '../components/Characters'

export default function Home() {
  const router = useRouter()
  const { page } = router.query
  const [pages, setPages] = useState(+page || 1)

  const seeMore = () => {
    setPages(pages + 1)
  }

  const pagesArray = new Array(+pages).fill(1)

  return (
    <div>
      <Head>
        <title>URQL - Ricky & Morty app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <h1>All Ricky & Morty characters</h1>
      <div>
        {
          pagesArray.map((_, i) => {
            return (<Characters pageParam={i + 1} key={i} />)
          })
        }
        <button onClick={seeMore}>See more</button>
      </div>
      
    </div>
  )
}
