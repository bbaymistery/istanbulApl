import React from 'react'
import Head from 'next/head';
import TopHeader from '../../widgets/TopHeader';
import { useRouter } from 'next/router';
import Footer from '../../widgets/Footer';

const GlobalLayout = ({ children, title = "APL Transfers", description = "Salam", keywords = "Salam", }) => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {/*//? no follow  */}
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
        <meta name="copyright" content={`Copyright APL transfers ${currentYear}. All rights reserved.`} />
        <meta name="author" content="Istanbul APL Transfers\" />

        {/* <meta name="googlebot" content="index" /> */}
        {/* <meta name="robots" content="index,follow" /> */}
        {/* //for home page and /heathrow/heathrow-to-oxford-taxi we dont show all fontawesome csss */}
        {(router.pathname === "/") ? <link rel="stylesheet" href="/fontawesome/css/all.min.css" /> : <link rel="stylesheet" href="/fontawesomeAll/css/all.min.css" />}
      </Head>
      <TopHeader />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default GlobalLayout
