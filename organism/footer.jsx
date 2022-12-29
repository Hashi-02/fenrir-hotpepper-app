import style from './styles/footer.module.scss';
export default function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <p>GPSグルメサーチ</p>
        <p className={style.copyright}>Copyright </p>
      </div>
    </div>
  );
}
