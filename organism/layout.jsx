import Header from './header';
import Footer from './footer';
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
