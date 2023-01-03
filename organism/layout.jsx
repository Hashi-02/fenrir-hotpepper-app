import Header from '../molecules/header';
import Footer from '../atoms/footer';
import styles from './styles/layout.module.scss';
export default function Layout({ children }) {
  return (
    <div className={styles}>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </div>
  );
}
