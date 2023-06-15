import MainMenu from '../components/MainMenu';
import MainHeader from '../components/MainHeader';
import Search from '../components/Search';
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <MainMenu />
      <MainHeader />
      <Search />
      
    </main>
  )
}
