import Image from 'next/image'

// components
import Head from '../components/Head';
import Layout from '../components/layout';

// css|styled components
import { H1 } from "../components/ui";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={'container'}>
        <Head
          title={`Address Book | Home`}
          description={`Address Book made by Next.JS`}
        />
        <main className={styles.main}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" layout='fill' />
          </div>

          <H1 fontSize="3.5em">
            Welcome to <span className="secondary-tc" >Address Book!</span>
          </H1>
        </main>
      </div>
    </>
  )
}

// set common layout  with header & footer
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
