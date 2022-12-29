import Header from './header';
import Footer from './footer';
import style from './styles/layout.module.scss';
export default function Layout({ children }) {
  return (
    <div className={style}>
      <Header />
      <main className={style.wrapper}>{children}</main>
      <Footer />
    </div>
  );
}
