import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }

  const router = useRouter()

  useEffect(() => {
      const userAgent = getMobileOperatingSystem();
      if(userAgent=="iOS")
        router.push('https://apps.apple.com/it/app/home-club-fitness-da-casa/id1541461033')
      else
        router.push('https://play.google.com/store/apps/details?id=gfg.app.hifit')
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>HomeClub Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
