import Head from 'next/head';
import Home from '../common/components/modules/Home/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Pizza Point</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
